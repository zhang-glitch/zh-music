import styled from 'styled-components';


export const TopListHeaderWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;

  }
  .song-num {
    flex: 1;
    color: #666;
    margin-left: 20px;
    margin-top: 6px;
  }

  .play-count {
    span {
      margin-left: 5px;
      color: #c20c0c;
      font-weight: 600;
    }
  }

`
