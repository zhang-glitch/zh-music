import React, { memo } from 'react'

import { FriendWrapper } from './style.js'

const Friend = memo(() => {
  return (
    <FriendWrapper>
      <div className="wrap-v2 content">
        <div className="picture"></div>
        <a href="/discover/recommend" className="btn-login">
          点击登录
        </a>
      </div>
    </FriendWrapper>
  )
})

export default Friend
