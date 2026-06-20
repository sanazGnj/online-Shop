import React, { useEffect, useState } from 'react'
import AddToCart from './AddToCart'
import axios from 'axios';
import { IProductItemProps } from './ProductItem';
import { formatNumberWithCommas } from '../utils/number';

interface ICartItemProps {
  id: number;
  qty: number;
}

function CartItem({id, qty}:  ICartItemProps) {
  
  const [data,setData] =useState({} as IProductItemProps)

useEffect(() => {
  axios.get(`http://localhost:3002/products/${id}`).then((result) => {
    const {data} = result;
    setData(data)
  
  })
},[] )

  return (
    <div className="grid grid-cols-12 gap-4 bg-white mb-4 p-4 rounded-xl border items-center rtl">

      {/* تصویر */}
      <div className="col-span-2">
        <img
          className="w-full h-24 object-contain"
          src={data.image}
          alt={data.title}
        />
      </div>

      {/* اطلاعات محصول */}
      <div className="col-span-7 text-right">
        <h2 className="font-bold text-lg">
          {data.title}
        </h2>

        <p className="text-sm text-gray-600 mt-2">
          تعداد: {qty}
        </p>

        <p className="mt-2 font-bold text-red-500">
          قیمت: {formatNumberWithCommas(data.price ?? 0)} $
        </p>
      </div>

      {/* کنترل تعداد */}
      <div className="col-span-3 flex justify-end">
        <AddToCart id={id.toString()} />
      </div>

    </div>
  );
  // return (
  //   <div className="grid grid-cols-12 bg-slate-100 mb-4">
  //               <div className="col-span-10 text-right p-4">
  //                    <h2 className="font-bold text-xl ">{data.title}</h2>
  //                    <p>تعداد: <span> {qty}</span></p>
  //                    <p className="rtl">قیمت محصول: <span> {formatNumberWithCommas(data.price??0)}$</span></p>
            
  //               </div>
  //               <AddToCart id={id.toString()}/>

  //                   <img className="col-span-2" src={data.image} alt=" image"/>

  //           </div>
  // )
}

export default CartItem