import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import classNames from 'classnames'

import { ArtistListWrapper } from './style.js'

import { getSizeImage } from '@/utils/format'

const ArtistList = memo(() => {
  const { artistList, categoryTitle } = useSelector(
    (state) => ({
      artistList: state.getIn(['artist', 'artistList']),
      categoryTitle: state.getIn(['artist', 'categoryTitle'])
    }),
    shallowEqual
  )

  console.log('==========', artistList, categoryTitle)

  return (
    <ArtistListWrapper>
      <div className="artist-list-title">{categoryTitle}</div>
      {/* 列表展示 */}
      <div className="artist-list">
        {artistList.length &&
          artistList.slice(0).map((item, index) => {
            return (
              <div
                key={item.name}
                className={classNames('list-item', {
                  'list-item-info': index > 4
                })}
              >
                <div
                  className="img"
                  style={{ display: index > 9 ? 'none' : 'block' }}
                >
                  <img src={getSizeImage(item.picUrl, 130)} alt={item.name} />
                </div>
                <div className="artist-name">
                  <span className="text-nowrap">{item.name}</span>
                  <i className="sprite_icon2 icon"></i>
                </div>
              </div>
            )
          })}
      </div>
    </ArtistListWrapper>
  )
})

export default ArtistList
