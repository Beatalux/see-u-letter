import React,{useState} from 'react'
import styled from 'styled-components'
import {BodyText,SubtitleText,YellowButton,TitleText} from '../../commons/text'
import Header from '../../commons/Header';
import bar from '../../images/bar1.png';
import tome from '../../images/letterSelect/tome.png';
import toothers from '../../images/letterSelect/toothers.png';
import dimtome from '../../images/letterSelect/dimtome.png';
import dimtoothers from '../../images/letterSelect/dimtoothers.png';
import { Link } from 'react-router-dom';

const ImagesList=[[tome,dimtome],[toothers,dimtoothers]]
const ReceiverOptionsScreen = () => {
    const UserID=match.params.UserID
    const receiver="";
    const [isMeSelected,setIsMeSelected]=useState(true);

    const handleClick=(bool)=>{
        setIsMeSelected(bool);
        if(isMeSelected){
            receiver="myself"
        }else{
            receiver="others"
        }
    }

    return (
        <div>
            <Header/>
           <BarImage></BarImage>
           <TitleText top="141px" size="18px" left="24px">이 편지는 누구에게 쓰나요?</TitleText>         
       

        {isMeSelected?
        <React.Fragment>
           <ImageBox top="180px"img={tome} onClick={()=>handleClick(true)}></ImageBox>
           <ImageBox top="450px"img={dimtoothers} onClick={()=>handleClick(false)}></ImageBox>
      </React.Fragment>
       :
       <React.Fragment>
           <ImageBox top="180px"img={dimtome} onClick={()=>handleClick(true)}></ImageBox>
           <ImageBox top="450px"img={toothers} onClick={()=>handleClick(false)}></ImageBox>
     </React.Fragment>
       
       }
       <StyledLink to={`month/${UserID}/${receiver}`}> 
          <YellowButton top="785px" left='22px'>선택</YellowButton>
          </StyledLink>
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
left: 28px;
top: ${props=>props.top};
border-radius: 0px;


`


const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;