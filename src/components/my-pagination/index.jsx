import React, { memo } from 'react'

import { Pagination } from 'antd'

import { MyPaginationWrapper } from './style.js'

const MyPagination = memo((props) => {
  const { total, page, onPageChange, pageSize = 35 } = props

  // 自定义切换按钮
  // render function
  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <button className="control prev"> &lt; 上一页</button>
    }
    if (type === 'next') {
      return <button className="control next">下一页 &gt;</button>
    }
    return originalElement
  }

  return (
    <MyPaginationWrapper>
      <Pagination
        className="pagination"
        size="small"
        defaultCurrent={1}
        total={total}
        current={page}
        pageSize={pageSize}
        showSizeChanger={false}
        onChange={onPageChange}
        itemRender={itemRender}
      />
    </MyPaginationWrapper>
  )
})

export default MyPagination
