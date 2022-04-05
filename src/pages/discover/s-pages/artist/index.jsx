import React, { memo } from 'react'

import { ArtistWrapper } from './style.js'

import ArtistList from './s-cpn/artist-list'
import ArtistCategory from './s-cpn/artist-category'

const Artist = memo(() => {
  return (
    <ArtistWrapper className="wrap-v2">
      <ArtistCategory />
      <ArtistList />
    </ArtistWrapper>
  )
})

export default Artist
