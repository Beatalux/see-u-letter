import React,{useState} from 'react'
import Carousel from '../../components/Carousel/LetterPaperCarousel'
import styled from "styled-components";

import { BodyText, SubtitleText, YellowButton, TitleText } from '../../commons/text'

import { Link,useLocation } from 'react-router-dom';
import qs from 'qs';




import bar from '../../images/bar2.png';
import fontsample from '../../images/fontsample.png';
import Header from '../../commons/Header';
import { ViewCarousel } from 'styled-icons/material-rounded';


export default function LetterPpaerOptionsScreen() {
    const [selectedPaper,setSelectedPaper]=useState(0);
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    
  console.log(query)
  /*
    const location=useLocation();
    const query = qs.parse(location.search, {
     ignoreQueryPrefix: true
   })
   const receiver=query.receiver;
   const month=query.month;
   */
   
 const receiver=query.get('receiver');
  const month=query.get('month');
   console.log('ck',receiver,'month',month);

const handleLetterPaper=(v)=>{
   console.log("this is v",v);
    setSelectedPaper(v);

}
 
    return (
        
        <div>
        <Header />
        <BarImage></BarImage>
        <TitleText top="135px" size="18px" left="24px">편지지를 골라주세요</TitleText>
        <BodyText top="165px" left="24px">앞으로 쓸 편지 내용이 인쇄될 편지지를 골라보세요!</BodyText>

            <Carousel test={handleLetterPaper}/>

        <StyledLink to={`font?receiver=${receiver}&month=${month}&paper=${selectedPaper}`}>
        <YellowButton top="785px" left='22px'>선택</YellowButton>
        </StyledLink>
        </div>
        
    )
}



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

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;