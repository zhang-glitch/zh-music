import React, { memo, useState, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getDjRadioListAction } from '../../store/action-creators.js'

import { RadioRankWrapper } from './style.js'
import MyPagination from '@/components/my-pagination'

import { getSizeImage } from '@/utils/format'
const RadioRank = memo(() => {
  const [page, setPage] = useState(1)
  const { djRadioList } = useSelector(
    (state) => ({
      djRadioList: state.getIn(['djradio', 'djRadioList'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDjRadioListAction())
  }, [dispatch])

  // console.log('djRadioList', djRadioList)
  // hanlde function
  const onPageChange = (page, pageSize) => {
    setPage(page)
    // 再次请求
    dispatch(getDjRadioListAction(page * 30))
  }

  return (
    <RadioRankWrapper>
      <div className="rank-header">电台排行榜</div>
      {/* 列表展示 */}
      <div className="rank-list">
        {djRadioList.length &&
          djRadioList.map((item) => {
            return (
              <div className="list-item" key={item.id}>
                <img src={getSizeImage(item.picUrl, 200)} alt={item.name} />
                <div className="item-right">
                  <h2 className="title">{item.name}</h2>
                  <div className="nickname">
                    <i className="sprite_icon2 left"></i>
                    {item.dj.nickname}
                  </div>
                  <div className="count">
                    <span className="phase">共{item.programCount}期</span>
                    <span className="subscribe">订阅{item.subCount}次</span>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <MyPagination
        page={page}
        total={1000}
        pageSize={30}
        onPageChange={onPageChange}
      />
    </RadioRankWrapper>
  )
})

export default RadioRank
