import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { getSizeImage } from '@/utils/format'
import { MusicItemWrapper } from './style.js'
import { getCount } from '@/utils/format'

const MusicItem = memo((props) => {
  const { musicItemData, right } = props
  return (
    <MusicItemWrapper right={right}>
      <div className="music-item">
        <div className="music-item-top">
          <img
            src={getSizeImage(
              musicItemData.picUrl || musicItemData.coverImgUrl,
              180
            )}
            alt={musicItemData.name}
          />
          <div className="bottom sprite_covor">
            {/* 左边的内容 */}
            <div className="bottom-left">
              <i className="sprite_icon"></i>
              <span className="play-count">
                {getCount(musicItemData.playCount)}
              </span>
            </div>
            {/* 播放按钮 */}
            <div className="sprite_icon bottom-btn-play"></div>
          </div>
        </div>
        <div className="music-item-desc text-more-line-nowrap">
          {musicItemData.name}
        </div>
      </div>
    </MusicItemWrapper>
  )
})

MusicItem.defaultProps = {
  right: 0
}

MusicItem.propTypes = {
  musicItemData: PropTypes.object.isRequired,
  right: PropTypes.number
}

export default MusicItem
