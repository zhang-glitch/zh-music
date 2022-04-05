import request from './request';

// 歌曲详情
export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

// 歌词列表
export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}

// 包含这首歌的歌单
export function getSimiPlaylist(id) {
  return request({
    url: "/simi/playlist",
    params: {
      id
    }
  })
}

// 相似歌曲列表
export function getSimiSong(id) {
  return request({
    url: "/simi/song",
    params: {
      id
    }
  })
}
