import React from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className=' bg-[#17141b] px-4 py-4 sticky top-0 flex items-center justify-between'>
      <div className='flex gap-4 items-center justify-between border-2 rounded-full px-4 py-1 w-1/3'>
        <input
          className='outline-none bg-[inherit] text-white text-sm w-full'
          type='text'
          placeholder='Search Videos'
        />
        <FaSearch className='text-white' />
      </div>
      <div>
        <Link to='/login'>
          <div className='flex gap-2 items-center border-2 border-blue-500 justify-center py-1 w-fit px-2 text-white'>
            <CgProfile />
            <h2 className='cursor-pointer'>SIGN IN</h2>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
