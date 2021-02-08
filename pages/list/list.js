import { getArticleLists} from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    articleList: [],
    _page:0, //第几页
    hasMore: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (query) {
    // console.log(query)
    let { id, name } = query
    this.setData({
      id
    })
    //换导航栏名字
    wx.setNavigationBarTitle({
      title:name
    })

    //获取列表数据
    this.getArticleList()
  },
 async getArticleList(){
   let { _page, articleList}=this.data
   _page++
   let res = await getArticleLists(this.data.id, _page)
   wx.stopPullDownRefresh() //获取数据后停止下拉刷新
    // console.log(res)
    this.setData({
      articleList: [...articleList, ...res.data],
      _page,
      //如果有新数据则true
      hasMore: _page < Math.ceil(res.header['x-total-count'] / 20)
    })
  },
  //上拉加载
  onReachBottom(){
    console.log('上拉加载')
    let { hasMore} = this.data;
    if(!hasMore) return ;
    this.getArticleList()
  },
  //下拉刷新
  onPullDownRefresh(){
    console.log("下拉刷新")
    //重置数据-请求新数据
    this.setData({
      articleList: [],
      _page:0,
      hasMore: true
    })
    this.getArticleList()
  }
})