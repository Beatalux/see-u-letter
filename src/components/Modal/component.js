import React,{useState} from "react";
import { ModalContext } from "./modalContext";
import { BodyText, SubtitleText, TitleText } from '../../commons/text'
import styled from 'styled-components';
import { Link,useHistory } from 'react-router-dom';
import {useTexts} from './context'
import {ArrowBack} from '@styled-icons/boxicons-regular/ArrowBack'

//완료 버튼이 되야 함
const Component2 = () => {
    let { handleModal } = React.useContext(ModalContext);

    React.useEffect(() => {
        handleModal(<AddWritingPageComponent/>);

    }, []);

    return (
        <>


        </>
    );
};
export function FinshingLetterButton(){

    let { handleModal } = React.useContext(ModalContext);
   
    return(
    <Button onClick={() => handleModal(<CompleteWritingPageComponent/>)}
            >
               완료
      </Button>
    );

}

const Button=styled.button`

/*완료*/
font-family: SpoqaHanSans;
font-style: normal;
font-weight:bold;
font-size: "18px";
line-height: 150%; 
margin-left:285px;
background-color:transparent;

color: #7C5B42;
border:none;
`

export function LeavingLetterButton(){

    let { handleModal } = React.useContext(ModalContext);
   
    return(
    <ArrowButton  onClick={() => handleModal(<LeaveWritingPageComponent/>)}>
            <ArrowBackIcon/>
      </ArrowButton>
    );
}

const ArrowButton=styled.button`
background:transparent;

background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
outline:none;
width:40px;
height:25px;
margin:0 0 0 0;
`


const ArrowBackIcon=styled(ArrowBack)`
    width:30px;
    height:23px;
    margin-left:-12px;
`

function LeaveWritingPageComponent() {
    const history = useHistory();
   
        let { handleModal } = React.useContext(ModalContext);
        const handleGreyAction=(e)=>{
            history.push('/topicIntro');
        }
        const handleYellowAction=(e)=>{
            history.push('/writing');
        }

    return (
        <>
            <TitleText top="35px" size="20px" left="30px">편지지 페이지를 나가시면<br/> 내용이 삭제됩니다</TitleText>
            <BodyText top="105px" left="30px">페이지를 나가시기 전 <br/>미리 내용을 복사해두세요.</BodyText>
            <GreyButton onClick={()=>{handleModal();handleGreyAction();}}>나가기</GreyButton>
            <YellowButton onClick={()=>{handleModal();handleYellowAction();}}>페이지로 돌아가기</YellowButton>
        </>
    );

}

function CompleteWritingPageComponent() {
    const history = useHistory();
    const {fullLetterContent,isClick,isReached}=useTexts();

        let { handleModal } = React.useContext(ModalContext);
        const handleGreyAction=(e)=>{
            history.push('/writing');
          
        }
        const handleYellowAction=(e)=>{
            
        console.log("called");
        fullLetterContent(true);
      
         
          
      
        }

    return (
        <>
            <TitleText top="35px" size="20px" left="30px">편지 쓰기를 완료하시겠습니까?</TitleText>
            <BodyText top="105px" left="30px">완료 버튼을 누르면 수정이 불가능합니다.</BodyText>
            <GreyButton onClick={()=>{handleModal();handleGreyAction();}}>페이지로 돌아가기</GreyButton>
            <YellowButton onClick={()=>{handleModal();handleYellowAction();}}>완료</YellowButton>
        </>
    );

}


function AddWritingPageComponent() {
    const history = useHistory();
 
  
    const {togglePlay}=useTexts();

   
    let { handleModal } = React.useContext(ModalContext);
    const handleGreyAction=(e)=>{
        togglePlay(false);
        //setIsClicked(true);
        history.push('/writing')
      
    }
    //
    const handleYellowAction=(e)=>{

        togglePlay(true);
        //setIsClicked(true);
        //isAddingExtraWords(true);
        console.log('in handleYellow')
    
    }

return (
    <div >
        <TitleText top="35px" size="20px" left="30px">2장 초과<br/> 용지 알림</TitleText>
        <BodyText top="105px" left="30px">편지지 한장 당 1000원의 추가요금이<br/> 발생합니다. 추가하시겠습니까? </BodyText>
        <GreyButton onClick={()=>{handleModal();handleGreyAction();}}>괜찮아요!</GreyButton>
        <YellowButton onClick={()=>{handleModal();handleYellowAction();}}>추가할래요!</YellowButton>
</div>
);

}

export default Component2;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const GreyButton=styled.button`
width: 271px;
height: 60px;
left: 30px;
top: 200px;
position: absolute;
left: 30px;
top: 200px;

background: #EDEDED;
border-radius: 10px;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;

text-align: center;

color: #6B6B6B;

border:none;
opacity: 0.8;


`

const YellowButton=styled.button`


position: absolute;
width: 271px;
height: 60px;
left: 30px;
top: 271px;
background: #F1C733;
border-radius: 10px;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 27px;

border:none;
text-align: center;

color: #000000;
`