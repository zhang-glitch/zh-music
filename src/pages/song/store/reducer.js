import {Map} from "immutable";

import {CHANGE_SONG_DETAIL, CHANGE_LYRIC, CHANGE_SIMI_SONG, CHANGE_SIMI_PLAY_LIST} from "./constants"

const defaultState = Map({
  songDetail:  {
    "name": "有何不可",
    "id": 167876,
    "pst": 0,
    "t": 0,
    "ar": [
      {
        "id": 5771,
        "name": "许嵩",
        "tns": [],
        "alias": []
      }
    ],
    "alia": [],
    "pop": 100,
    "st": 0,
    "rt": "600902000007916021",
    "fee": 8,
    "v": 49,
    "crbt": null,
    "cf": "",
    "al": {
      "id": 16953,
      "name": "自定义",
      "picUrl": "https://p2.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
      "tns": [],
      "pic_str": "18590542604286213",
      "pic": 18590542604286212
    },
    "dt": 241840,
    "h": {
      "br": 320000,
      "fid": 0,
      "size": 9675799,
      "vd": -21099
    },
    "m": {
      "br": 192000,
      "fid": 0,
      "size": 5805497,
      "vd": -18400
    },
    "l": {
      "br": 128000,
      "fid": 0,
      "size": 3870346,
      "vd": -16900
    },
    "a": null,
    "cd": "1",
    "no": 3,
    "rtUrl": null,
    "ftype": 0,
    "rtUrls": [],
    "djId": 0,
    "copyright": 2,
    "s_id": 0,
    "mark": 8192,
    "originCoverType": 0,
    "single": 0,
    "noCopyrightRcmd": null,
    "mv": 0,
    "rtype": 0,
    "rurl": null,
    "mst": 9,
    "cp": 14026,
    "publishTime": 1231516800000
  },
  songLyric: [],
  simiPlayList:[],
  simiSong: []
})


export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_SONG_DETAIL:
      return state.set("songDetail", action.value)

    case CHANGE_LYRIC:
      return state.set("songLyric", action.value)

    case CHANGE_SIMI_PLAY_LIST:
      return state.set("simiPlayList", action.value)

    case CHANGE_SIMI_SONG:
      return state.set("simiSong", action.value)
  
    default:
      return state;
  }
}