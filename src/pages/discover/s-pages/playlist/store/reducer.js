import {Map} from "immutable";

import {CHANGE_PLAY_LIST_CATEGORY, CHANGE_PLAY_LIST_CATEGORY_LIST} from './constants'

const defaultState = Map({
  playListCategory: [],
  playListCategoryList: []
})


export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_PLAY_LIST_CATEGORY:
      return state.set("playListCategory", action.value)

    case CHANGE_PLAY_LIST_CATEGORY_LIST:
      return state.set("playListCategoryList", action.value)
  
    default:
      return state;
  }
}