import styled from 'styled-components'


export const SongDetailWrapper = styled.div`

  padding: 40px;
  display: flex;
`

export const SongDetailBGWrapper = styled.div`

  width: 206px;

  .song-bg {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 198px;
    height: 198px;

    .cover {
      background-position: -140px -580px;
      width: 206px;
      height: 205px;
      top: -4px;
      left: -4px;
    }
  }

  .link {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      display: inline-block;
      width: 16px;
      height: 16px;
      background-position: -34px -863px;
    }

    a {
      color: #0c73c2;
      text-decoration: underline;
    }
  }

`


export const SongDetailRight = styled.div`
  flex: 1;
  margin-left: 15px;
  
  /* 歌曲标题 */
  .top-title {
    display: flex;

    .icon {
      margin-top: 8px;
      display: inline-block;
      width: 54px;
      height: 24px;
      background-position: 0 -463px;
    }

    .title-right {
      flex: 1;
      margin-left: 5px;

      .title {
        font-size: 24px;
      }

      .tns {    
        margin: 1px 0 5px;
        color: #bababa;
        font-size: 14px;
      }
    }

    
  }

  /* 歌手 */
  .singer-info {
    margin-top: 10px;
    color: #999;

    .singer:hover, .singer {
      color: #0c73c2;
      margin-left: 5px;
    }
  }

  /* 专辑 */
  .album-info {
    margin: 10px 0;
    color: #999;

    .album:hover, .album {
      color: #0c73c2;
      margin-left: 5px;
    }
  }
`
