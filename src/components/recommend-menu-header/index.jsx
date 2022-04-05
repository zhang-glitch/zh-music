import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { MenuHeaderWrapper } from './style.js'

const RecommendMenuHeader = memo((props) => {
  const { menuTitle, menuList, moreLink } = props
  return (
    <MenuHeaderWrapper className="sprite_02">
      <h3 className="menu-title">
        <a href={moreLink}>{menuTitle}</a>
      </h3>
      <ul
        className="menu-list"
        style={{ display: menuList.length ? 'flex' : 'none' }}
      >
        {menuList.length &&
          menuList.map((item, index) => {
            return (
              // discover/playlist/?cat=华语
              <li className="menu-item" key={item.link}>
                <Link to={item.link}>{item.title}</Link>
                <span
                  className="sep-line"
                  style={{
                    display: index === menuList.length - 1 ? 'none' : 'inline'
                  }}
                >
                  |
                </span>
              </li>
            )
          })}
      </ul>
      {/* 更多 */}
      <div className="more">
        <Link to={moreLink}>更多</Link>
        <i className="icon sprite_02"></i>
      </div>
    </MenuHeaderWrapper>
  )
})

RecommendMenuHeader.defaultProps = {
  menuList: []
}

RecommendMenuHeader.propTypes = {
  menuTitle: PropTypes.string.isRequired,
  menuList: PropTypes.array,
  moreLink: PropTypes.string.isRequired
}
export default RecommendMenuHeader
