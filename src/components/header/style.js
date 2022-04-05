import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;
  /* overflow: hidden; */

  .content {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .header-bottom-line {
    width: 100%;
    height: 5px;
    background: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  .logo {
    display: block;
    width: 176px; 
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  display: flex;
  justify-content: space-around;
  height: 69px;
  line-height: 69px;

  .link-item {
    position: relative;
    width: 94px;
    height: 69px;
    text-align: center;
    a{
      display: block;
      width: 100%;
      height: 100%;
      color: #ccc;
    }

    :last-of-type a {
      position: relative;
      ::after {
        position: absolute;
        content: "";
        width: 28px;
        height: 19px;
        background-image: url(${require("@/assets/img/sprite_01.png")});
        background-position: -190px 0;
        top: 20px;
        right: -20px;
      }
    } 

    &:hover a, a.active{
      text-decoration: none;
      color: #fff;
      background: #000;
    }

    /* 活跃后的小图标 */
    .active .active-icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
    }
  }
`


export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search-input {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .create-center {    
    width: 90px;
    height: 32px;
    margin: 0 0 0 12px;
    box-sizing: border-box;
    padding-left: 16px;
    border: 1px solid #4F4F4F;
    line-height: 33px;
    color: #ccc;
    border-radius: 20px;
    cursor: pointer;
  }

  .login {
    width: 28px;
    color: #787878;
    cursor: pointer; 
    /*这里设置了高度一定要设置line-height,即使flex布局设置了align-items为center,但是不会居中  */
    height: 45px;
    line-height: 45px;
    margin: 0 0 0 20px;
  }
`