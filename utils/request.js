import fetch from './fetch.js'

export const getGrids=()=>{
  return fetch({
    url: 'https://locally.uieee.com/categories'
  })
}

//获取文章列表
export const getArticleLists=(id,_page)=>{
  return fetch({
    url:`https://locally.uieee.com/categories/${id}/shops`,
    data: {
      _page,
      _limit:20
    }
  })
}

//获取文章详情
export const articleDetail = (id)=>{
  return fetch({
    url: `https://locally.uieee.com/shops/${id}`
  })
}