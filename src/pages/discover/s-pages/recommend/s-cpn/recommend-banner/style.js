import styled from 'styled-components'


export const RecommendBannerWrapper = styled.div`
/* 获取每个图片的背景 ,只有设置了position-size才可以设置背景图片的宽高*/
background: url(${props => props.bgImage}) center center/6000px;

  .banner-wrap-v1 {
    position: relative;
  }
  .banner {
    height: 285px;
    display: flex;
  }
  
`

export const BannerContent = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 285px;
    .image {
      height: 285px;
      width: 100%;
    }
  }
`

export const BannerDownload = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 250px;
  height: 285px;
  background: url(${require("@/assets/img/download.png")});
`

export const ChangeArrow = styled.div`
    a {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      font-size: 40px;
      color: #fff;
      display: block;
      height: 60px;
      line-height: 60px;
      &:hover {
        background: rgba(0, 0, 0, .3);
      }
    }

    .arrow-right {
      right: 0; 
    }
`