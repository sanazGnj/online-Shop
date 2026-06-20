"use client";

import Link from "next/link";
import { ShoppingCart, User, Search, Menu } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { useShoppingCartContext } from "../context/ShoppingCartContextProvider";



export default function Navbar() {


const { cartTotalQty } = useShoppingCartContext();


  return (
    <header className="shadow-sm border-b bg-white">
      
      {/* Top Navbar */}
      <div className="container mx-auto px-4 h-16 flex items-center justify-between rtl sha">

        <div className="flex items-center gap-4">
          <h1 className="font-bold text-2xl text-red-500 ">
            <a href="/">ShopCenter</a>
          </h1>
          

          <div className="relative hidden md:block">
            <Search
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="جستجو در محصولات..."
              className="w-500px bg-gray-100 rounded-xl pr-10 pl-10 py-2 outline-none"
            />
          </div>
        </div>

      <div className="flex items-center gap-5">
            <Link href="/login">
              <User />
            </Link>

         <div className="h-6 w-px bg-gray-300 " />

            {/* <Link href="/cart">
              <ShoppingCart />
            </Link> */}
            <Link href="/cart" className="relative">
  <ShoppingCart />

  {cartTotalQty > 0 && (
    <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-red-500 text-white text-xs">
      {cartTotalQty}
    </span>
  )}
</Link>
          </div>
       </div>

      {/* Categories */}
      <div className="container mx-auto px-4 h-12 flex items-center gap-8 text-sm rtl">
        <MegaMenu />

      </div>
    </header>
  );
}