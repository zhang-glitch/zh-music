import styled from 'styled-components'


export const SimiPlayListWrapper = styled.div`
  /* padding: 20px 40px 40px 30px; */
  margin-bottom: 40px;
  .title {
    padding-bottom: 4px;
    font-weight: 600;
    border-bottom: 1px solid #ccc;
  }

  .simi-play-list {
    .list-item {
      display: flex;
      justify-content: space-between;
      /* align-items: center; */
      margin-top: 10px;
      cursor: pointer;

      .item-left {
        width: 50px;

      }

      .item-right {
        width: 140px;
        margin-left: 10px;
        /* margin-top: 10px; */

        .item-desc {
          font-size: 14px;
          color: #000;
        }

        .artist {
          .by {
            color: #999;
            margin-right: 5px;
          }
        }
      }
    }
  }
`