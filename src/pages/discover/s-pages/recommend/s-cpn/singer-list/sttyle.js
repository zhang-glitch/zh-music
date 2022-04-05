import styled from 'styled-components';


export const SingerListWrapper = styled.div`

`

export const SingerListContent = styled.div`
  padding: 0 20px;
  .singer-item {
    background: #fafafa;
    a {
      display: flex;
      height: 64px;
      width: 210px;
      border: 1px solid #ccc;
      margin-bottom: 20px;
      text-decoration: none;
  
      img {
        width: 62px;
        height: 62px;
        
      }

      .singer-info {
        margin-left: 20px;
        margin-top: 10px;
        height: 64px;
        .author {
          font-size: 14px;
          font-weight: 800;
        }
      }
    }

    &:hover {
      background: #f4f4f4;
    }
  }

  .btn-add {
    margin: 0 auto;
    text-align: center;
    height: 37px;
    line-height: 37px;
    border-radius: 10px;
    a { 
      width: 210px;
      display: block;
      border: 1px solid #c3c3c3;
      text-decoration: none;
      background: #fafafa;
      &: hover {
        background: #f4f4f4;
      }
    }
  }
`