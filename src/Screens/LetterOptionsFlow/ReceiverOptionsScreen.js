import React from 'react'
import styled from 'styled-components'
import {BodyText,SubtitleText,Button,TitleText} from '../../commons/text'
import Header from '../../commons/Header';
import bar from '../../images/bar1.png';
import tome from '../../images/tome.png';
import toothers from '../../images/toothers.png';
const ReceiverOptionsScreen = () => {
    return (
        <div>
            <Header/>
           <BarImage></BarImage>
           <ImageBox top="180px"img={tome}></ImageBox>
           <ImageBox top="524px"img={toothers}></ImageBox>
       
        <TitleText top="141px" size="18px" left="24px">이 편지는 누구에게 쓰나요?</TitleText>         
       

        </div>
    )
}

export default ReceiverOptionsScreen

const BarImage=styled.div`
background:url(${bar});
position:absolute;
height: 3.0000152587890625px;
background-repeat:no-repeat;
width: 414px;
left:0px;
top: 106px;
border-radius: 0px;
`

const ImageBox=styled.div`
background:url(${props=>props.img});
position:absolute;
height: 272px;
width: 366px;
left: 21px;
top: ${props=>props.top};
border-radius: 0px;


`