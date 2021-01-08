import React from 'react'
import styled from 'styled-components';
import { BodyText, SubtitleText, Button, TitleText } from '../../commons/text'
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

import logo from '../../images/logo.png'
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack'
import { Email } from '@styled-icons/material-outlined/Email';

import {FaQRow} from './FaQData'


export default function FaQScreen() {

    return (
        <Wrapper>
            <Wrap>
            <StyledLink to="landing">
            <ArrowBack size="24px"/>
            </StyledLink>
                <LogoImage />
            </Wrap>
            {/*-43px*/}
            <SubtitleText size="24px" top="123px">자주 묻는 질문</SubtitleText>
            <SidebarText top="101px">FAQ</SidebarText>

            <ListContainer>
                <FaQRow />
            </ListContainer>


            <QuestionWrapper> 
                
            <Divider variant="middle" />

            <SidebarText top="50px">문의하기</SidebarText>
            <FooterText top="88px">더 자세한 문의는 {'<'}씨유레터{'>'}메일로 문의해주세요.</FooterText>
            <div style={{ display: "flex", position: "absolute", top: "130px", alignItems: "center" }}>
                <MailIcon />
                <FaQText>@seeyouletter</FaQText>

            </div>
            </QuestionWrapper>

        </Wrapper>
    )
}


const QuestionWrapper=styled.div`
position:relative;
top:120px;

`


const ListContainer = styled.div`
position:relative;
top:130px;
width:350px;

`
const FooterText=styled(BodyText)`
    position:absolute;
    left:0px;
`

const MailIcon = styled(Email)`
height: 24px;
width: 24px;
color:#7C5B42;
padding-top:1px;
margin-right:0px;
`
const FaQText = styled.p`
position: absolute;
top:${props => props.top};
font-family: "Spoqa Han Sans";
font-style: normal;
font-weight: ${props => props.w || "normal"};
font-size: ${props => props.size || 14}px;
line-height: 27px;
margin-left:34px;
color:#7C5B42;

`
const SidebarText = styled.div`
font-family:"Spoqa Han Sans";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 30px;
text-align: left;

color:#7C5B42;

position:relative;
height: 30.0048828125px;
width: 120px;
top:${props => props.top};
`

const Wrap = styled.div`
display:flex;
margin-top:43px;
`

const LogoImage = styled.div`
background:url(${logo});

background-repeat: no-repeat;
height: 48px;
width: 210px;
margin-left:78px;

border-radius: 0px;
`



const Wrapper = styled.div`

`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
