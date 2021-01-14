import React,{useState} from 'react'
import styled from "styled-components";
import { Link,useLocation } from 'react-router-dom';
import { BodyText, SubtitleText, YellowButton, TitleText } from '../../commons/text'

import Carousel from '../../components/Carousel/LetterPaperCarousel'

import bar from '../../images/letterBar.png';
import p1 from '../../images/paperTextSample/paper1.png';
import fontsample from '../../images/fontsample.png';
import Header from '../../commons/Header';


export default function LetterPpaerOptionsScreen() {
    const [selectedPaper,setSelectedPaper]=useState(0);
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    
  console.log(query)
 
   
 const receiver=query.get('receiver');
  const month=query.get('month');
   console.log('ck',receiver,'month',month);

const handleLetterPaper=(v)=>{
   console.log("this is v",v);
    setSelectedPaper(v);

}
 
    return (
        
        <div>
        <Header pageTitle="편지지 선택"/>
        <BarImage></BarImage>
        <TitleText top="135px" size="18px" left="24px">편지지를 골라주세요</TitleText>
        <BodyText top="165px" left="24px">앞으로 쓸 편지 내용이 인쇄될 편지지를 골라보세요!</BodyText>

        <CarouselContainer>
            <Carousel test={handleLetterPaper}/>
        </CarouselContainer>

        <StyledLink to={`font?receiver=${receiver}&month=${month}&paper=${selectedPaper}`}>
        <YellowButton top="785px" left='30px'>선택</YellowButton>
        </StyledLink>
        </div>
        
    )
}

const CarouselContainer=styled.div`
position: absolute;
left:3px;
top: 220px;
width:100vw;
`

const BarImage = styled.div`
background:url(${bar});
position:absolute;
height: 3.0000152587890625px;
background-repeat:no-repeat;
width: 100vw;
left:2px;
top: 106px;
border-radius: 0px;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;