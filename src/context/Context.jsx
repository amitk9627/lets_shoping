import React, { createContext, useReducer } from 'react'

export const ContextState = createContext(null);

export const Context = ({ children }) => {

  const reducer = (state, action) => {
    switch (action.type) {
      // add item
      case "AddToCart":
        let count = 1;
        let updateArray = state.find((item) => item.payload.id === action.payload.id);
        
        if(updateArray) {
           
          updateArray.count=updateArray.count+1;
          // console.log(updateArray)

        }else{
          return ([...state, { count: count, payload: action.payload }]);
        }
       
        // if (updateArray) {
        //   console.log("repeat");
        //   count = count + 1;
        //   return ([...state, { count: count, payload: action.payload }]);
        // } else {
          
        // }
      // delete item
      case "DeleteItem":
        return (state.filter((item,i) => item.id !== action.payload));
     
      // reset cart
      case "Reset":
        return state = [];

      default: return state;
    }

  }
  const [state, dispatch] = useReducer(reducer, [])
  const info = { state, dispatch };
  return (
    <ContextState.Provider value={info}>
      {children}
    </ContextState.Provider>
  )
}


