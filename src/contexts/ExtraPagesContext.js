
import React,{createContext,useState} from "react";

const ExtraWordsContext=createContext([{}, () => {}]);

//{isExtraWords:false}
const ExtraWordsProvider = (props) => {
    const [state, setState] = useState(false);
    return (
      <ExtraWordsContext.Provider value={[state, setState]}>
        {props.children}
      </ExtraWordsContext.Provider>
    );
  }

/*

const ExtraWordsContext=createContext({
    state:{isExtraWords:"false"},
    actions:{setIsExtraWords:()=>{}}
});

const ExtraWordsProvider=({children})=>{
    const [isExtraWords,setIsExtraWords]=useState(true);
    const value={
        state:{isExtraWords},
        actions:{setIsExtraWords}
    }
    return(
    <ExtraWordsContext.Provider value={value}>{children}</ExtraWordsContext.Provider>
    );
}

const {Consumer:WordsConsumer}= ExtraWordsContext;
export{ExtraWordsProvider,WordsConsumer};
*/
export { ExtraWordsContext,ExtraWordsProvider};
