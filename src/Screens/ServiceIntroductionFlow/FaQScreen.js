import React from 'react'
import styled from 'styled-components';
import { BodyText, SubtitleText, Button, TitleText } from '../../commons/text'
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

import logo from '../../images/logo.png'
import {ArrowBack} from '@styled-icons/boxicons-regular/ArrowBack'
import {Email} from '@styled-icons/material-outlined/Email';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {ExpandMore} from '@styled-icons/material-outlined/ExpandMore';
import {ExpandLess} from '@styled-icons/material-outlined/ExpandLess';
import Collapse from '@material-ui/core/Collapse';

import Header from '../../commons/Header'

const FaQRow=()=>{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return(
        <div>
        <Divider variant="middle" />
        <List style={{position:"relative"}}>
            <ListItem button onClick={handleClick} style={{display:"flex",height:"85px"}}>
                <QuestionText>
                    Q. 주소가 바뀌면 어떻게 해야 하나요?
                </QuestionText>
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}

            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <BodyText size="14px">
                            <br/>편지 발송은 2022년 1월에 발송됩니다. 
                            <br/>자세한 사항은 우편 사정에 따라 변경될 수 있습니다.<br/>
                            </BodyText>
                        
                    </ListItem>
                </List>
            </Collapse>
        </List>
        </div>
    )

    
}
const useStyles = makeStyles((theme) => ({
       
    nested: {
      paddingLeft: theme.spacing(4),
      paddingBottom:theme.spacing(8),
      paddingTop:theme.spacing(4),
      backgroundColor:'rgb(196,153,1,0.3)',
      padding:"24px 0px 30px 18px",
   
      width:"366px",

    },
  }));
  


function FaQScreen() {

   

    return (
        <Wrapper>
            <Wrap>
            <ArrowBack size="24px"/>
            <LogoImage/>
            </Wrap>
        {/*-43px*/}
            <SubtitleText size="24px" top="123px">자주 묻는 질문</SubtitleText>
            <SidebarText top="191px">FAQ</SidebarText> 
                
          
          <ListContainer>


<FaQRow/>
            </ListContainer>


            <Divider variant="middle" />
            <SidebarText top="754px">문의하기</SidebarText> 

            <BodyText bottom="45px">더 자세한 문의는 {'<'}씨유레터{'>'}메일로 문의해주세요.</BodyText> 
            <div style={{display:"flex", position:"absolute", bottom:"33px",alignItems:"center"}}>
            <MailIcon />
            <FaQText>@seeyouletter</FaQText>

            </div>
        
        </Wrapper>
    )
}

export default FaQScreen


const ListContainer=styled.div`
position:absolute;
top:261px;
width:350px;

`
const MailIcon=styled(Email)`
height: 24px;
width: 24px;
color:#7C5B42;
padding-top:1px;
margin-right:0px;
`
const FaQText=styled.p`
position: absolute;
top:${props=>props.top};
font-family: SpoqaHanSans;
font-style: normal;
font-weight: ${props=>props.w||"normal"};
font-size: ${props=>props.size||14}px;
line-height: 27px;
margin-left:34px;
color:#7C5B42;

`
const SidebarText=styled.div`
font-family: SpoqaHanSans;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 30px;
text-align: left;

color:#7C5B42;

position:absolute;
height: 30.0048828125px;
width: 120px;
top:${props=>props.top};
`

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
const QuestionText=styled(SubtitleText)`
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
position:fixed;
right:24px;
`

const ExpandMoreIcon=styled(ExpandMore)`
width:24px;
height:24px;
position:fixed;
right:24px;
`