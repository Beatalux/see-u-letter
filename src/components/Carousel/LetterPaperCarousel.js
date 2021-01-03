import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import p1 from '../../images/paperTextSample/paper1.png';
import p2 from '../../images/paperTextSample/paper2.png';
import p3 from '../../images/paperTextSample/paper3.png';
import p4 from '../../images/paperTextSample/paper4.png';
import p5 from '../../images/paperTextSample/paper5.png';
import p6 from '../../images/paperTextSample/paper6.png';
import p7 from '../../images/paperTextSample/paper1.png';

import s1 from '../../images/samplePaper/p1.png'
import s2 from '../../images/samplePaper/p2.png'
import s3 from '../../images/samplePaper/p3.png'
import s4 from '../../images/samplePaper/p4.png'
import s5 from '../../images/samplePaper/p5.png'
import s6 from '../../images/samplePaper/p6.png'
import s7 from '../../images/samplePaper/p7.png'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    root:{
      topMargin:"27px",
    }

  },
}));



export default function GroupOrientation({ test }) {
  const classes = useStyles();
  const [letterPaper, setLetterPaper] = useState(0);

  const handleLetterPaper = (index) => {
    setLetterPaper(index);
    test(index);
  }




  const PaperLetterSampleList = [
    s1,s2,s3,s4,s5,s6,s7,
  ]

  const PaperButtonList = [
    p1, p2, p3, p4, p5, p6, p7
  ]



  //send to parent
  return (
    <Wrapper background={PaperLetterSampleList[letterPaper]}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
        className={classes.margin}
      >
        {PaperButtonList.map((pbtn, index) => {
          return (
            <LetterPaperButton onClick={() => handleLetterPaper(index)} img={pbtn} index={index} clicked={letterPaper}/>
          );
        })
        }
      </ButtonGroup>
    </Wrapper>
  );
}


const Wrapper = styled.div.attrs(props => ({
  background: props.background || s1,

}))`
background:url(${props => props.background});

width: 414px;
height: 530px;


`
const LetterPaperButton = styled(Button)`
background:url(${props => props.img});
background-size: contain;
margin:30px 0 0 30px;
width:40px;
height:40px;
border:${props=>props.index==0&&props.clicked==0? "solid 2px #31FF10":"solid 2px white"};
border-radius:0px;
&:hover {
  border: solid 2px #31FF10;
}

`



