import styled from 'styled-components';


export const HotAnchorWrapper = styled.div`

`

export const HotAnchorContent = styled.div`
  padding: 0 20px;
  .list-item {
    display: flex;
    margin-bottom: 10px;
    .item-img {
      width: 40px;
      text-decoration: none;

      img {
        width: 40px;
        height: 40px;
        box-shadow: 0 0 1px #333333 inset;
      }

    }
    .item-info {
      /* 注意flex: 1设置的宽度是相对宽度，他不可以代表宽度做到省略号 */
      /* flex: 1; */
      width: 160px;
      margin-left: 20px;
      .name {
        text-decoration: none;
      }
    }
  }

`
