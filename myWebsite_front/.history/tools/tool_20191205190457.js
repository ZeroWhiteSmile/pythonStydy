export let promiseUrl = (url) => {
  // 判断地址是否存在
  // let isExist = document.querySelector("script")
  // console.log('isExist', isExist)
  console.log('document', document)
  return new Promise((resolve, reject) => {
    window.onload = function () {
      resolve(BMap)
    }
    var script = document.createElement("script")
    script.type = "text/javascript"
    script.src = url
    script.onerror = reject
    document.head.appendChild(script)
    resolve('加载完成')
  })
}
