import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    background-color: #3B4651;
    position: relative;
    margin-bottom: 24px;
`

export const ImageBackground = styled.img`
    width: 100%;
    height: 180px;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    div {
        margin-left: 2em;
    }

    h4 {
        font-family: 'Open Sans';
        margin-bottom: 3px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 1em;
        color: #FFFFFF;
    }
`

export const UserPicture = styled.img`
    width: 2em;
    height: 2em;
    border-radius: 50%;
    border: 3px solid #FFFFFF;
`

export const PostInfo = styled.div`
    margin-bottom: 12px;

    h4 {
        font-family: 'Open Sans';
        margin-bottom: 3px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 1em;
        color: #FFFFFF;
    }
`

export const HasInfo = styled.div`
    margin-bottom: 12px;

    h4 {
        font-family: 'Open Sans';
        margin-bottom: 3px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF80;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 1em;
    }
`