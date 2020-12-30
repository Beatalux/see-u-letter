import axios from 'axios';
import qs from 'qs';

 const postSenderEmail = (senderEmail,setCookie) => {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
  
      data: qs.stringify({
        senderEmail: `${senderEmail}`,
 
      }),
      url:`https://8bcb864e5df8.ngrok.io/letter/users/`  };
    axios(options)
      .then((res) => {
        alert('로그인을 축하드립니다');
        setCookie('token', JSON.stringify(res.data), { path: '/' });
      })
      .catch((err) => {
        console.log('login error!!', err);
      });
  };

  
  export  default postSenderEmail;