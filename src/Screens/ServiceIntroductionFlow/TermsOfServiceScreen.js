import React from 'react'
import styled from 'styled-components';
import { BodyText, SubtitleText, Button, TitleText } from '../../commons/text'
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

import logo from '../../images/logo.png'
import {ArrowBack} from '@styled-icons/boxicons-regular/ArrowBack'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {ExpandMore} from '@styled-icons/material-outlined/ExpandMore';
import {ExpandLess} from '@styled-icons/material-outlined/ExpandLess';
import Collapse from '@material-ui/core/Collapse';

import Header from '../../commons/Header'
const useStyles = makeStyles((theme) => ({
       
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));
  

export default function TermOfServiceScreen() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <Wrapper>
            <Wrap>
            <ArrowBack size="24px"/>
            <LogoImage/>
            </Wrap>
            <SubtitleText>이용약관</SubtitleText>
            <SubtitleText>씨유레터 개인정보 처리방침</SubtitleText>
            <BodyText  size="14px">
            {'<'}See you letter{'>'}는 고객 식별 및 우편 발송 서비스 제공을
             위해 개인정보보호법 제15조 제1항에 의하여 아래와 같이 개인정보를 수집ㆍ 이용합니다. 수집 항목은 1. 성함 2. 휴대전화번호 3. 주소 입니다.해당 정보의 보유 및 이용 기간은 2023년 3월 1일이며, 위의 목적 외의 목적으로 사용되지 않음을 알려드립니다. 수집ㆍ이용 동의를 거부할 권리가 있으며, 동의를 거부할 경우 우편 발송 서비스 이용이 제한되는 불이익이 있을 수 있습니다.
            </BodyText>
            <SubtitleText>씨유레터 홍보 및 마케팅 수집 방침</SubtitleText>
            <BodyText  size="14px">
            {'<'}See you letter{'>'}는"개인정보보호법"에 따라 동의를 얻어 아래와 같이 
            See you letter 서비스의 홍보 및 마케팅을 위한 개인정보를 수집ㆍ이용합니다. 
            수집 항목은 1. 이메일 이며, 수집 목적은 1. See you letter 서비스 홍보를 위한
             뉴스레터 발송 입니다. 해당 수집 항목은 이외의 목적으로 활용되지 않으며, 
             해당 수집 항목의 보유 기간은 2023년 3월 1일까지입니다. 귀하는 개인정보 
             수집ㆍ이용에 동의하지 않을 권리가 있으며, 동의를 거부할 경우에는 거부한 
             내용 관련 서비스를 받을 수 없습니다. </BodyText>
             <SubtitleText>환불정책</SubtitleText>
            <BodyText  size="14px">
            자사의 문제로 상품 제작의 문제가 생겼을 시 안내 메일과 함께 100% 전액횐불해 드립니다.</BodyText>

        </Wrapper>
    )
}


const Wrap=styled.div`
display:flex;
margin-top:43px;
`

const LogoImage = styled.div`
background:url(${logo});

background-repeat: no-repeat;
height: 48px;
width: 210px;
margin-left:78px;

border-radius: 0px;
`
const QuestionText=styled(TitleText)`
&&&{
    font-size:18px;
}
`

const Ans=styled.input`
background-color:transparent;



`


const Wrapper=styled.div`

`
const ExpandLessIcon=styled(ExpandLess)`
width:24px;
height:24px;
float:right;

`

const ExpandMoreIcon=styled(ExpandMore)`
width:24px;
height:24px;
float:right;

`