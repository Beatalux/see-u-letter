import DaumPostcode from 'react-daum-postcode';
import React, { useState } from 'react'
import styled from 'styled-components';
import { BodyText, SubtitleText, GreyButton, WarningText } from '../../../commons/text'

export const SenderInfoContainer = ({ senderInfo }) => {
    const [senderName, setSenderName] = useState("");
    const [senderPhone, setSenderPhone] = useState("");
    const [confirmPhoneForm, setComfirmPhoneForm] = useState(true);

    const handleSenderName = (e) => {
        setSenderName(e.target.value);
    }

    const handleSenderPhone = (e) => {
        let regexp = /^[0-9]*$/;

        if (senderPhone.includes('-') || !regexp.test(senderPhone)) {
            console.log('전화번호 입력 형식을 맞춰주세요');
            setComfirmPhoneForm(false);
        } else {
            setComfirmPhoneForm(true);
        }
        setSenderPhone(e.target.value);
    }

    /*strting PostCode*/
    const width = 410;
    const height = 414;
    const modalStyle = {
        position: "absolute",
        top: 0,
        left: "-18px",
        zIndex: "100",
        border: "1px solid #000000",
        overflow: "hidden"
    }

    const [isDaumPost, setIsDaumPost] = useState(false);
    const [detailedAddress, setDetailedAddress] = useState("");
    const [zoneCode, setZoneCode] = useState("");
    const [fullAddress, setFullAddress] = useState("");

    const handleOpenPost = () => {
        setIsDaumPost(true);
    }

    const handleAddress = (data) => {
        let AllAddress = data.address;
        let extraAddress = '';
        let zoneCodes = data.zonecode;

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            AllAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        setFullAddress(AllAddress);
        setZoneCode(zoneCodes);
    }

    const handleInput = (e) => {
       
        setDetailedAddress(e.target.value)
    }

    console.log("in SENDERr") //값이 바뀔 때마다 return 위에 다 render하는듯? 계속 찍힘
    senderInfo.senderName = senderName;
    senderInfo.senderPhone = senderPhone;
    senderInfo.fullAddress = fullAddress;
    senderInfo.DetailedAddress = detailedAddress;
    senderInfo.zoneCode = zoneCode;
    return (
        <div style={{ position: "relative", top: "0px", width: "390px" }}>
            <SenderInfoRow top="199px">
                <TBodyText left="0px">보내는 사람 성함</TBodyText>
                <UserInput name="name" type="text" placeholder="서유빈"
                    value={senderName}
                    onChange={handleSenderName}
                ></UserInput>
            </SenderInfoRow>

            <SenderInfoRow top="255px">
                <TBodyText left="0px" >보내는 사람 연락처</TBodyText>
                <UserInput name="phone" type="text"
                    value={senderPhone}
                    onChange={handleSenderPhone}
                    placeholder="01012345678"
                ></UserInput>
            </SenderInfoRow>
            {!confirmPhoneForm && <AlertDiv top="530px">
                전화번호 입력 형식을 맞춰주세요
                    </AlertDiv>}
            <SenderInfoRow top="315px">
                <TBodyText left="0px" >우편번호</TBodyText>
                <ReadOnlyUserInput readonly
                    left="89px"
                    name="address1"
                    tpye="text"
                    width="177px"
                    value={zoneCode}>

                </ReadOnlyUserInput>
                <PostBtn onClick={handleOpenPost}>찾기</PostBtn>
            </SenderInfoRow>

            {
                isDaumPost ?
                    <DaumPostcode
                        onComplete={handleAddress}
                        autoClose
                        width={width}
                        height={height}
                        style={modalStyle}
                        isDaumPost={isDaumPost}
                    />
                    : null
            }
            <SenderInfoRow top="369px">
                <TBodyText >주소</TBodyText>
                <ReadOnlyUserInput
                    readonly
                    left="60px"
                    name="address1"
                    tpye="text"
                    value={fullAddress}></ReadOnlyUserInput>
            </SenderInfoRow>
            <SenderInfoRow top="419px">
                <TBodyText >상세주소</TBodyText>
                <UserInput
                    type="text"
                    value={detailedAddress}
                    name="address"
                    plaeceholder="상세주소"
                    onChange={handleInput}>
                </UserInput>

            </SenderInfoRow>

        </div>
    );

}

export const ReceiverInfoContainer = ({receiverInfo}) => {
    const [senderName, setSenderName] = useState("");
    const [senderPhone, setSenderPhone] = useState("");
    const [confirmPhoneForm, setComfirmPhoneForm] = useState(true);

   
    const handleSenderName = (e) => {
        setSenderName(e.target.value);
    }

    const handleSenderPhone = (e) => {
        let regexp = /^[0-9]*$/;

        if (senderPhone.includes('-') || !regexp.test(senderPhone)) {
            console.log('전화번호 입력 형식을 맞춰주세요');
            setComfirmPhoneForm(false);
        } else {
            setComfirmPhoneForm(true);
        }
        setSenderPhone(e.target.value);
    }

    /*strting PostCode*/
    const width = 410;
    const height = 414;
    const modalStyle = {
        position: "absolute",
        top: 0,
        left: "-18px",
        zIndex: "100",
        border: "1px solid #000000",
        overflow: "hidden"
    }



    const [isDaumPost, setIsDaumPost] = useState(false);
    const [detailedAddress, setDetailedAddress] = useState("");
    const [zoneCode, setZoneCode] = useState("");
    const [fullAddress, setFullAddress] = useState("");

    const handleOpenPost = () => {
        setIsDaumPost(true);
    }

    const handleAddress = (data) => {
        let AllAddress = data.address;
        let extraAddress = '';
        let zoneCodes = data.zonecode;

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            AllAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        setFullAddress(AllAddress);
        setZoneCode(zoneCodes);
    }

    const handleInput = (e) => {
        setDetailedAddress(e.target.value)
    }
    
    console.log("in Receiver")
    receiverInfo.receiverName = senderName;
    receiverInfo.receiverPhone = senderPhone;
    receiverInfo.receiverFullAddress = fullAddress;
    receiverInfo.receiverDetailedAddress = detailedAddress;
    receiverInfo.receiverZoneCode = zoneCode;

    return (
        <div style={{ position: "relative", top: "300px", width: "390px" }}>
            <SenderInfoRow top="199px">
                <TBodyText left="0px">받는 사람 성함</TBodyText>
                <UserInput name="name" type="text" placeholder="서유빈"
                    value={senderName}
                    onChange={handleSenderName}
                ></UserInput>
            </SenderInfoRow>

            <SenderInfoRow top="255px">
                <TBodyText left="0px" >받는 사람 연락처</TBodyText>
                <UserInput name="phone" type="text"
                    value={senderPhone}
                    onChange={handleSenderPhone}
                    placeholder="01012345678"
                ></UserInput>
            </SenderInfoRow>
            {!confirmPhoneForm && <AlertDiv top="530px">
                전화번호 입력 형식을 맞춰주세요
                    </AlertDiv>}
            <SenderInfoRow top="315px">
                <TBodyText left="0px" >우편번호</TBodyText>
                <ReadOnlyUserInput
                    left="89px"
                    name="address1"
                    tpye="text"
                    width="177px"
                    value={zoneCode}
                    readOnly>

                </ReadOnlyUserInput>
                <PostBtn onClick={handleOpenPost}>찾기</PostBtn>
            </SenderInfoRow>

            {
                isDaumPost ?
                    <DaumPostcode
                        onComplete={handleAddress}
                        autoClose
                        width={width}
                        height={height}
                        style={modalStyle}
                        isDaumPost={isDaumPost}
                    />
                    : null
            }
            <SenderInfoRow top="370px">
                <TBodyText >배송주소</TBodyText>
                <ReadOnlyUserInput
                    left="60px"
                    name="address1"
                    tpye="text"
                    value={fullAddress}
                    readonly></ReadOnlyUserInput>
            </SenderInfoRow>
            <SenderInfoRow top="420px">
                <TBodyText >상세주소</TBodyText>
                <UserInput
                    type="text"
                    value={detailedAddress}
                    name="address"
                    plaeceholder="상세주소"
                    onChange={handleInput}>
                </UserInput>

            </SenderInfoRow>
            <SenderInfoRow top="460px">
                <AlertDiv left="80px">*거주지 변경의 가능성이 낮은 곳을 배송지로 입력해주세요.</AlertDiv>
            </SenderInfoRow>
        </div>
    );

}

//export {senderName,senderPhone,fullAddress,detailedAddress};

const ReadOnlyUserInput = styled.input`
margin-top:10px 0 0 0;
margin-left:${props => props.left};
width:${props => props.width || "220px"};
height:45px;
border:1.5px solid #EDEDED;

`
const TBodyText = styled(BodyText)`
position:static;
`
const SenderInfoRow = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
position:absolute;
height:49px;
width:376px;
top:${props => props.top};
`
const ZoneCodeBox = styled.div`
position:absolute;
top:200px;
width:180px;
height:46px;

`
const UserInput = styled.input`
margin-top:10px;
border:1.5px solid #EDEDED;
width:220px;
height:45px;
`


const PostBtn = styled.button`
background:#EEB900;
border-style:none;
font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
height:50px;
margin:0 0 0 0;

`

const AlertDiv = styled.p`
font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;

position:absolute;
top:${props => props.top};
margin-left:${props => props.left || "170px"};
color: red;
`
