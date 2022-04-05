import React, { memo } from 'react'

import {
  TopListWrapper,
  TopListRightWrapper,
  TopListLeftWrapper
} from './style.js'

import TopListLeft from './s-cpn/top-list-left'
import TopListRight from './s-cpn/top-list-right'

const TopList = memo(() => {
  return (
    <TopListWrapper className="wrap-v2">
      <TopListLeftWrapper>
        <TopListLeft />
      </TopListLeftWrapper>
      <TopListRightWrapper>
        <TopListRight />
      </TopListRightWrapper>
    </TopListWrapper>
  )
})

export default TopList
