import React, { useContext } from 'react'
import { ContextState } from '../context/Context'

const Cart = () => {
  const {state} = useContext(ContextState);
  console.log(state);
  return (
    <div>

    </div>
  )
}

export default Cart
