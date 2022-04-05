import request from './request';

// 获取热门影片
export function getHotAlbumList() {
  return request({
    url: "/album/newest"
  })
}

// 获取全部或者选择影片列表
export function getTopAlbumList(limit, offset) {
  return request({
    url: "/top/album",
    params: {
      limit,
      offset
    }
  })
}