import React, { useContext } from 'react'
import { ContextState } from '../context/Context'
import { Navbar } from '../component/Navbar';
import {AiFillDelete} from 'react-icons/ai'

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
       {state.length===0 ? <h1 style={{textAlign:"center"}}>Cart is Empty</h1> : ""}

      <div className='cartContainer'>
        {state.map((item) => <div className='cartBox' key={item.id}>
          
          <div><img src={item.image} height="60px" width="50px" alt={item.title} /></div>
          <div>{(item.title).slice(0, 24)}</div>
          <div>$ {item.price}</div>
          <button onClick={()=>dispatch({type:"DeleteItem",payload:item.id})}><AiFillDelete /></button>
         
        </div>)
        }
      
      </div>
    </div>
    </>
  )
}

export default Cart
