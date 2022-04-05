import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import RecommendMenuHeader from '@/components/recommend-menu-header'
import RankListItem from './s-cpn/rank-list-item'

import { getRankListAction } from '../../store/action-creators.js'

import { RankListWrapper, RankListContent } from './style.js'

const RankList = memo(() => {
  const { rankNewData, rankOriginData, rankUpData } = useSelector(
    (state) => ({
      rankNewData: state.getIn(['recommend', 'rankNewData']),
      rankOriginData: state.getIn(['recommend', 'rankOriginData']),
      rankUpData: state.getIn(['recommend', 'rankUpData'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRankListAction(0))
    dispatch(getRankListAction(2))
    dispatch(getRankListAction(3))
  }, [dispatch])

  return (
    <RankListWrapper>
      <RecommendMenuHeader menuTitle="榜单" moreLink="/discover/toplist/" />
      <RankListContent>
        {rankNewData.id && <RankListItem rankListData={rankNewData} />}
        {rankOriginData.id && <RankListItem rankListData={rankOriginData} />}
        {rankUpData.id && <RankListItem rankListData={rankUpData} />}
      </RankListContent>
    </RankListWrapper>
  )
})

export default RankList
