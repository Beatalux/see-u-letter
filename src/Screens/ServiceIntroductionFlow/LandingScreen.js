import React ,{ useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Drawer from "../../components/forMainScreen/SwipeableTemporaryDrawer"
import Footer from   "../../components/forMainScreen/Footer"
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import Carousel from '../../components/Carousel/LetterPaperCarousel'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import {BodyText} from '../../commons/text'

import m1 from "../../images/main1.png";
import landing from '../../images/landing.png';
import packageInfo1 from '../../images/packageInfo1.png';
import packageInfo2 from '../../images/packageInfo2.png';

function getModalStyle() {
    return {
        top: 470,
        left: 120,
        border:'none',

    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'relative',
        width: 180,
        height:50,
        backgroundColor:'white',
        border: 'none',
    
    },
}));

function LandingScreen() {
            
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [visible,setVisible]=useState(true);
    
    const [selectedPaper,setSelectedPaper]=useState(0);

    const ToWriteLetterPage = (e) => {
        console.log("편지쓰기 clicked");
        setVisible(!visible);

    }

    
    let test=""
    const ButtonVisibility=(bool)=>{
        setVisible(!visible);
        //true->disable
        if(bool.right===false){
            test='hidden';
      
        }else{
            test='visible';
        }
    }

    const handleLetterPaper=(v)=>{
        console.log("this is v",v);
         setSelectedPaper(v);
     
     }
     const modal=(v)=>{
         console.log("modal",v)
         handleOpen();
     }
     


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (

        <div style={modalStyle} className={classes.paper}>
        <BodyText  left="40px">복사 되었습니다</BodyText>
    </div>
    )
  
    return (
        <Wrapper>
            <Drawer change={ButtonVisibility} snackbar={modal}/>
            <Padding height="100px"> </Padding>
            <ImageContainer img={landing} />
            <BigDivider/>
            <Padding height="40px"/>
         
           <LetterDesignText>{'<'}씨유레터{'>'}의 편지지 디자인</LetterDesignText>
       
            <Carousel test={handleLetterPaper}/>         
             <Padding height="24px"/>
   
            <BigDivider/>
            <Padding height="50px"/>
       
            <ImageContainer img={packageInfo1} height="750px"/>
            
            <ImageContainer img={packageInfo2} height="707px"/>

            <BigDivider/>
            <StyledLink to="/senderInfo">
                <VisibilityRow visibility={visible}>

                <Fab
                    mainButtonStyles={{
                        backgroundColor: '#EEB900',
                        borderRadius: '8px', textAlign: 'center',
                        overflow: "visible",
                        left:"-24px",
                        margin:"0 0 0 0",
                        width: "414px", height: "69px", color: "white",
                        padding: "0 100px 0 100px"
                    }}
                    style={{ left: 0, bottom: 0 }}
                    icon="편지쓰기"
                    onClick={ToWriteLetterPage}
                ></Fab>
                </VisibilityRow>
            </StyledLink>

            <FooterContainer>
            <Footer />
            </FooterContainer>
            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{

                    
                }}
                
            >
                {body}
            </Modal>
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
margin-left:85px;
margin-bottom:30px;


`

const ImageContainer=styled.div`
background-image:url(${props=>props.img});
background-size:contain;
height: ${props=>props.height||"3844.9990234375px"};
width: 414px;
overflow:visible;
margin:0 0 0 0;

background-repeat:no-repeat;
border-style:none;
`

const FooterContainer=styled.div`


left:0px;
padding:0 0 0px 0;
margin:0 0 0px 0;
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
