import styled from 'styled-components';


export const AlbumItemWrapper = styled.div`

  /* width: 130px; */
  margin-top: 20px;

  .img {
    width: 153px;
    height: 130px;
    position: relative;
    overflow: hidden;
    margin-top: 15px;

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -845px;
      text-indent: -9999px;
    }

    .btn-play {   
      background: url("https://s2.music.126.net/style/web2/img/iconall.png?afe78b1f26814c0b31e6affb5d9532c9") no-repeat;
      position: absolute;
      right: 35px;
      bottom: 10px;
      width: 22px;
      height: 22px;
      background-position: 0 -85px;
      display: none;
      z-index: 999;
    }

    &:hover .btn-play {
      display: block;
    }
    /* .btn-play:hover {
      background: rgba(0, 0, 0, .5);
      border-radius: 50%;
    } */

  }

  .bottom-info {
    margin-top: 5px;
    .info-name {
      font-size: 14px;
    }
    .info-artist {
      color: #666;
    }
  }
  
`