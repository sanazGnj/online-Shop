"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import  Cookie  from "js-cookie";
import { redirect } from "next/navigation";




export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const data = axios({
      url: "/login",
      method: "POST",
      data:{
         username:username,
         password:password

      }
    })
    const response ={
      token :"gfdgsdgdskbhdksjfhdjkfhsdjkfitweuvbnfdjd",
      expire:7
    }
    Cookie.set("token" ,response.token ,{expires :response.expire })
    redirect("/dashboard")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-400px border rounded-lg p-8 shadow-sm">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <h1 className="text-3xl font-bold">
            <span className="text-red-500">Shop</span>
            <span className="text-black">Center</span>
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-right">
          ورود | ثبت‌نام
        </h2>

        <p className="text-sm text-gray-500 mt-4 text-right leading-7">
          لطفاً شماره موبایل یا نام کاربری خود را وارد کنید.
        </p>

        {/* Inputs */}
        <div className="mt-6 space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="نام کاربری"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:border-red-500 rtl"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="رمز عبور"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:border-red-500 rtl"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition"
        >
          ورود
        </button>

        {/* Forgot Password */}
        <div className="mt-4 text-center">
          <Link
            href="/forgot-password"
            className="text-sm text-blue-600"
          >
            رمز عبور را فراموش کرده‌اید؟
          </Link>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-8 leading-6 ">
          ورود شما به معنای پذیرش
          <span className="text-blue-600 cursor-pointer">
            {" "}شرایط و قوانین{" "}
          </span>
          و
          <span className="text-blue-600 cursor-pointer">
            حریم خصوصی
          </span>
          است.
        </p>
      </div>
    </div>
  );
}