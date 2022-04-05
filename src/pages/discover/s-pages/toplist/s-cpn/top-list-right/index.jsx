import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getSizeImage, formatMinuteSecond } from '@/utils/format'

import { TopListRightWrapper, TopListRightListWrapper } from './style.js'
import TopListRightHeader from '../top-list-right-header'
import TopListHeader from '@/components/toplist-header'

const TopListRight = memo(() => {
  const { topListData } = useSelector(
    (state) => ({
      topListData: state.getIn(['toplist', 'topListData'])
    }),
    shallowEqual
  )

  // console.log('topListData', topListData)
  const headerInfo = {
    coverImgUrl: topListData.coverImgUrl,
    name: topListData.name,
    playCount: topListData.playCount,
    createTime: topListData.createTime,
    updateTime: topListData.updateTime,
    subscribedCount: topListData.subscribedCount,
    shareCount: topListData.shareCount,
    commentCount: topListData.commentCount
  }

  return (
    <TopListRightWrapper>
      {/* 列表头部 */}
      <TopListRightHeader headerInfo={headerInfo} />
      {/* 列表展示 */}
      <TopListRightListWrapper>
        <TopListHeader
          songNum={topListData.trackCount + ''}
          playCount={topListData.playCount + ''}
        />
        {/* 数据展示 */}
        <div className="list-display">
          <table>
            <thead>
              <tr className="header">
                <th className="ranking"></th>
                <th className="title">标题</th>
                <th className="duration">时长</th>
                <th className="singer">歌手</th>
              </tr>
            </thead>
            <tbody>
              {topListData.tracks &&
                topListData.tracks.map((item, index) => {
                  return (
                    <tr
                      className="body-item"
                      key={item.id}
                      style={{
                        background: (index + 1) % 2 ? '#f7f7f7' : '#fff'
                      }}
                    >
                      {/* 序号 */}
                      <td>
                        <div className="body-index">
                          <span className="order">{index + 1}</span>
                          <span className="new sprite_icon2"></span>
                        </div>
                      </td>
                      {/* 歌名 */}
                      <td>
                        <div className="body-title">
                          <NavLink to={`/song?id=${item.id}`}>
                            {index < 3 ? (
                              <img
                                src={getSizeImage(item.al.picUrl, 50)}
                                alt={item.name}
                              />
                            ) : null}
                          </NavLink>
                          {/* 这里不能使用块级元素，因为flex布局会有问题 */}
                          <span className="btn-play sprite_table"></span>
                          <NavLink to={`/song?id=${item.id}`}>
                            <span className="info-name text-nowrap">
                              {item.name}
                            </span>
                          </NavLink>
                        </div>
                      </td>
                      {/* 歌时 */}
                      <td>
                        <div className="play-time">
                          <span className="time">
                            {formatMinuteSecond(item.dt)}
                          </span>
                          {/* 移入是的操作项 */}
                          <div className="item-operate">
                            <button
                              className="btn sprite_02 play"
                              // onClick={(e) => playMusic(item)}
                            ></button>
                            <button className="btn sprite_icon2 addto"></button>
                            <button className="btn sprite_02 favor"></button>
                          </div>
                        </div>
                      </td>
                      {/* 作者 */}
                      <td>
                        <div className="singer-name text-nowrap">
                          {item.name}
                        </div>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </TopListRightListWrapper>
    </TopListRightWrapper>
  )
})

export default TopListRight
