import React, { memo, useState, useEffect } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { TopAlbumWrapper } from './style.js'
import { getTopAlbumListAction } from '../../store/action-creators.js'
import AlbumItem from '../album-item'
import MyPagination from '@/components/my-pagination'

const HotAlbum = memo(() => {
  const [page, setPage] = useState(1)
  const { topAlbumList } = useSelector(
    (state) => ({
      topAlbumList: state.getIn(['album', 'topAlbumList'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopAlbumListAction(page))
  }, [dispatch, page])

  const onPageChange = (page, pageSize) => {
    setPage(page)
    dispatch(getTopAlbumListAction(page))
  }

  return (
    <TopAlbumWrapper>
      <div className="top-header">热门新碟</div>
      <div className="top-list">
        {topAlbumList?.albums?.map((item) => {
          return (
            <div className="list-item" key={item.id}>
              <AlbumItem albumItem={item}></AlbumItem>
            </div>
          )
        })}
      </div>
      <MyPagination
        page={page}
        total={topAlbumList.total}
        pageSize={30}
        onPageChange={onPageChange}
      />
    </TopAlbumWrapper>
  )
})

export default HotAlbum
