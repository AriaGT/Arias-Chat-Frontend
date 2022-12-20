import styled from "styled-components";

export const ModalScreen = styled.article`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  backdrop-filter: blur(4px);
  opacity: 0;
  pointer-events: none;
  transition: opacity .3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  .form_container {
    padding: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    width: 80%;
    max-width: 360px;
    height: auto;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    article {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;
      p {
        font-size: 12px;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      max-width: 98%;
      .imgContainer {
        position: absolute;
        bottom: 67px;
        width: 156px;
        aspect-ratio: 1;
        display: flex;
        border: 10px dashed #40e0d0;
        border-radius: 50%;
        animation: spin 30s linear infinite;
        animation-delay: 0;
        @keyframes spin {
          0% { transform: rotate(0deg) }
          100% { transform: rotate(360deg) }
        }
      }
      #profileImage-input {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
      }
      .profileImage-label {
        font-size: 14px;
        font-weight: 600;
        color: black;
        background-color: #40e0d0;
        border-radius: 5px;
        display: inline-block;
        transition: all .5s;
        cursor: pointer;
        padding: 10px 20px !important;
        width: 100%;
        text-align: center;
      }
      .photo_selected_container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
        p > span::before {
          content: '';
          animation: charging 1s linear infinite;
          @keyframes charging {
            0% {
              content: '';
            }
            33% {
              content: '.';
            }
            66% {
              content: '..';
            }
            100% {
              content: '';
            }
          }
        }
      }
      img {
        background-color: #333;
        width: 150px;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 50%;
        z-index: 20;
      }
      h3 {
        text-align: center;
      }
      div {
        display: flex;
        gap: 5px;
        flex-direction: column;
        font-size: 12px;
        color: #ddd;
        width: 100%;
        input {
          padding: 10px 20px;
          border-radius: 5px;
        }
      }
    }
  }
`