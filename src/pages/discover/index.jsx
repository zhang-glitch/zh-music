import React, { memo } from 'react'

import { DiscoverWrapper } from './style.js'

import SubMenu from '@/components/sub-menu'

const Discover = memo(() => {
  return (
    <DiscoverWrapper>
      <SubMenu />
    </DiscoverWrapper>
  )
})

export default Discover
