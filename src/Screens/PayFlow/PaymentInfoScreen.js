import React from 'react'
import Header from '../../commons/Header';
import { BodyText, SubtitleText, YellowButton, WarningText, TitleText } from '../../commons/text'
import styled from 'styled-components'

import payinfo from '../../images/payinfo.png'
import { Link, useLocation } from 'react-router-dom';

function PaymentInfo() {
    const extraPhotoPrice = "3000"
    const selectedPaperPrice = "1000"
    const selectedPaperName = "blah"
    const sumPrice=6000;
    return (
        <div>
            <Header pageTitle="입금정보" />
            <TopicIntroText>주문이 완료되었습니다.<br /> 주문 내역은 메일로 전송됩니다.</TopicIntroText>
            <WarningText color="rgba(241,199,51,0.5)" top="269px" left="71px">
                *24시간 내 입금이 되지 않는 경우 주문이 취소됩니다.
            </WarningText>

            <ImageBox img={payinfo} top="319px">
            </ImageBox>
            <SubtitleText top="610px">결제 금액</SubtitleText>
            <BigDivider top="658px" />
            <div style={{ position: "relative", top: "670px" }}>
                <PostMethodRow>
                    {selectedPaperName}
                    <ItemPrice>{selectedPaperPrice}원</ItemPrice>
                </PostMethodRow>
                <PostMethodRow >  추가 사진 인화
                <ItemPrice>{extraPhotoPrice}원</ItemPrice>
                </PostMethodRow>
                <PostMethodRow >  배송비
                <ItemPrice>2500원</ItemPrice>
                </PostMethodRow>
                <PriceText>총 {sumPrice}원</PriceText>

                </div>
              
                <SubtitleText top="825px">결제 방식</SubtitleText>
                <BigDivider top="878px" />
                <div style={{ position: "relative", top: "790px"}}>
                <AccoutInfoRow >
                    계좌 이체
                <ItemPrice>(주)씨유레터</ItemPrice>
                </AccoutInfoRow>
                <AccountText>국민은행 619-002-04-137760</AccountText>
              </div>

            <StyledLink to={`culetter`}>
                <YellowButton top="1000px">완료</YellowButton>
            </StyledLink>

        </div>
    )
}

export default PaymentInfo

const PriceText=styled.p`
font-family: SpoqaHanSans;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 36px;

color: #7C5B42;
position:absolute;
height: 29px;
width: 112px;
left: 260px;
top: 92px;
border-radius: nullpx;

`
const AccountText=styled.p`

font-family: SpoqaHanSans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 30px;
position: absolute;
height: 24px;
width: 274px;
left: 119px;
top: -5px;
border-radius: nullpx;


color: #000000;
`

const AccoutInfoRow = styled.div`
display:grid;
grid-template-columns:270px 100px;
width:366px;
align-items:center;
margin-bottom:15px;

position:absolute;
top:-15px;

font-family: SpoqaHanSans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;

`

const ItemPrice = styled.div`


`
const ItemName = styled.div`


`

const BigDivider = styled.div`
    background:  #A7A7A7;
    height:1px;
    width:370px;
    position:absolute;
    left:24px;
    top:${props => props.top};

`

const PostMethodRow = styled.div`
display:grid;
grid-template-columns:310px 80px;
width:366px;
align-items:center;
margin-bottom:15px;

font-family: SpoqaHanSans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
`;

const ExtraPriceText = styled.p`
height: 21px;
width: 92px;

border-radius: nullpx;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
/* identical to box height */


color: #7C5B42;

`
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const ImageBox = styled.div`
background:url(${props => props.img});
position:absolute;
height: 279px;
width: 366px;
left: 104px;
top: ${props => props.top};
border-radius: 0px;
margin:0 0 0 0;
padding:0 0 0 0;
background-repeat:no-repeat;
`
const TopicIntroText = styled.p`
position: absolute;
width: 271px;
height: 100px;
left: 71px;
top: 187px;



font-family: RIDIBatang;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* or 150% */

text-align: center;

`