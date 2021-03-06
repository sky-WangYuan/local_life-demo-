// pages/home/home.js
import { getGrids} from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gridsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getGrids()
  },

 async getGrids(){
    let res=await getGrids() //得到promise结果
    this.setData({
      gridsList: res.data
    })
    //封装的请求方法 -.then方式
    // getGrids().then(res=>{
    //   console.log(res)
    //   this.setData({
    //     gridsList: res.data
    //   })
    // }).catch(err=>console.log(err))
   
    //原始请求
    // wx.request({
    //   url: 'https://locally.uieee.com/categories',
    //   success: res => {
    //     console.log(res)
    //     this.setData({
    //       gridsList: res.data
    //     })
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})