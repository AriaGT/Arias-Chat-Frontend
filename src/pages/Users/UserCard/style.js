import styled from "styled-components";


export const UserCardContainer = styled.div`
  cursor: pointer;
  display: inline-block;
  width: 240px;
  text-align: center;
  transition: filter .2s, transform .2s;
  :hover {
    transform: scale(1.04);
  }
  :active {
    filter: brightness(.75);
    transform: scale(.96);
  }
  .img-container {
    height: 230px;
    width: 200px;
    overflow: hidden;
    border-radius: 0px 0px 20px 20px;
    display: inline-block;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    img {
      height: 250px;
      margin: -35px 0px 0px -70px;
      width: 100%;
      position: absolute;
      right: 0;
    }
    .inner-skew {
      display: inline-block;
      border-radius: 20px;
      overflow: hidden;
      padding: 0px;
      font-size: 0px;
      margin: 30px 0px 0px 0px;
      background: #c8c2c2;
      height: 250px;
      width: 200px;
      position: relative;
    }
  }
  .text-container {
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    padding: 120px 20px 20px 20px;
    border-radius: 20px;
    background: #666;
    margin: -120px 0px 0px 0px;
    line-height: 19px;
    font-size: 14px;
    h3 {
      margin: 20px 0px 10px 0px;
      color: #40e0d0;
      font-size: 18px;
    }
    p {
      color: #bbb;
      font-size: 12px;
      span {
        color: white;
        font-size: 14px;
      }
    }
  }
`