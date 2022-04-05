import styled from 'styled-components';


export const PlayListCategoryWrapper = styled.div`
  position: absolute;
  z-index: 99;
  top: 55px;
  left: -25px;
  width: 700px;
  border: 1px solid #ccc;
  background-color: #fefefe;
  box-shadow: 0 0 10px 2px #d3d3d3;
  border-radius: 5px;

  .arrow {
    position: absolute;
    top: -11px;
    left: 110px;
    width: 24px;
    height: 11px;
    background-position: -48px 0;
  }

  .table {

    .table-header {

      .header {
        padding: 20px 20px 10px;
        span {
          border: 1px solid #ccc;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;
        }
      }
      
      .line {
        width: 100%;
        height: 1px;
        background: #ccc;
      }
    }

    .table-body {
      display: flex;
      padding: 0 20px;


      .body-left {
        width: 70px;
        font-weight: 600;
        padding: 20px 0;
        border-right: 1px solid #ccc;
        .left-item {
          i {
            display: inline-block;
            width: 24px;
            height: 24px;
            background-position: -20px -735px;
            margin-right: 8px;
            vertical-align: middle;
          }

          span {
            margin-top: 5px;
            vertical-align: middle;
          }

          .icon1 {
            background-position: 0 -60px;
          }
          .icon2 {
            background-position: 0 -88px;
          }
          
          .icon3{
            background-position: 0 -117px;
          }

          .icon4
            background-position: 0 -141px !important;
          }
        }

        .left-item0 {
          height: 40px;
          line-height: 40px;
        }
        .left-item1 {
          height: 88px;
          line-height: 88px;
        }
        .left-item2, .left-item3 {
          height: 64px;
          line-height: 64px;
        }
        .left-item4{
          height: 89px;
          line-height: 89px;
        }
      }

      .body-right {
        flex: 1;
        padding: 20px 0;

        .item {
          padding-left: 15px;
          span {
            display: inline-block;
            
            a {
              color: #333;
            }

            .line {
              margin: 0 8px 0 10px;
              color: #d8d8d8;
            }
          }
        }

        .item0 {
          height: 40px;
          line-height: 40px;
        }
        .item1 {
          height: 88px;
          line-height: 29px;
        }
        .item2, .item3 {
          height: 64px;
          line-height: 64px;
        }
        .item4{
          height: 89px;
          line-height: 89px;
        }
      }
    }
  }
  
`