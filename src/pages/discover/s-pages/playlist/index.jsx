import React, { memo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { PlayListWrapper } from './style.js'

import PlayListHeader from './s-cpn/playlist-header'
import SongsList from './s-cpn/songs-list'


const PlayList = memo(() => {
  // 获取url参数，发送请求
  const [search] = useSearchParams()
  const title = search.get('cat')

  return (
    <PlayListWrapper>
      <PlayListHeader title={title} />
      <SongsList />
    </PlayListWrapper>
  )
})

export default PlayList
