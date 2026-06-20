"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CartItem from "../components/CartItem";
import Container from "../components/Container";
import { useShoppingCartContext } from "../context/ShoppingCartContextProvider";
import { IProductItemProps } from "../components/ProductItem";
import { formatNumberWithCommas } from '../utils/number'

interface IDiscountData {
    id:number;
    code:string;
    percentage:number;
}


function Cart(){
    const {cartItems} =useShoppingCartContext();
    const [data ,setData] = useState <IProductItemProps[]> ([]);
    const [discountCode,SetDiscountCode]=useState("")
    const [discountedPrice,SetDiscountedPrice]=useState(0)
    const [finalPrice,setFinalPrice] = useState(0)


    useEffect(()=>{
        axios (`http://localhost:3002/products`).then((result) => {
            const {data} =result;
            setData(data)
        })
    } ,[])

let totalPrice = cartItems.reduce((total,item) =>{
    let selectedProduct = data.find(
        (product) => product.id == item.id.toString()
    )
    return total +(selectedProduct?.price || 0) *item.qty
} ,0)


const handelSubmitDiscount =() =>{
    axios (`http://localhost:3002/discounts?code=${discountCode}`).then(
        (result)=> {
            const data =result.data as IDiscountData[]

            let discountedPrice =(totalPrice *data[0].percentage) /100
            let finalPrice = totalPrice - discountedPrice

            setFinalPrice(finalPrice)
            SetDiscountedPrice(discountedPrice)

        }
    )
}


    return (
        <Container>
            
            <h1 className="text-righ my-4 rtl">سبد خرید شما  </h1>

        <div className="">
            {cartItems.map((item)=>(
                <CartItem key={item.id} {...item} />

            ))}
        </div> 

    <div className="border shadow-amber-300 text-right p-4">
        <h3 className="rtl">
                قیمت کل : 
                <span> 
                    {formatNumberWithCommas(totalPrice)}$
                </span>

        </h3>
        
        <h3 className="rtl">
            سود شما از خرید:<span> {formatNumberWithCommas(discountedPrice)}$</span>

        </h3>

        <h3 className="rtl">
                قیمت نهایی :<span>  {formatNumberWithCommas(finalPrice)}$</span>

        </h3>
    </div>

    <button  onClick={handelSubmitDiscount}
        className="bg-sky-600 text-white px-4 py-1 rounded">
         اعمال 
    </button>

    <input className="rtl text-right border"
     placeholder="کد تخفیف را وارد کنید"
      type="text"
      onChange={(e) =>SetDiscountCode(e.target.value)}
      />
 

</Container>


    )
}
export default Cart;