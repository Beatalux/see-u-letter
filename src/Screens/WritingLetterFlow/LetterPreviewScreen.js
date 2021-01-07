import React from 'react'
import { BodyText, SubtitleText, YellowButton as Button, WarningText as W, TitleText } from '../../commons/text'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';



import p1 from '../../images/paperTextSample/paper1.png';
import Header from '../../commons/Header';
//todo: import images

/*
const PaperLetterList=[
    p1,p2,p3,p4,p5,p6,p7
]
*/
const test="ㅇㄹㅇㄹㅇㄹㅇ,바이며, 대고, 군영과 사랑의 튼튼하며, 힘있다. 풀밭에 인간의 생의 때에, 황금시대다. 것은 예수는 되려니와, 듣기만 있는 노년에게서 가진 같지 곳으로 운다. 이상 사람은 용감하고 역사를 실현에 품에 크고 것이다. 찬미를 천고에 품에 같으며, 몸이 그들의 있음으로써 귀는 끓는 봄바람이다. 영락과 가치를 같이 얼음에 얼음이 그리하였는가? 주며, 피부가 인간의 행복스럽고 길을 가치를 것이다. 꽃 가장 위하여, 크고 싶이 할지라도 힘차게 것이다. 것은 우는 수 피고 보내는 그것을 모래뿐일 사막이다. 관현악이며, 기관과 트고, 우리의 품고 거선의 천하를 천지는 때문이다어디 가슴에 구하기 꾸며 얼마나 힘있다. 역사를 만물은 넣는 사람은 이성은 오아이스도 아름다우냐? 끓는 광야에서 그러므로 살 하여도 것이다. 앞이 위하여 바이며, 있는 사라지지 풀이 그러므로 무엇을 작고 것이다. 현저하게 기쁘며, 수 이 같이, 커다란 바이며, 봄바람을 것이다. 이상은 못할 것이 그들에게 속잎나고, 아름다우냐? 내려온 우리의 힘차게 이는 꽃 생의 보내는 오직 가진 힘있다. 못할 것이 그들에게 속잎나고, 아름다우냐? 내려온 우리의 힘차게 이는 꽃 생의 보내는 오직 가진 힘있다. 내려온 우리의 힘차게 이는 꽃 생의 보내는 오직 가진 힘있다.오직 가진 힘이이";
let pageNumber=1
let i=0;



const MAX_WORD_COUNT=640; //639+1


//글 내용 639자 기준으로 array로 나눔
//몇페이지인지 로직
//글 기준 :639


//todo:css확인!!


export default function LetterPreviewScreen() {
    const [cookies, setCookie] = useCookies(['test']);
    const letterID=cookies.test
    console.log("letterID PREVIEW",letterID)


    let LetterContent = [];
    let temp=test;

    //ok
    while(true){
        console.log("lin while",temp.length);
        if(temp.length<=639){
            console.log("les than",temp.length)
            LetterContent.push(temp);  
            break;
        }
        LetterContent.push(test.substr(MAX_WORD_COUNT*i,MAX_WORD_COUNT*(i+1)));
        temp=test.substr(MAX_WORD_COUNT*(++i));
    }

    console.log(LetterContent)

        const { search } = useLocation();
        const query = new URLSearchParams(search);

    console.log("LetterPrieveiw",letterID.id,letterID.letterContent,letterID.page);
    
    
        //get letter,font info
        const selectedFont= query.get('font');
        //const selectedPaper =PaperLetterList[query.get('paper')];
    
        return (
            <div>
                <Header pageTitle="편지지 확인" />
                <Padding top="100px" />
                <PreviewContainer>
                {LetterContent.map((content, index) => {
                    //위에서 123px
                    <EachLetterPaper img={p1}>
                        <TopicTextField value={content} readOnly font={selectedFont}></TopicTextField>
                    </EachLetterPaper>

                })}
                </PreviewContainer>
                <WarningText color="rgba(241,199,51,0.5)" >
                    * 줄바꾸기를 하신 경우, 편지지에 맞는 탬플릿에 적용되는 과정에서 줄이 추가되어 종이 수가 늘어날 수 있습니다.
            </WarningText>
            <StyledLink to="/photoIntro">
                <YellowButton>완료</YellowButton>
                </StyledLink>
            </div>
        )
    }

const EachLetterPaper=styled.div`



`
const WarningText = styled(W)`
position:relative;

`

const YellowButton = styled(Button)`
position:relative;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
                    text - decoration: none;
    }
`;

const PreviewContainer = styled.div`


`


const Padding = styled.div`
height:${props => props.height};
`
const TopicTextField = styled.textarea`
border-style:none;
background-color:transparent;
width:252px;
margin: 0 0 0 0;
resize:none;
position:relative;
top:37px;
left:24px;
font-family:${props => props.font};
font-style: normal;
font-weight: normal;
font-size: 9px;
line-height: ${props=>props.font==="MapoFlowerIsland"?"18px":"20px"};
&:hover{
    border-style:none;
}
opacity: 0.8;
`;
