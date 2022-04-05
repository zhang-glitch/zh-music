import React, { memo, useState, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { SongLyricWrapper } from './style.js'

import { getLyricAction } from '../../store/action-creators.js'

const SongLyric = memo((props) => {
  const [isSpread, setIsSpread] = useState(false)
  const [text, setText] = useState('展开')
  const { id } = props
  const { songLyric } = useSelector(
    (state) => ({
      songLyric: state.getIn(['song', 'songLyric'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLyricAction(id))
  }, [dispatch, id])

  // 点击展开
  const handleBtnClick = () => {
    setIsSpread(!isSpread)
    if (isSpread) {
      // 展开
      setText('展开')
    } else {
      setText('收起')
    }
  }
  // console.log('songeLyric', songLyric)

  // 设置歌词高度

  const totalLyricCount = isSpread ? songLyric.length : 13
  return (
    <SongLyricWrapper isSpread={isSpread}>
      {songLyric &&
        songLyric.slice(0, totalLyricCount).map((item) => {
          return <p className="lrc-item">{item.content}</p>
        })}

      <div className="btn-spread" onClick={handleBtnClick}>
        <span className="text-btn">{text}</span>
        <i className="sprite_icon2"></i>
      </div>
    </SongLyricWrapper>
  )
})

export default SongLyric
