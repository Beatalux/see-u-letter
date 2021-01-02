import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BodyText, SubtitleText, YellowButton, TitleText } from '../../commons/text'
import Header from '../../commons/Header';
import bar from '../../images/bar1.png';
import tome from '../../images/letterSelect/tome.png';
import toothers from '../../images/letterSelect/toothers.png';
import dimtome from '../../images/letterSelect/dimtome.png';
import dimtoothers from '../../images/letterSelect/dimtoothers.png';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const ReceiverOptionsScreen = ({ match }) => {
   // const UserID = match.params.userID;


    const [isMeSelected, setIsMeSelected] = useState('myself');
    const [receiver, setReceiver] = useState('myself');

    const [cookies, setCookie,removeCookie] = useCookies(['token']);
   

    console.log("plz",cookies.token)

    /*console.log 이유 무조건 알아내기!!*/
    const handleClick = (v) => {
        console.log('v', v)
        setReceiver(v);
        let temp = (v === "myself") ? true : false;
        setIsMeSelected(temp)

  }

    const handlingAPI=()=>{
        //API보내기

        console.log('here', isMeSelected, receiver)
    }
    return (

        <div>
                    { console.log("plzplz",cookies.token)}//ok
            <Header />
            <BarImage></BarImage>
            <TitleText top="141px" size="18px" left="24px">이 편지는 누구에게 쓰나요?</TitleText>


            {isMeSelected ?
                <React.Fragment>
                    <ImageBox top="180px" img={tome} ></ImageBox>
                    <ImageBox top="450px" img={dimtoothers} onClick={() => handleClick('others')}></ImageBox>
                </React.Fragment>
                :
                <React.Fragment>
                    <ImageBox top="180px" img={dimtome} onClick={() => handleClick('myself')}></ImageBox>
                    <ImageBox top="450px" img={toothers}></ImageBox>
                </React.Fragment>

            }
            <StyledLink to={`/month?receiver=${receiver}`}>
                <YellowButton top="785px" left='22px' >선택</YellowButton>
            </StyledLink>
        </div>
    )
}

export default ReceiverOptionsScreen

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

const ImageBox = styled.div`
background:url(${props => props.img});
position:absolute;
height: 272px;
width: 366px;
left: 28px;
top: ${props => props.top};
border-radius: 0px;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;