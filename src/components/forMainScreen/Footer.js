import React from 'react'
import styled from 'styled-components';
import { BodyText, Button, TitleText } from '../../commons/text'
import { Link } from 'react-router-dom';
import {Instagram} from '@styled-icons/fa-brands/Instagram';
import line from '../../images/선4.png';
import Divider from '@material-ui/core/Divider';


export default function footer() {
    return ( 

        <Wrapper>
            <QuestionText top="40px">씨유레터 비즈니스 문의</QuestionText>
            <QuestionText top="78px">프로젝트 제휴 문의</QuestionText>
            <QuestionText top="116px">마케팅 문의</QuestionText>
            <QuestionText top="153px">환불정책</QuestionText>
           
       
            <Dividers top="204px"/>

            <FooterText top="228px">입금 계좌번호</FooterText>
            <FooterText top="249px" w="bold" size="18px">국민 000-000-00-000000</FooterText>
            <FooterText top="282px">seeyouletter@gmail.com</FooterText>
            <div style={{display:"flex", position:"absolute", top:"325px",alignItems:"center"}}>
            <InstaIcon />
            <EditedFooterText >@seeyouletter</EditedFooterText>

            </div>
        </Wrapper>
       )
}
const InstaIcon=styled(Instagram)`
height: 18px;
width: 18px;

padding-top:1px;
margin-left:24px;


`
const Wrapper=styled.div`

position:relative;
width: 414px;
height: 363px;


background: #C0C0C0;

color: #FFFFFF;
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