import React from 'react'
import styled from 'styled-components';
import { BodyText as B, SubtitleText, TitleText } from '../../commons/text'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ExpandMore } from '@styled-icons/material-outlined/ExpandMore';
import { ExpandLess } from '@styled-icons/material-outlined/ExpandLess';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';

const FaQDataList=[
{"question":'보낸 편지 내용을 수정하고 싶어요.', "answer":'See you letter는 아날로그 방식으로 편지를 보내던 때의 감성을 지향하고 있어요. 그렇기 때문에 이미 보낸 편지의 내용은 확인하거나 수정할 수 없어요. 그렇지만 아주 급한 일이라면, See you letter 이메일( )로 주문 번호와 함께 문의 메일을 보내주세요. 편지가 아직 발송 전이라면 See you letter가 아주 살짝, 수정해줄지도 몰라요.'},
{"question":'주소가 바뀌었어요.',
"answer":'See you letter 서비스를 신청했을 때와 지금 주소가 달라졌다면, See you letter 이메일로 1.편지 작성자 성함\n 2. 편지 작성자 연락처\n 3. 변경 주소 및 우편번호\n 4.주문번호\n 를 보내주세요.See you letter가 아직 발송 전이라면, 받으시는 주소를 변경해드립니다 '},
{"question":'1:1 문의를 남기고 싶어요!',
"answer":'See you letter에 1:1 문의를 남기고 싶다면, See you letter 이메일(seeyouletter.official@gmail.com)로 문의사항을 남겨주세요. 주문 관련 문의 사항이라면 주문 번호를 남겨주세요. 구체적인 문의 내용을 남겨주실수록 답변이 빠르고 정확해집니다. 최대한 빨리 답변해드릴게요!'},
{"question":'주문번호가 기억나지 않아요.',
"answer":
'See you letter 주문 후 주문번호가 필요한데 주문번호가 기억나지 않는다면, See you letter 이메일 (seeyouletter.official@gmail.com)로\n 1. 편지 작성시 기입한 이메일 \n2. 편지 작성자 성함\n 3. 입금자명\n 4. 입금 날짜 및 시간\n 5. (여러명에게 작성했을 경우) 받는 사람 성함\n을 보내주세요. See you letter가 확인 후 안내해드릴게요.'},
{"question":'주문을 취소하고 싶어요.',
"answer":'See you letter는 고객의 주문과 동시에 제작이 시작되는 개별적 주문 제작 상품으로, 단순 변심에 의한 환불은 불가합니다. 자사의 문제로 상품에 문제가 생겼을 경우에는 관련 법률에 따라 환불을 도와드립니다.\n환불이 아닌, 편지 발송 취소를 진행하고 싶으시다면, seeyouletter.official@gmail.com로 주문번호,편지 작성시 기입한 이메일, 편지 작성자 성함을 보내주세요. 편지 발송 이전이라면 편지 발송 취소를 도와드릴게요!'},


]


const useStyles = makeStyles((theme) => ({

    nested: {
        paddingRight: theme.spacing(3),
        padding: theme.spacing(3),
      
        backgroundColor: 'rgb(196,153,1,0.3)',
        padding: "24px 0px 30px 18px",
        height: "auto",
        maxHeight: "100%",

        width: "366px",

    },
}));





export const FaQRow = () => {
    const classes = useStyles();
    let OPEN=[false,false,false,false,false];

    const [open, setOpen] = React.useState(false);
    const [faqindex, setFaqindex] = React.useState(0);
    const [dropdown,setDropdown]=React.useState([
        false,false,false
    ])

    const handleClick = (index) => {
    
     
  if(!dropdown[index]){//currently closed, need to be opened
           console.log("in if")
           setDropdown(        
            [
            ...dropdown.slice(0,index),
            true,
            ...dropdown.slice(index+1)
            ]
        )
    
        }else{
            setDropdown(        
                [
                ...dropdown.slice(0,index),
                false,
                ...dropdown.slice(index+1)
                ]
            )

        }
        setOpen(!open);
        setFaqindex(index);
        console.log(index);
    };
  

    return (
        <div>
            {FaQDataList.map((faq, index) => {
                return (
                    <div>
                        <Divider variant="middle" />
                        <List style={{ position: "relative" }}>
                            <ListItem button onClick={() => handleClick(index)} style={{ display: "flex", height: "85px" , width:"366px" }}>
                                <QuestionText>
                                Q.{faq.question}
                                </QuestionText>
                                {dropdown[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </ListItem>
                            <Collapse in={dropdown[index]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem 
                                    button divider className={classes.nested}>
                                      
                                        <BodyText size="14px" left="13px">
                                           {faq.answer}
                                        </BodyText>
                                
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                    </div>
                )
            })}
        </div>
    )


}
const BodyText=styled(B)`
position:static;

`
const QuestionText = styled(SubtitleText)`
&&&{
    font-size:18px;
}
`
const ExpandLessIcon = styled(ExpandLess)`
width:24px;
height:24px;
margin-left:300px;

`

const ExpandMoreIcon = styled(ExpandMore)`
width:24px;
height:24px;
margin-left:300px;

`
