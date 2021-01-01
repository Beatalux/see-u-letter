import React, { useState } from 'react'
import styled from 'styled-components'
import { BodyText, SubtitleText, YellowButton, TitleText } from '../../commons/text'
import Header from '../../commons/Header';
import bar from '../../images/bar1.png';

import dimJanuary from '../../images/letterSelect/dimJanuary.png';
import dimJune from '../../images/letterSelect/dimJune.png';
import january from '../../images/letterSelect/january.png';
import june from '../../images/letterSelect/june.png';
import march from '../../images/letterSelect/march.png';
import dimMarch from '../../images/letterSelect/dimMarch.png';
import { useParams,Link, useLocation } from 'react-router-dom';
import qs from 'qs';

const MonthList=[[march,dimMarch],[june,dimJune],[january,dimJanuary]];

const MonthOptionsScreen = ({ match }) => {
    const UserID = match.params.UserID;
  const location = useLocation();
   const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })

    const receiver=query.receiver;
    console.log('query ck',receiver)

  //  console.log(location, "UI");

    const [selectedMonth, setSelectedMonth] = useState('march');
    const [isMarch,setIsMarch]=useState(0);
    const [isJune,setIsJune]=useState(1);
    const [isJanuary,setIsJanuary]=useState(1);

    const handleClick = (value) => {
    
        switch(value){
            case 'march':setSelectedMonth('march');setIsMarch(0);setIsJune(1);setIsJanuary(1);break;
            case 'june':setSelectedMonth('june');setIsMarch(1);setIsJune(0);setIsJanuary(1);break;
            case 'jan':setSelectedMonth('january');setIsMarch(1);setIsJune(1);setIsJanuary(0);break;
        }
    
    }
    //It works ouside of handleclick function!
    console.log("result",selectedMonth)

    return (
        <div>
            <Header />
            <BarImage></BarImage>
            <TitleText top="141px" size="18px" left="24px">편지를 언제로 보내고 싶은가요?</TitleText>
            <Wrapper>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <ImageBox left="-35px" img={MonthList[0][isMarch]} onClick={() => handleClick('march')}></ImageBox>
                    <ImageBox img={MonthList[1][isJune]} onClick={() => handleClick('june')}></ImageBox>
                </div>
                <ImageBox top="40px" left="100px" img={MonthList[2][isJanuary]} onClick={() => handleClick('jan')}></ImageBox>

            </Wrapper>





            <StyledLink to={`letterPaper?receiver=${receiver}&month=${selectedMonth}`}>
                <YellowButton top="785px" left='22px'>선택</YellowButton>
            </StyledLink>
        </div>
    )
}

export default MonthOptionsScreen

const Wrapper = styled.div`

position: absolute;
width: 380px;
height: 540px;
left: 24px;
top: 300px;

`;

const ImageBox = styled.div`
background:url(${props => props.img});
background-repeat:no-repeat;
position:relative;
width: 180px;
height: 170px;
margin-left: ${props => props.left};
margin-top:${props => props.top};

left:28px;
border-radius: 0px;
`


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