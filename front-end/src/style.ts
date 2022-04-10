import styled from "styled-components";

export const Container = styled.div`
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Header = styled.header`
    width: 100%;
    height: 100px;
    h1 {
        color: #808080
        font-size: 27px;
        font-weight: bold;
    }
`

export const Content = styled.main`
    /* width: 90vh; */
    width: 70%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    header {
        display: flex;
        justify-content: flex-start;
        
        //ALTER
        align-items: center;
        /* width: 706px; */
        margin-top: 20px;
        display: flex;
        height: 39px;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
        
        span {
            color: #383535;
            font-size: 15px;
            font-weight: bold;
            /* padding-right: 110px; */
            width: 140px;
        }
        span:first-child{
            padding-left: 20px;
        }
        span:nth-last-child(-n+3) {
            padding-left: 33px;
        }
        span:nth-last-child(-n+1){
            margin-left: 16px;
        }
    }
`