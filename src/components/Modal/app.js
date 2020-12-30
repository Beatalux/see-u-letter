import React from "react";
import { ModalProvider } from "./modalContext";
import Component from "./component";
//import Component2 from "./component2";
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