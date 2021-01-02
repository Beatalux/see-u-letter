import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Drawer from "../../components/forMainScreen/SwipeableTemporaryDrawer"
import Divider from '@material-ui/core/Divider';
import Footer from   "../../components/forMainScreen/Footer"
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { BodyText, SubtitleText,WarningText, Button, TitleText } from '../../commons/text'

import m1 from "../../images/main1.png";

import m2 from "../../images/m2.png";
import m3 from "../../images/m3.png";
import m4 from "../../images/m4.png";
import m5 from "../../images/m5.png";
import m6 from "../../images/m6.png";
import m7 from "../../images/m7.png";
import m8 from "../../images/m8.png";
import designInfo from "../../images/designInfo.png";
import prettyDivider from "../../images/prettyDivider.png";
import setInfo from "../../images/setInfo.png";
import {Instagram} from '@styled-icons/fa-brands/Instagram';
import line from '../../images/선4.png';

//material-ui component 로 분리할 것 ㅅㅂ;;

export default function MainScreen() {
    const [visible,setVisible]=useState(true);

    const ToWriteLetterPage = (e) => {
        console.log("편지쓰기 clicked");
        setVisible(!visible);

    }

    let test="";

    const ButtonVisibility=(bool)=>{
        console.log("here",bool)
        setVisible(!visible);
        //true->disable
        if(bool.right===false){
            console.log("haha");
            test='hidden';
      
        }else{
            test='visible';
        }
    }


    return (
        <MainScreenContainer>
   
            <Drawer change={ButtonVisibility}/>
            <LogoImage/>
            <TitleText top="510px" left="24px">새해를 시작할 때, 과거의 내가 보낸<br/>편지가 도착한다면 어떨까요?</TitleText >
            <YellowDivider/>
              <Div1>
            <BodyText top="666px">
           씨유레터는 당신에게 선물을 받는 듯한 설렘과
            <br/>옛 기억을 꺼내보는 즐거움을  나누어드리고자
            <br/>탄생했습니다. 오늘 나에게, 또 소중한 사람에게 
             <br/>
             편지를 쓰고, 미래로 발송해 보세요.
            </BodyText>
            </Div1>

            <Title  left="30px">씨유레터 진행 방법</Title>
            <RefText>*PC에서도 편지를 쓸 수 있어요.</RefText>
            <ProcessImg top="965px" img={m2}></ProcessImg>
            <SubtitleText top="1229px">1. 씨유레터 접수</SubtitleText>
            <BodyText top="1269px">
            씨유레터를 통해 미래의 나, 혹은 소중한 사람들에게<br/>
            편지를 써보세요. 응원, 위로, 시시콜콜한 이야기까지.<br/>
             가장 
            좋아하는 사진도 첨부하고요.
            </BodyText>
           <WarningText color="rgba(241,199,51,0.5)" top="1350px">
            *씨유레터는 2021년 3월 31까지만 신청할 수 있어요.
            </WarningText>
           
        
            <ProcessImg top="1447px" img={m3}></ProcessImg>
            <SubtitleText top="1711px">2. 보관 및 배송 준비</SubtitleText>
            <BodyText top="1751px">작성하신 편지는 씨유레터의 서버에 소중히 보관하고 있다가, 도착일 1개월 전부터 배송 준비를 시작해요. 열심히 쓴 편지에 씨유레터만의 감성을 담아 포장해드립니다.</BodyText>
            <Divider/>
            <ProcessImg top="1949px" img={m4}></ProcessImg>
            <SubtitleText top="2213px">3. 편지 받아보기</SubtitleText>
            <BodyText top="2253px">작년의 내가 편지를 보냈다는 것도 까먹을 때 즈음, <br/>
씨유레터는 깜짝 선물처럼 찾아옵니다. <br/>
작년의 내가 했던 생각들을 보며 웃기도 하고, <br/>추억들을 
떠올려보기도 하고, 그 때의 내가 건네는 <br/> 
따뜻한 위로의 손길도 느껴보세요.</BodyText>           
           
           <BigDivider top="2435px"/>

           <ProcessImg top="2465px" img={m5}></ProcessImg>
           <TitleText top="2816px">열심히 살고 있는 나에게 위로와 응원을</TitleText>
           <ProcessImg top="2891px" img={m6}></ProcessImg>
        
           <ProcessImg top="3169px" img={m7}></ProcessImg>
           <TitleText  top="3520px">사랑하는 사람에게는 고마움과 사랑을</TitleText>
            
           <ProcessImg top="3642px" img={m8}></ProcessImg>
           <BodyText top="3926px">편지가 가는 시간을 빌어 평소에는 쉽지 않았던 “고마워, 
               사랑해”라는 말을 전해보세요. 씨유레터가 여러분
               의 마음을 전달하는 창이 되어 드릴게요. 
            </BodyText>

            <BigDivider top="4096px"/>


            <DesignInfoImg top="4141px" img={designInfo}></DesignInfoImg>
            <ProcessImg top="4888px" img={prettyDivider}></ProcessImg>
            <SetInfoImg top="4986px" img={setInfo}></SetInfoImg>
       
            <StyledLink to="/senderInfo">
                <VisibilityRow visibility={visible}>

                <Fab
                    mainButtonStyles={{
                        backgroundColor: '#EEB900',
                        borderRadius: '8px', textAlign: 'center',
                        overflow: "visible",
                        marginLeft: "-24px",
                        width: "414px", height: "69px", color: "white",
                        padding: "0 100px 0 100px"
                    }}
                    style={{ left: 0, right: 0, bottom: 0 }}
                    icon="편지쓰기"
                    onClick={ToWriteLetterPage}
                ></Fab>
                </VisibilityRow>
            </StyledLink>
            <FooterContainer>
            <Footer />
            </FooterContainer>
       
        </MainScreenContainer>
    );

}
//          <div style={{position:"absloute", top:"5055px",left:"-48px",paddingRight:"48px",overflow:"visible",width: "414px",
//height: "363px"

      
const Title = styled(TitleText)`
top:870px;
padding-left:100px;
font-size:20px;
`
const YellowDivider=styled.div`
background: #C49901;
height:3px;
width:71px;
position:absolute;
top:620px;
           
`

const FooterContainer=styled.div`
position:absolute;
top:6000px;
left:0px;
padding:0 0 90px 0;
overflow:visible;
`


const DesignInfoImg=styled.div`
background-image:url(${designInfo});
overflow:visible;
position:absolute;

height: 677px;
width: 414px;
top: 4141px;
left:0px;
border-radius: 0px;
border-style:none;
`
const SetInfoImg=styled.div`
background-image:url(${setInfo});
position:absolute;
height: 953px;
width: 366px;

top: 4986px;


border-style:none;
`

const ProcessImg=styled.div`
background-image:url(${props=>props.img});
position:absolute;
top:${props=>props.top};
height: 230px;
width: 366px;

border-style:none;
`
const RefText=styled.div`
position: absolute;
width: 174px;
height: 21px;
left: 120px;
top: 926px;

font-family: RIDIBatang;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 160%;
/* identical to box height, or 21px */
color: #000000;
opacity: 0.3

`



const VisibilityRow=styled.div`
display: ${props => props.visibility? 'block': 'none'}
`
const Div1=styled.div`

height: 113.000244140625px;
width: 360px;
margin-top: 657px;
white-space:pre;

`

const MainScreenContainer = styled.div``;

const LogoImage = styled.div`
width:360px;
height:332px;
background: url(${m1});
position:absolute;
top:150px;
`;


const BigDivider = styled.div`
    border-bottom:5px solid grey;
    position:absolute;
    top:${props=>props.top};
    overflow:visible;
`
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

