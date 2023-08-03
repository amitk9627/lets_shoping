import React,{createContext,useState} from 'react'
export const InputContextValue=createContext(null);
const InputContext = ({children}) => {
    const[inputValue,setInputValue]=useState("");
  return (
    <InputContextValue.Provider value={{inputValue,setInputValue}}>
      {children}
    </InputContextValue.Provider>
  )
}

export default InputContext;
