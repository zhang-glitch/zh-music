import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { TopListHeaderWrapper } from './style.js'

const TopListHeader = memo((props) => {
  const { songNum, playCount } = props
  return (
    <TopListHeaderWrapper>
      <div className="title">歌曲列表</div>
      <div className="song-num">{songNum}首歌</div>
      <div className="play-count">
        播放:
        <span>{playCount}</span>次
      </div>
    </TopListHeaderWrapper>
  )
})
TopListHeader.propTypes = {
  songNum: PropTypes.string.isRequired,
  playCount: PropTypes.string.isRequired
}
export default TopListHeader
