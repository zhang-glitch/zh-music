import styled from 'styled-components';


export const MenuHeaderWrapper = styled.div`
  display: flex;
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #C10D0C;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
  .menu-title {
    a {
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
    }
    &:hover a {
      text-decoration: none;
    }
  }

  .menu-list {
    display: flex;    
    margin: 5px 0 0 20px;
    flex: 1;

    .menu-item {
      color: #666;

      .sep-line {
        color: #ccc;
        margin: 0 10px;
      }

      /* .sep-line:last-child {
        display: none
      } */
    }
  }

  .more {
    display: flex;
    align-items: center;

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`
