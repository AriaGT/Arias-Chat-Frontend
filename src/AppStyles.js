import styled from "styled-components";


export const AppGlobal = styled.main`
  background-color: #333333;
  color: white;
  display: grid;
  grid-template:
  "SideNavbar App" 100vh /
  90px        1fr;
  .buttons {
    width: 100%;
    display: flex;
    flex-direction: row !important;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
    .danger {
      background-color: #f55555;
      color: white;
      font-weight: 400;
    }
  }
  input {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  button {
    cursor: pointer;
    width: 100px;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #40e0d0;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    transition: filter .2s ease;
    font-size: 11px;
    font-weight: bold;
    :hover {
      filter: brightness(.8);
    }
  }
  .modal_visible {
    opacity: 1;
    pointer-events: all;
  }
  .spacerMedium {
    height: 25px;
  }
  .error_message {
    color: #f55555;
    font-size: 12px;
  }
`

export const PageContainer = styled.article`
  @media (max-width: 1080px) {
    padding-bottom: 100px !important;
  }
  padding: 10px;
  width: 100%;
  max-width: 1280px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  img {
    width: 80%;
    max-width: 200px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    text-align: center;
    div {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
    }
    label {
      color: #999;
      white-space: nowrap;
    }
    input {
      max-width: 200px;
      background: #222;
      border-radius: 5px;
      font-size: 16px;
      color: #999;
      text-align: center;
      ::placeholder {
        color: #999;
        transition: opacity 1s;
      }
      :focus {
        ::placeholder {
          opacity: 0;
        }
      }
    }
    .full_input {
      max-width: 600px !important;
    }
    button {
      padding: 5px 10px;
      height: 25px;
      width: 75px;
      font-size: 10px;
      margin-bottom: 15px;
    }
  }
  .user_image_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .image_edit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    width: 100%;
    label {
      position: relative;
      cursor: pointer;
      margin: 0;
      width: 100%;
      max-width: 200px;
      aspect-ratio: 1;
      border-radius: 15px;
      :hover {
        ::before {
          content: 'Cambiar';
          position: absolute;
          color: white;
          z-index: 20;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          pointer-events: none;
        }
      }
      img {
        width: 100%;
        transition: filter .2s;
        :hover {
          filter: brightness(.5);
        }
      }
    }
  }
  .user_data {
    text-align: center;
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 100%;
    h1 {
      margin-top: 10px;
    }
    p {
      color: #999;
    }
    div {
      margin-bottom: 15px;
    }
  }
  .default_questionary {
    div {
      flex-direction: column;
      width: 100%;
      align-items: center;
      label {
        font-size: 12px;
      }
      input {
        width: 80%;
        max-width: 200px;
        padding: 10px 20px;
        background-color: white;
        color: black;
      }
      button {
        padding: 10px 15px !important;
        height: unset;
        width: 100px;
        font-size: 11px;
      }
      #chatImg-input {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
      }
      .chatImg-label {
        font-size: 14px;
        font-weight: 600;
        color: black;
        background-color: #40e0d0;
        border-radius: 5px;
        transition: all .5s;
        cursor: pointer;
        padding: 10px 20px !important;
        width: 100%;
        max-width: 200px;
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
    }
  }
`