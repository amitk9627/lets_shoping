import React,{createContext,useReducer} from 'react'

export const ContextState=createContext(null);

export const Context = ({children}) => {
  
    const reducer=(state,action)=>{
        switch(action.type){
            case "AddToCart":
                return ([...state,action.payload]);


            default : return state;
        }

    }
    const[state,dispatch]=useReducer(reducer,[])
    const info={state,dispatch};
  return (
    <ContextState.Provider value={info}>
      {children}
    </ContextState.Provider>
  )
}

  
