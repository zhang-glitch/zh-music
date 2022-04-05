import React, { memo } from 'react'

import { MineWrapper } from './style.js'

const Mine = memo(() => {
  return (
    <MineWrapper>
      <div className="wrap-v2 content">
        <div className="picture">
          <a href="/discover/recommend" className="btn-login">
            点击登录
          </a>
        </div>
      </div>
    </MineWrapper>
  )
})

export default Mine
