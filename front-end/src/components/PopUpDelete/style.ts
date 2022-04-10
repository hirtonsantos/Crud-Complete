import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 30px;
  box-sizing: border-box;
  h3 {
    color: black;
    font-family: "Sansita", sans-serif;
    font-weight: 700;
    margin-bottom: 20px;
    font-size: 20px;
  }
`;

export const DivA = styled.div`
  position: fixed;
  background-color: rgba(51, 51, 51, 0.5);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  padding: 20px;
  z-index: 10;
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 30px;
  width: 400px;
  min-width: 200px;
  span {
    text-align: right;
    font-size: 20px;
  }
`;