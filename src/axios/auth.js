import axios from 'axios';
import qs from 'qs';

 const postSenderEmail = (senderEmail,setCookie) => {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({
        senderEmail: `${senderEmail}`,
      }),
      url:`https://44f643ffd8a4.ngrok.io/letter/users/` };
    axios(options)
      .then((res) => {
        setCookie('token', JSON.stringify(res.data), { path: '/' });
      })
      .catch((err) => {
        console.log('login error!!', err);
      });
  };

  export const postLetterOption = (user,paper,font, month,setCookie) => {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
  
      data: qs.stringify({
        user: `${user}`,
        paper:`${paper}`,
       font:`${font}`,
       month:`${month}`,
      }),
      url:`https://44f643ffd8a4.ngrok.io/letter/letters/` };
    axios(options)
      .then((res) => {
        //alert('로그인을 축하드립니다');
       setCookie('test', JSON.stringify(res.data), { path: '/' });
      })
      .catch((err) => {
        console.log('login error!!', err);
      });
  };
  
  export const putLetterContent = (letterID,letterContent,page,setCookie) => {
    const options = {
      method: 'PATCH',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
  
      data: qs.stringify({
        letterID:`${letterID}`,
  
        letterContent:`${letterContent}`,
        page:`${page}`,
      }),
      url:`https://44f643ffd8a4.ngrok.io/letter/letters/${letterID}/` };
    axios(options)
      .then((res) => {
        //alert('로그인을 축하드립니다');
        setCookie('writing', JSON.stringify(res.data), { path: '/' });
      })
      .catch((err) => {
        console.log('login error!!', err);
      });
  };

  export const postPhoto = (letterID,photo,setCookie) => {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
  
      data: qs.stringify({
        letterID: `${letterID}`,
        photo:`${photo}`,
    
      }),
      url:`https://e10c45c39e95.ngrok.io/photo/photos/` };
    axios(options)
      .then((res) => {
        //alert('로그인을 축하드립니다');
        setCookie('letterID', JSON.stringify(res.data), { path: '/' });
      })
      .catch((err) => {
        console.log('login error!!', err);
      });
  };


  export const postOrderInformation = (letter,senderName,senderPhone,senderFullAddress,senderDeatiledAddress,senderZoneCode,receiverName,receiverPhone,receiverFullAddress,receiverDetailedAddress,receiverZoneCode,postMethod) => {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
  
      data: qs.stringify({
        letter:`${letter}`,
          senderName:`${senderName}`,
          senderPhone:`${senderPhone}`,
          senderFullAddress:`${senderFullAddress}`,
          senderDeatiledAddress:`${   senderDeatiledAddress}`,
          senderZoneCode:`${senderZoneCode}`,
          receiverName:`${receiverName}`,
          receiverPhone:`${ receiverPhone}`,
          receiverFullAddress:`${ receiverFullAddress}`,
          receiverDetailedAddress:`${receiverDetailedAddress}`,
          receiverZoneCode:`${ receiverZoneCode}`,
          postMethod:`${ postMethod}`,
      }),
      url:`https://e10c45c39e95.ngrok.io/order/customers/` };
    axios(options)
      .then((res) => {
        //alert('로그인을 축하드립니다');
        //setCookie('letterID', JSON.stringify(res.data), { path: '/' });
      })
      .catch((err) => {
        console.log('login error!!', err);
      });
  };
  
  
  export  default postSenderEmail;