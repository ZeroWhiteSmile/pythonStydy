export let promiseUrl = (url) => {
    return new Promise((resolve, reject) => {
        // 判断地址是否存在
        let haveChild = () => {
          return new Promise((resolve, reject) => {
            let labelObj = window.document.head.childNodes
            for (let i = 0; i < labelObj.length; i++) {
              if (labelObj[i].tagName) {
                if (labelObj[i].tagName.toString().toLowerCase() === 'script') {
                  if (labelObj[i].src === url) {
                    console.log(labelObj[i])
                    window.document.head.removeChild(labelObj[i])
                    resolve(12312)
                  }
                }
              }
            }
          })
        }
        let createScript = () => {
          var script = document.createElement("script")
          script.type = "text/javascript"
          script.src = url
          script.onerror = reject
          console.log(123312, document.head)
          document.head.appendChild(script)
          // 路由跳转时候script已经在家完成啦才渲染页面
          // 但是刷新页面时候 百度地图script还未加载完成 需要延迟resolve() 还没找到更好方法
          setTimeout(() => {
            resolve('加载完成')
          }, 2000)
        }
        resolve(
        })
    }
