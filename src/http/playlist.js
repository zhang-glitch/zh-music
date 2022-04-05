import request from "./request";

// 获取分类列表
export function getPlayListCategory() {
  return request({
    url: "/playlist/catlist"
  })
}

// 获取数据列表
export function getPlayListCategoryList(cat="全部", offset=0, limit = 35) {
  return request({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset
    }
  })
}