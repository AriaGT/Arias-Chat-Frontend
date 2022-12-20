import styled from "styled-components";


export const ChatCardContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  width: 90%;
  margin-top: 10px;
  background-color: #666;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: filter .2s;
  :hover {
    filter: brightness(1.1);
  }
  :active {
    filter: brightness(0.75);
  }
  img {
    border: 1px solid #40e0d0;
    width: 50px !important;
    aspect-ratio: 1 !important;
    border-radius: 50% !important;
  }
`