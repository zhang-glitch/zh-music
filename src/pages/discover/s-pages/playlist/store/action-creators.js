
import {CHANGE_PLAY_LIST_CATEGORY, CHANGE_PLAY_LIST_CATEGORY_LIST} from "./constants"

import {getPlayListCategory, getPlayListCategoryList} from "@/http/playlist"

// 获取分类数据
export function getPlayListCategoryAction() {
  return (dispatch) => {
    getPlayListCategory().then(res => {
      dispatch({
        type: CHANGE_PLAY_LIST_CATEGORY,
        value: res
      })
    })
  }
}

// 获取列表数据
export function getPlayListCategoryListAction(name, page) {
  return (dispatch) => {
    getPlayListCategoryList(name, page * 35).then(res => {
      dispatch({
        type: CHANGE_PLAY_LIST_CATEGORY_LIST,
        value: res
      })
    })
  }
}