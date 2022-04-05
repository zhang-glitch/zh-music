import {Map} from "immutable";

import {CHANGE_HOT_ALBUM_LIST, CHANGE_TOP_ALBUM_LIST} from "./constants"

const defaultState = Map({
  hotAlbumList: [],
  topAlbumList: []
})


export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_HOT_ALBUM_LIST:
      return state.set("hotAlbumList", action.value)

    case CHANGE_TOP_ALBUM_LIST:
      return state.set("topAlbumList", action.value)
  
    default:
      return state;
  }
}