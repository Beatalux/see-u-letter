import React from 'react'
import styled from 'styled-components';
import { BodyText, Button, TitleText } from '../../commons/text'
import {Instagram} from '@styled-icons/fa-brands/Instagram';
import line from '../../images/선4.png';
import { Email } from '@styled-icons/material-outlined/Email';


export default function footer() {
    return ( 

        <Wrapper>
            <QuestionText top="40px">씨유레터 비즈니스, 제휴 문의</QuestionText>
            
           
       
            <Dividers top="174px"/>

            <FooterText top="180px">입금 계좌번호</FooterText>
            <FooterText top="210px" w="bold" size="18px">카카오뱅크 3333-18-3951747 (이승아)</FooterText>
            <div style={{ display: "flex", position: "absolute", top: "100px", alignItems: "center" }}>
                <MailIcon />
                <EditedFooterText>seeyouletter.official@gmail.com </EditedFooterText>

            </div>
            <div style={{display:"flex", position:"absolute", top:"130px",alignItems:"center"}}>
            <InstaIcon />
            <EditedFooterText >@seeyouletter.official</EditedFooterText>

            </div>
        </Wrapper>
       )
}
const InstaIcon=styled(Instagram)`
height: 18px;
width: 18px;
color:white;

padding-top:1px;
margin-left:24px;
`
const MailIcon = styled(Email)`
height: 20px;
width: 20px;
color:white;
padding-top:1px;
margin-left:24px;
`
const Wrapper=styled.div`

position:relative;
width: 100%;
height: 363px;

background: #7C5B42;

color: 7C5B42;
`
const QuestionText=styled.p`

position:absolute;
margin-left:24px;
top: ${props=>props.top};


font-family: SpoqaHanSans;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
color:white;

`
const Dividers = styled.div`
background:url(${line});
 width:366px;
 height:1px;
    position:absolute;
    top:${props=>props.top};

`
const FooterText=styled.p`
position: absolute;
top:${props=>props.top};
font-family: SpoqaHanSans;
font-style: normal;
font-weight: ${props=>props.w||"normal"};
font-size: ${props=>props.size||14}px;
line-height: 27px;
margin-left:24px;
color: #FFFFFF;
`

const EditedFooterText=styled(FooterText)`
margin-left:48px;
`;