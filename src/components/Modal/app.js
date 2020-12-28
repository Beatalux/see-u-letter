import React from "react";
import { ModalProvider } from "./modalContext";
import Component from "./component";
//import Component2 from "./component2";

export default function App() {
  return (
    <>
      <ModalProvider>
        <Component />
   
      </ModalProvider>
    </>
  );
}