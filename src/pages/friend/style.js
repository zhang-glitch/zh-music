import styled from 'styled-components';

export const FriendWrapper = styled.div`
  background: #f5f5f5;
  .content {
    background: #fff;
    position: relative;
  }
  .picture {    
      position: relative;
      width: 807px;
      height: 484px;
      margin: 0 auto;
      background-position: 0 104px;
      background: url(${require("@/assets/img/friend_sprite.jpg")}) 0 104px no-repeat;
  }

  .btn-login {    
    position: absolute;
    width: 157px;
    height: 48px;
    left: 621px;
    top: 364px;
    text-indent: -9999px;
    cursor: pointer
  }

`