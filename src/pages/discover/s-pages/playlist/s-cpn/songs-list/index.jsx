import React, { memo, useState, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { getPlayListCategoryListAction } from '../../store/action-creators.js'

import { SongsListWrapper } from './style.js'

import MusicItem from '@/components/music-item'
import MyPagination from '@/components/my-pagination'

const SongsList = memo(() => {
  // 获取url参数，发送请求
  const [search] = useSearchParams()
  const title = search.get('cat')
  const { playListCategoryList } = useSelector(
    (state) => ({
      playListCategoryList: state.getIn(['playlist', 'playListCategoryList'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  useEffect(() => {
    dispatch(getPlayListCategoryListAction(title, page))
  }, [dispatch, page, title])
  // 总数据
  const total = playListCategoryList?.total || 0

  // 切换页码，并发送请求
  function onPageChange(page, pageSize) {
    setPage(page)
    dispatch(getPlayListCategoryListAction(title, page))
  }

 

  return (
    <SongsListWrapper className="wrap-v2">
      <div className="songs-list">
        {playListCategoryList?.playlists?.map((item) => {
          return <MusicItem key={item.id} musicItemData={item} right={30} />
        })}
      </div>
      <div className="page-operate">
        <MyPagination
          total={total}
          page={page}
          onPageChange={onPageChange}
        />
      </div>
    </SongsListWrapper>
  )
})

export default SongsList
