import React from 'react'
import styled from 'styled-components';
import { BodyText , SubtitleText, Button, TitleText } from '../../commons/text'
import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';

import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline'
import {HelpCircle} from '@styled-icons/ionicons-outline/HelpCircle'
import circle from '../../icons/Ellipse32.png'
import process from './process.png'

function sidebar() {
    return (
        <Wrapper>
            <CloseRow>
            <CloseButton/>
            </CloseRow>
            
            <BigRow>
                <ProcessIcon></ProcessIcon>
            <WhiteTitleText>씨유레터 진행 방법</WhiteTitleText>
            </BigRow>
            <Divider />
            <StyledLink to="/faq">
            <BigRow>
                <HelpCircleIcon></HelpCircleIcon>
                <WhiteTitleText>자주 묻는 질문</WhiteTitleText>
            </BigRow>
            </StyledLink>
            
            <StyledLink to="/serviceTerms">
            <SmallRow>
                <CircleIcon></CircleIcon>
                <WhiteBodyText>이용약관</WhiteBodyText>
              
            </SmallRow>
            </StyledLink>
            <SmallRow>
                <CircleIcon></CircleIcon>
                <WhiteBodyText>라이선스</WhiteBodyText>
            </SmallRow>
            <SmallRow>
                <CircleIcon></CircleIcon>
                <WhiteBodyText>입금 계좌 복사</WhiteBodyText>
            </SmallRow>


      </Wrapper>
    )
}

export default sidebar
const WhiteTitleText=styled(SubtitleText)`
&&&{
    color:white;
    padding-left:67px;
    font-weight:bold;
    font-size:20px;
}
}
`

const WhiteBodyText=styled(BodyText)`
&&&{
    color:white;
    margin-left:67px;

}
`
const Wrapper=styled.div`
background-color:'#7C5B42';
color:white;
`
const CloseButton=styled(CloseOutline)`

width:24px;
height:24px;

padding-bottom:81px;
padding-top: 62px;
padding-left:269px;
color:white;
`
const CloseRow=styled.div`
width:319px;


`
const BigRow=styled.button`
display:flex;
width:auto;
border:none;
background-color:#7C5B42;

align-items: center;
margin-bottom:32px;




`;

const SmallRow=styled.button`
display:flex;

width:auto;
height:24px;
border:none;

align-items: center;
background-color:#7C5B42;
margin-bottom:12px;


`;

const ProcessIcon=styled.div`
background:url(${process});
background-repeat: no-repeat;
background-position: center; 
color:white;
width:24px;
height:24px;

margin-left:27px;


`

const CircleIcon=styled.div`
background:url(${circle});
background-repeat: no-repeat;
background-position: center; 
width:5px;
height:5px;



margin-left:40px;
margin-right:5px;

`

const HelpCircleIcon=styled(HelpCircle)`
width:24px;
height:24px;

color:white;
margin-left:27px;


`



const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
