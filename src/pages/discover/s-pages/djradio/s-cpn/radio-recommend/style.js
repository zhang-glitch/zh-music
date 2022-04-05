import styled from 'styled-components'


export const RadioRecommendWrapper = styled.div`
  padding: 20px 20px 40px;

  .recommend-header {
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 3px;
    border-bottom: 2px solid #c20c0c;
  }

  .radio-list {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;

    .list-item {
      width: 150px;

      img {
        width: 100%;
        height: 100%;
      }
      
      .bottom-info {
        .info-name {
          margin: 13px 0 6px;
          line-height: 16px;
          font-size: 14px;
          font-weight: normal;
        }
        .info-desc {
          color #999;
        }
      }
    }
  }
  
`

