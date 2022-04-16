import styled from "styled-components";

export const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: #808080;
    font-size: 30px;
    font-weight: bold;
  }
`;

export const Content = styled.main`
  width: 90vw;
  justify-content: center;
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    display: flex;
    height: 39px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);

    span {
      color: #383535;
      font-size: 15px;
      font-weight: bold;
      width: 140px;
    }

    span:first-child {
      padding-left: 20px;
    }

    span:nth-child(2) {
      display: none;
    }

    span:nth-last-child(-n + 3) {
      padding-left: 33px;
    }

    span:nth-last-child(-n + 1) {
      margin-left: 16px;
    }

    @media (min-width: 514px) {
      span:nth-child(2) {
        display: flex;
      }
    }
  }
  @media (min-width: 1230px){
        width: 80vw;
    }
`;
