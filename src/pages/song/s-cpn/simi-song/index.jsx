import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { SimiSongWrapper } from './style.js'

import { getSimiSongAction } from '../../store/action-creators.js'

const SimiSong = memo((props) => {
  const { id } = props
  const { simiSong } = useSelector(
    (state) => ({
      simiSong: state.getIn(['song', 'simiSong'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSimiSongAction(id))
  }, [dispatch, id])

  // console.log('getSimiSongAction', simiSong)

  return (
    <SimiSongWrapper>
      <div className="title">相似歌曲</div>
      <div className="simi-song-list">
        {simiSong.length &&
          simiSong.map((item) => {
            return (
              <div className="list-item" key={item.id}>
                <div className="item-left">
                  <a href={`?id=${item.id}`} className="song-name">
                    {item.name}
                  </a>
                  <a href="javascript:;" className="singer-name">
                    {item.artists[0].name}
                  </a>
                </div>
                <div className="item-right">
                  <button className="item sprite_icon3 play"></button>
                  <button className="item sprite_icon3 add"></button>
                </div>
              </div>
            )
          })}
      </div>
    </SimiSongWrapper>
  )
})

export default SimiSong
