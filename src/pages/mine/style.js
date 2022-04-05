import styled from 'styled-components';

export const MineWrapper = styled.div`
  background: #f5f5f5;
  .content {
    position: relative;
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
  }
  .picture {    
      position: relative;
      width: 807px;
      height: 372px;
      margin: 0 auto;
      background: url(${require("@/assets/img/mine_sprite.png")}) 0 104px no-repeat; 
  }

  .btn-login {    
    position: absolute;
    width: 167px;
    height: 45px;
    left: 482px;
    top: 306px;
    text-indent: -9999px;
  }

`