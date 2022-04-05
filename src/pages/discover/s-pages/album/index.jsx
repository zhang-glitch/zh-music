import React, { memo } from 'react'

import { AlbumWrapper } from './style.js'

import HotAlbum from './s-cpn/hot-album'
import TopAlbum from './s-cpn/top-album'

const Album = memo(() => {
  return (
    <AlbumWrapper className="wrap-v2">
      <HotAlbum />
      <TopAlbum />
    </AlbumWrapper>
  )
})

export default Album
