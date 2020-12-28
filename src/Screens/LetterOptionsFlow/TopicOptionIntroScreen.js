import React,{useState} from 'react'
import styled from 'styled-components'
import {BodyText,SubtitleText,YellowButton, GreyButton,TitleText} from '../../commons/text'
import '../../index.css'
import Header from '../../commons/Header';
import bar from '../../images/halfbar.png';
import topicIntro from '../../images/topicIntro.png';


import { Link } from 'react-router-dom';

export default function TopicOptionIntroScreen() {

    return (

        <div>
            <Header />
            <BarImage></BarImage>
            <TopicIntroText>편지를 쓰기 전,<br/> 미리 쓸 내용을 담아볼까요?</TopicIntroText>

            <BodyText top="273px" left="101px" size="14px">선택한 주제는 편지지에 담기게 돼요!.</BodyText>

            <ImageBox img={topicIntro} top="340px">
            </ImageBox>


<StyledLink to="/writingLetter">
          <GreyButton top="716px">건너뛰기</GreyButton>
          </StyledLink>
         <StyledLink to="/topic">
         <YellowButton top="785px">주제담기</YellowButton>
         </StyledLink>
        </div>
    )
}

const TopicIntroText=styled.p`
position: absolute;
height: 59px;
width: 236px;
left: 89px;
top: 203px;
border-radius: nullpx;


font-family: RIDIBatang;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* or 150% */

text-align: center;


`
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const ImageBox = styled.div`
background:url(${props => props.img});
position:absolute;
height: 279px;
width: 366px;
left: 24px;
top: ${props => props.top};
border-radius: 0px;
margin:0 0 0 0;
padding:0 0 0 0;
`



const BarImage = styled.div`
background:url(${bar});
position:absolute;
height: 3.0000152587890625px;
background-repeat:no-repeat;
width: 414px;
left:0px;
top: 106px;
border-radius: 0px;
`