import {
  isArray
} from "util"

export let promiseUrl = (url) => {
  console.log('window.onload', 2312321)
  return new Promise((resolve, reject) => {
    // 判断地址是否存在
    let labelObj = window.document.head.childNodes
    for (let i = 0; i < labelObj.length; i++) {
      if (labelObj[i].tagName) {
        if (labelObj[i].tagName.toString().toLowerCase() === 'script') {
          if (labelObj[i].src === url) {
            window.document.head.removeChild(labelObj[i])
          }
        }
      }
    }
    let createScript = () => {
      var script = document.createElement("script")
      script.type = "text/javascript"
      script.src = url
      script.onerror = reject
      document.head.appendChild(script)
    }
    createScript()
    window.onload = function () {
      console.log('window.onload', 2312321)
      resolve('加载完成')
    }
    // resolve('加载完成')
  })
}
