import React from 'react'
import Carousel from '../../components/Carousel/LetterPaperCarousel'
import styled from "styled-components";

import { BodyText, SubtitleText, YellowButton, TitleText } from '../../commons/text'

import { Link } from 'react-router-dom';



import bar from '../../images/bar2.png';
import fontsample from '../../images/fontsample.png';
import Header from '../../commons/Header';
import { ViewCarousel } from 'styled-icons/material-rounded';


export default function LetterPpaerOptionsScreen() {
    return (
        
        <div>
        <Header />
        <BarImage></BarImage>
        <TitleText top="135px" size="18px" left="24px">편지지를 골라주세요</TitleText>
        <BodyText top="165px" left="24px">앞으로 쓸 편지 내용이 인쇄될 편지지를 골라보세요!</BodyText>

            <Carousel/>
            </div>
        
    )
}

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

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