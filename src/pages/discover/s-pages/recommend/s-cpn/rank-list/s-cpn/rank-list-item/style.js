import styled from 'styled-components';

export const RankListItemWrapper = styled.div`
  /* 这是为了让三列等宽，然后统一做margin处理，移动到指定位置 */
  flex: 1;
  .item-info {
    display: flex;
    height: 100px;

    margin: 20px 0 0 20px;

    .info-img {
      display: block;
      width: 80px;
      height: 80px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .info-right {
      margin: 5px 0 0 10px;

      a {
        font-size: 14px;
        color: #333;
        font-weight: 700;
      }

      .btn-play {
        display: inline-block;
        text-indent: -9999px;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
        background-position: -267px -205px;
      }

      .btn-favor {
        display: inline-block;
        text-indent: -9999px;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
        background-position: -300px -205px;
      }
    }
  }
`

export const RankListItemList = styled.div`
  .list-item {
    height: 32px;
    line-height: 32px;

    font-size: 12px;
    margin-left: 15px;
    display: flex;
    align-items: center;

    .active-index {
      color: #C10D0C;
    }

    i {
      display: inline-block;
      width: 35px;
      text-align: center;
      font-size: 14px;
      vertical-align: middle;
      /* padding-right: 10px; */
    }

    .item-content {
      color: #000;
      width: 170px;
      height: 17px;
      line-height: 17px;
      display: flex;
      justify-content: space-between;

      
      a {
        flex: 1;
        vertical-align: bottom;
      }

      .item-operate {
        display: flex;
        align-items: center;
        display: none;
        /* 这里的技巧需要记住。我们可以给操作按钮设置宽度，让歌名宽度自动设置flex: 1 */
        width: 82px;

        .btn {
          width: 17px;
          height: 17px;
          margin-left: 8px;
          cursor: pointer;
        }

        .play {
          background-position: -267px -268px;
        }

        .addto {
          background-position: 2px -698px;
        }

        .favor {
          background-position: -297px -268px;
        }
      }
    }
    &:hover .item-operate{
      display: flex;
    }
  }

  .check-all {
    position: relative;
    /* align-items: end; */
    a {
      position: absolute;
      right: 30px;
      color: #000;
    }
  }
`