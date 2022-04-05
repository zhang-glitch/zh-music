import styled from 'styled-components';



export const ArtistCategoryWrapper = styled.div`
  background: #f9f9f9;
  width: 180px;
  padding: 51px 10px 40px;
  /* margin-top: 51px; */

  .category-item {

    border-bottom: 1px solid #ccc;
    padding: 10px 0;

    &:last-of-type {
      border-bottom: none;
    }
    
    .category-title {
      height: 25px;
      padding-left: 14px;
      font-size: 16px;
      font-family: "Microsoft Yahei";
      font-weight: 600;
      margin-bottom: 10px;
    }

    .item {
      height: 29px;
      line-height: 29px;
      display: inline-block;
      width: 160px;
      padding-left: 27px;
      background: url(${require("@/assets/img/singer_sprite.png")}) no-repeat 0 -30px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
      &.active {
        color: red;
        background-position: 0 0;
      }
    }
  }

`