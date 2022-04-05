import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import RecommendMenuHeader from '@/components/recommend-menu-header'
import { getNewAlbumAction } from '../../store/action-creators.js'

import { NewAlbumWrapper, NewAlbumContent, InnerItem } from './style.js'

import { getSizeImage } from '@/utils/format'

const NewAlbum = memo(() => {
  const { newAlbumList } = useSelector(
    (state) => ({
      newAlbumList: state.getIn(['recommend', 'newAlbumList'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewAlbumAction())
  }, [dispatch])

  const carouselRef = useRef()
  // console.log(newAlbumList)
  return (
    <NewAlbumWrapper>
      <RecommendMenuHeader menuTitle="新碟上架" moreLink="/discover/album/" />
      <NewAlbumContent size={getSizeImage()}>
        <Carousel className="new-album-content" dots={false} ref={carouselRef}>
          {[0, 5].map((item) => {
            return (
              <div className="list-item" key={item}>
                {newAlbumList.length &&
                  newAlbumList.slice(item, item + 5).map((element) => {
                    return (
                      <InnerItem className="inner-item" key={element.id}>
                        <div className="album-image">
                          <img
                            className="image"
                            src={getSizeImage(element.picUrl, 150)}
                            alt={element.name}
                          />
                          <a
                            href="javascript:;"
                            className="cover sprite_covor"
                          ></a>
                          <a href="javascript:;" className="btn-play"></a>
                        </div>
                        <div className="music-name">{element.name}</div>
                        <div className="author">{element.artist.name}</div>
                      </InnerItem>
                    )
                  })}
              </div>
            )
          })}
        </Carousel>
        <div className="change-item">
          <div
            className="left-arrow"
            onClick={(e) => {
              carouselRef.current.prev()
            }}
          >
            <LeftOutlined />
          </div>
          <div
            onClick={(e) => {
              carouselRef.current.next()
            }}
            className="right-arrow"
          >
            <RightOutlined />
          </div>
        </div>
      </NewAlbumContent>
    </NewAlbumWrapper>
  )
})

export default NewAlbum
