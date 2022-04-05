import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { Carousel } from 'antd'
import { getDjRadioCategoryListAction } from '../../store/action-creators.js'

import { RadioCategoryWrapper } from './style.js'

const RadioCategory = memo(() => {
  const { djRadioCategoryList } = useSelector(
    (state) => ({
      djRadioCategoryList: state.getIn(['djradio', 'djRadioCategoryList'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDjRadioCategoryListAction())
  }, [dispatch])

  console.log('djRadioCategoryList', djRadioCategoryList)
  return (
    <RadioCategoryWrapper>
      <Carousel>
        <div className="category-wrapper">
          <div className="category-item"></div>
        </div>
      </Carousel>
    </RadioCategoryWrapper>
  )
})

export default RadioCategory
