import React,{useContext} from 'react'
import {InputContextValue} from '../context/InputContext'

const InputBox = () => {
    const {inputValue,setInputValue}= useContext(InputContextValue);
    
   // console.log(inputValue)
  return (
    <>
       <input 
          style={{fontSize:"1.1rem",border:"none",borderRadius:"2px",padding:"4px"}}
          type='text'
          placeholder='Search product...'
          value={inputValue} 
          onChange={(e)=>setInputValue(e.target.value)} 
        />
    </>
  )
}

export default InputBox
