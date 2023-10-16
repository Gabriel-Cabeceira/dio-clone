import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 2em;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #ffffff;
`

export const TitleHighLight = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;
    color: #ffffff70;
`

export const Column = styled.div`
    flex: ${({flex}) => flex};
    padding-right: 24px;
`