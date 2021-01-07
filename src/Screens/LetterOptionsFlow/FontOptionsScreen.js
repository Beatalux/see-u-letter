import React, { useState } from 'react'
import styled from 'styled-components'
import { BodyText, SubtitleText, YellowButton, TitleText } from '../../commons/text'
import '../../index.css'
import bar from '../../images/bar1.png';
import fontsample from '../../images/fontsample.png';
import Header from '../../commons/Header';
import { useCookies } from 'react-cookie';

import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';


//import FontsList from '../../commons/font'
const FontsList = [
    {
        "fontname": "리디바탕",
        "fontEngName": "RIDIBatang"
    },
    {
        "fontname": "마포금빛나루",
        "fontEngName": "MapoFlowerIsland"
    },
    {
        "fontname": "마포꽃섬",
        "fontEngName": "MapoGoldenPier"
    },
    {
        "fontname": "나눔명조",
        "fontEngName": "nanummyeongjo"
    },
    {
        "fontname": "교보손글씨",
        "fontEngName": "KyoboHand"
    },
    {
        "fontname": "스포카 한 산스",
        "fontEngName": "Spoqa Han Sans Neo"
    },

]


//font api 받아서 하기만 하면됌
//누구 .fontEngname, .폰트이름 이런식으로 받아서 parameter 로 넘겨주기

//Global Fonts option or import index.css depend on Router
//for Global ref below
//https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni


//link로 paper정보, font 정보만 보내주기
//post로 메시지 내용 보내주는 거 필요
const RadioButton = withStyles({
    root: {
        color: '#D9D9D9',
        '&$checked': {
            color: '#7C5B42',
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '300px',
        color: '#7C5B42',

    },

});

const FontRow = ({ change }) => {
    const [selectedValue, setSelectedValue] = useState("a");
    const [cookies, setCookie, removeCookie] = useCookies(['token']);


    const handleChange = (e) => {
        setSelectedValue(e.target.value);
        switch (e.target.value) {

            case "a":
                change(0);
                break;
            case 'b':
                change(1);
                break;
            case 'c':
                change(2);
                break;
            case 'd':
                change(3);
                break;
            case 'e':
                change(4);
                break;
            case 'f':
                change(5);
                break;


        }

    }
    console.log("in font option cookies", cookies.token)

    return (
        <div>

            <FontR selected={FontsList[0].fontEngName}>{FontsList[0].fontname}
                <RadioButton
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-button"
                    inputProps={{ 'aria-label': 'A' }}
                />
            </FontR>


            <FontR selected={FontsList[1].fontEngName}>{FontsList[1].fontname}
                <RadioButton
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-button"
                    inputProps={{ 'aria-label': 'B' }}
                />
            </FontR>

            <FontR selected={FontsList[2].fontEngName}>{FontsList[2].fontname}
                <RadioButton
                    checked={selectedValue === 'c'}
                    onChange={handleChange}
                    value="c"
                    name="radio-button"
                    inputProps={{ 'aria-label': 'C' }}
                />
            </FontR>

            <FontR selected={FontsList[3].fontEngName}>{FontsList[3].fontname}
                <RadioButton
                    checked={selectedValue === 'd'}
                    onChange={handleChange}
                    value="d"
                    name="radio-button"
                    inputProps={{ 'aria-label': 'D' }}
                />
            </FontR>
            <FontR selected={FontsList[4].fontEngName}>{FontsList[4].fontname}
                <RadioButton
                    checked={selectedValue === 'e'}
                    onChange={handleChange}
                    value="e"
                    name="radio-button"
                    inputProps={{ 'aria-label': 'E' }}
                />
            </FontR>
            <FontR selected={FontsList[5].fontEngName}>{FontsList[5].fontname}
                <RadioButton
                    checked={selectedValue === 'f'}
                    onChange={handleChange}
                    value="f"
                    color="default"
                    name="radio-button"
                    inputProps={{ 'aria-label': 'F' }}
                />

            </FontR>

        </div>

    )
}

export default function FontOptionsScreen() {
    const [cookies, setCookie,removeCookie] = useCookies(['token']);
    const [background, setBackground] = useState(1);

    const { search } = useLocation();
    const query = new URLSearchParams(search);


    const receiver = query.get('receiver');
    const month = query.get('month');
    const paper = query.get('paper');
    console.log('in font', 'ck', receiver, 'month', month, 'paper', paper);

    const callFont = (f) => {
        setBackground(f);
        console.log(background);

    }

    return (

        <div>
            <Header />
            <BarImage></BarImage>
            <TitleText top="135px" size="18px" left="24px">폰트를 골라주세요</TitleText>
            <BodyText top="165px" left="24px">글에 적용될 폰트를 골라주세요.</BodyText>

            <ImageBox img={fontsample} top="219px" >
            <FontOptionText top="20px" font={FontsList[background].fontEngName}>
                    1년후의 나에게.
            </FontOptionText>
                <FontOptionText top="65px" font={FontsList[background].fontEngName} >
                    안녕, 여긴 2020년 1월 아주 추운 겨울이야. <br />
            어디에 있니? 얼마나 가까이 와 있니
            <br /> 그토록 원하던 꿈에
            </FontOptionText>
            </ImageBox>


            <FontOptionContainer>
                <FontRow change={callFont}></FontRow>
            </FontOptionContainer>

            <StyledLink to={`topicIntro?receiver=${receiver}&month=${month}&paper=${paper}&font=${FontsList[background].fontEngName}`}>
                <YellowButton top="855px" left="23px">다음</YellowButton>
            </StyledLink>
        </div>
    )
}



const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const FontOptionText = styled.p`
position: absolute;

font-family: ${props => props.font || "MapoGoldenPier"};
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 30px;

top:${props => props.top};
color: #000000;
margin-left:25px;

`
const ImageBox = styled.div`
background:url(${props => props.img});
position:absolute;
height: 195px;
width: 366px;
left: 21px;
top: ${props => props.top};
border-radius: 0px;
margin:0 0 0 0;
padding:0 0 0 0;
`

const BarImage = styled.div`
background:url(${bar});
position:absolute;
height: 3.0000152587890625px;
background-repeat:no-repeat;
width: 414px;
left:0px;
top: 106px;
border-radius: 0px;
`
const FontOptionContainer = styled.div`
position:absolute;
top:433px;

`
const FontR = styled.div`
display:flex;
width:366px;
justify-content:space-between;
font-size:20px;
font-family: ${props => props.selected || 'RIDIBatang'};
margin-bottom:31px;

`;

/** 적용 못한 이유 알아보기

           <FontOptionContainer>

            {FontsList.map((font,index)=>{
                console.log("above",font,index);

                return(

                    <FontRow
                        key={index}
                        font={font.fontname}
                        engfont={font.fontEngName}
                        change={callFont}>
                    </FontRow>
                )
            })}
            </FontOptionContainer>/

            */