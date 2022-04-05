import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopListAction } from '../../store/action-creators.js'

import { TopListLeftWrapper } from './style.js'

import TopListLeftItem from '../top-list-left-item'

const TopListLeft = memo(() => {
  // 前四个是云音乐特色榜，其他的是全球媒体榜
  const { topList } = useSelector(
    (state) => ({
      topList: state.getIn(['toplist', 'topList'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction())
  }, [dispatch])

  return (
    <TopListLeftWrapper>
      <TopListLeftItem title="云音乐特色榜" topList={topList.slice(0, 4)} />
      <TopListLeftItem title="全球媒体榜" topList={topList.slice(4)} />
    </TopListLeftWrapper>
  )
})

export default TopListLeft
