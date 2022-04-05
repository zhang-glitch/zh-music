import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import RecommendMenuHeader from '@/components/recommend-menu-header'
import MusicItem from '@/components/music-item'
// 获取数据
import { topRecommendMenuList } from '@/common/local-data'
import { getHotRecommendAction } from '../../store/action-creators.js'
// 样式
import { HotRecommendList } from './style.js'
const HotRecommend = memo(() => {
  // 发送热门推荐数据请求
  const { hotRecommendList } = useSelector(
    (state) => ({
      hotRecommendList: state.getIn(['recommend', 'hotRecommendList'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendAction())
  }, [dispatch])
  // console.log(hotRecommendList)
  return (
    <div>
      <RecommendMenuHeader
        menuTitle="热门推荐"
        menuList={topRecommendMenuList}
        moreLink="/discover/playlist/"
      />
      <HotRecommendList>
        {hotRecommendList.length &&
          hotRecommendList.slice(0, 8).map((item) => {
            return <MusicItem key={item.id} musicItemData={item} className="music-list-item" />
          })}
      </HotRecommendList>
    </div>
  )
})

export default HotRecommend
