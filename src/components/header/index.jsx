import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style.js'
import { headerLinks } from '@/common/local-data.js'

import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
const Header = memo(() => {
  // const location = useLocation()
  // const [isShow, setIsShow] = useState(true)
  // if (location.pathname.includes('discover')) {
  //   setIsShow(false)
  // } else {
  //   setIsShow(true)
  // }


  const LinkItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          <em>{item.title}</em>
          <sub className="active-icon sprite_01"></sub>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target="__blank">
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          {/* logo */}
          <a className="logo sprite_01" href="/">
            昊淼音乐
          </a>
          {/* 左边的选项框 */}
          {headerLinks.map((item, index) => {
            return (
              <div key={item.title} className="link-item">
                {LinkItem(item, index)}
              </div>
            )
          })}
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search-input"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="create-center">创作中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      {/* <div
        className="header-bottom-line"
        style={{ display: isShow ? 'none' : 'block' }}
      ></div> */}
      <div className="header-bottom-line"></div>
    </HeaderWrapper>
  )
})

export default Header
