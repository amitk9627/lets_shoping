import React,{createContext,useReducer} from 'react'

export const ContextState=createContext(null);

export const Context = ({children}) => {
  
    const reducer=(state,action)=>{
        switch(action.type){
            // add item
            case "AddToCart":
                return ([...state,action.payload]);
            // delete item
            case "DeleteItem":
              return (state.filter((item)=>item.id!==action.payload));
            // reset cart
            case "Reset" :
              return state=[];

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

  
