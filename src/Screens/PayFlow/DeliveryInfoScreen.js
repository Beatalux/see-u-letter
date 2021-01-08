import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { BodyText, SubtitleText, GreyButton, WarningText } from '../../commons/text'
import { Link, useHistory, useLocation } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { useCookies } from 'react-cookie';

import PersonalInfoAgreement from './component/PersonalInfoAgreement'
import { SenderInfoContainer, ReceiverInfoContainer } from './component/ReceiverSender'
import PostMethodOption from './component/PostMethodOption'
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack'
import { postOrderInformation } from '../../axios/auth.js';


//최종

function DeliveryInfoScreen() {
    const [cookies, setCookie, removeCookie] = useCookies(['test']);
    const [confirmAgreementForm, setConfirmAgreementForm] = useState(true);

    const history = useHistory();
    const { search } = useLocation();
    const query = new URLSearchParams(search);

    console.log("letterID", cookies.test)
    const senderInfo = {}
    const receiverInfo={}
    const postInfo={}
    const agreementInfo={}
//const { senderName, senderPhone, fullAddress, DetailedAddress, zoneCode } = //senderInfo;


//console.log("above", senderInfo, senderInfo.senderName)
 
console.log("post check out of function",postInfo)

    const handleSenderInfoSubmit = (e) => {
        e.preventDefault();

        //왜 여기로 옮기니까 obj 값에 access 가능하지???
        //함수 밖에서는 access 안됐음. 개발자 도구에 값 들어간게 보이는데 access하려고 하면 undefined뜸
        console.log("in handleSenderInfoSubmit", senderInfo, senderInfo.senderName,senderInfo.senderDetailedAddress)
 
        console.log("in handleSenderInfoSubmit", receiverInfo, receiverInfo.receiverName,receiverInfo.receiverDetailedAddress)
 
        console.log("post check in function",postInfo,postInfo.value)
        console.log("in func agreementInfo",agreementInfo.bValue,agreementInfo.cValue)

    
        console.log("check this",cookies.test.id,senderInfo.senderName,typeof(senderInfo.senderPhone),senderInfo.senderFullAddress,senderInfo.senderDetailedAddress,parseInt(senderInfo.senderZoneCode),receiverInfo.receiverName,receiverInfo.receiverPhone,receiverInfo.receiverFullAddress,receiverInfo.receiverDetailedAddress,parseInt(receiverInfo.receiverZoneCode),postInfo.value)
        
        if(agreementInfo.bValue&&agreementInfo.cValue){
            history.push('/payInfo')
            postOrderInformation(cookies.test.id,senderInfo.senderName,senderInfo.senderPhone,senderInfo.senderFullAddress,senderInfo.senderDetailedAddress,parseInt(senderInfo.senderZoneCode),receiverInfo.receiverName,receiverInfo.receiverPhone,receiverInfo.receiverFullAddress,receiverInfo.receiverDetailedAddress,parseInt(receiverInfo.receiverZoneCode),postInfo.value)

        }else{
            setConfirmAgreementForm(false);
        }
        /*
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
     

        console.log("letterID", cookies.letterID)

    }
 
    //여기서는 undefined!!
  //  console.log("outㅎㅎㅎ", senderInfo, senderInfo.senderName)
    console.log("out func agreementInfo",agreementInfo)

    return (
        <Wrapper>
            <Header>
                <Button onClick={() => history.push('/photoIntro')}>
                    <ArrowBackIcon />
                </Button>

                <HeaderText left="175.86px">배송정보</HeaderText>
            </Header>
            <SubtitleText top="124px">배송 정보 입력</SubtitleText>
            <SenderInfoContainer senderInfo={senderInfo} />
            <ReceiverInfoContainer receiverInfo={receiverInfo}/>

            <BigDivider top="490px" />

            <BigDivider top="815px" />
            <PostMethodOption postInfo={postInfo}/>
            <PersonalInfoAgreement  agreementInfo={agreementInfo}  />
            {!confirmAgreementForm && <AlertDiv top="1035px" left="112px">
                동의가 필요합니다</AlertDiv>}
            <BigDivider top="1015px" />

            <GreyButton top="1550px" onClick={handleSenderInfoSubmit}>완료</GreyButton>


        </Wrapper>

    );
}

export default DeliveryInfoScreen

const AlertDiv = styled.p`
font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;

position:absolute;
top:${props => props.top};
margin-left:${props => props.left || "170px"};
color: red;
`
const Button = styled.button`
background:transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
outline:none;
width:40px;
height:24px;
margin:0 0 0 0;

`

const HeaderText = styled.p`
font-family: SpoqaHanSans;
font-style: normal;
font-weight:bold;
font-size: "18px";
line-height: 150%; 
margin-left:115px;

color: #000000;
`


const Header = styled.div`
display:flex;
align-items:center;
position:absolute;
top:60px;
height:25px;
`
const ArrowBackIcon = styled(ArrowBack)`
    width:30px;
    height:23px;
    margin-left:-5px;
`
const Wrapper = styled.div`
width:390px;


`
const BigDivider = styled.div`
 background: #EDEDED;
    height:3px;
    width:380px;
    position:absolute;
  
    top:${props => props.top};
    overflow:visible;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
                    text - decoration: none;
    }
`;