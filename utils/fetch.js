//用promise封装一个请求工具
function fetch(option){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: option.url,
      method: option.method || "Get",
      data: option.data || {},
      header: option.header || {},
      success: res=>{ //成功时执行
        resolve(res)
      },
      fail: err => reject(err) //失败时执行
    })
  })
}

//导出外部使用
export default fetch