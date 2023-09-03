import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSubscriptions, MdTravelExplore } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/assets";

const Menu = () => {
  return (
    <div className='flex flex-col gap-4 bg-[#17141b] h-[100vh] text-white px-4 py-4 flex-[1] text-[14px] sticky top-0'>
      <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
        <div className='flex gap-2 items-center h-8 cursor-pointer'>
          <img className='h-8' src={logo} alt='Company Logo' />
          <h1>VidiVerse</h1>
        </div>
      </Link>

      <div className='sideMenuItems flex flex-col gap-1 overflow-y-auto'>
        <div className='flex gap-4 items-center my-2 cursor-pointer hover:bg-[#363636] px-2'>
          <AiOutlineHome />
          <h2>Home</h2>
        </div>
        <div className='flex gap-4 items-center my-2 cursor-pointer hover:bg-[#363636] px-2'>
          <MdTravelExplore />
          <h2>Explore</h2>
        </div>
        <div className='flex gap-4 items-center my-2 cursor-pointer hover:bg-[#363636] px-2'>
          <MdOutlineSubscriptions />
          <h2>Subscription</h2>
        </div>
        <hr className='' />
        <div className='flex gap-4 items-center my-2 cursor-pointer hover:bg-[#363636] px-2'>
          <MdOutlineSubscriptions />
          <h2>Library</h2>
        </div>
        <div className='flex gap-4 items-center my-2 cursor-pointer hover:bg-[#363636] px-2'>
          <MdOutlineSubscriptions />
          <h2>History</h2>
        </div>
        <hr className='' />
        <p>Signin to like videos, comment and subscribe. </p>

        <Link to='/login'>
          <div className='flex gap-2 items-center border-2 border-blue-500 justify-center py-1 w-fit px-2 my-4'>
            <CgProfile />
            <h2 className='cursor-pointer'>SIGN IN</h2>
          </div>
        </Link>

        <hr className='mb-2' />
        <h2>BEST OF VIDIVERSE</h2>
        <div className='flex gap-4 items-center my-2 cursor-pointer hover:bg-[#363636] px-2'>
          <MdOutlineSubscriptions />
          <h2>Music</h2>
        </div>
        <div className='flex gap-4 items-center my-2 cursor-pointer hover:bg-[#363636] px-2'>
          <MdOutlineSubscriptions />
          <h2>Sports</h2>
        </div>
        <div className='flex gap-4 items-center my-2 cursor-pointer hover:bg-[#363636] px-2'>
          <MdOutlineSubscriptions />
          <h2>Gaming</h2>
        </div>
        <div className='flex gap-4 items-center my-2 cursor-pointer hover:bg-[#363636] px-2'>
          <MdOutlineSubscriptions />
          <h2>Movies</h2>
        </div>
        <div className='flex gap-4 items-center my-2 cursor-pointer hover:bg-[#363636] px-2'>
          <MdOutlineSubscriptions />
          <h2>News</h2>
        </div>
        <div className='flex gap-4 items-center my-2 cursor-pointer hover:bg-[#363636] px-2'>
          <MdOutlineSubscriptions />
          <h2>Live</h2>
        </div>
        <hr className='' />
        <div className='flex gap-4 items-center my-2 cursor-pointer hover:bg-[#363636] px-2'>
          <MdOutlineSubscriptions />
          <h2>Subscription</h2>
        </div>
        <div className='flex gap-4 items-center my-2 cursor-pointer hover:bg-[#363636] px-2'>
          <MdOutlineSubscriptions />
          <h2>Report</h2>
        </div>
        <div className='flex gap-4 items-center my-2 cursor-pointer hover:bg-[#363636] px-2'>
          <MdOutlineSubscriptions />
          <h2>Help</h2>
        </div>
      </div>
    </div>
  );
};

export default Menu;
