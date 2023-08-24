import Navbar from "@/components/Navbar";
import React from "react";

const login = () => {
  return (
    <div className='mx-4 font-roboto'>
      <Navbar />
      <div className='flex justify-center items-center h-[100vh] bg-yellow-50 '>
        <div
          className='flex flex-col gap-4 
      border-2 p-10 rounded-lg bg-[#272727] text-white items-center lg:w-[400px]'
        >
          <h2 className='text-center'>SIGN IN</h2>
          <p className='text-center'>to continue to VIDI-VERSE</p>
          <input
            className='text-[#272727] outline-none rounded-sm lg:w-[300px] lg:py-2'
            type='text'
            placeholder='Username'
          />
          <input
            className='text-[#272727] outline-none rounded-sm lg:w-[300px] lg:py-2'
            type='text'
            placeholder='Password'
          />
          <button className='text-white bg-[#ff0000] border-2 border-gray-500 rounded-md px-6 py-[2px] cursor-pointer h-max w-max hover:rounded-none'>
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
            placeholder='Email'
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
      </div>
    </div>
  );
};

export default login;
