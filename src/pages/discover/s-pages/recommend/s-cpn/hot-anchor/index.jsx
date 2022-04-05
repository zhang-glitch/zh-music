import React, { memo } from 'react'

import { HotAnchorWrapper, HotAnchorContent } from './style.js'
import RecommendSingerHeader from '@/components/recommend-singer-header'
import { hotRadios } from '@/common/local-data'

const HotAnchor = memo(() => {
  return (
    <HotAnchorWrapper>
      <RecommendSingerHeader
        title="热门主播"
        link="/discover/artist/"
        isShow={false}
      />
      <HotAnchorContent>
        {hotRadios.map((item) => {
          return (
            <div className="list-item" key={item.name}>
              <a href="/discover/artist" className="item-img">
                <img src={item.picUrl} alt={item.name} />
              </a>
              <div className="item-info">
                <a href="/discover/artist" className="name text-nowrap">
                  {item.name}
                </a>
                <div className="desc text-nowrap">{item.position}</div>
              </div>
            </div>
          )
        })}
      </HotAnchorContent>
    </HotAnchorWrapper>
  )
})

export default HotAnchor
