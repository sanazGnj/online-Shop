"use client";

import React, { ChangeEvent, useState } from 'react'
import Container from '../components/Container'
import axios from 'axios';


function Dashboard() {
    
    const [newProduct, setNewProduct] = React.useState({
    title: "",
    brand:"",
    category:"",
    price: "",
    image: "",
    description: "",
    
});


const handelChangeProduct = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

   
  setNewProduct((prev) => ({
    ...prev,
    [name]: value,
  }));
}   


const handelCreateProduct = () => {
  console.count("POST REQUEST");
  

  axios.post("http://localhost:3002/products", {
    id: crypto.randomUUID(),
    image: newProduct.image,
    title: newProduct.title,
    description: newProduct.description,
    price: newProduct.price,
    brand:newProduct.brand,
    category:newProduct.category

  });
};


  return (
    <div className="bg-slate-300 p-4 rtl text-right">
        <Container>
           <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">

      <h1 className="text-2xl font-bold mb-8 text-center">
        افزودن محصول جدید
      </h1>

      <div className="grid md:grid-cols-2 gap-4">

        <div>
          <label className="block mb-2 font-medium">
            عنوان محصول
          </label>
          <input
            type="text"
            name="title"
            placeholder="عنوان محصول"
            onChange={handelCreateProduct}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            قیمت
          </label>
          <input
            type="text"
            name="price"
            placeholder="قیمت"
            onChange={handelCreateProduct}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* <div>
          <label className="block mb-2 font-medium">
            برند
          </label>
          <input
            type="text"
            name="brand"
            placeholder="سامسونگ"
            onChange={handelCreateProduct}
            className="w-full border rounded-lg p-3"
          />
        </div> */}

        <div>
          <label className="block mb-2 font-medium">
            دسته‌بندی
          </label>

          <select
            name="category"
            onChange={handelCreateProduct}
            className="w-full border rounded-lg p-3"
          >
            <option value="">انتخاب کنید</option>
            <option value="mobile">موبایل</option>
            <option value="laptop">لپ تاپ</option>
            <option value="home">لوازم خانگی</option>
            <option value="clothes">پوشاک</option>
          </select>
        </div>

<div>
          <label className="block mb-2 font-medium">
            برند
          </label>
          <input
            type="text"
            name="brand"
            placeholder="سامسونگ"
            onChange={handelCreateProduct}
            className="w-full border rounded-lg p-3"
          />
        </div>


      </div>

      <div className="mt-5">
        <label className="block mb-2 font-medium">
          توضیحات محصول
        </label>

        <textarea
          name="description"
          rows={5}
          placeholder="توضیحات محصول..."
          onChange={handelCreateProduct}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div className="mt-5">
        <label className="block mb-2 font-medium">
          تصویر محصول
        </label>

        <input
          type="file"
          accept="image/*"
          className="w-full border rounded-lg p-3"
        />
      </div>

      <button
        type="button"
        onClick={handelCreateProduct}
        className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
      >
        افزودن محصول
      </button>

    </div>
            {/* <div className="grid grid-cols-3 gap-4 rtl">
                <input type="text"  name="title" placeholder="عنوان"  onChange={handelChangeProduct}/>
                <input type="text"  name="price" placeholder="قیمت"  onChange={handelChangeProduct}/>
                <input type="text"  name="brand" placeholder="برند"  onChange={handelChangeProduct}/>
                <input type="text"  name="category" placeholder="دسته بندی "  onChange={handelChangeProduct}/>
                <input type="text"  name="image" placeholder="تصویر "  onChange={handelChangeProduct}/>
                
                
            </div>
            
            <textarea name="description" className=" bg-sky-500 text-white rounded px-4 py-1" placeholder="توضیحات"
                onChange={handelChangeProduct} > 
            </textarea>
            

            <button  type="button" className="bg-blue-500 text-white p-2 rounded mt-2" onClick={handelCreateProduct}>افزودن محصول</button> */}
        </Container>

    </div>
  )
}

export default Dashboard


