import React, { memo, useState, useEffect } from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'

import { ArtistCategoryWrapper } from './style.js'

// 利用本地数据渲染
import { artistCategories } from '@/common/local-data'

import {
  getArtistListAction,
  getArtistCategoryTitleAction
} from '../../store/action-creators.js'

const ArtistCategory = memo(() => {
  const [type, setType] = useState(1)
  const [area, setArea] = useState(-1)

  const dispatch = useDispatch()
  // 选中每个item，切换type和area，发送请求
  const selectArtist = (area, type, title) => {
    setType(type)
    setArea(area)
    dispatch(getArtistCategoryTitleAction(title))
  }

  // 在这里发送吧
  useEffect(() => {
    // 发送请求,热门
    dispatch(getArtistListAction(area, type, -1))
  }, [dispatch, type, area])

  return (
    <ArtistCategoryWrapper>
      {artistCategories.map((item1) => {
        return (
          <div className="category-item" key={item1.title}>
            {/* 每个分类的标题 */}
            <div className="category-title">{item1.title}</div>
            {/* 展示每列分类 */}
            {item1.artists.map((item2) => {
              return (
                <div
                  className={classNames('item', {
                    active: item1.area === area && item2.type === type
                  })}
                  key={item2.name}
                  onClick={(e) =>
                    selectArtist(item1.area, item2.type, item2.name)
                  }
                >
                  <i></i>
                  <span>{item2.name}</span>
                </div>
              )
            })}
          </div>
        )
      })}
    </ArtistCategoryWrapper>
  )
})

export default ArtistCategory
