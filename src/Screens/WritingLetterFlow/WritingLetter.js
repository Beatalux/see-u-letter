import React, { useState, useEffect, useContext, createContext } from 'react'
import { ExtraWordsContext } from '../../contexts/ExtraPagesContext'

import styled from 'styled-components'
import { BodyText, SubtitleText, WarningText, YellowButton, TitleText } from '../../commons/text'
import { Link } from 'react-router-dom';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { InputBase } from '@material-ui/core';

import InputAdornment from '@material-ui/core/InputAdornment';

import Modal from '../../components/Modal/app';
import { FinishedBtn } from '../../components/Modal/app';
import { useTexts } from '../../components/Modal/context'
import { ModalContext } from "../../components/Modal/modalContext";



const ExtraLetterPage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



export default function WritingLetter(value) {

   
    let MaxCount = 10;//1248
    const selectedq = "Blah";
    const [countedWords, setCountedWords] = useState(0);
    //ismodal 어쩌구,,,

    const handleWordCount = (e) => {
        setCountedWords(e.target.value);
    }




    const { isClick, isReached, togglePlay } = useTexts();
    const [count, setCount] = useState(10);

  //  const [temp,setTemp]=useState(isReached);
    console.log('aaa', isClick, isReached)

    
    //setFlag((countedWords.length == count));
   


    useEffect(() => {
        console.log('iskkkkk', isClick)

        
            console.log('sibal');
            return () => {
                console.log('is', isClick);
                setCount(prevCount => prevCount + 5);
            };
        
   
    }, [isReached]);

const isAddingExtraWords = (v) => {



}


//    // <button onClick={()=>isAddingExtraWords(false)}>dfdf</button>

const l = ['a', 'b', 'c',]

const text = l[0] + "\n" + l[1] + "\n";
return (
    <div style={{ marginLeft: "12px" }}>

        <Header>
            <ArrowBackIcon />
            <FinishedBtn />
        </Header>

        <CountingText>{countedWords.length == 0 ? '0' : countedWords.length}/{count}</CountingText>
        <TopicContainer>
            <WarningText fontColor=" #979797" >내가 담은 주제</WarningText>
            <TopicTextField value={text} rows="2" readOnly  ></TopicTextField>

        </TopicContainer>


        <WritingTextField onChange={handleWordCount}
            placeholder="마음을 담아보세요"
            autofocus={false}
            font={"RIDIBatang"} maxLength={count}></WritingTextField>
        {console.log(count, "fuck", countedWords.length)}


        {countedWords.length == count ? <Modal /> : <div />}



    </div>


)
}




const WritingTextField = styled.textarea`
border-style:none;
width: 355px;
height:400px;
padding:10px 0 10px 0;
position: relative;
top: 225px;
resize:none;

font-family: ${prop => prop.font || "RIDIBatang"};
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 14px;
&:hover{
    border-style:none;
}
opacity: 0.8;


`
const TopicTextField = styled.textarea`
border-style:none;
color: #7C5B42;
background-color:#F0EFEB;
;
width:320px;
margin: 0 0 0 0;
resize:none;
position:relative;
top:37px;
left:24px;
font-family: RIDIBatang;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 14px;
&:hover{
    border-style:none;
}
opacity: 0.8;
`;


const TopicContainer = styled.div`
position: absolute;
height: 85px;
width: 366px;

left: 36px;
top: 142px;
overflow:visible;

font-family: RIDIBatang;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 30px;
letter-spacing: 0em;
text-align: left;

background: #F0EFEB;
border-radius: 4px;

`
const WhiteBorderTextField = styled(TextField)`
font-family: "RIDIBatang";
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }

`;
const CountingText = styled.div`
font-family: SpoqaHanSans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: right;
position:absolute;
height: 24px;
width: 64px;
left: 340px;
top: 94px;
border-radius: nullpx;
color: #7C5B42;



`
const Header = styled.div`

display:flex;
align-items:center;
position:absolute;
top:60px;
height:25px;
`
const HeaderButton = styled(FinishedBtn)`
/*완료*/
font-family: SpoqaHanSans;
font-style: normal;
font-weight:bold;
font-size: "18px";
line-height: 150%; 
margin-left:305px;
background-color:transparent;

left=349px;
color: #7C5B42;
border:none;
`


const ArrowBackIcon = styled(ArrowBack)`
    width:30px;
    height:23px;
left: 24px;


`