import React, { memo, useState, useRef, useCallback, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Slider } from 'antd'
import classNames from 'classnames'
import { useSelector, shallowEqual } from 'react-redux'

import { PlayToolsWrapper, ControlTools, SongInfo, Operator } from './style.js'

import { formatMinuteSecond, getSizeImage, getPlayUrl } from '@/utils/format'

const PlayTools = memo(() => {
  // 控制操作栏小锁
  const [isLock, setIsLock] = useState(false)
  const { song } = useSelector(
    (state) => ({
      song: state.getIn(['song', 'songDetail'])
    }),
    shallowEqual
  )
  // 当前播放时间
  const [currentTime, setCurrentTime] = useState(0)
  // 当前进度条位置
  const [progress, setProgress] = useState(0)

  const [duration, setDuration] = useState(song.dt)
  // 是否改变歌曲
  const [isChanging, setIsChanging] = useState(false)

  // 是否播放音乐
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef()

  useEffect(() => {
    audioRef.current.src = getPlayUrl(song.id)
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true)
      })
      .catch((err) => {
        setIsPlaying(false)
      })
    setDuration(song.dt)
  }, [song])

  // 监听当前播放,更新当前播放时间。
  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime
    if (!isChanging) {
      setCurrentTime(currentTime)
      setProgress(((currentTime * 1000) / duration) * 100)
    }

    // let lrcLength = currentLyrics.length
    // let i = 0
    // for (; i < lrcLength; i++) {
    //   const lrcTime = currentLyrics[i].time
    //   if (currentTime * 1000 < lrcTime) {
    //     break
    //   }
    // }
    // const finalIndex = i - 1
    // if (finalIndex !== currentLyricIndex) {
    //   dispatch(changeCurrentLyricIndexAction(finalIndex))
    //   message.open({
    //     content: currentLyrics[finalIndex].content,
    //     key: 'lyric',
    //     duration: 0,
    //     className: 'lyric-message'
    //   })
    // }
  }

  // 播放y音乐
  const play = useCallback(() => {
    setIsPlaying(!isPlaying)
    isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play().catch((err) => {
          setIsPlaying(false)
        })
  }, [isPlaying])

  // 播放结束
  const timeEnded = () => {
    // if (playSequence === 2 || playList.length === 1) {
    //   audioRef.current.currentTime = 0;
    //   audioRef.current.play();
    // } else {
    //   dispatch(changePlaySongAction(1));
    // }
  }

  // 进度条滑块的逻辑
  const sliderChange = useCallback(
    (value) => {
      setProgress(value)
      const time = ((value / 100.0) * duration) / 1000
      setCurrentTime(time)
      setIsChanging(true)
    },
    [duration]
  )

  const sliderAfterChange = useCallback(
    (value) => {
      const time = ((value / 100.0) * duration) / 1000
      audioRef.current.currentTime = time
      setCurrentTime(time)
      setIsChanging(false)

      if (!isPlaying) {
        play()
      }
    },
    [duration, isPlaying, play]
  )

  return (
    <PlayToolsWrapper className="sprite_playbar" isLock={isLock}>
      <div className="wrap-v2 content">
        {/* 暂停，切换工具栏 */}
        <ControlTools isPlaying={isPlaying}>
          <button
            className="sprite_playbar btn prev"
            // onClick={(e) => dispatch(changePlaySongAction(-1))}
          ></button>
          <button
            className="sprite_playbar btn play"
            onClick={(e) => play()}
          ></button>
          <button
            className="sprite_playbar btn next"
            // onClick={(e) => dispatch(changePlaySongAction(1))}
          ></button>
        </ControlTools>

        {/* 音乐详情 */}
        <SongInfo>
          <div className="image">
            <NavLink to={`/song?id=${song.id}`}>
              <img src={getSizeImage(song.al.picUrl, 34)} alt={song.name} />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{song.name}</span>
              <span className="singer-name">{song.ar[0].name}</span>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">
                  {formatMinuteSecond(currentTime * 1000)}
                </span>
                <span className="divider">/</span>
                <span className="total-time">
                  {formatMinuteSecond(duration)}
                </span>
              </div>
            </div>
          </div>
        </SongInfo>
        <Operator
        // sequence={playSequence}
        >
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button
              className="sprite_playbar btn loop"
              // onClick={(e) =>
              //   dispatch(changePlaySequenceAction(playSequence + 1))
              // }
            ></button>
            <button
              className="sprite_playbar btn playlist"
              // onClick={(e) => setShowPanel(!showPanel)}
            >
              {/* {playList.length} */}
            </button>
          </div>
        </Operator>
      </div>
      {/* 小锁 */}
      <div
        className="btn-lock sprite_playbar"
        onClick={(e) => {
          setIsLock(!isLock)
        }}
      >
        <a
          href="#"
          className={classNames('btn', 'sprite_playbar', {
            'active-lock': isLock
          })}
        >
          lock
        </a>
      </div>

      {/* 真实的播放器 */}
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnded} />
    </PlayToolsWrapper>
  )
})

export default PlayTools
