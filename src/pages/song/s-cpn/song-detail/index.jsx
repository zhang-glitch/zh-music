import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import {
  SongDetailWrapper,
  SongDetailBGWrapper,
  SongDetailRight
} from './style.js'
import OperateList from '@/components/operate-list'

import { getSongDetailAction } from '../../store/action-creators.js'

import { getSizeImage } from '@/utils/format'

import SongLyric from '../song-lyric'

const SongDetail = memo((props) => {
  const { id } = props
  const { songDetail } = useSelector(
    (state) => ({
      songDetail: state.getIn(['song', 'songDetail'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongDetailAction(id))
  }, [dispatch, id])

  // console.log('songeDetail', songDetail)

  return (
    <SongDetailWrapper
    // style={{ display: Object.keys(songDetail).length ? 'flex' : 'none' }}
    >
      <SongDetailBGWrapper>
        <div className="song-bg">
          {songDetail.id && (
            <img
              src={getSizeImage(songDetail?.al.picUrl, 130)}
              alt={songDetail.name}
            />
          )}
          <span className="cover image_cover"></span>
        </div>
        <div className="link">
          <i className="sprite_icon2"></i>
          <a href="#/">生成外联播放器</a>
        </div>
      </SongDetailBGWrapper>
      <SongDetailRight>
        <div className="top-title">
          <i className="icon sprite_icon2"></i>
          <div className="title-right">
            <div className="title">{songDetail.name}</div>
            <div className="tns">
              {songDetail.tns &&
                songDetail.tns.map((tnsItem) => {
                  return <span key={tnsItem}>{tnsItem}</span>
                })}
            </div>
          </div>
        </div>
        {/* 歌手 */}
        <div className="singer-info">
          歌手:
          <a href="#" className="singer">
            {songDetail.ar && songDetail.ar[0].name}
          </a>
        </div>
        {/* 专辑 */}
        <div className="album-info">
          所属专辑:
          <a href="#" className="album">
            {songDetail.al && songDetail.al.name}
          </a>
          <span className="line"> - </span>
          <span className="tns-items">
            ({songDetail.tns && songDetail.tns.map((item) => item)})
          </span>
        </div>
        {/* 操作项 */}
        <OperateList
          commentCount={167366}
          subscribedCount={'收藏'}
          shareCount={'分享'}
          songId={songDetail.id}
        />
        {/* 歌词 */}

        <SongLyric id={id} />
      </SongDetailRight>
    </SongDetailWrapper>
  )
})

export default SongDetail
