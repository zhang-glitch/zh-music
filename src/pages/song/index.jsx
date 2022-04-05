import React, { memo } from 'react'
import { useSearchParams } from 'react-router-dom'
// import { useDispatch } from 'react-redux'

import { SongWrapper } from './style.js'

// import {
//   getSongDetailAction,
//   getLyricAction,
//   getSimiPlaylistAction,
//   getSimiSongAction
// } from './store/action-creators.js'

import SongDetail from './s-cpn/song-detail'
import SubMenu from '@/components/sub-menu'
import SimiSong from './s-cpn/simi-song'
import SimiPlayList from './s-cpn/simi-playlist'

const Song = memo(() => {
  // 获取路由参数
  const [search] = useSearchParams()
  const id = search.get('id')

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getSongDetailAction(id))
  //   dispatch(getLyricAction(id))
  //   dispatch(getSimiPlaylistAction(id))
  //   dispatch(getSimiSongAction(id))
  // }, [dispatch, id])
  return (
    <>
      <SubMenu />
      <SongWrapper className="wrap-v2">
        <div className="song-left">
          <SongDetail id={id} />
        </div>
        <div className="song-right">
          <SimiPlayList id={id} />
          <SimiSong id={id} />
        </div>
      </SongWrapper>
    </>
  )
})

export default Song
