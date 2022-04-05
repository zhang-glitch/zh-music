import {Map} from "immutable";

import {CHANGE_BANNERLIST, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM, CHANG_RANK_NEW_LIST, CHANG_RANK_ORIGIN_LIST, CHANG_RANK_UP_LIST, CHANGE_ARTIST_LIST} from './constants'

const defaultState = Map({
  bannerList: [],
  hotRecommendList: [],
  newAlbumList: [],
  rankNewData: {},
  rankOriginData: {},
  rankUpData: {},
  artistList: []
})


export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_BANNERLIST:
      return state.set("bannerList", action.value)

    case CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommendList", action.value)
  
    case CHANGE_NEW_ALBUM:
      return state.set("newAlbumList", action.value)
  
    case CHANG_RANK_NEW_LIST:
      return state.set("rankNewData", action.value)

    case CHANG_RANK_ORIGIN_LIST:
      return state.set("rankOriginData", action.value)

    case CHANG_RANK_UP_LIST:
      return state.set("rankUpData", action.value)

    case CHANGE_ARTIST_LIST:
      return state.set("artistList", action.value)
  
    default:
      return state;
  }
}