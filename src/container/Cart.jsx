import React, { useContext } from 'react'
import { ContextState } from '../context/Context'
import { Navbar } from '../component/Navbar';
import {AiFillDelete} from 'react-icons/ai'

const Cart = () => {
  const { state,dispatch } = useContext(ContextState);
 // console.log(state)
 
 
  return (
    <>
    <Navbar />
    <div className='cart-section'>
      <div className='cartTotal'>
        <div>Total Amount</div>
        {/* <div>$ {totalSum}</div> */}
      </div>
      {state.length>0  ? <button onClick={()=>dispatch({type:"Reset"})}>Empty</button>: ""}
       {state.length===0 ? <h1 style={{textAlign:"center"}}>Cart is Empty</h1> : ""}

      <div className='cartContainer'>
        {state.map((item,i) => <div className='cartBox' key={i}>
         
          
          <div><img src={item.payload.image} height="60px" width="50px" alt={item.payload.title} /></div>
          <div>{(item.payload.title).slice(0,25)}</div>
          <div>$ {item.payload.price}</div>
          <div> {item?.count}</div>
          {/* <button onClick={()=>dispatch({type:"DeleteItem",payload:item.payload.id})}><AiFillDelete /></button> */}
         
        </div>)
        }
      
      </div>
    </div>
    </>
  )
}

export default Cart
