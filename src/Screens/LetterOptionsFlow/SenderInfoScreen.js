import React ,{useState}from 'react'
import Header from '../../commons/Header';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { BodyText, SubtitleText, WarningText, YellowButton, TitleText } from '../../commons/text'
import { Link } from 'react-router-dom';


function SenderInfoScreen() {


    let history = useHistory();


    const [senderName,setSenderName]=useState("");
    const [senderPhone,setSenderPhone] =useState("");
    const [senderEmail, setSenderEmail]=useState("");
    const [confirmPhoneForm,setComfirmPhoneForm]=useState(true);
    const [confirmEmailForm,setComfirmEmailForm]=useState(true);

    const handleSenderName=(e)=>{
        setSenderName(e.target.value);
    }
    const handleSenderPhone=(e)=>{
        let regexp=/^[0-9]*$/;

        if(senderPhone.includes('-')||!regexp.test(senderPhone)){
            console.log('전화번호 입력 형식을 맞춰주세요');
            setComfirmPhoneForm(false);
        }else{
            setComfirmPhoneForm(true);
        }
        setSenderPhone(e.target.value);
    }
    const handleSenderEmail=(e)=>{
        setSenderEmail(e.target.value);
        if(!(senderEmail.includes('@'))){
            console.log('이메일 형식을 맞춰주세요');
            setComfirmEmailForm(false);
        }else{
            setComfirmEmailForm(true);
        }
        
    }

    const handleError=(e)=>{
        if(senderName===""||senderPhone===""||senderEmail===""){
            alert("모든 항목을 채워주세요");
            return false;
        }
        return true;
        console.log("t1")

    }
    const handleSenderInfoSubmit=(e)=>{
        e.preventDefault();
        if(handleError(e)===true){
     history.push(`receiverOption/:${dummydata}`);}
     else{
         history.push('/senderInfo')
     }
        //post로 정보 보내고 쿠키 받아오기
      
    }
    const dummydata="abc123";
    return (
        <div>
            <Header pageTitle="배송정보" />
            <TitleText top="160px" left="95px">편지를 보내는 사람의<br /> 정보를 기입해주세요</TitleText>
            <WarningText top="256px" color="rgba(241,199,51,0.5)"  left="35px">
                *아래 정보는 차후 배송확인과 우편배송 외에 사용되지 않습니다.
            </WarningText>
            <SenderInfoContainer>
                <SenderInfoRow top="345px">
                    <BodyText >보내는 사람 본명</BodyText>
                    <UserInput  name="name"type="text" placeholder="서유빈" 
                    value={senderName}
                    onChange={handleSenderName}
                    ></UserInput>
                </SenderInfoRow>
                <SenderInfoRow top="403px">
                    <BodyText >연락처</BodyText>
                    <UserInput name="phone" type="text" placeholder="01012345678" 
                        value={senderPhone}
                        onChange={handleSenderPhone}
                    ></UserInput>
                
                </SenderInfoRow>
                {!confirmPhoneForm&&<AlertDiv top="530px">
                        전화번호 입력 형식을 맞춰주세요
                    </AlertDiv>}
                <SenderInfoRow top="462px">
                    <BodyText >이메일</BodyText>
                    <UserInput name="email" type="email" placeholder="seeyouletter@gmail.com" 
                        value={senderEmail}
                        onChange={handleSenderEmail}
                    ></UserInput>
                </SenderInfoRow>
                {!confirmEmailForm&&<AlertDiv top="550px">
                        이메일 입력 형식을 맞춰주세요
                    </AlertDiv>}
                <StyledLink to={`receiverOption/:${dummydata}`}>
                <YellowButton bottom="44px" onClick={handleSenderInfoSubmit} on>완료</YellowButton>
                </StyledLink>
            
            </SenderInfoContainer>
        </div>
    )
}

export default SenderInfoScreen

const AlertDiv=styled.p`
font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;

position:absolute;
top:${props=>props.top};
margin-left:170px;
color: red;

`
const SenderInfoRow=styled.div`
display:flex;

position:absolute;
height:49px;
width:366px;
top:${props=>props.top};
`
const UserInput=styled.input`
margin-top:8px;
margin-left:132px;
width:233px;
height:48.04px;
`
const SenderInfoContainer=styled.div`

`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
