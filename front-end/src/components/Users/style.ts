import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  display: flex;
  color: #000000;
  padding-top: 10px;
  span {
    /* padding-right: 80px; */
    padding-right: 33px;
    width: 140px;
    display: flex;
    align-items: center;
  }
  span:first-child {
    padding-left: 20px;
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  flex: auto;
  justify-content: space-evenly;
`;
