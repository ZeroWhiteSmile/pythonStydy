import {
  isArray
} from "util"

export let promiseUrl = (url) => {
  return new Promise((resolve, reject) => {
    window.onload = function () {
      resolve('加载完成')
    }
    var script = document.createElement("script")
    script.type = "text/javascript"
    script.src = url
    script.onerror = reject
    document.head.appendChild(script)
  })
}
