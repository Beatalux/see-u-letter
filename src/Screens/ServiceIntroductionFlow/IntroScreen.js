import React from 'react'
import styled from 'styled-components';
import {YellowButton} from '../../commons/text'
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';
import postboxintro from '../../images/intrologo.png';
import postbox from '../../images/gif.gif';

function IntroScreen({isClicked}) {

    const handleMainScreen=()=>{

    }


    return (
        <Wrapper>
            <IntroText>
            어느 날 우편함을 열었더니, <br/>
            과거로부터 온 편지가 와있다면? 
            </IntroText>
            <IntroPostbox></IntroPostbox>
            <Logo></Logo>
            <StyledLink to="/landing">
            <YellowButton top="720px" left="30px" onClick={handleMainScreen}>시작하기</YellowButton>
            </StyledLink>
        </Wrapper>
    )
}

export default IntroScreen
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Wrapper=styled.div`

`
const IntroPostbox=styled.div`
background:url(${postbox});

position:absolute;
left:18px;
top:260px;
width: 366px;
height: 332px;
`
const Logo=styled.div`
background:url(${logo});
position:absolute;
top:580px;
left:119px;
width: 210px;
height: 48px;
background-repeat: no-repeat;

`

const IntroText=styled.div`

    padding-top: 169px;
    padding-left:68px;
    width: 250px;
    height: 83px;
    text-align:center;

    font-family: RIDIBatang;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: center;

`