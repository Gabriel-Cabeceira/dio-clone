import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 2em;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #ffffff;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 2em;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubTitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const SimpleText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    margin-top: 1.5em;
    font-weight: 400;
    font-size: 1em;
    line-height: 20px;
`

export const AlreadyRegistered = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    margin-top: 1em;
    font-weight: 700;
    font-size: 0.8em;
    line-height: 19px;
`

export const ClickLogin = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    margin-top: 1em;
    font-weight: 700;
    font-size: 1em;
    line-height: 19px;
    color: #23DD7A;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`


export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const InvalidData = styled.p`
    text-align: center;
    color: #FF0000;
    font-size: 0.8em;
    margin-bottom: 1em;
`