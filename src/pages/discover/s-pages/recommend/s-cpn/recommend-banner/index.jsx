import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import { getBannerListAction } from '../../store/action-creators.js'
import {
  RecommendBannerWrapper,
  BannerDownload,
  ChangeArrow,
  BannerContent
} from './style.js'

const RecommendBanner = memo(() => {
  const { bannerList } = useSelector(
    (state) => ({
      bannerList: state.getIn(['recommend', 'bannerList'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBannerListAction())
  }, [dispatch])

  // 获取轮播图组件
  const bannerRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)

  const bannerBeforeChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to)
    }, 0)
  }, [])
  const bgImage =
    bannerList[currentIndex] &&
    bannerList[currentIndex].imageUrl + '?imageView&blur=40x20'
  return (
    <RecommendBannerWrapper bgImage={bgImage}>
      {/* 这里只是为了change-arrow好布局，才加的一个标签。 */}
      <div className="wrap-v1 banner-wrap-v1">
        <div className="wrap-v2 banner">
          {/* banner的主内容图片 */}
          <BannerContent>
            <Carousel
              autoplay
              effect="fade"
              beforeChange={bannerBeforeChange}
              ref={bannerRef}
            >
              {bannerList &&
                bannerList.map((item, index) => {
                  return (
                    <div className="banner-item" key={item.imageUrl}>
                      <img
                        src={item.imageUrl}
                        alt={item.typeTitle}
                        className="image"
                      />
                    </div>
                  )
                })}
            </Carousel>
          </BannerContent>
          {/* 下载客户端 */}
          <BannerDownload />
        </div>
        {/* 切换按钮 */}
        <ChangeArrow>
          <a
            href="javascript: void(0);"
            className="arrow-left"
            onClick={(e) => {
              bannerRef.current.prev()
            }}
          >
            <LeftOutlined />
          </a>
          <a
            href="javascript: void(0);"
            className="arrow-right"
            onClick={(e) => {
              bannerRef.current.next()
            }}
          >
            <RightOutlined />
          </a>
        </ChangeArrow>
      </div>
    </RecommendBannerWrapper>
  )
})

export default RecommendBanner
