import {
  isArray
} from "util"

export let promiseUrl = (url) => {
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
    window.onload = function () {
      resolve()
    }
    // resolve('加载完成')
  })
}
