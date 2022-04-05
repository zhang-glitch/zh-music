import React, { memo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useSearchParams } from 'react-router-dom'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'

import { TopListRightItemWrapper, ListItem } from './style.js'
import { getSizeImage } from '@/utils/format'
import { getTopListDataAction } from '../../store/action-creators.js'

const TopListRight = memo((props) => {
  const { title, topList } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // 跳转加活跃选项,并且发送榜单详情,发送请求就是用路由吧
  const handleClickItem = (item, index) => {
    setCurrentIndex(index)
    navigate(`/discover/toplist?id=${item.id}`)
    // dispatch(getTopListDataAction(item.id))
  }

  // 当第一次进入的时候也需要发送请求，通过路由获取
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const id = searchParams.get('id')
    // 为什么这里会发送两次请求
    dispatch(getTopListDataAction(id || 19723756))
  }, [searchParams, dispatch])

  return (
    <TopListRightItemWrapper>
      <div className="title">{title}</div>
      <ListItem>
        {topList.length &&
          topList.map((item, index) => {
            return (
              <div
                key={item.id}
                className={classNames('list-item', {
                  active: currentIndex === index
                })}
                onClick={(e) => {
                  handleClickItem(item, index)
                }}
              >
                <img
                  src={getSizeImage(item.coverImgUrl, 40)}
                  alt={item.commentThreadId}
                />
                <div className="info">
                  <div className="info-title">{item.name}</div>
                  <div className="info-time">{item.updateFrequency}</div>
                </div>
              </div>
            )
          })}
      </ListItem>
    </TopListRightItemWrapper>
  )
})

TopListRight.propTypes = {
  title: PropTypes.string.isRequired,
  topList: PropTypes.array.isRequired
}

export default TopListRight
