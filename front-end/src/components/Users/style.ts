import styled from "styled-components";
import Button from "../Button";

export const Conteiner = styled.div`
  width: 100%;
  display: flex;
  color: #000000;
  padding-top: 10px;

  span {
    padding-right: 33px;
    align-items: left;
    overflow: hidden;
    text-overflow: clip;
    white-space: nowrap;
    width: 8ch;
    max-width: 50px;
  }

  span:first-child {
    padding-left: 10px;
  }

  span:nth-child(2) {
    display: none;
    width: 15ch;
    max-width: 110px;
    /* padding-left: 10px; */
  }

  span:nth-child(3) {
    width: 15ch;
    max-width: 110px;
    /* padding-left: 10px; */
  }
  @media (min-width: 514px) {
      span:nth-child(2) {
        display: flex;
      }
    }
  @media (min-width: 600px){
    span:first-child{
      width: 10ch;
      max-width: 82px;
    }
  }
  @media (min-width: 654px){
    span:first-child{
    width: 14ch;
    max-width: 25ch;
    margin-right: 10px;
  }
}
  @media (min-width: 739px){
    span:first-child{
      width: 16ch;
    }
  }
  @media(min-width: 768px){
    align-items: baseline;

  }
`;

export const BoxButtons = styled.div`
  display: flex;
  flex: auto;
  justify-content: space-evenly;
  button{display: none;}
  @media(min-width: 768px){
    svg {
      display: none;
    }
    button {
      display: flex;
      justify-content: center;
    }
  }
  @media(min-width: 1230px){
    justify-content: flex-start;
    margin-left: 75px;
  }
`;
