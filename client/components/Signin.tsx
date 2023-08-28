"use client";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "@/redux/userSlice";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const Signin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signin",
        {
          name,
          password,
        },
        { withCredentials: true }
      );
      dispatch(loginSuccess(res.data));
      // console.log(res.data);
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  return (
    <div className='flex flex-col justify-center items-center h-[100vh] bg-yellow-50 '>
      <div
        className='flex flex-col gap-4 
      border-2 p-10 rounded-lg bg-[#272727] text-white items-center lg:w-[400px] sm:w-[350px] xs:w-[300px] w-[250px]'
      >
        <h2 className='text-center'>SIGN IN</h2>
        <p className='text-center'>to continue to VIDI-VERSE</p>
        <input
          className='text-[#272727] outline-none rounded-sm lg:w-[300px] lg:py-2'
          type='text'
          placeholder='Username'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className='text-[#272727] outline-none rounded-sm lg:w-[300px] lg:py-2'
          type='text'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className='text-white bg-[#ff0000] border-2 border-gray-500 rounded-md px-6 py-[2px] cursor-pointer h-max w-max hover:rounded-none'
        >
          SIGN IN
        </button>
        <hr className='border-yellow-200 w-48 mb-4 mt-2 lg:w-[275px] lg:py-2' />
        <span>OR</span>

        <input
          className='text-[#272727] outline-none rounded-sm lg:w-[300px] lg:py-2'
          type='text'
          placeholder='Username'
        />
        <input
          className='text-[#272727] outline-none rounded-sm lg:w-[300px] lg:py-2'
          type='text'
        />
        <input
          className='text-[#272727] outline-none rounded-sm lg:w-[300px] lg:py-2'
          type='text'
          placeholder='Password'
        />
        <button className='text-white bg-[#ff0000] border-2 border-gray-500 rounded-md px-6 py-[2px] cursor-pointer h-max w-max hover:rounded-none'>
          SIGN UP
        </button>
      </div>
      <div className='font-semibold flex gap-6 xs:gap-20 sm:gap-32 text-[12px] mt-2 justify-between items-center lg:gap-40 text-gray-700 lg:text-sm'>
        <div>
          <Link href='/'>
            <h2>English(USA)</h2>
          </Link>
        </div>
        <div className='flex gap-4'>
          <Link href='/'>
            <h4>Help</h4>
          </Link>
          <Link href='/'>
            <h4>Privacy</h4>
          </Link>
          <Link href='/'>
            <h4>Terms</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
