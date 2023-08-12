import React, { useContext } from 'react'
import { ContextState } from '../context/Context'
import { Navbar } from '../component/Navbar';
import {AiFillDelete} from 'react-icons/ai'

const Cart = () => {
  const { state,dispatch } = useContext(ContextState);
 
 // console.log(state)
 const totalSum=state.reduce((prev,curr)=>prev+ curr.price,0);
 
 
 
  return (
    <>
    <Navbar />
    <div className='cart-section'>
      <div className='cartTotal'>
        <div>Total Amount</div>
        <div>$ {Math.ceil(totalSum)}</div>
      </div>
      {state.length>0  ? <button onClick={()=>dispatch({type:"Reset"})} className='emptyBtn'>Empty</button>: ""}
       {state.length=== 0 ? <h1 style={{textAlign:"center"}}>Cart is Empty</h1> : ""}

      <div className='cartContainer'>
        {state.map((item,i) => <div className='cartBox' key={i}>
         
          
          <div><img src={item.image} height="60px" width="50px" alt={item.title} /></div>
          <div>{(item.title).slice(0,25)}</div>
          <div>$ {item.price}</div>
          <div> {item?.count}</div>
          <button onClick={()=>dispatch({type:"DeleteItem",payload:item.id})}><AiFillDelete /></button>
         
        </div>)
        }
      
      </div>
    </div>
    </>
  )
}

export default Cart
