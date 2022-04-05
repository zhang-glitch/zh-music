
import {CHANGE_HOT_ALBUM_LIST, CHANGE_TOP_ALBUM_LIST} from "./constants"

import {getHotAlbumList, getTopAlbumList} from "@/http/album"


// 请求热门影片
export function getHotAlbumListAction() {
  return (dispatch) => {
    getHotAlbumList().then(res => {
      dispatch({
        type: CHANGE_HOT_ALBUM_LIST,
        value: res.albums
      })
    })
  }
}
// 请求全部影片或者选择获取
export function getTopAlbumListAction(page) {
  return (dispatch) => {
    getTopAlbumList(30, (page-1) * 30).then(res => {
      dispatch({
        type: CHANGE_TOP_ALBUM_LIST,
        value: res
      })
    })
  }
}
