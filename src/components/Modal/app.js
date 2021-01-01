import React from "react";
import { ModalProvider } from "./modalContext";
import Component from "./component";
import {FinshedLetterButton} from "./component";
export default function App() {
  
  return (
    <>
      <ModalProvider>
        <Component />
   
      </ModalProvider>
    </>
  );
}

export function FinishedBtn(){
  return(
    <ModalProvider>
    <FinshedLetterButton/>

  </ModalProvider>


  )
}