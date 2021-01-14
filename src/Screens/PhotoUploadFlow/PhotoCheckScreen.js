import React, { useState, useCallback, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import styled from 'styled-components';
import Header from '../../commons/Header';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useTexts } from '../../components/Modal/context'
import { BodyText, SubtitleText, YellowButton as Button, TitleText } from '../../commons/text'
import img from '../../images/photoCheckIMG.png';
import {postPhoto} from '../../axios/auth.js';
import { useCookies } from 'react-cookie';
function PhotoCheckScreen() {
    const { passedImage } = useTexts()

    const [cookies, setCookie] = useCookies(['letterID']);
  

    const history = useHistory();
    const { search } = useLocation();
    const query = new URLSearchParams(search);

    const imgUrl = query.get('img');
    //const formData = new FormData();
    //formData.append('my-file', imgUrl, 'filename.png');
  
    
    
   // console.log("incheck", imgUrl, typeof (imgUrl),formData)
    const letterID=cookies.test
    console.log("letterID",letterID);

    const handleOnClickImage = () => {
        //api로 보내기

        postPhoto(letterID,imgUrl,setCookie)
        console.log('here')
        history.push('/deliveryInfo')
    }


    return (
        <div>
            <div className="App">
                <Header pageTitle="사진첨부" />
                <TitleText top="140px" left="95px" size="20px">사진 첨부가 완료되었습니다!</TitleText>
                <BodyText top="180px" left="120px">인화된 사진으로 만나요:)</BodyText>


                <PrettyContainer/>

                <Wrapper>
                    <img src={imgUrl} alt="cropped Image"style={{objectFit:"cover"}} />
                </Wrapper>

                <YellowButton
                    onClick={handleOnClickImage}
                >
                    완료
            </YellowButton>


            </div>


        </div>
    )
}

export default PhotoCheckScreen

//style={{left:"50%",width:"100%",height:"100%",objectFit:"contain"}}
const PrettyContainer = styled.div`

background:url(${img});
position: absolute;
width: 381px;
height: 346px;
left: 15px;
top: 111px;


`


const Wrapper = styled.div`

position:relative;
top: 275px;

width:300px;
height:400px;

min-height: 400px;
min-width: 365px;
margin-left: auto;
margin-right: auto;
text-align: center;
display: table-cell;
vertical-align: middle;

`

const YellowButton = styled(Button)`
position:static;
margin-top:300px;
left:0px;



`

