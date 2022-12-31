import styled from "styled-components";


export const SideNavbarContainer = styled.section`
  height: 100%;
  width: 100%;
  grid-area: "SideNavbar";
  nav {
    background-color: #666;
    position: absolute;
    z-index: 5;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 90px;
    overflow: hidden;
    transition: width .2s linear;
    box-shadow: 0 20px 35px black;
    :hover {
      width: 280px;
    }
    .profileSection {
      text-align: center;
      display: flex;
      margin: 10px 0;
      padding-left: 22px;
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        object-fit: cover;
      }
      span {
        font-weight: bold;
        padding-left: 14px;
        font-size: 18px;
        text-transform: uppercase;
        top: 13px
      }
    }
    a {
      cursor: pointer;
      position: relative;
      color: #eee;
      font-size: 14px;
      display: table;
      width: 300px;
      padding: 10px;
      transition: color .3s, background-color .3s;
      :hover {
      background-color: #40e0d0;
      color: #222;
      }
    }
    .fa-solid {
      position: relative;
      width: 70px;
      height: 40px;
      top: 10px;
      font-size: 20px;
      text-align: center;
    }
    .nav-item {
      position: relative;
      top: 8px;
      margin-left: 10px;
    }
    #logout {
      position: absolute;
      bottom: 10px;
      background: none;
      :hover {
      background-color: #f55555;
      color: white;
      }
    }
  }
`