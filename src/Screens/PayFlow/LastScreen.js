import React from 'react'
import { BodyText, SubtitleText, YellowButton, GreyButton, TitleText } from '../../commons/text'

import Header from '../../commons/Header';
import styled from 'styled-components'

import { Link ,useLocation} from 'react-router-dom';

import lastlogo from '../../images/lastlogo.png'
import lastimage from '../../images/lastimage.png'

function LastScreen() {
    return (
        <div>            <Header />
            
            <ImageBox img={lastlogo} top="196px" left="120px" height="73px">
            </ImageBox>

            <ImageBox img={lastimage} top="309px" height="283px">
            </ImageBox>
            <StyledLink to={`receiver`}>
                <GreyButton top="716px">편지 한 장 더</GreyButton>
            </StyledLink>
            <StyledLink to={`main`}>
                <YellowButton top="785px">홈으로</YellowButton>
            </StyledLink>
          
            
        </div>
    )
}

export default LastScreen
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const ImageBox = styled.div`
background:url(${props => props.img});
position:absolute;
height: ${props => props.height};
width: 236px;
left:  ${props => props.left||"91px"};
top: ${props => props.top};
border-radius: 0px;
margin:0 0 0 0;
padding:0 0 0 0;
background-repeat:no-repeat;
`

