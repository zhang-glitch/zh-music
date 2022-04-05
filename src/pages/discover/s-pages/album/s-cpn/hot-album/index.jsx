import React, { memo, useEffect } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { HotAlbumWrapper } from './style.js'
import { getHotAlbumListAction } from '../../store/action-creators.js'
import AlbumItem from '../album-item'

const HotAlbum = memo(() => {
  const { hotAlbumList } = useSelector(
    (state) => ({
      hotAlbumList: state.getIn(['album', 'hotAlbumList'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotAlbumListAction())
  }, [dispatch])

  return (
    <HotAlbumWrapper>
      <div className="hot-header">热门新碟</div>
      <div className="hot-list">
        {hotAlbumList.length &&
          hotAlbumList.slice(0, 10).map((item) => {
            return (
              <div className="list-item" key={item.id}>
                <AlbumItem albumItem={item}></AlbumItem>
              </div>
            )
          })}
      </div>
    </HotAlbumWrapper>
  )
})

export default HotAlbum
