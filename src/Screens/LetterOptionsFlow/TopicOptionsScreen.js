import React, { useState } from 'react'
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import { QuestionsToMySelfList as QuestionsList } from '../../commons/topicsToMe';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { BodyText, SubtitleText, YellowButton, TitleText } from '../../commons/text'
import bar from '../../images/bar1.png';

import Header from '../../commons/Header';


//use npm react-custom-checkbox
//MIT https://www.npmjs.com/package/react-custom-checkbox

const TopicOptionsScreen = () => {

    let TemporarySelectedQuestions = [0, 0, 0]
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
        //선택된 질문 index 반환

    }


    //label  을  map 으로

    return (

        <div>
            <Header />
            <BarImage></BarImage>
            <TitleText top="135px" size="18px" left="24px">편지에 쓸 주제를 담아보아요.</TitleText>
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
                        containerStyle={{width:'350px'}}
                        style={{ cursor: "pointer", marginBottom: 16 }}
                        labelStyle={{ marginLeft: 11, marginBottom: 16, fontFamily:"SpoqaHanSans",fontSize:"16px",userSelect: "none" }}
                        label={question}
                        size={15}
                    />

                )
            })}
            </Wrapper>
            <YellowButton onClick={test} bottom="38px">다음</YellowButton>

        </div>
    )
}

export default TopicOptionsScreen

const Wrapper=styled.div`
width:300px;
height:300px;
position:absolute;
top:300px;
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