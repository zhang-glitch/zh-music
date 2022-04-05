import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getDjRadioRecommendListAction } from '../../store/action-creators.js'

import { RadioRecommendWrapper } from './style.js'

import { getSizeImage } from '@/utils/format'
const RadioCategory = memo(() => {
  const { djRadioRecommendList } = useSelector(
    (state) => ({
      djRadioRecommendList: state.getIn(['djradio', 'djRadioRecommendList'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDjRadioRecommendListAction())
  }, [dispatch])

  console.log('djRadioRecommendList', djRadioRecommendList)
  return (
    <RadioRecommendWrapper>
      <div className="recommend-header">优秀新电台</div>
      <div className="radio-list">
        {djRadioRecommendList.length &&
          djRadioRecommendList.slice(0, 5).map((item) => {
            return (
              <div className="list-item" key={item.id}>
                <img src={getSizeImage(item.picUrl, 200)} alt={item.name} />
                <div className="bottom-info">
                  <div className="info-name text-nowrap">{item.name}</div>
                  <div className="info-desc text-nowrap">{item.desc}</div>
                </div>
              </div>
            )
          })}
      </div>
    </RadioRecommendWrapper>
  )
})

export default RadioCategory
