import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import { BodyText, SubtitleText, WarningText } from '../../commons/text'
import { Link, useLocation, useHistory } from 'react-router-dom';
import { QuestionsToMySelfList, QuestionsToOthersList } from '../../commons/LetterTopics';

import Modal from '../../components/Modal/app';
import { LeaveBtn } from '../../components/Modal/app';
import FinishBtn from './CompleteButtonModal'
import { useTexts } from '../../components/Modal/context'
import { useCookies } from 'react-cookie';
import { putLetterContent } from '../../axios/auth.js';


const mobile=`(min-width:415px)`;

export default function WritingLetter(value) {

    const [cookies, setCookie] = useCookies(['test']);

    const history = useHistory();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const font = query.get('font');
    const paper = query.get('paper');
    const receiver = query.get('receiver');

    let MaxCount = 10;//1248
    const [countedWords, setCountedWords] = useState(0);
    const [letterContent, setLetterContent] = useState("");
    const [count, setCount] = useState(10);//word limit
    const [pageNumber, setPageNumber] = useState(2);
    const { isClick, isReached, passingTopics } = useTexts();

    const letterID = cookies.test;
    console.log("in writing, for put", letterID,cookies.writing,cookies.test,cookies.token);
//undefined,undefined,letter/letter응답,letter/user응답

    let QuestionsList = [];

    if (receiver == 'myself') {
        QuestionsList = QuestionsToMySelfList;
    } else {
        QuestionsList = QuestionsToOthersList;
    }

    const handleWordCount = (e) => {
        setCountedWords(e.target.value);
        setLetterContent(e.target.value);

    }


    const handleSubmitLetter = (e) => {
        //setLetterContent(e.target.value);
        // Put api
        console.log("in handle submit", letterContent, pageNumber)
        console.log("letterID", letterID);

        putLetterContent(letterID.id, letterContent, pageNumber,setCookie);
        history.push(`/preview`);

    }

    useEffect(() => {
        return () => {
            setCount(prevCount => prevCount + 5);
            setPageNumber(prevCount => prevCount + 1);
        };


    }, [isReached]);


    console.log("letttercontent", letterContent);

    let TopicArray = []
    if (passingTopics !== undefined) {
        let i;

        for (i = 0; i < passingTopics.length; i++) {
            TopicArray[i] = QuestionsList[passingTopics[i]];
        }
    }

    let text = "";

    TopicArray.map((topic, index) => {
        text += topic + "\n";
    })


    return (
        <div style={{ marginLeft: "12px" }}>
            <Header>
                <LeaveBtn />
                <FinishBtn func={handleSubmitLetter} />
            </Header>

            <CountingText>{countedWords.length == 0 ? '0' : countedWords.length}/{count}</CountingText>
            <TopicContainer>
                <WarningText fontColor=" #979797" >내가 담은 주제</WarningText>
                <TopicTextField value={text} rows="2" readOnly  ></TopicTextField>
            </TopicContainer>


            <WritingTextField onChange={handleWordCount}
                placeholder="마음을 담아보세요"
                autofocus={false}
                font={font} maxLength={count} value={letterContent}></WritingTextField>
            {countedWords.length == count ? <Modal /> : <div />}
        </div>


    )
}




const WritingTextField = styled.textarea`
border-style:none;
width: 366px;
height:400px;
padding:0px 0 10px 0;
position: relative;
top: 225px;
resize:none;

left:-10px;
@media only screen and ${mobile}{
    left:20px;
  }
margin-top:20px;
font-family: ${prop => prop.font || "RIDIBatang"};
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 26px;
&:hover{
    border-style:none;
}

`
const TopicTextField = styled.textarea`
border-style:none;
color: #7C5B42;
background-color:#F0EFEB;
width:325px;
margin: 0 0 0 0;
resize:none;
position:relative;
top:37px;
left:24px;
font-family: RIDIBatang;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
&:hover{
    border-style:none;
}
opacity: 0.8;
`;

const TopicContainer = styled.div`
position: absolute;
height: 85px;
width: 380px;

left: 24px;
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
left: 330px;
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
@media only screen and ${mobile}{
    left:30px;
  }
`
const HeaderButton = styled(FinishBtn)`
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

