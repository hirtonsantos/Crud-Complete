import styled from "styled-components";

export const ButtonStyled = styled.button`
    background-color: ${(props) => props.color};
    color:  #FFFFFF;
    width: 100px;
    padding: 10px;
    border-radius: 6px;
    border: 0;
    border-radius: 3px;
    cursor: pointer;
    font-family: "Roboto";
    font-weight: bold;
    font-size: 15px;
    justify-content: center;
    @media (min-width: 768px){
        display: flex;
        width: 24%;
        max-width: 120px;
    }
    @media(min-width: 1230px){
        margin-right: 20px;
  }
`;
