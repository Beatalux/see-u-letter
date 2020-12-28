import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import bc from './let.png'
import bc2 from './sample.png'

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
      bc,bc2
  ]
  return (
    <Wrapper background={PaperLetterList[letterPaper]}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        <LetterPaperButton onClick={()=>handleLetterPaper(0)} img={i}>One</LetterPaperButton>
        <LetterPaperButton  onClick={()=>handleLetterPaper(1)} img={bc2}>Two</LetterPaperButton>
        <LetterPaperButton>Three</LetterPaperButton>
      </ButtonGroup>
    </Wrapper>
  );
}


const Wrapper=styled.div.attrs(props=>({
    background:props.background||bc,

} ))`
background:url(${props=>props.background});

width:370px;
height:466px;

`
const LetterPaperButton=styled(Button)`
background-image:url(${props=>props.img});

width:40px;
height:40px;

`



