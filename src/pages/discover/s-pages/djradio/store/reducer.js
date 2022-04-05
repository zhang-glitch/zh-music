import {Map} from "immutable";

import {CHANGE_DJ_RADIO_CATEGORY_LIST, CHANGE_DJ_RADIO_RECOMMEND_LIST, CHANG_DJ_RADIO_LIST} from "./constants"


const defaultState = Map({
  djRadioCategoryList: [],
  djRadioRecommendList: [],
  djRadioList: []
})


export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_DJ_RADIO_CATEGORY_LIST:
      return state.set("djRadioCategoryList", action.value)

    case CHANGE_DJ_RADIO_RECOMMEND_LIST:
      return state.set("djRadioRecommendList", action.value)
  
    case CHANG_DJ_RADIO_LIST:
      return state.set("djRadioList", action.value)
  
    default:
      return state;
  }
}