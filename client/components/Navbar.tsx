import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearch, BiSolidVideos } from "react-icons/bi";

const Navbar = () => {
  return (
    <section className='flex sticky top-0 z-50 bg-white px-2'>
      {/* Logo/Icon */}
      <nav className='flex justify-between items-center w-[100%] py-4'>
        <Link href='/'>
          <div className='flex gap-2 items-center justify-center'>
            <BiSolidVideos className='text-2xl text-[#ff0000]' />
            <h1 className='font-semibold text-md text-[#272727]'>VidiVerse</h1>
          </div>
        </Link>
        <div className='flex item-center justify-center border-2 p-2 border-r-8 rounded-2xl'>
          <input
            className='border-none outline-none lg:w-[400px] w-full'
            type='text'
            placeholder='Search'
          />
          <BiSearch className='cursor-pointer text-lg text-[#272727]' />
        </div>
        <Link href='/login'>
          <div
            className='inline-flex items-center gap-1 border-2 border-blue-400 p-2 text-blue-600  cursor-pointer'
            style={{ maxWidth: "max-content" }}
          >
            <AiOutlineUser />
            <button className='text-xs'>SIGNIN</button>
          </div>
        </Link>
      </nav>
    </section>
  );
};

export default Navbar;
