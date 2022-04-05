import {Map} from "immutable";

import {CHANGE_TOP_LIST, CHANGE_RANK_LIST_DATA} from './constants'

const defaultState = Map({
  topList: [],
  topListData: []
})


export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOP_LIST:
      return state.set("topList", action.value)

    case CHANGE_RANK_LIST_DATA:
      return state.set("topListData", action.value)
  
    default:
      return state;
  }
}