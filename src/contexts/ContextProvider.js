import React,{createContext,useContext,useState} from'react';
    const StateContext=createContext();
    const initialstate={
      chat:false,
      cart:false,
      userProfile:false,
      notificaton:false,
    }

    export const ContextProvider=({children})=>{
        const[activeMenu,setActiveMenu]=useState(true);
        const [isClicked,setIsClicked]=useState(initialstate);
        const [screenSize,setScreenSize] = useState(undefined);
        const handleClick = (clicked)=>{
            setIsClicked({...initialstate,[clicked]:true})
        }
       return(
         <StateContext.Provider
            value={{
              activeMenu,
              setActiveMenu,
              isClicked,
              setIsClicked,
              handleClick,
              screenSize,
              setScreenSize
            }}
          >
            {children}
         </StateContext.Provider>
       )
      }
export const useStateContext=()=>useContext(StateContext);