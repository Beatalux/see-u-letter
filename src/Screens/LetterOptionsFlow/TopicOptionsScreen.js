import React, { useState } from 'react'
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import { QuestionsToMySelfList,QuestionsToOthersList } from '../../commons/LetterTopics';
import styled from 'styled-components'
import { Link,useLocation,useHistory } from 'react-router-dom';
import { BodyText, YellowButton, SubtitleText } from '../../commons/text'
import bar from '../../images/fullBar.png';
import { useCookies } from 'react-cookie';
import Header from '../../commons/Header';
import {postLetterOption} from '../../axios/auth'
import {useTexts} from '../../components/Modal/context'

 
//use npm react-custom-checkbox
//MIT https://www.npmjs.com/package/react-custom-checkbox



const TopicOptionsScreen = () => {
    //letter_id 를 받음

    const [cookies, setCookie,removeCookie] = useCookies(['token']);
  
    let QuestionsList=[];
    const [background, setBackground] = useState(1);

    const {handleQuestions}=useTexts();

    const history=useHistory();
    const { search } = useLocation();
    const query = new URLSearchParams(search);

    const receiver = query.get('receiver');
    const month = query.get('month');
    const paper = parseInt(query.get('paper'));
    const font=query.get('font');
    console.log('in topicoption', 'ck','font' ,font,receiver, 'month', month, 'paper', paper);
  
    if(receiver=='myself'){
        QuestionsList=QuestionsToMySelfList;
    }else{
        QuestionsList=QuestionsToOthersList;
    }


    let TemporarySelectedQuestions = Array(10).fill(0);
    let SelectedQuestions = []

    const handleSelectedTopic = (value, index) => {
        console.log("This is", value, index);
        TemporarySelectedQuestions[index] += 1;
    }
    const test = () => {
        TemporarySelectedQuestions.map((item, index) => {
            if (item % 2 !== 0) {
                SelectedQuestions.push(index);
            }
        })

    console.log("btn", SelectedQuestions);
    handleQuestions(SelectedQuestions);
    let temp=cookies.token.id
       console.log("ARR",temp)
      // console.log("cookies.token in topic",cookies.test.id,cookies.token.id);
     
       postLetterOption(temp,paper+1,font, month,setCookie);

    }




    return (
        <div>
            <Header pageTitle="주제선택" />
            <BarImage></BarImage>
            <SubtitleText top="135px" size="18px" left="24px">편지에 쓸 주제를 담아보아요.</SubtitleText>
            <BodyText top="165px" left="24px" size="14px">주제 없이 자유롭게 작성하고 싶다면, '다음'을 눌러주세요.</BodyText>
            <Wrapper>
                {QuestionsList.map((question, index) => {
                    return (
                        <Checkbox
                            icon={
                                <div
                                    style={{
                                        display: "flex",
                                        flex: 1,
                                        backgroundColor: "#EEB900",
                                        alignSelf: "stretch",

                                    }}
                                >
                                    <Icon.FiCheck color="white" size={17} />
                                </div
                                >}
                            name="my-input"
                            checked={false}
                            onChange={(value) => handleSelectedTopic(value, index)}
                            borderColor="#D7C629"
                            containerStyle={{ width: '385px' }}
                            style={{ cursor: "pointer", marginBottom: 16 }}
                            labelStyle={{ marginLeft: 11, marginBottom: 16, marginRight:2,fontFamily: "Spoqa Han Sans", fontSize: "16px", userSelect: "none" }}
                            label={question}
                            size={15}
                        />

                    )
                })}
            </Wrapper>
            <StyledLink to={`writing?receiver=${receiver}&paper=${paper}&font=${font}`}>
                <YellowButton onClick={test} top="750px" >다음</YellowButton>
            </StyledLink>
        </div>
    )
}


export default TopicOptionsScreen



const Wrapper = styled.div`
width:300px;
height:300px;
position:absolute;
top:230px;

font-family: "Spoqa Han Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;

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