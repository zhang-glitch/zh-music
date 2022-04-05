import React, { memo, useEffect } from 'react'
import classNames from 'classnames'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { PlayListCategoryWrapper } from './style.js'

import { getPlayListCategoryAction } from '../../store/action-creators.js'

const PlayListCategory = memo((props) => {
  const { hiddenCategory } = props
  const { playListCategory } = useSelector(
    (state) => ({
      playListCategory: state.getIn(['playlist', 'playListCategory'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlayListCategoryAction())
  }, [dispatch])

  return (
    <PlayListCategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="table">
        <div className="table-header">
          <div className="header">
            <span>全部风格</span>
          </div>
          <div className="line"></div>
        </div>
        <div className="table-body">
          <div className="body-left">
            {playListCategory.categories &&
              Object.values(playListCategory.categories).map((item, index) => {
                return (
                  <div
                    className={classNames('left-item', 'left-item' + index)}
                    key={item}
                  >
                    <i
                      className={classNames('icon' + index, 'sprite_icon2')}
                    ></i>
                    <span>{item}</span>
                  </div>
                )
              })}
          </div>
          <div className="body-right">
            {[0, 1, 2, 3, 4].map((item) => {
              return (
                <div className={classNames('item' + item, 'item')}>
                  {playListCategory.sub &&
                    playListCategory.sub.map((element) => {
                      if (element.category == item) {
                        return (
                          <span key={element.name}>
                            <a
                              href={`/discover/playlist?cat=${element.name}`}
                              onClick={(e) => {
                                hiddenCategory(true)
                              }}
                            >
                              {element.name}
                            </a>
                            <span className="line">|</span>
                          </span>
                        )
                      }
                    })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </PlayListCategoryWrapper>
  )
})

export default PlayListCategory
