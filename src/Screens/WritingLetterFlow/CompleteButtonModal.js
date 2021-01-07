
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { BodyText, TitleText } from '../../commons/text'
import styled from 'styled-components';
import { Link,useHistory } from 'react-router-dom';



function getModalStyle() {


    return {
        top: 254,
        left: 42,

    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'relative',
        width: 331,
        height:307,
        backgroundColor:'white',
        border: 'none',
 
    
    },
}));

function CompleteButtonModal({func}) {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const history = useHistory();


    const handleGreyAction = (e) => {
        history.push('/writing');

    }
    const handleYellowAction = (e) => {
        func(true);


    }

    const body = (

        <div style={modalStyle} className={classes.paper}>
            <TitleText top="44px" size="20px" left="30px">편지 쓰기를 완료하시겠습니까?</TitleText>
            <BodyText top="85px" left="30px">완료 버튼을 누르면 수정이 불가능합니다.</BodyText>
            <GreyButton onClick={() => {  handleGreyAction(); }}>페이지로 돌아가기</GreyButton>
            <YellowButton onClick={() => {  handleYellowAction(); }}>완료</YellowButton>
        </div>



    );

    return (
        <div>
            <Button onClick={handleOpen}>
                완료
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                {body}
            </Modal>
        </div>
    );



}

export default CompleteButtonModal

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



export const GreyButton=styled.button`
width: 271px;
height: 60px;
left: 30px;
top: 200px;
position: absolute;
left: 30px;
top: 149px;
border:none;
background: #EDEDED;
border-radius: 10px;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
/* identical to box height */

text-align: center;

color: #6B6B6B;

opacity: 0.8;


`

export const YellowButton=styled.button`


position: absolute;
width: 271px;
height: 60px;
left: 30px;
top: 217px;
background: #F1C733;
border-radius: 10px;
border:none;
font-family: SpoqaHanSans;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 27px;
/* identical to box height */

text-align: center;

color: #000000;
`
