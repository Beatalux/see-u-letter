import axios from 'axios';
import qs from 'qs';

 const postSenderEmail = (senderEmail,setCookie) => {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
  
      data: qs.stringify({
        senderEmail: `${senderEmail}`,
 
      }),
      url:`https://5b04f74e850c.ngrok.io/letter/users/` };
    axios(options)
      .then((res) => {
        alert('로그인을 축하드립니다');
        setCookie('token', JSON.stringify(res.data), { path: '/' });
      })
      .catch((err) => {
        console.log('login error!!', err);
      });
  };

  export const postLetterOption = (user,paper,font, month,SelectedQuestions) => {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
  
      data: qs.stringify({
        user: `${user}`,
        paper:`${paper}`,
       font:`${font}`,
       month:`${month}`,
      SelectedQuestions:`${SelectedQuestions}`
       
 
      }),
      url:`https://5b04f74e850c.ngrok.io/letter/letters/` };
    axios(options)
      .then((res) => {
        //alert('로그인을 축하드립니다');
        //setCookie('token', JSON.stringify(res.data), { path: '/' });
      })
      .catch((err) => {
        console.log('login error!!', err);
      });
  };
  
  export  default postSenderEmail;