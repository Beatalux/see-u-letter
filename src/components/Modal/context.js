import { useContext } from 'react';

import { ExtraWordsContext } from '../../contexts/ExtraPagesContext'


export const useTexts = () => {
    const [state, setState] = useContext(ExtraWordsContext);

    function togglePlay(v) {

        if (v === true) {
            setState(state => ({ ...state, isClick: v, isReached: !state.isReached }));

        } else {
            setState(state => ({ ...state, isClick: v }));
        }
    }

    function  handleQuestions(v) {

        setState(state => ({ ...state, passingTopics: v }));
    }

    function  handleImages(v) {

        setState(state => ({ ...state, passedImage: v }));
    }


    return {
        togglePlay,
        handleQuestions,
        handleImages,
        isClick: state.isClick,
        isReached: state.isReached,
        passingTopics: state.passingTopics,
        passedImage:state.passedImage
        
    }

}