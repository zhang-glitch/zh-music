import React, { memo } from 'react'

import { OperateListWrapper } from './style.js'

const OperateList = memo((props) => {
  const { subscribedCount, shareCount, commentCount, songId } = props
  return (
    <OperateListWrapper>
      <div className="bottom-operate">
        <span className="play">
          <a
            href={songId && `/song?id=${songId}`}
            className="play-icon sprite_button"
          >
            <span className="play sprite_button">
              <i className="sprite_button"></i>
              <span>播放</span>
            </span>
          </a>
          <a href="javascript:;" className="add-icon sprite_button">
            +
          </a>
        </span>
        <a href="javascript:;" className="item sprite_button">
          <i className="icon favor-icon sprite_button">
            {typeof subscribedCount === 'number'
              ? `(${subscribedCount})`
              : subscribedCount}
          </i>
        </a>
        <a href="javascript:;" className="item sprite_button">
          <i className="icon share-icon sprite_button">
            {typeof shareCount === 'number' ? `(${shareCount})` : shareCount}
          </i>
        </a>
        <a href="javascript:;" className="item sprite_button">
          <i className="icon download-icon sprite_button">下载</i>
        </a>
        <a href="javascript:;" className="item sprite_button">
          <i className="icon comment-icon sprite_button">
            {typeof commentCount === 'number'
              ? `(${commentCount})`
              : commentCount}
          </i>
        </a>
      </div>
    </OperateListWrapper>
  )
})

export default OperateList
