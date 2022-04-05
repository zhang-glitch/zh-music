import styled from 'styled-components';


export const TopListRightItemWrapper = styled.div`
  padding-top: 40px;
  .title {
    padding: 0 10px 12px 15px;
    font-size: 14px;
    color: #000;
    font-family: simsun;
    font-weight: 600;
  }
`

export const ListItem = styled.div`
    .list-item {
      cursor: pointer;
      display: flex;
      padding: 10px 0 10px 20px;
      text-decoration: none;
  
      .info {
        margin-left: 10px;
  
        .into-title {
          width: 150px;
          overflow: hidden;
          margin-top: 2px;
          margin-bottom: 8px;
        }
  
        .info-time {    
          vertical-align: middle;
          color: #999;
        }
      }
      
      &:hover  {
        background: #f4f2f2;
      }
      &.active {
        background: #e6e6e6;
      }
    }
`