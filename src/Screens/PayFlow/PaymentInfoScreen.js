import React from 'react'
import Header from '../../commons/Header';
import { BodyText, SubtitleText, YellowButton, WarningText, TitleText } from '../../commons/text'
import styled from 'styled-components'
import { useCookies } from 'react-cookie';

import payinfo from '../../images/payinfo.png'
import { Link, useLocation } from 'react-router-dom';

function PaymentInfo() {

    const [cookies, setCookie] = useCookies(['pay']);
    console.log(cookies.test,cookies.writing,cookies.token,cookies.pay)
    const payment=cookies.pay
    const extraPhotoPrice = payment.photoPrice;
    const selectedPaperPrice = payment.letterPrice;
    const selectedPaperName = payment.letterName;
    const deliveryFee = payment.postMethod_price;
    const sumPrice=payment.total_price;
    return (
        <Wrapper>
            <Header pageTitle="입금정보" />
            <TopicIntroText>주문이 완료되었습니다.<br /> 주문 내역은 메일로 전송됩니다.</TopicIntroText>
            <WarningText color="rgba(241,199,51,0.5)" top="269px" left="71px">
                *24시간 내 입금이 되지 않는 경우 주문이 취소됩니다.
            </WarningText>

            <ImageBox img={payinfo} top="319px">
            </ImageBox>
            <SubtitleText top="606px">결제 금액</SubtitleText>
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
                <ItemPrice>{deliveryFee}원</ItemPrice>
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
                <AccountText>카카오뱅크 3333-18-3951747(이승아)</AccountText>
              </div>

            <StyledLink to={`culetter`}>
                <YellowButton top="1000px" >완료</YellowButton>
            </StyledLink>
            <Padding></Padding>
        </Wrapper>
    )
}

export default PaymentInfo


const Padding=styled.div`
height:40px;
width:100%;
position:absolute;
top:1062px;

`
const Wrapper=styled.div`
position:center;


`
const PriceText=styled.p`
font-family: SpoqaHanSans;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 36px;

position:absolute;
height: 29px;
width: 112px;
left: 250px;
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
width: 350px;
left:25px;
top: -5px;
border-radius: nullpx;


color: #000000;
`

const AccoutInfoRow = styled.div`
display:grid;
grid-template-columns:276px 100px;
width:376px;
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
grid-template-columns:300px 80px;
width:380px;
align-items:center;
margin-bottom:15px;

font-family: SpoqaHanSans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
`;


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
width: 319px;
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