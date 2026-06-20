"use client"

import React, { Children, use, useContext, useEffect } from 'react'
import { createContext ,useState } from "react";

type ShoppingCartContextProviderProps = {
    children: React.ReactNode;
}

type CartItems= {
    id:number,
    qty:number
}
type ShoppingCartContextType = {
    cartItems: CartItems[];
    handelIncreaseProductQty: (id:number) => void;
    getProductQty: (id:number) => number;
    cartTotalQty: number;
    handelDecreaseProductQty: (id:number) => void;
    handelRemoveProduct?: (id:number) => void;
}

const ShoppingCartContext =createContext({} as ShoppingCartContextType);

export const useShoppingCartContext = () => {
    return useContext (ShoppingCartContext) 
}


export function ShoppingCartContextProvider({
    children ,
}:ShoppingCartContextProviderProps) {

 const [cartItems, setCartItems] = React.useState<CartItems[]>([]);

const getProductQty =(id:number) =>{
    return cartItems.find( item =>item.id === id)?.qty || 0
}

const cartTotalQty = cartItems.reduce((totalQty ,item) =>{
    return totalQty + item.qty
},0)

const handelRemoveProduct =(id:number) => {
    setCartItems (currentItem => {
        return currentItem.filter((item) => item.id !== id)

    })
}


const handelDecreaseProductQty =(id:number) => {
    setCartItems (currentItem =>{
        let isLastOne= currentItem.find((item) => item.id == id)?.qty === 1
        if (isLastOne){
            return currentItem.filter((item) => item.id !== id)

        }else{
            return currentItem.map ((item) => {
                if(item.id == id) {
                    return {...item, qty: item.qty - 1}
                }else {
                    return item
                }
        })
    }
 })
}


const handelIncreaseProductQty =(id:number) => {
    setCartItems (currentItem => {
        let isNotProductExist = currentItem.find ((item) => item.id == id) == null
        
        if (isNotProductExist) {
            return [...currentItem, {id:id, qty:1}]
        }else {
            return currentItem.map ((item) => {
                if(item.id == id) {
                    return {...item, qty: item.qty + 1}
                }else {
                    return item
                }
            })
        }
    }) 
}


useEffect (() => {
    const storedItems = localStorage.getItem("cartItems")
    if (storedItems) {
        setCartItems (JSON.parse (storedItems))
    }
}
,[])

useEffect (() => {
    localStorage.setItem ("cartItems", JSON.stringify (cartItems))
}, [cartItems])


  return (
  <ShoppingCartContext.Provider value={{cartItems ,handelIncreaseProductQty ,getProductQty 
  ,cartTotalQty ,handelDecreaseProductQty, handelRemoveProduct}}>
    {children}
  </ShoppingCartContext.Provider>
  )
}

