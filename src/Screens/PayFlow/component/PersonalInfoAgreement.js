import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import Checkbox from "react-custom-checkbox";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { withStyles } from '@material-ui/core/styles';
const BrownCheckbox = withStyles({
  root: {
    color: ' #F1C733',
    '&$checked': {
      color: '#7C5B42',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


const PersonalInfo = "<See you letter>는 고객 식별 및 우편 발송 서비스 제공을 위해 개인정보보호법 제15조 제1항에 의하여 아래와 같이 개인정보를 수집ㆍ 이용합니다. 수집 항목은 1. 성함 2. 휴대전화번호 3. 주소 입니다.해당 정보의 보유 및 이용 기간은 2023년 3월 1일이며, 위의 목적 외의 목적으로 사용되지 않음을 알려드립니다. 수집ㆍ이용 동의를 거부할 권리가 있으며, 동의를 거부할 경우 우편 발송 서비스 이용이 제한되는 불이익이 있을 수 있습니다."
const RefundPolicy = "See you letter는 고객의 주문과 동시에 제작이 시작되는 개별적 주문 제작 상품으로, 단순 변심에 의한 환불은 불가합니다. 자사의 문제로 상품에 문제가 생겼을 경우에는 관련 법률에 따라 환불을 도와드립니다."
const MarketingPolicy = "<See you letter>는 개인정보보호법에 따라 동의를 얻어 아래와 같이 See you letter 서비스의 홍보 및 마케팅을 위한 개인정보를 수집ㆍ이용합니다. 수집 항목은 1. 이메일 이며, 수집 목적은 1. See you letter 서비스 홍보를 위한 뉴스레터 발송 입니다. 해당 수집 항목은 이외의 목적으로 활용되지 않으며, 해당 수집 항목의 보유 기간은 2023년 3월 1일까지입니다. 귀하는 개인정보 수집ㆍ이용에 동의하지 않을 권리가 있으며, 동의를 거부할 경우에는 거부한 내용 관련 서비스를 받을 수 없습니다.";


function PersonalInfoAgreement({ agreementInfo }) {

  let PersonalInfoList =Array(4).fill(0);

  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
  });

  const handleAllChange = (e) => {
    setState({

      checkedA: true,
      checkedB: true,
      checkedC: true,
      checkedD: true,
    })
  }


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log("in handleChange", state.checkedA, state.checkedB, state.checkedC, state.checkedD)
  };
  console.log("out handleChange", state.checkedA, state.checkedB, state.checkedC, state.checkedD)
 
  
  agreementInfo.bValue=state.checkedB
  agreementInfo.cValue= state.checkedC

  /*
  useEffect(() => {
    console.log("in use")
    
    if  (state.checkedB == true && state.checkedC == true) {
        console.log(" in true", state.checkedB, state.checkedC)
        test (0);

      } else{
        test(1);
      }


  }, [flag]);
*/
  return (
    <div style={{ position: "relative", top: "900px", width: "390px" }}>
      <FormGroup >
        <FormControlLabel

          control={
            <BrownCheckbox
              onChange={handleAllChange}
              name="checkedA"
              checked={state.checkedA}
            />}
          label="모두동의"

        />
       <div style={{ display: "flex", alignItems: "center" }}>
          <FormControlLabel
            control={<BrownCheckbox
              onChange={handleChange}
              checked={state.checkedB}
              name="checkedB" />}
            label="개인정보 동의"

          />
          <ConditionText>필수</ConditionText>
        </div>
        <AgreementTextField value={PersonalInfo} rows="4" readOnly />
        <div style={{ display: "flex", alignItems: "center" }}>
          <FormControlLabel

            control={
              <BrownCheckbox
                onChange={handleChange}
                checked={state.checkedC}
                name="checkedC" />}
            label="환불정책 동의"


          />
          <ConditionText>필수</ConditionText>
        </div>
        <AgreementTextField value={RefundPolicy} rows="4" readOnly />



        <div style={{ display: "flex", alignItems: "center" }}>
          <FormControlLabel

            control={<BrownCheckbox
              onChange={handleChange}
              checked={state.checkedD}
              name="checkedD" />}
            label="마케팅 정책 동의"


          />
          <ConditionText>선택</ConditionText>
        </div>

        <AgreementTextField value={MarketingPolicy} rows="4" readOnly />



      </FormGroup>
    </div>
  )
}

export default PersonalInfoAgreement


const ConditionText = styled.p`
font-family: SpoqaHanSans;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;
/* identical to box height */


color: #EEB900;


`
const AgreementTextField = styled.textarea`
border-style:none;

background-color:white;
;
width:330px;
margin: 0 0 0 0;
resize:none;
position:relative;
top:0px;
left:24px;
font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
text-align: justify;
&:hover{
    border-style:none;
}
opacity: 0.8;
`;
