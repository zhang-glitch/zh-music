import styled from 'styled-components'


export const NewAlbumWrapper = styled.div`
  margin-bottom: 40px;
`


export const NewAlbumContent = styled.div`
  position: relative;
  zoom: 1;
  height: 186px;
  margin: 28px 0 0 0;
  border: 1px solid #d3d3d3;

  .new-album-content {
    height: 184px;
    padding: 0 30px;
    background: #f5f5f5;
    border: 1px solid #fff;

    .list-item {
      height: 184px;
      display: flex !important;
      justify-content: space-between;
      align-items: center;
    }
  }

  .change-item {
    font-size: 16px;
    .left-arrow {
      position: absolute;
      top: 30%;
      left: 5px;
      /* transform: translate(0, -50%); */
      cursor: pointer;
    }

    .right-arrow {
      position: absolute;
      top: 30%;
      /* transform: translate(0, -50%); */
      right: 5px;
      cursor: pointer;
    }
  }
`

export const InnerItem = styled.div`
  cursor: pointer;
  width: 118px;
  height: 150px;

  .album-image {
    position: relative;
    .image {
      display: block;
      width: 100px;
      height: 100px;
    }
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -570px;
      text-indent: -9999px;
    }

    .btn-play {   
      background: url("https://s2.music.126.net/style/web2/img/iconall.png?afe78b1f26814c0b31e6affb5d9532c9") no-repeat;
      position: absolute;
      right: 25px;
      bottom: 5px;
      width: 22px;
      height: 22px;
      background-position: 0 -85px;
      display: none;
      z-index: 999;
    }
    &:hover .btn-play {
      display: block;
    }

    .btn-play:hover {
      background-color: rgba(0, 0, 0, .5);
      border-radius: 50%;

    }
  }

  .music-name {
    margin-top: 8px;
    color: #000;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 12px;
  }

  .author {
    color: #666;
    font-size: 12px;
  }
      
`