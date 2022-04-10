import styled from "styled-components";

export const ButtonStyled = styled.button`
    /* background-color: #0DA50D; */
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
`;