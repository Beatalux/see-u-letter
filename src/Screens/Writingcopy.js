import React from 'react'
import styled from 'styled-components';
import { BodyText, SubtitleText, Button, TitleText } from '../commons/text'
import { Link } from 'react-router-dom';

import bc from '../images/letter.png';

export default function WritingCopy() {
return(
  <Wrapper>
   <Letter>
   <WritingContainer>

   </WritingContainer>
   </Letter>
  </Wrapper>
)
}


const Wrapper=styled.div`

`

const Letter=styled.div`
background:url(${bc});
width:366px;
height:565px;
`

const WritingContainer=styled.input`
border:1px solid black;
background-color:transparent;
width:366px;
height:565px;
`;