import React, { memo } from 'react'
import PropTypes from 'prop-types'

import OperateList from '@/components/operate-list'

import { TopListRightHeaderWrapper, RightInfoWrapper } from './style.js'
import { getSizeImage, formatMonthDay } from '@/utils/format'

const TopListRightHeader = memo((props) => {
  const { headerInfo } = props
  return (
    <TopListRightHeaderWrapper>
      <div className="header-img ">
        <img
          src={getSizeImage(headerInfo.coverImgUrl, 150)}
          alt={headerInfo.name}
        />
      </div>
      <RightInfoWrapper className="right-info">
        {/* 头部标题 */}
        <div className="top-info">
          <div className="info-name">{headerInfo.name}</div>
          <div className="info-desc">
            <i className="sprite_icon2"></i>
            最近更新: {formatMonthDay(headerInfo.createTime)}
            <span>(刚刚更新)</span>
          </div>
        </div>
        {/* 操作项 */}
        <OperateList
          subscribedCount={headerInfo.subscribedCount}
          shareCount={headerInfo.shareCount}
          commentCount={headerInfo.commentCount}
        />
      </RightInfoWrapper>
    </TopListRightHeaderWrapper>
  )
})

TopListRightHeader.propTypes = {
  headerInfo: PropTypes.object.isRequired
}
export default TopListRightHeader
