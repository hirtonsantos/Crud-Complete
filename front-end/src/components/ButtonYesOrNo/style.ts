import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    width: 100%;
    
    button{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        color: white;
        font-size: 20px;
        width: 100%;
        border: 0px;
        padding: 8px;
    }
    button:not(button:last-child){
        margin-right:20px;
        background: #FF1010;
    }
    
`;