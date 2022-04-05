
import {CHANGE_SONG_DETAIL, CHANGE_LYRIC, CHANGE_SIMI_SONG, CHANGE_SIMI_PLAY_LIST} from "./constants"

import {getSongDetail, getLyric, getSimiSong, getSimiPlaylist} from "@/http/song"


import parseLyric from '@/utils/lrc-parse'

// 请求歌曲详情
export function getSongDetailAction(id) {
  return (dispatch) => {
    getSongDetail(id).then(res => {
      dispatch({
        type: CHANGE_SONG_DETAIL,
        value: res.songs[0]
      })
    })
  }
}
// 请求歌词数据
export function getLyricAction(id) {
  return (dispatch) => {
    getLyric(id).then(res => {
      dispatch({
        type: CHANGE_LYRIC,
        value: parseLyric(res.lrc.lyric)
      })
    })
  }
}

// 请求包含这首歌的歌单
export function getSimiPlaylistAction(id) {
  return (dispatch) => {
    getSimiPlaylist(id).then(res => {
      dispatch({
        type: CHANGE_SIMI_PLAY_LIST,
        value: res.playlists
      })
    })
  }
}

// 请求相似歌曲列表
export function getSimiSongAction(id) {
  return (dispatch) => {
    getSimiSong(id).then(res => {
      dispatch({
        type: CHANGE_SIMI_SONG,
        value: res.songs
      })
    })
  }
}
