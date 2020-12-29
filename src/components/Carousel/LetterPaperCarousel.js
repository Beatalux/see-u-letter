import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { BodyText, SubtitleText, YellowButton } from '../../commons/text'

import bc from './let.png'
import p1 from '../../images/p1.png'

import i from './butsample.png'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },     
    
    },
  }));
  


export default function GroupOrientation() {
const classes = useStyles();
const [letterPaper,setLetterPaper]=useState(0);

  const handleLetterPaper=(index)=>{
    setLetterPaper(index);  

  }

  const PaperLetterList=[
      bc,p1
  ]
  return (
    <Wrapper background={PaperLetterList[letterPaper]}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        <LetterPaperButton onClick={()=>handleLetterPaper(0)} img={i}>One</LetterPaperButton>
        <LetterPaperButton  onClick={()=>handleLetterPaper(1)} img={i}>Two</LetterPaperButton>
      
      </ButtonGroup>
      <YellowButton top="565px" left='22px'>선택</YellowButton>
    </Wrapper>
  );
}


const Wrapper=styled.div.attrs(props=>({
    background:props.background||bc,

} ))`
background:url(${props=>props.background});
position: absolute;
width: 414px;
height: 530px;
left: 0px;
top: 220px;


`
const LetterPaperButton=styled(Button)`
background:url(${props=>props.img});
margin:30px 0 0 30px;
width:40px;
height:40px;
border:solid 2px white;
border-radius:0px;
&:hover {
  border: solid 2px #31FF10;
}

`



