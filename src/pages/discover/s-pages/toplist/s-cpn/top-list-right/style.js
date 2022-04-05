import styled from 'styled-components';


export const TopListRightWrapper = styled.div`

`
export const TopListRightListWrapper = styled.div`
  margin-top: 40px;


  .list-display {
    
    table {
      table-layout:fixed; 
      width: 100%;
      border: 1px solid #d9d9d9;

      /* 表头 */
      thead {
        th {
          word-break: break-all;
          height: 34px;
          line-height: 34px;
          background-image: url(${require("@/assets/img/sprite_table.png")});
          color: #666;
          border: 1px solid #ddd;
          border-width: 0 0 1px 1px;
          /* padding-left: 10px; */
        }
        
        /* 序号 */
        .ranking {
          width: 78px;
          border-left: none;
        }

        /* 时长 */
        .duration {
          width: 91px;
        }

        /* 歌手 */
        .singer {
          /* width: 173px; */
          width: 26%;
        }

        /* 歌名 */
        .title {
          /* flex: 1; */
          /* width: 310px; */
        }
      }

      /* 表体 */
      tbody {
        
        td {
          padding: 6px 10px;
        }

        .body-item {

          &:hover {
            .play-time {
              .time {
                display: none;
              }
              
              .item-operate {
                display: flex;
              }
            }
          }
          /* 序号 */
          .body-index {
            display: flex;
            align-items: center;

            .order {
              width: 25px;
              height: 18px;
              text-align: center;
              color: #999;
            }

            .new {
              width: 16px;
              height: 17px;
              margin-left: 12px;
              background-position: -67px -283px;
            }
          }
          /* 歌名 */
          .body-title {
            display: flex;
            align-items: center;
            padding: 6px 10px;
            /* width: 100%; */

            .btn-play {
              display: inline-block;
              width: 17px;
              height: 17px;
              background-position: 0 -103px;
              margin: 0 8px;

              &:hover {
                background-position: 0 -128px;
              }
            }
          }
          /* 歌时 */
          .play-time {
            display: flex;
            align-items: center;
            justify-content: center;

            /* 移入时的操作项 */
            .item-operate {
              display: none;
              .btn {
                width: 17px;
                height: 17px;
                margin-left: 8px;
                cursor: pointer;
              }

              .play {
                background-position: -267px -268px;
              }

              .addto {
                background-position: 2px -698px;
              }

              .favor {
                background-position: -297px -268px;
              }
            }
          }
          /* 作者 */
          .singer-name {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 140px;

            text-align: center;

          }
        }
        
      }
    }
  }

`