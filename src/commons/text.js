import styled from 'styled-components'

/*
제목- 라다바탕(웨이트 하나)/ 20pt, 
정보성에따라 스포카도 쓰임 ex) 20 Bold

부제목- SpoqaHanSans/ 18pt Bold /18pt Regular/ 16pt bold

본문- SpoqaHanSans/ 16pt Light/ 
주제담기 - 14pt Light, Regular

버튼 폰트 - 18pt bold
주의 사항 - 12pt regular
Button radius - 10 (나머지 래디우스는 직접 확인)
마진 - 좌우 24px

*/

export const TitleText=styled.p`

font-family: RIDIBatang;
font-style: normal;
font-weight: normal;
font-size: ${props=>props.size|| "24px"};
line-height: 150%; 
color: #000000;
position:absolute;
top:${props=>props.top};
left:${props=>props.left||"0px"};
`

export const SubtitleText=styled.p`

font-family: SpoqaHanSans;
font-style: normal;
font-weight:bold;
font-size: ${props=>props.size||"18px"};
line-height: 150%; 

position:absolute;

left:${props=>props.left};
top:${props=>props.top};

color: #000000;
`


export const BodyText=styled.p.attrs(props=>({

    top:props.top,
    bottom:props.bottom,
}))`
font-family: SpoqaHanSans;
font-style: normal;
font-weight: 300;
font-size: ${props=>props.size||"16px"};
line-height: 24px;

color: #000000;
position:absolute;


bottom:${props=>props.bottom};
top:${props=>props.top};
left:${props=>props.left||"24px"};

`

export const WarningText=styled.p.attrs(props=>({

    top:props.top,
    bottom:props.bottom,
}))`
font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 24px;

color: ${props=>props.fontColor||'#000000'};
position:absolute;
background:${props=>props.color};


bottom:${props=>props.bottom};
top:${props=>props.top};
left:${props=>props.left||"24px"};

`
//props로 포지션 설정 방법 고민해볼것!!
export const YellowButton=styled.button.attrs(props=>({

    top:props.top,
    bottom:props.bottom,
}))`
font-family: Spoqa Han Sans Neo;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
border-radius: 10px;
text-align: center;
border-style:none;

position:absolute;
top:${props=>props.top};
bottom:${props=>props.bottom};

left:${props=>props.left||"24px"};

margin-left:2px;
margin-bottom:15px;
width:365px;
height:60px;

color: black;
background: #EEB900;

`

export const GreyButton=styled.button.attrs(props=>({

    top:props.top,
    bottom:props.bottom,
}))`
font-family: Spoqa Han Sans Neo;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
border-radius: 10px;
text-align: center;
border-style:none;
margin-left:2px;
overflow:visible;
position:absolute;

top:${props=>props.top};
bottom:${props=>props.bottom};
width:365px;
height:60px;

color: #6B6B6B;
background: #EDEDED;

`