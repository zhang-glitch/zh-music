import styled from 'styled-components';


export const SongWrapper = styled.div`

  background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y;
  background-color: #fff;
  display: flex;

  .song-left {
    width: 710px;
  }

  .song-right {
    width: 270px;
    padding: 20px 40px 40px 30px;
  }

`