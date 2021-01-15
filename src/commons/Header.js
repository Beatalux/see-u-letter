import React from 'react'
import styled from 'styled-components'
import {ArrowBack} from '@styled-icons/boxicons-regular/ArrowBack'
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


&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    background-color:white;
}

`
const Wrapper=styled.div`

display:flex;
align-items:center;
position:absolute;
top:60px;
height:25px;
`


const HeaderText=styled.p`
font-family:"Spoqa Han Sans";
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