import React, { useState, useCallback, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import styled from 'styled-components';
import Header from '../../commons/Header';
import { Link, useHistory } from 'react-router-dom';

import addImage from '../../images/addImage.png'

import { BodyText, SubtitleText, YellowButton as Button, GreyButton as GButton, TitleText } from '../../commons/text'

// Increase pixel density for crop preview quality on retina screens.
const pixelRatio = window.devicePixelRatio || 1;

// We resize the canvas down when saving on retina devices otherwise the image
// will be double or triple the preview size.
function getResizedCanvas(canvas, newWidth, newHeight) {

  const tmpCanvas = document.createElement("canvas");
  tmpCanvas.width = newWidth;
  tmpCanvas.height = newHeight;

  const ctx = tmpCanvas.getContext("2d");
  ctx.drawImage(
    canvas,
    0,
    0,
    canvas.width,
    canvas.height,
    0,
    0,
    newWidth,
    newHeight
  );

  return tmpCanvas;
}


function generateDownload(previewCanvas, crop, history) {
  console.log("in button", previewCanvas, crop)//previewcanvas가 null
  if (!crop || !previewCanvas) {
    return;
  }

  const canvas = getResizedCanvas(previewCanvas, crop.width, crop.height);


  canvas.toBlob(
    (blob) => {
      /*

      const formData = new FormData();
      formData.append('my-file', blob, 'filename.png');
      console.log("formData", formData);

      history.push(`/check?img=${formData}`)

*/
      
        const previewUrl = window.URL.createObjectURL(blob);
        const newImg = document.createElement('img');
  
        newImg.onload = function () {
          // no longer need to read the blob so it's revoked
          URL.revokeObjectURL(previewUrl);
        };
  
        newImg.src = previewUrl;
        console.log(previewUrl,newImg, newImg.src, "herr")
        history.push(`/check?img=${newImg.src}`)
        


    },
    "image/png",
    1
  );

}



export default function App() {

  const history = useHistory();


  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 4 / 6 });
  const [completedCrop, setCompletedCrop] = useState(null);

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  const handleOnComplete = (c) => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }
    const croppedImageUrl = this.getCroppedImg(this.imageRef, crop)
    setCompletedCrop(c);

  }



  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );


  }, [completedCrop]);


  const test = () => {
    const temp = completedCrop.toDataURL('image/png')
    console.log("here", temp)
  }


  return (
    <div className="App">
      <Header pageTitle="사진첨부" />
      {upImg === undefined ?
        <React.Fragment>
          <TitleText top="140px" left="80px" size="20px"> 의미있는 사진을 첨부해보세요</TitleText>
          <SubtitleText top="180px" left="48px">예쁜 종이액자에 담겨 같이 배송될 거에요.</SubtitleText>

          <ImageSelectContainer>
            <AddImageButton >
              <ImageInput type="file"
                accept="image/*"
                onChange={onSelectFile}>
              </ImageInput>

            </AddImageButton>
          </ImageSelectContainer>
          <ReactCrop

            src={upImg}
            onImageLoaded={onLoad}
            crop={crop}
            onChange={(c) => setCrop(c)}
            onComplete={(c) => handleOnComplete(c)}
          />
        </React.Fragment>
        :
        <React.Fragment>
          <RTitleText top="140px" left="72px" size="20px"> 사진을 규격에 맞게 편집해 보세요</RTitleText>
          <RBodyText top="180px" left="90px">화질이 좋은 사진으로 하는걸 추천해요!</RBodyText>

          <Wrapper>
            <TrickContainer>
              <ReactCrop
                style={{
                  display: "inline-block",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  verticalAlign: "middle",
                }}
                src={upImg}
                onImageLoaded={onLoad}
                crop={crop}
                onChange={(c) => setCrop(c)}
                onComplete={(c) => setCompletedCrop(c)}
              />
            </TrickContainer>
   
          </Wrapper>
        </React.Fragment>
      }
      <Box>
        <canvas
          ref={previewCanvasRef}
          // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
          style={{
            width: Math.round(completedCrop?.width ?? 0),
            height: Math.round(completedCrop?.height ?? 0)
          }}
        />
      </Box>
      <GreyButton onClick={() => setUpImg()} opacity={upImg==undefined?'0':'100%'}>사진 다시 고르기</GreyButton>
            <YellowButton
              disabled={!completedCrop?.width || !completedCrop?.height}
              onClick={() =>
                generateDownload(previewCanvasRef.current, completedCrop, history)
              }
            >
              확인
      </YellowButton>


    </div>
  );
}

/*
   left:'5px',
  objectFit:'contain',

  width:"100%",
  height:"100%",
*/


const TrickContainer = styled.div`
display: inline-block;
vertical-align: middle;
height: 400px;


`
const RTitleText = styled(TitleText)`
position:static;
margin-top:140px;
margin-left:50px;
font-size:"20px";
`
const RBodyText = styled(BodyText)`
position:static;
margin-left:60px;
margin-top:-12px;

`
const GreyButton = styled(GButton)`
opacity:${props=>props.opacity};

top:720px;
margin-left:0px;

`
const YellowButton = styled(Button)`

top:790px;

`

const Box = styled.canvas`
display:none;


`
const Wrapper = styled.div`
display:flex;
position:absolute;

top: 275px;
text-align: center;
width: 365px; 
height: 400px;

`

/*

min-height: 400px;
min-width: 365px;
margin-left: auto;
margin-right: auto;
text-align: center;
display: table-cell;
vertical-align: middle;
*/

const ImageInput = styled.input`
opacity:0;
width:55px;
height: 66px;
`

const AddImageButton = styled.button`
background:url(${addImage});
border:none;
width: 55px;
height: 66px;
`

const ImageSelectContainer = styled.div`

padding:153px 105px 176px 105px;

position: absolute;
width: 264px;
height: 395px;
left: 75px;
top: 275px;

border: 1px dashed #B3B3B3;
box-sizing: border-box;
border-radius: 5px;
`