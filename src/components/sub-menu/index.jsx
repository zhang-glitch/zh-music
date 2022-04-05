import React, { memo } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { discoverMenu } from '@/common/local-data.js'
import { SubMenuWrapper } from './style.js'

const SubMenu = memo(() => {
  return (
    <>
      <SubMenuWrapper>
        <ul className="wrap-v1 link-menu">
          {discoverMenu.map((item) => {
            return (
              <li className="link-menu-item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </li>
            )
          })}
        </ul>
      </SubMenuWrapper>
      {<Outlet />}
    </>
  )
})

export default SubMenu
