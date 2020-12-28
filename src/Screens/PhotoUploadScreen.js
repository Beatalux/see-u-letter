import React, { useState } from "react";
import "./t.css";
import styled from 'styled-components';

import Demo from '../components/forPhotoUploadScreen/index';

const App = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedCropPhoto, setSelectedCropPhoto]=useState([]);

  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

       console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const handleImageCrop=(photo)=>{
    console.log('e',photo);
    console.log(typeof photo);
    let temp=photo.split("blob:");
    setSelectedCropPhoto(photo);
    console.log("ll",temp[1]);
    <Demo imgimg={photo}/>
    //CropDemo(temp[1]);

  }

  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return (
          <ImageHolder onClick={()=>handleImageCrop(photo)}>
      <Img src={photo} alt="" key={photo} />
      </ImageHolder>
    )});
  };

  return (
    <div >
      <div>
        <input type="file" id="file" multiple onChange={handleImageChange} />

          <label htmlFor="file" className="label">
            <i className="material-icons">add_a_photo</i>
          </label>
          <CropPhotoContainer img={selectedCropPhoto}>

          </CropPhotoContainer>
       
        <UploadedImages>{renderPhotos(selectedFiles)}</UploadedImages>
      </div>
    </div>
  );
};

export default App;


const CropPhotoContainer=styled.div`
background-image:url(${props=>props.img});
background-repeat: no-repeat;
position: absolute;
background-color: yellow;

left: 39px;
top: 197px;
width:100%;
height:100%;


`
const UploadedImages=styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: left; 

position:absolute;
left: 24px;
top: 768px;
height:80px;


width: 100%;
overflow:visible;

background-color: black;


`

const ImageHolder=styled.button`

height:80px;
width:80px;
text-align:center;
padding:0px 0px 0px 0px;

`


const Img=styled.img`
max-width:100%;
height:auto;
max-height:100%;
padding:0px 00px 0px 0px;


`