import {Map} from "immutable";

import { CHANGE_ARTIST_LIST, CHANGE_ARTIST_CATEGORY_TITLE} from './constants'

const defaultState = Map({
  artistList: [],
  categoryTitle: "推荐歌手"
})


export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_ARTIST_LIST:
      return state.set("artistList", action.value)

    case CHANGE_ARTIST_CATEGORY_TITLE:
      return state.set("categoryTitle", action.value)
  
    default:
      return state;
  }
}