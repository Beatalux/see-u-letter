import React from 'react'
import styled from 'styled-components'
import {ArrowBack} from '@styled-icons/boxicons-regular/ArrowBack'
import { BodyText, SubtitleText,  TitleText } from './text'
import logo from '../images/logo.png';
import { Link,useHistory } from 'react-router-dom';
function Header({pageTitle}) {
    const history=useHistory();
    return (
        <Wrapper>
         
         <Button onClick={()=>history.goBack()}>
            <ArrowBackIcon/>
              

        </Button>
        
            <HeaderText left="175.86px">{pageTitle}</HeaderText>

</Wrapper>)
}

export default Header

const Button=styled.button`

background:transparent;

background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
outline:none;
width:40px;
height:25px;
margin:0 0 0 0;




`
const Wrapper=styled.div`

display:flex;
align-items:center;
position:absolute;
top:60px;
height:25px;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
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
    margin-left:-12px;



`