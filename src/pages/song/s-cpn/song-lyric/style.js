import styled from 'styled-components'


export const SongLyricWrapper = styled.div`
  position: relative;
  /* margin-left: 15px; */
  margin-top: 40px;
  
  .lrc-item {
    margin-top: 6px;
  }

  .btn-spread {
    width: 40px;
    position: relative;
    
    .text-btn {
      font-size: 14px;   
      color: #0c73c2;
    }

    i {
      vertical-align: middle;
      position: absolute;
      width: 11px;
      height: 8px;
      right: -8px;
      top: 6px;
      background-position: ${props => props.isSpread ? "-45px": "-65px"} -520px;
    }
  }

`