import React, { memo } from 'react'

import {
  RecommendWrapper,
  RecommendContent,
  RecommendLeft,
  RecommendRight
} from './style.js'

import RecommendBanner from './s-cpn/recommend-banner'
import HotRecommend from './s-cpn/hot-recommend'
import NewAlbum from './s-cpn/new-album'
import RankList from './s-cpn/rank-list'
import UserLogin from './s-cpn/user-login'
import SingerList from './s-cpn/singer-list'
import HotAnchor from './s-cpn/hot-anchor'

const Recommend = memo(() => {
  return (
    <RecommendWrapper>
      <RecommendBanner />
      {/* 主要内容 */}
      <RecommendContent className="wrap-v2">
        <RecommendLeft>
          {/* 热门推荐 */}
          <HotRecommend />
          {/* 新碟上架 */}
          <NewAlbum />
          {/* 榜单 */}
          <RankList />
        </RecommendLeft>
        <RecommendRight>
          {/* 用户登录 */}
          <UserLogin />
          {/* 入驻歌手 */}
          <SingerList />
          {/* 热门主播 */}
          <HotAnchor />
        </RecommendRight>
      </RecommendContent>
    </RecommendWrapper>
  )
})

export default Recommend
