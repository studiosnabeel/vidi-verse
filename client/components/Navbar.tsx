import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <section>
      <nav className='flex justify-around items-center w-[100%] py-4'>
        <div className='flex item-center justify-center border-2 p-2 border-r-8 rounded-2xl'>
          <input
            className='border-none outline-none'
            type='text'
            placeholder='Search'
          />
          <BiSearch className='cursor-pointer text-lg text-[#272727]' />
        </div>
        <div
          className='inline-flex items-center gap-1 border-2 border-blue-400 p-2 text-blue-600  cursor-pointer'
          style={{ maxWidth: "max-content" }}
        >
          <AiOutlineUser />
          <button className='text-xs'>SIGNIN</button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
