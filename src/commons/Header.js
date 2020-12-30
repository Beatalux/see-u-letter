import React from 'react'
import styled from 'styled-components'
import {ArrowBack} from '@styled-icons/boxicons-regular/ArrowBack'
import { BodyText, SubtitleText, Button, TitleText } from './text'
import logo from '../images/logo.png';

function Header({pageTitle}) {
    return (
        <Wrapper>
            <ArrowBackIcon/>
            <HeaderText left="175.86px">{pageTitle}</HeaderText>
        </Wrapper>
    )
}

export default Header

const Wrapper=styled.div`

display:flex;
align-items:center;
position:absolute;
top:60px;
height:25px;
`
const HeaderText=styled.p`
font-family: SpoqaHanSans;
font-style: normal;
font-weight:bold;
font-size: "18px";
line-height: 150%; 
margin-left:123px;

color: #000000;
`


const ArrowBackIcon=styled(ArrowBack)`
    width:30px;
    height:23px;
left: 22px;


`