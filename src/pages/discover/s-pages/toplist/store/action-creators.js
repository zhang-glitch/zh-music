
import {CHANGE_TOP_LIST, CHANGE_RANK_LIST_DATA} from "./constants"

import {getTopList, getTopListData} from "@/http/toplist"

// 榜单列表请求
export function getTopListAction() {
  return (dispatch) => {
    getTopList().then(res => {
      dispatch({
        type: CHANGE_TOP_LIST,
        value: res.list
      })
    })
  }
}

// 获取该榜单数据,需要传入榜单id
export function getTopListDataAction(id) {
  return (dispatch) => {
    getTopListData(id).then(res => {
      dispatch({
        type: CHANGE_RANK_LIST_DATA,
        value: res.playlist
      })
    })
  }
}