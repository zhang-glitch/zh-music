import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { RankListItemWrapper, RankListItemList } from './style.js'
import { getSizeImage } from '@/utils/format'

const RankListItem = memo((props) => {
  const { rankListData } = props
  return (
    <RankListItemWrapper>
      {/* 榜单头部 */}
      <div className="item-info">
        <a
          className="info-img"
          href={`/discover/toplist?id=${rankListData.id}`}
        >
          <img
            src={getSizeImage(rankListData.coverImgUrl, 100)}
            alt={rankListData.name}
          />
        </a>
        <div className="info-right">
          <a href={`/discover/toplist?id=${rankListData.id}`}>
            {rankListData.name}
          </a>
          <div className="operate">
            <div className="btn-play sprite_02">播放</div>
            <div className="btn-favor sprite_02">收藏</div>
          </div>
        </div>
      </div>
      {/* 榜单列表 */}
      <RankListItemList>
        {rankListData.tracks.slice(0, 10).map((item, index) => {
          return (
            <div className="list-item" key={item.id}>
              <i className={index < 3 ? 'active-index' : ''}>{index + 1}</i>
              {/* 歌名和操作按钮 */}
              <div className="item-content">
                <a href={`/song?id=${item.id}`} className="text-nowrap">
                  {item.name}
                </a>
                <div className="item-operate">
                  <button
                    className="btn sprite_02 play"
                    // onClick={(e) => playMusic(item)}
                  ></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          )
        })}
        <div className="list-item check-all">
          <a href={`/discover/toplist?id=${rankListData.id}`}>查看全部 ></a>
        </div>
      </RankListItemList>
    </RankListItemWrapper>
  )
})

RankListItem.propTypes = {
  rankListData: PropTypes.object.isRequired
}

export default RankListItem
