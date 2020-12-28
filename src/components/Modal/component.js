import React from "react";
import { ModalContext } from "./modalContext";
import { MainText, SubtitleText, Button, TitleText } from '../texts/text'

const Component2 = () => {
    let { handleModal } = React.useContext(ModalContext);


    React.useEffect(() => {
        handleModal(<ContentComponent/>);

    }, []);

    return (
        <>

            <button
                className="mt-6 rounded  bg-purple-700 text-purple-100 px-5 h-12"
                onClick={() => handleModal("This is component 2 modal content")}
            >
                open this modal!
      </button>
        </>
    );
};

function ContentComponent() {
   
        let { handleModal } = React.useContext(ModalContext);
        const handleAction=(e)=>{
            alert('hi');
        }

    return (
        <>
            <TitleText>편지지 페이지를 나가시면 내용이 삭제됩니다</TitleText>
            <MainText>페이지를 이탈하실 경우 내용을 미리 복사해두세요.</MainText>
            <Button onClick={()=>{handleModal();handleAction();}}>페이지 나가기</Button>
     
        </>
    );

}

export default Component2;
