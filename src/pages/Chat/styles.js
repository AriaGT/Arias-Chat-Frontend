import styled from "styled-components";

export const ChatContainer = styled.section`
  gap: 0 !important;
  width: 100%;
  display: flex;
  flex-direction: column;
  header {
    position: relative;
    height: 70px;
    width: 100%;
    background-color: #40e0d0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #222;
    img {
      height: 50px;
      width: 50px;
      position: absolute;
      left: 20px;
      border-radius: 50%;
    }
  }
  .messages_container {
    height: calc(100vh - 140px);
    position: relative;
    display: flex;
    section {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      .messages_list {
        position: relative;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        align-items: flex-start;
        div {
          margin: 5px 0;
          background-color: white;
          color: #222;
          padding: 5px 10px;
          border-radius: 10px;
          max-width: 360px;
          p {
            font-size: 12px;
            text-align: end;
            margin-top: 5px;
          }
        }
        .my_message {
          align-self: flex-end;
          background-color: #40e0d0;
          color: #222;
          text-align: end;
        }
      }
    }
  }
  .message_bar {
    position: absolute;
    bottom: 0;
    height: 70px;
    background-color: #333;
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
    gap: 10px;
    width: calc(100vw - 90px);
    input {
      width: calc(100% - 60px);
      border-radius: 15px;
      padding: 0 20px;
    }
    button {
      width: 60px;
      border-radius: 15px;
      i {
        transform: scale(1.5);
        transition: transform .1s;
      }
      :active {
        i {
          transform: scale(1.8);
        }
      }
    }
  }
`