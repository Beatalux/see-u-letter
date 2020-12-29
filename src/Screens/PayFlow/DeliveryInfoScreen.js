import React, { useState } from 'react'
import Header from '../../commons/Header';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { BodyText, SubtitleText, GreyButton, WarningText } from '../../commons/text'
import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import { useCookies } from 'react-cookie';




//나중에 뺴내기
const RadioButton = withStyles({
    root: {

        color: '#D9D9D9',
        '&$checked': {
            color: '#7C5B42',
        },

    },
    checked: {},
})((props) => <Radio color="default" {...props} />);


const PostMethodOption = () => {
    const [selectedValue, setSelectedValue] = useState("a");

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
        //switch?


    }
    return (
        <div style={{ position: "relative" }}>
            <PostMethodRow >일반우편
            <ExtraPriceText></ExtraPriceText>
                <RadioButton
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-button"
                    inputProps={{ 'aria-label': 'A' }}
                />
            </PostMethodRow>


            <PostMethodRow >등기우편
                <ExtraPriceText>+추가</ExtraPriceText>
                <RadioButton
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-button"
                    inputProps={{ 'aria-label': 'B' }}
                />
            </PostMethodRow >
            <WarningText fontColor="red" left="240px" top="164px">선택 후 변경이 불가능합니다.</WarningText>
        </div>


    )
}




const SenderInfoContainer = () => {
    const [senderName, setSenderName] = useState("");
    const [senderPhone, setSenderPhone] = useState("");
    const [confirmPhoneForm, setComfirmPhoneForm] = useState(true);
    const [confirmEmailForm, setComfirmEmailForm] = useState(true);

    const handleSenderName = (e) => {
        setSenderName(e.target.value);
    }

    const handleSenderPhone = (e) => {
        let regexp = /^[0-9]*$/;

        if (senderPhone.includes('-') || !regexp.test(senderPhone)) {
            console.log('전화번호 입력 형식을 맞춰주세요');
            setComfirmPhoneForm(false);
        } else {
            setComfirmPhoneForm(true);
        }
        setSenderPhone(e.target.value);
    }

    return (
        <div>
            <SenderInfoRow top="345px">
                <BodyText left="0px">보내는 사람 성함</BodyText>
                <UserInput name="name" type="text" placeholder="서유빈"
                    value={senderName}
                    onChange={handleSenderName}
                ></UserInput>
            </SenderInfoRow>

            <SenderInfoRow top="403px">
                <BodyText left="0px" >연락처</BodyText>
                <UserInput name="phone" type="text"
                    value={senderPhone}
                    onChange={handleSenderPhone}
                ></UserInput>

            </SenderInfoRow>
            <div style={{ position: "absolute", top: '124px' }}>
                <PostMethodOption />

            </div>
        </div>
    );
}


const ReceiverInfoContainer=()=>{
    const [receiverName, setReceiverName] = useState("");
    const [receiverPhone, setReceiverPhone] = useState("");
    const [confirmPhoneForm, setComfirmPhoneForm] = useState(true);
    const [confirmEmailForm, setComfirmEmailForm] = useState(true);

    const handleReceiverPhone = (e) => {
        let regexp = /^[0-9]*$/;

        if (receiverPhone.includes('-') || !regexp.test(receiverPhone)) {
            console.log('전화번호 입력 형식을 맞춰주세요');
            setComfirmPhoneForm(false);
        } else {
            setComfirmPhoneForm(true);
        }
        setReceiverPhone(e.target.value);
    }


    return(
        <div>
            <TextField
          required
          id="receiverName"
          error={!confirmPhoneForm}
      
          onChange={handleReceiverPhone}
         placeholder="01012345678"
          variant="outlined"
        />





        </div>



    )
}

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
            <ReceiverInfoContainer/>
            <StyledLink to={`paymentInfo`}>
                <GreyButton bottom="44px" onClick={handleSenderInfoSubmit}>완료</GreyButton>
            </StyledLink>

        </div>

    );
}

export default DeliveryInfoScreen


const PostMethodRow = styled.div`
display:grid;
grid-template-columns:90px 90px 210px;
width:366px;
align-items:center;
margin-bottom:31px;

font-family: SpoqaHanSans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;



`;

const SenderInfoRow = styled.div`
display:flex;

position:absolute;
height:49px;
width:366px;
top:${props => props.top};
`
const UserInput = styled.input`
margin-top:8px;
margin-left:132px;
width:233px;
height:48.04px;
`
const ExtraPriceText = styled.p`
height: 21px;
width: 92px;

border-radius: nullpx;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
/* identical to box height */


color: #7C5B42;



`
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;