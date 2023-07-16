import React, { useContext } from 'react'
import { ContextState } from '../context/Context'

const Cart = () => {
  const { state,dispatch } = useContext(ContextState);
 
  return (
    <div className='cart-section'>
      <div className='cartTotal'>
        <div>Total Amount</div>
        <div>$783</div>
      </div>
      {state.length>0  ? <button onClick={()=>dispatch({type:"Reset"})}>Empty</button>: ""}
      

      <div className='cartContainer'>
        {state.map((item) => <div className='cartBox' key={item.id}>
          <button onClick={()=>dispatch({type:"DeleteItem",payload:item.id})}>Delete</button>
          <div><img src={item.image} height="60px" width="50px" alt={item.title} /></div>
          <div>{(item.title).slice(0, 24)}</div>
          <div>{item.price}</div>
          <div>count</div>
        </div>)
        }
      </div>
    </div>
  )
}

export default Cart
