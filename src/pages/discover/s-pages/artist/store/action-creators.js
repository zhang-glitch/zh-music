
import {CHANGE_ARTIST_LIST, CHANGE_ARTIST_CATEGORY_TITLE} from "./constants"

import {getArtistList} from "@/http/artist"

// 获取歌手列表
export function getArtistListAction(area, type, alpha) {
  return (dispatch) => {
    getArtistList(area, type, alpha).then(res => {
      dispatch({
        type: CHANGE_ARTIST_LIST,
        value: res.artists
      })
    })
  }
}

// 保存分类标题
export function getArtistCategoryTitleAction(title) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_ARTIST_CATEGORY_TITLE,
      value: title
    })
  }
}

