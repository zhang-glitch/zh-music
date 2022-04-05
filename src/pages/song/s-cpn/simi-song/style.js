import styled from 'styled-components'


export const SimiSongWrapper = styled.div`

  /* padding: 20px; */

  .title {
    padding-bottom: 4px;
    font-weight: 600;
    border-bottom: 1px solid #ccc;
  }

  .simi-song-list {
    .list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;

      .item-left {
        .singer-name {
          color: #999;
          display: block;
        }
      }

      .item-right {
        .item {
          display: inline-block;
          width: 10px;
          height: 11px;
        }

        .play {
          background-position: -69px -455px;
          margin-right: 10px;
        }

        .add {
          background-position: -87px -454px;
        }
      }
    }
  }
`