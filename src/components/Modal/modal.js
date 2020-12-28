import React from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "./modalContext";
import styled from 'styled-components'

const Modal=()=>{
    let {modalContent, handleModal,modal} =React.useContext(ModalContext);
    if(modal){
        return ReactDOM.createPortal(
    
            <BackgroundMask>
            <ModalContainer>
                <p>{modalContent}</p>            
            </ModalContainer>
            </BackgroundMask>,

        document.querySelector("#modal-root")
        );
    }
        else return null;
}

export default Modal;

const BackgroundMask=styled.div`
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
background: rgba(0,0,0,0.6);
}
  

`

const ModalContainer=styled.div`
border-radius:8px;
background-color:white;
justify-content: center;
position: absolute;
width: 331px;
height: 364px;
left: 42px;
top: 200px;
`