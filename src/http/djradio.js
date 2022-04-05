import request from './request';

// 获取dj分类列表
export function getDjRadioCategoryList() {
  return request({
    url: "/dj/catelist"
  })
}

// 优秀电台数据,这里我们就请求情感电台数据
export function getDjRadioRecommendList(type = 3) {
  return request({
    url: "/dj/recommend/type",
    params: {
      type
    }
  })
}

// 全部电台数据，这里我们就请求情感电台数据
export function getDjRadioList( limit, offset, cateId = 3) {
  return request({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset
    }
  })
}