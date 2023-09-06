import React from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiVideoPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  //====== Tailwind CSS instances =======
  const Avatar = "w-[36px] h-[36px] rounded-[50%] bg-[#999]";
  const User = "flex items-center gap-2 font-[500] text-white";

  //======== React Hooks Section =========
  const { currentUser } = useSelector((state) => state.user);
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
        {currentUser ? (
          <div className={User}>
            <BiVideoPlus className='text-2xl' />
            <img className={Avatar} src={currentUser.img} alt='Avatar' />
            {currentUser.name}
          </div>
        ) : (
          <Link to='/login'>
            <div className='flex gap-2 items-center border-2 border-blue-500 justify-center py-1 w-fit px-2 text-white'>
              <CgProfile />
              <h2 className='cursor-pointer'>SIGN IN</h2>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Navbar;
