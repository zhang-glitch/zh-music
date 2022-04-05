import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { SingerListWrapper, SingerListContent } from './sttyle.js'
import RecommendSingerHeader from '@/components/recommend-singer-header'

import { getArtistListAction } from '../../store/action-creators.js'

const SingerList = memo(() => {
  const { artistList } = useSelector(
    (state) => ({
      artistList: state.getIn(['recommend', 'artistList'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArtistListAction())
  }, [dispatch])
  return (
    <SingerListWrapper>
      <RecommendSingerHeader
        title="入驻歌手"
        link="/discover/artist/signed/"
        isShow={true}
      />
      <SingerListContent>
        {/* 展示列表 */}
        {artistList.length &&
          artistList.map((item) => {
            return (
              <div className="singer-item" key={item.name}>
                {/* 点击跳转到歌手页面 */}
                <a href="/discover/artist">
                  <img src={item.img1v1Url} alt={item.name} />
                  <div className="singer-info">
                    <div className="author">{item.name}</div>
                    <div className="alias">{item.alias}</div>
                  </div>
                </a>
              </div>
            )
          })}
        <div className="btn-add">
          <a href="javascript:;">
            <i>申请成为网易音乐人</i>
          </a>
        </div>
      </SingerListContent>
    </SingerListWrapper>
  )
})

export default SingerList
