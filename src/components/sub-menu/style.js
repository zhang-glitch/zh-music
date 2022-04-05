import styled from 'styled-components';

export const SubMenuWrapper = styled.div`
  background: #c20c0c;
  .link-menu {
    display: flex;
    height: 34px;
    line-height: 34px;
    padding-left: 180px;
  }

  .link-menu-item {
    a {
      box-sizing: border-box;
      display: inline-block;
      height: 20px;
      line-height: 20px;
      /* 这里就是让我们移入每一个标签时，让其好加阴影 */
      padding: 0 13px;
      margin: 7px 17px 0;
      color: #fff;
    }
    &:hover a, a.active {
      text-decoration: none;
      background-color: #9B0909;
      border-radius: 20px;
    }
  }
`