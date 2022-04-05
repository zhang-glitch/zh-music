import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { RightOutlined } from '@ant-design/icons'

import { RecommendSingerHeaderWrapper } from './style.js'
const RecommendSingerHeader = memo((props) => {
  const { title, link, isShow } = props
  return (
    <RecommendSingerHeaderWrapper>
      <div className="title">{title}</div>
      <a href={link} style={{ display: isShow ? 'block' : 'none' }}>
        查看全部
        <RightOutlined />
      </a>
    </RecommendSingerHeaderWrapper>
  )
})

RecommendSingerHeader.defaultProps = {
  isShow: true
}
RecommendSingerHeader.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isShow: PropTypes.bool
}
export default RecommendSingerHeader
