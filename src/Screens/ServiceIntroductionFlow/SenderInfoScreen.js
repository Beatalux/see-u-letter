import React ,{useState}from 'react'
import Header from '../../commons/Header';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { BodyText, SubtitleText, WarningText, YellowButton, TitleText } from '../../commons/text'
import { Link,withRouter } from 'react-router-dom';
import postSenderEmail from '../../axios/auth.js';
import { useCookies } from 'react-cookie';
import illust from '../../images/senderInfoImg.png';


//배송정보

function SenderInfoScreen() {
    let history = useHistory();

    const [senderEmail, setSenderEmail]=useState("");
    const [confirmEmailForm,setComfirmEmailForm]=useState(true);
    const [cookies, setCookie,removeCookie] = useCookies(['token']);

    const handleSenderEmail=(e)=>{
        console.log("in senderInfo",senderEmail)
        setSenderEmail(e.target.value);
        if((!(senderEmail.includes('@')))&&senderEmail!==""){
            console.log('이메일 형식을 맞춰주세요');
            setComfirmEmailForm(false);
        }else{
            setComfirmEmailForm(true);
        }
        
    }
    console.log("in senderInfo outof func",senderEmail)

    const handleErrorStatus=(e)=>{
        if(senderEmail===""){
            alert("항목을 채워주세요");
            return false;
        }
        if(!confirmEmailForm){
            alert("이메일 형식을 맞춰주세요");
               return false; 
        }
        return true;
   

    }
    const handleSenderInfoSubmit=(e)=>{
        e.preventDefault();
        if(handleErrorStatus(e)===true){
    history.push(`/receiver`);//!필수     
    postSenderEmail(senderEmail,setCookie);

    }
     else{
         history.push('/senderInfo')
     }
        //post로 정보 보내고 쿠키 받아오기
      
      
    }
  
    const UserID="abc123";
    return (
        <div>
            <Header pageTitle="배송정보" />
            <ImageContainer/>

            <TitleText top="376px" left="95px">편지를 보내는 사람의</TitleText>
            <TitleText top="410px" left="92px">이메일을 기입해주세요</TitleText>
            <WarningText top="463px" color="rgba(241,199,51,0.5)"  left="55px">
                *아래 정보는 차후 배송확인과 우편배송 외에 사용되지 않습니다.
            </WarningText>
            <SenderInfoContainer>
            
                <SenderInfoRow top="462px">
                  
                    <UserInput name="email" type="email" placeholder="seeyouletter@gmail.com" 
                        value={senderEmail}
                        onChange={handleSenderEmail}
                    ></UserInput>
                </SenderInfoRow>
                {!confirmEmailForm&&<AlertDiv top="570px">
                        이메일 입력 형식을 맞춰주세요
                    </AlertDiv>}
                <StyledLink to={`/receiver`}>
                <YellowButton bottom="44px" onClick={handleSenderInfoSubmit} on>완료</YellowButton>
                </StyledLink>
            
            </SenderInfoContainer>
        </div>
    )
}

export default SenderInfoScreen

const ImageContainer=styled.div`
background:url(${illust});
position:absolute;
width: 199px;
height: 190px;
left: 107px;
top: 150px;
`
const AlertDiv=styled.p`
font-family: "Spoqa Han Sans";
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
margin-top:58px;
width:366px;
height:48.04px;
border-radius:10px;
`
const SenderInfoContainer=styled.div`

`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
