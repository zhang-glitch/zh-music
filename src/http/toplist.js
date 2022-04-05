import request from "./request";

// 榜单列表
export function getTopList() {
  return request({
    url: "/toplist"
  })
}

// 获取榜单详情
export function getTopListData(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}