import styled from "styled-components";


export const UserCardContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 160px;
  text-align: center;
  transition: filter .2s;
  margin: 10px;
  :hover {
    filter: brightness(.9);
  }
  @media (min-width: 520px) {
    max-width: 200px;
    .text-container {
      margin: 20px 0px 10px 0px;
      height: 280px;
    }
  }
  .img-container {
    aspect-ratio: 1;
    width: 90%;
    max-width: 200px;
    overflow: hidden;
    border-radius: 0px 0px 20px 20px;
    position: relative;
    img {
      position: absolute;
      left: 0;
      width: 100%;
    }
  }
  .text-container {
    height: 228px;
    width: 100%;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    padding: 120px 20px 20px 20px;
    border-radius: 20px;
    background: #666;
    margin: -120px 0px 0px 0px;
    line-height: 19px;
    font-size: 14px;
    h3 {
      color: #40e0d0;
      font-size: 13px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      @media (min-width: 520px) {
      font-size: 16px;
      }
    }
    div {
      width: 90%;
      p {
        color: #bbb;
        font-size: 9px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        span {
          color: white;
          font-size: 11px;
        }
        @media (min-width: 520px) {
        font-size: 12px;
        span {
          font-size: 14px;
        }
        }
      }
    }
  }
`