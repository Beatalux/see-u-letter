import React, { useState } from 'react'
import Header from '../../commons/Header';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { BodyText, SubtitleText, GreyButton, WarningText } from '../../commons/text'
import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { useCookies } from 'react-cookie';

import PersonalInfoAgreement from './component/PersonalInfoAgreement'
import {SenderInfoContainer, ReceiverInfoContainer} from './component/ReceiverSender'
import PostMethodOption from './component/PostMethodOption'
//나중에 뺴내기






//최종

function DeliveryInfoScreen() {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);



    const handleSenderInfoSubmit = (e) => {
        e.preventDefault();/*
    if(handleError(e)===true){
                    //history.push(`receiverOption/:${dummydata}`);
                    ///postSenderEmail(senderEmail,setCookie);
                    //console.log("ck?",cookies.token);
                }
 else{
                    //history.push('/senderInfo')
                }
    //post로 정보 보내고 쿠키 받아오기
    */

    }
    return (
        <div>
            <Header pageTitle="배송정보" />
            <SubtitleText top="124px">배송 정보 입력</SubtitleText>
            <SenderInfoContainer />
            <Divider/>
            <ReceiverInfoContainer/>

            <BigDivider top="490px"/>
          
            <BigDivider top="815px"/>
            <PostMethodOption/>
            <PersonalInfoAgreement/>
            <BigDivider top="1015px"/>
            <StyledLink to={`payInfo`}>
                <GreyButton top="1500px" onClick={handleSenderInfoSubmit}>완료</GreyButton>
            </StyledLink>

        </div>

    );
}

export default DeliveryInfoScreen

/*
   <TextField
                    required
                    id="receiverName"
                    error={!confirmPhoneForm}
                    onChange={handleReceiverPhone}
                    placeholder="01012345678"
                    variant="outlined"
                />

*/

const BigDivider = styled.div`
    background: grey;
    height:3px;
    width:425px;
    position:absolute;
    left:0px;
    top:${props=>props.top};
    overflow:visible;
`
const AlertDiv = styled.p`
font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;

position:absolute;
top:${props => props.top};
margin-left:170px;
color: red;
`



const UserInput = styled.input`
margin-top:8px;

width:220px;
height:45px;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
                    text - decoration: none;
    }
`;