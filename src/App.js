import React from 'react';
import styled from 'styled-components';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";


//import GlobalFonts from './Fonts/font';

import IntroScreen from './Screens/ServiceIntroductionFlow/IntroScreen'
import MainScreen from './Screens/ServiceIntroductionFlow/MainScreen';
import ReceiverOptionsScreen from './Screens/LetterOptionsFlow/ReceiverOptionsScreen';
import FontOptionsScreen from './Screens/LetterOptionsFlow/FontOptionsScreen'
import TopicOptionsScreen from './Screens/LetterOptionsFlow/TopicOptionsScreen'
import PhotoSelectScreen from './Screens/PhotoSelectScreen';
import FaQScreen from './Screens/ServiceIntroductionFlow/FaQScreen'
import WritingLetterScreen from './Screens/WritingLetterScreen'
import sidebar from './components/forMainScreen/Sidebar'
import WritingCopy from './Screens/Writingcopy';
import DeliveryInfoScreen from './Screens/PayFlow/DeliveryInfoScreen';
//import PhotoUploadScreen from './Screens/PhotoUploadScreen'
import PhotoUploadScreen from './components/forPhotoUploadScreen/index'
import TermsOfServiceScreen from './Screens/ServiceIntroductionFlow/TermsOfServiceScreen'
import SenderInfoScreen from './Screens/LetterOptionsFlow/SenderInfoScreen'
import TopicOptionIntroScreen from './Screens/LetterOptionsFlow/TopicOptionIntroScreen'
//import LicenseScreen from 
export default function App() {
  return (
    <Wrapper>
      {' '}
      {/*Wrapper components are components that surround unknown components and provide a default structure to display the child components.*/}
      <Switch>
        <Route component={IntroScreen} exact path="/"/>
        <Route component={MainScreen} exact path="/main"/>
        <Route component={ReceiverOptionsScreen} path ="/receiverOption/:userID"/>
        <Route component={FontOptionsScreen} path="/font"/>
        <Route component={TopicOptionsScreen} path="/topic"/>
        <Route component={PhotoSelectScreen} exact path="/photoSelect"/>
        <Route component={FaQScreen} exact path="/faq"/>
        <Route component={WritingLetterScreen} exact path="/writingLetter"/>
        <Route component={DeliveryInfoScreen} path="/deliveryInfo"/>
        <Route component={PhotoUploadScreen} path="/photoUpload"/>
        <Route component={TermsOfServiceScreen} path="/serviceTerms"/>
        <Route component={SenderInfoScreen} path="/senderInfo"/>      
        <Route component={TopicOptionIntroScreen} path="/topicIntro"/>
      </Switch>
   
    </Wrapper>
  );
}

const mobile=`(min-width:415px)`;

const Wrapper = styled.div` 
 z-index:-1;
  background-color: #abc7d1;
  height: 100vh;



  margin: 0 16px 0 16px;
  @media only screen and ${mobile}{
    background-color: black;
  }
`;