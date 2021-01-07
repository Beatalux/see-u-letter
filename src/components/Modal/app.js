import React from "react";
import { ModalProvider } from "./modalContext";
import Component from "./component";
import {FinshingLetterButton,LeavingLetterButton} from "./component";
export default function App() {
  
  return (
    <>
      <ModalProvider>
        <Component />
   
      </ModalProvider>
    </>
  );
}

export function FinishBtn(){
  return(
    <ModalProvider>
    <FinshingLetterButton/>
  </ModalProvider>


  )
}


export function LeaveBtn(){
  return(
    <ModalProvider>
    <LeavingLetterButton/>
  </ModalProvider>
  )
}