import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { SimiPlayListWrapper } from './style.js'

import { getSimiPlaylistAction } from '../../store/action-creators.js'
import { getSizeImage } from '@/utils/format'

const SimiPlayList = memo((props) => {
  const { id } = props
  const { simiPlayList } = useSelector(
    (state) => ({
      simiPlayList: state.getIn(['song', 'simiPlayList'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSimiPlaylistAction(id))
  }, [dispatch, id])

  // console.log('simiPlayList=========', simiPlayList)

  return (
    <SimiPlayListWrapper
      style={{ display: simiPlayList.length ? 'block' : 'none' }}
    >
      <div className="title">包含这首歌的歌单</div>
      <div className="simi-play-list">
        {simiPlayList.map((item) => {
          return (
            <div className="list-item" key={item.id}>
              <div className="item-left">
                <img src={getSizeImage(item.coverImgUrl, 50)} alt={item.name} />
              </div>
              <div className="item-right">
                <div className="item-desc text-nowrap">{item.description}</div>
                <div className="artist text-nowrap">
                  <span className="by">by</span>
                  {item.creator.nickname}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </SimiPlayListWrapper>
  )
})

export default SimiPlayList
