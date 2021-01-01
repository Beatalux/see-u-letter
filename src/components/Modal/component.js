import React,{useState} from "react";
import { ModalContext } from "./modalContext";
import { BodyText, SubtitleText, TitleText } from '../../commons/text'
import styled from 'styled-components';
import { Link,useHistory } from 'react-router-dom';
import {useTexts} from './context'

//완료 버튼이 되야 함
const Component2 = () => {

    let { handleModal } = React.useContext(ModalContext);


    React.useEffect(() => {
        handleModal(<AddingWritingPageComponent/>);

    }, []);

    return (
        <>


        </>
    );
};
export function FinshedLetterButton(){

    let { handleModal } = React.useContext(ModalContext);
   
    return(
    <Button
                className="mt-6 rounded  bg-purple-700 text-purple-100 px-5 h-12"
                onClick={() => handleModal(<LeavingWritingPageComponent/>)}
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
margin-left:305px;
background-color:transparent;

left=349px;
color: #7C5B42;
border:none;
`


function LeavingWritingPageComponent() {
    const history = useHistory();
   
        let { handleModal } = React.useContext(ModalContext);
        const handleGreyAction=(e)=>{
            alert('hi');
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



function AddingWritingPageComponent() {
    const history = useHistory();
    //const [isClicked,setIsClicked]=useState(false);
   // const [count, setCount] = useState(10);

  
    const {togglePlay,isClick,isReached}=useTexts();

    console.log("called")
   
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

`

const YellowButton=styled.button`


position: absolute;
width: 271px;
height: 60px;
left: 30px;
top: 271px;
background: #F1C733;
border-radius: 10px;
`