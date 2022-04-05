import React, { memo } from 'react'

import { AlbumItemWrapper } from './style.js'
import { getSizeImage } from '@/utils/format'

const AlbumItem = memo((props) => {
  const { albumItem } = props
  return (
    <AlbumItemWrapper>
      <div className="img">
        <img src={getSizeImage(albumItem.picUrl, 130)} alt={albumItem.name} />
        <a href="javascript:;" className="cover sprite_covor">
          {albumItem.name}
        </a>
        <a href="javascript:;" className="btn-play"></a>
      </div>
      <div className="bottom-info">
        <div className="info-name text-nowrap">{albumItem.name}</div>
        <div className="info-artist text-nowrap">
          {albumItem.artists[0].name}
        </div>
      </div>
    </AlbumItemWrapper>
  )
})

export default AlbumItem
