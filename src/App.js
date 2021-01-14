import React from 'react';
import styled from 'styled-components';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {ExtraWordsProvider} from './contexts/ExtraPagesContext'
//import './index.css';

//import GlobalFonts from './Fonts/font';

import IntroScreen from './Screens/ServiceIntroductionFlow/IntroScreen'
import MainScreen from './Screens/ServiceIntroductionFlow/MainScreen';
import LandingScreen from './Screens/ServiceIntroductionFlow/LandingScreen';
import ReceiverOptionsScreen from './Screens/LetterOptionsFlow/ReceiverOptionsScreen';
import FontOptionsScreen from './Screens/LetterOptionsFlow/FontOptionsScreen'
import TopicOptionsScreen from './Screens/LetterOptionsFlow/TopicOptionsScreen'
import MonthOptionsScreen from './Screens/LetterOptionsFlow/MonthOptionsScreen'
import LetterPaperOptionsScreen from './Screens/LetterOptionsFlow/LetterPaperOptionsScreen';
import FaQScreen from './Screens/ServiceIntroductionFlow/FaQScreen'
import WritingLetterScreen from './Screens/WritingLetterFlow/WritingLetter'
import DeliveryInfoScreen from './Screens/PayFlow/DeliveryInfoScreen';
import PhotoUploadScreen from './Screens/PhotoUploadFlow/PhotoUploadScreen'
import PhotoCheckScreen from './Screens/PhotoUploadFlow/PhotoCheckScreen'
import PhotoUploadIntroScreen from './Screens/PhotoUploadFlow/PhotoUploadIntroScreen'
import TermsOfServiceScreen from './Screens/ServiceIntroductionFlow/TermsOfServiceScreen'
import SenderInfoScreen from './Screens/ServiceIntroductionFlow/SenderInfoScreen'
import TopicOptionIntroScreen from './Screens/LetterOptionsFlow/TopicOptionsIntroScreen'
import PaymentInfoScreen from './Screens/PayFlow/PaymentInfoScreen'
import LastScreen from './Screens/PayFlow/LastScreen'
import NotFound from './Screens/NotFound'
import PreviewScreen from './Screens/WritingLetterFlow/LetterPreviewScreen'
export default function App() {
  return (
    <ExtraWordsProvider>
    <Wrapper>
      {' '}
      {/*Wrapper components are components that surround unknown components and provide a default structure to display the child components.*/}
      <Switch>
        <Route component={IntroScreen} exact path="/"/>
        <Route component={ReceiverOptionsScreen} path ="/receiver/"/>
        <Route component={MonthOptionsScreen} exact path ="/month/"/>
        <Route component={FontOptionsScreen} path="/font"/>
        <Route component={TopicOptionsScreen} path="/topic"/>
        <Route component={LetterPaperOptionsScreen} exact path="/paper"/>
        <Route component={FaQScreen} exact path="/faq"/>
        <Route component={WritingLetterScreen} exact path="/writing"/>
        <Route component={PreviewScreen} exact path="/preview"/>
        <Route component={PhotoUploadScreen} exact path="/upload"/>
        <Route component={PhotoCheckScreen} exact path="/check"/>
        <Route component={PhotoUploadIntroScreen} exact path="/photoIntro"/>
        <Route component={LastScreen} exact path="/culetter"/>
        <Route component={LandingScreen} exact path="/landing"/>
  
        <Route component={PaymentInfoScreen} path="/payInfo"/>
        <Route component={DeliveryInfoScreen} path="/deliveryInfo"/>
        <Route component={PhotoUploadScreen} path="/photoUpload"/>
        <Route component={TermsOfServiceScreen} path="/serviceTerms"/>
        <Route component={SenderInfoScreen} path="/senderInfo"/>      
        <Route component={TopicOptionIntroScreen} path="/topicIntro"/>
      <Route component={NotFound}/>
      </Switch>
   
    </Wrapper>
    </ExtraWordsProvider>
  );
}

const mobile=`(min-width:415px)`;

const Wrapper = styled.div` 

  align-items:center;
  height: 100vh;
  margin: 0 16px 0 16px;
  @media only screen and ${mobile}{
    background-color: white;
    position:center;
    transform:scale(0.4);
  }
`;