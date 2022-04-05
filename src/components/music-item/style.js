import styled from "styled-components";


export const MusicItemWrapper = styled.div`
  width: 140px;
  margin: 20px ${props => (props.right)}px 20px 0;
  .music-item {
    height: 204px;
    width: 140px;
  }

  .music-item-top {
    width: 140px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 27px;
      /* 下面的遮罩层 */
      background-position: 0 -537px;
      color: #ccc;

      .bottom-left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-position: 0 -537px;
        color: #ccc;
        height: 27px;

        i {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
          vertical-align: top;
        }
      }
      .bottom-btn-play {
        position: absolute;
        right: 10px;
        bottom: 5px;
        width: 16px;
        height: 17px;
        background-position: 0 0;
        cursor: pointer;
      }
    }
  }

  .music-item-desc {
    cursor: pointer;
    margin-top: 10px;
    color: #000;
    font-size: 14px;
  }

`