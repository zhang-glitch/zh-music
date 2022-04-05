import React, { memo, useState } from 'react'


import { PlayListHeaderWrapper } from './style.js'

import PlayListCategory from '../playlist-category'

const PlayListHeader = memo((props) => {
  const { title } = props
  const [selectCategory, setSelectCategory] = useState(false)
  // 传递给子组件，让其隐藏分类框
  const hiddenCategory = (isHidden) => {
    setSelectCategory(!isHidden)
  }

  return (
    <PlayListHeaderWrapper className="wrap-v2">
      <div className="left">
        <div className="title">{title || '全部'} </div>
        <div className="select-btn" onClick={(e) => setSelectCategory(true)}>
          选择分类
          <i className="sprite_icon2"></i>
        </div>
        {selectCategory && <PlayListCategory hiddenCategory={hiddenCategory} />}
      </div>
      <div className="hot-btn sprite_button2">热门</div>
    </PlayListHeaderWrapper>
  )
})

export default PlayListHeader
