import styled from "styled-components";


export const UserPageContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  section {
    background-color: #444;
    width: 90%;
    max-width: 450px;
    height: 90%;
    padding: 30px;
    border-radius: 30px;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
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
        width: 80%;
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
    img {
      width: 80%;
      max-width: 200px;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
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
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: 100%;
      text-align: center;
      div {
        display: flex;
        gap: 4.5px;
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
      button {
        padding: 5px 10px;
        height: 25px;
        width: 75px;
        font-size: 10px;
        margin-bottom: 15px;
      }
    }
  }
`