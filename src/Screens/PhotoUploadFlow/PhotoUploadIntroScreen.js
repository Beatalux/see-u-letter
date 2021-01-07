import React, { useState, useCallback, useRef, useEffect } from "react";
import "react-image-crop/dist/ReactCrop.css";
import styled from 'styled-components';
import Header from '../../commons/Header';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useTexts } from '../../components/Modal/context'
import { SubtitleText, BodyText, YellowButton,GreyButton, TitleText } from '../../commons/text'
import img from '../../images/photoIntro.png';

function PhotoCheckScreen() {
    
    const history = useHistory();
    const { search } = useLocation();
    const query = new URLSearchParams(search);




    return (
        <div>
            <div className="App">
                <Header />
                <TitleText top="130px" left="115px" size="20px">편지지와 함께 의미있는</TitleText>
                <TitleText top="159px" left="150px" size="20px">사진 첨부하기</TitleText>

                <BodyText top="575px" left="50px">첨부하신 사진은 인화되어 예쁜 종이 액자에 담겨</BodyText>
                <BodyText top="600px" left="100px">배송되며 한장 당 1000원입니다.</BodyText>
             
                <ImageContainer/>
                <StyledLink to="/deliveryInfo">
                <GreyButton top="719px">건너뛰기</GreyButton>
                </StyledLink>
                <StyledLink to="/upload">
                <YellowButton top="787px">사진첨부</YellowButton>
                </StyledLink>
            </div>


        </div>
    )
}

export default PhotoCheckScreen


const ImageContainer = styled.div`
background:url(${img});
position: absolute;
width: 322px;
height: 322px;
left: 46px;
top: 221px;

`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

