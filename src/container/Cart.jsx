import React, { useContext } from 'react'
import { ContextState } from '../context/Context'
import { Navbar } from '../component/Navbar';

const Cart = () => {
  const { state,dispatch } = useContext(ContextState);
 const totalSum=state.reduce((prev,curr)=>prev+curr.price,0);
  return (
    <>
    <Navbar />
    <div className='cart-section'>
      <div className='cartTotal'>
        <div>Total Amount</div>
        <div>$ {totalSum}</div>
      </div>
      {state.length>0  ? <button onClick={()=>dispatch({type:"Reset"})}>Empty</button>: ""}
      

      <div className='cartContainer'>
        {state.map((item) => <div className='cartBox' key={item.id}>
          <button onClick={()=>dispatch({type:"DeleteItem",payload:item.id})}>Delete</button>
          <div><img src={item.image} height="60px" width="50px" alt={item.title} /></div>
          <div>{(item.title).slice(0, 24)}</div>
          <div>$ {item.price}</div>
          {/* <div>count</div> */}
        </div>)
        }
      </div>
    </div>
    </>
  )
}

export default Cart
