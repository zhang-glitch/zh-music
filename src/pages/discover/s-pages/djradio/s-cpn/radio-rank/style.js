import styled from 'styled-components'


export const RadioRankWrapper = styled.div`
  padding: 20px 20px 40px;

  .rank-header {
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 3px;
    border-bottom: 2px solid #c20c0c;
  }

  .rank-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 60px;
    .list-item {
      /* flex: 1; */
      width: 48%;
      display: flex;
      align-items: center;
      padding: 20px 10px;
      border-bottom: 1px solid #ccc;

      img {
        width: 120px;
        height: 120px;
      }

      .item-right {
        margin-left: 20px;

        .nickname {
          margin-top: 15px;
          color: #000;

          i.left {
            display: inline-block;
            position: relative;
            top: 2px;
            width: 14px;
            height: 15px;
            margin-right: 2px;
            background-position: -50px -300px;
            margin-right: 4px;
          }
        }

        .count {
          color: #999;
          margin-top: 5px;
          .subscribe {
            margin-left: 10px;
          }
        }
      }
    }
  }

`

