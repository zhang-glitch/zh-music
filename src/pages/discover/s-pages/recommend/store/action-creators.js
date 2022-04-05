
import {CHANGE_BANNERLIST, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM, CHANG_RANK_NEW_LIST, CHANG_RANK_ORIGIN_LIST, CHANG_RANK_UP_LIST,CHANGE_ARTIST_LIST} from "./constants"

import {getBannerList, getHotRecommend, getNewAlbum, getRankList, getArtistList} from "@/http/recommend"

// function getBanner() {
  
// }

// 发送banner请求
export function getBannerListAction() {
  return (dispatch) => {
    getBannerList().then(res => {
      dispatch({
        type: CHANGE_BANNERLIST,
        value: res.banners
      })
    })
  }
}

// 发送热门推荐请求
export function getHotRecommendAction() {
  return (dispatch) => {
    getHotRecommend().then(res => {
      dispatch({
        type: CHANGE_HOT_RECOMMEND,
        value: res.result
      })
    })
  }
}

// 发送新碟上架请求
export const getNewAlbumAction = () => {
  return dispatch => {
    getNewAlbum(10, 0).then(res => {
      dispatch({
        type: CHANGE_NEW_ALBUM,
        value: res.albums
      })
    })
  }
}

// 发送榜单请求
export const getRankListAction = (idx) => {
  return dispatch => {
    
    getRankList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch({
            type: CHANG_RANK_NEW_LIST,
            value: res.playlist
          })
          break;
        case 2:
          dispatch({
            type: CHANG_RANK_ORIGIN_LIST,
            value: res.playlist
          })
          break;
        case 3:
          dispatch({
            type: CHANG_RANK_UP_LIST,
            value: res.playlist
          })
          break;
        default:
          console.log("其他数据处理");
      }
    })
  }
}

// 请求入住歌手列表
export function getArtistListAction() {
  return (dispatch) => {
    getArtistList(5, 5001).then(res => {
      dispatch({
        type: CHANGE_ARTIST_LIST,
        value: res.artists
      })
    })
  }
}