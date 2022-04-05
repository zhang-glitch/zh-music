import styled from 'styled-components';


export const PlayListHeaderWrapper = styled.div`

  display: flex;
  padding: 40px 20px 6px;
  border-bottom: 3px solid #c20c0c;
  background: #fff;

  .left {
    /* 这里加相对定位是为了让分类表格可以容易定位 */
    position: relative;
    flex: 1;
    display: flex;
    .title {
      font-size: 24px;
      font-weight: 500;
    }
  
    .select-btn {
      text-align: center;
      position: relative;
      top: 2px;
      width: 91px;
      height: 31px;
      line-height: 31px;
      background-color: #fafafa;
      border: 1px solid #d3d3d3;
      border-radius: 3px;
      color: #0c73c2;
      margin-left: 10px;
      cursor: pointer;
      &:hover {
        background-color: #fff;
      } 
  
      i {
        position: relative;
        left: 5px;
        bottom: 2px;
        display: inline-block;
        width: 8px;
        height: 5px;
        background-position: -70px -543px;
      }
    }
  }

  .hot-btn {
    background-position: 0 0;
    border-radius: 3px;
    color: #fff;
    width: 46px;
    height: 29px;
    line-height: 29px;
    text-align: center;
    cursor: pointer;
  }
  
`