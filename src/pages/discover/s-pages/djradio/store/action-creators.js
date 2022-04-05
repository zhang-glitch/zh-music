
import {CHANGE_DJ_RADIO_CATEGORY_LIST, CHANGE_DJ_RADIO_RECOMMEND_LIST, CHANG_DJ_RADIO_LIST} from "./constants"

import {getDjRadioCategoryList, getDjRadioRecommendList, getDjRadioList} from "@/http/djradio"


// 请求radio分类列表
export function getDjRadioCategoryListAction() {
  return (dispatch) => {
    getDjRadioCategoryList().then(res => {
      dispatch({
        type: CHANGE_DJ_RADIO_CATEGORY_LIST,
        value: res.categories
      })
    })
  }
}
// 请求radio热门电台
export function getDjRadioRecommendListAction() {
  return (dispatch) => {
    getDjRadioRecommendList().then(res => {
      dispatch({
        type: CHANGE_DJ_RADIO_RECOMMEND_LIST,
        value: res.djRadios
      })
    })
  }
}
// 请求radio全部电台
export function getDjRadioListAction(offset) {
  return (dispatch) => {
    getDjRadioList(30, offset).then(res => {
      dispatch({
        type: CHANG_DJ_RADIO_LIST,
        value: res.djRadios
      })
    })
  }
}

