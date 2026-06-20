"use client"
import React, { useContext } from 'react'
import { useShoppingCartContext } from '../context/ShoppingCartContextProvider'

interface IAddToCartProps {
  id:string
}

function AddToCart({id}:IAddToCartProps) {

const {cartItems , handelIncreaseProductQty,getProductQty ,handelDecreaseProductQty,handelRemoveProduct} = useShoppingCartContext()
console.log(cartItems)


  return (
   <div >
       <div className="mt-4">
        <button onClick={() => handelIncreaseProductQty(parseInt(id))} className="px-4 py-2 rounded bg-sky-600 text-white">+</button>
         <span className="mx-4"> {getProductQty(parseInt(id))}  </span>
        <button onClick={() => handelDecreaseProductQty(parseInt(id))} className="px-4 py-2 rounded bg-sky-600 text-white">-</button>
     </div>
    <button onClick={() => handelRemoveProduct(parseInt(id))}  className="px-4 py-2 mt-2 rounded bg-red-600 text-white"> حذف از سبد خرید </button>

   </div>
  )
}

export default AddToCart 