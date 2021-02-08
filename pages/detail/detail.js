import { articleDetail} from "../../utils/request.js"
Page({
  data:{
    id:0,
    detailLists:{}
  },
  onLoad(query){
    let {id, name} = query

    //保存id
    this.setData({
      id
    })

    //动态修改标题
    wx.setNavigationBarTitle({
      title: name
    })

    //根据id获取数据
    this.getDetail(id)
  },
 async getDetail(id){
   let {data} = await articleDetail(id)
  //  console.log(data)
   this.setData({
     detailLists: data
   })
 },

 //点击评论图片预览
  clickImg(e){
    // console.log("预览图片")
    let { urls, current} = e.currentTarget.dataset
    urls = urls.map(item=>item.replace('w.h', '1000.1000'))
    current = current.replace('w.h', '1000.1000')
    // console.log(urls, current )
    wx.previewImage({
      urls,
      current
    })
  }
})
