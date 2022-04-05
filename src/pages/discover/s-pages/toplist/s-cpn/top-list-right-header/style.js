import styled from 'styled-components';


export const TopListRightHeaderWrapper = styled.div`

  /* padding: 40px; */
  display: flex;
  
  .header-img {
    width: 154px;
    height: 154px;
    padding: 1px;
    border: 1px solid #ccc;
  }
`

export const RightInfoWrapper = styled.div`

  padding: 20px;

  .top-info {
    font-size: 18px;
    color: #000;
    margin-bottom: 20px;

    .info-desc {
      font-size: 12px;
      color: #666;
      margin-top: 10px;

      i {
        
        display: inline-block;
        width: 13px;
        height: 13px;
        background-position: -18px -682px;
        position: relative;
        margin: -4px 5px 0 3px;
        vertical-align: middle;
      }
      span {
        color: #999;
        margin-left: 5px;
      }
    }
  }

  
`