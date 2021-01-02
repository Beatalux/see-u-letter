import React ,{ useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Drawer from "../../components/forMainScreen/SwipeableTemporaryDrawer"
import Divider from '@material-ui/core/Divider';
import Footer from   "../../components/forMainScreen/Footer"
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { BodyText, SubtitleText,WarningText, Button, TitleText } from '../../commons/text'

import Carousel from '../../components/Carousel/LetterPaperCarousel'


import m1 from "../../images/main1.png";
import landing from '../../images/landing.png';
import packageInfo from '../../images/packageInfo.png';

function LandingScreen() {
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
        <Wrapper>
            <Drawer change={ButtonVisibility}/>
            <Padding height="100px"> </Padding>
            <ImageContainer img={landing} />
            <BigDivider/>
            <Padding height="40px"/>
         
           <LetterDesignText>{'<'}씨유레터{'>'}의 편지지 디자인</LetterDesignText>
       
            <Carousel/>         
             <Padding height="24px"/>
   
            <BigDivider/>
            <Padding height="50px"/>
       
            <ImageContainer img={packageInfo} height="953px"/>

            <BigDivider/>
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
        </Wrapper>
    )
}

export default LandingScreen

const Padding=styled.div`
height:${props=>props.height};
`
const Wrapper=styled.div`
width: 100vw;
position: relative;
left: 50%;
right: 50%;
margin-left: -50vw;
margin-right: -50vw;


`

const LetterDesignText=styled.p`

font-family: RIDIBatang;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
text-align: center;;


`

const LetterDesignContainer=styled.div`
background-size:contain;

`

const ImageContainer=styled.div`
background-image:url(${props=>props.img});
background-size:contain;
height: ${props=>props.height||"3844.9990234375px"};
width: 414px;
overflow:visible;

background-repeat:no-repeat;
border-style:none;
`

const FooterContainer=styled.div`
position:absolute;
top:5900px;
left:0px;
padding:0 0 90px 0;
overflow:visible;
`



const VisibilityRow=styled.div`
display: ${props => props.visibility? 'block': 'none'}
`
const BigDivider = styled.div`
    border: 1px solid #D8D8D8;
    width:414px;
    margin-left:0px;

    overflow:visible;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const LogoImage = styled.div`
width:360px;
height:332px;
background: url(${m1});
position:absolute;
top:150px;
`;
