import styled from 'styled-components';



export const ArtistListWrapper = styled.div`
  flex: 1;
  padding: 40px;

  .artist-list-title {
    width: 100%;
    font-size: 24px;
    padding-bottom: 5px;
    border-bottom: 2px solid #c20c0c;
  }

  .artist-list {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .list-item {

      margin-bottom: 30px;

      .img {
        width: 130px;
        height: 130px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .artist-name {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        width: 130px;
        span {
          flex: 1;
        }
        .icon {
          display: inline-block;
          width: 17px;
          height: 18px;
          background-position: 0 -740px;
        }

      }
    }
     /* 设置后者样式 */
     .list-item-info {
        margin-bottom: 10px;
      }
  }

`