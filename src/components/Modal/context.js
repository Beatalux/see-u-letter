import { useContext } from 'react';

import { ExtraWordsContext } from '../../contexts/ExtraPagesContext'


export const useTexts = () => {
    const [state, setState] = useContext(ExtraWordsContext);
 
    function togglePlay(v) {

        if (v === true) {
            togglePlay();
            setState(state => ({ ...state, isClick: v, isReached: !state.isReached }));

        } else {

            setState(state => ({ ...state, isClick:v}));
        }
    }


return {
    togglePlay,
    isClick: state.isClick,
    isReached: state.isReached,
}

}