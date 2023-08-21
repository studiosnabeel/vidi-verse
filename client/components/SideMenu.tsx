import React from "react";
import { AiOutlineUser, AiOutlineHistory } from "react-icons/ai";
import { BiSolidVideos, BiCameraMovie } from "react-icons/bi";
import { VscHome } from "react-icons/vsc";
import { SiYoutubegaming } from "react-icons/si";
import { PiMusicNotesSimpleThin, PiNewspaperClipping } from "react-icons/pi";
import {
  MdOutlineSubscriptions,
  MdTravelExplore,
  MdPhotoLibrary,
  MdOutlineSportsSoccer,
  MdOutlineLiveTv,
  MdSettingsApplications,
  MdOutlineReportProblem,
  MdHelpOutline,
} from "react-icons/md";

const SideMenu = () => {
  return (
    <section className='h-[100vh] items-center flex-col flex sticky top-0'>
      {/* Logo/Icon */}

      <div className='py-[18px] px-[26px] flex gap-2 items-center justify-center'>
        <BiSolidVideos className='text-2xl text-[#ff0000]' />
        <h1 className='font-semibold text-md text-[#272727]'>VidiVerse</h1>
      </div>

      {/* Items */}

      <div className='flex flex-col gap-3 justify-center items-start px-2 font-semibold'>
        <div className='flex gap-2 cursor-pointer'>
          <VscHome />
          <h4 className='text-xs'>Home</h4>
        </div>
        <div className='flex gap-2 cursor-pointer'>
          <MdTravelExplore />
          <h4 className='text-xs'>Explore</h4>
        </div>
        <div className='flex gap-2 cursor-pointer'>
          <MdOutlineSubscriptions />
          <h4 className='text-xs'>Subscriptions</h4>
        </div>
        <hr className='border-t-1 w-[90%] border-gray-400 my-2' />
        <div className='flex gap-2 cursor-pointer'>
          <MdPhotoLibrary />
          <h4 className='text-xs'>Library</h4>
        </div>
        <div className='flex gap-2 cursor-pointer'>
          <AiOutlineHistory />
          <h4 className='text-xs'>History</h4>
        </div>
        <hr className='border-t-1 w-[90%] border-gray-400 mt-2' />
        <div className='flex flex-col gap-2 items-center text-start'>
          <p className='text-xs font-normal'>
            Sign in to like videos, <br /> comment, subscribe.
          </p>
          <div
            className='inline-flex items-center gap-1 border-2 border-blue-400 p-2 text-blue-600  cursor-pointer'
            style={{ maxWidth: "max-content" }}
          >
            <AiOutlineUser />
            <button className='text-xs'>SIGNIN</button>
          </div>
        </div>
        <hr className='border-t-1 w-[90%] border-gray-400 ' />
        <h4 className='text-sm'>Best of VidiVerse</h4>
        <div className='flex gap-2 cursor-pointer'>
          <PiMusicNotesSimpleThin />
          <h4 className='text-xs'>Music</h4>
        </div>
        <div className='flex gap-2 cursor-pointer'>
          <MdOutlineSportsSoccer />
          <h4 className='text-xs'>Sports</h4>
        </div>
        <div className='flex gap-2 cursor-pointer'>
          <SiYoutubegaming />
          <h4 className='text-xs'>Gaming</h4>
        </div>
        <div className='flex gap-2 cursor-pointer'>
          <BiCameraMovie />
          <h4 className='text-xs'>Movies</h4>
        </div>
        <div className='flex gap-2 cursor-pointer'>
          <PiNewspaperClipping />
          <h4 className='text-xs'>News</h4>
        </div>{" "}
        <div className='flex gap-2 cursor-pointer'>
          <MdOutlineLiveTv />
          <h4 className='text-xs'>Live</h4>
        </div>
        <hr className='border-t-1 w-[90%] border-gray-400 mt-2' />
        <div className='flex gap-2 cursor-pointer'>
          <MdSettingsApplications />
          <h4 className='text-xs'>Settings</h4>
        </div>{" "}
        <div className='flex gap-2 cursor-pointer'>
          <MdOutlineReportProblem />
          <h4 className='text-xs'>Report</h4>
        </div>{" "}
        <div className='flex gap-2 cursor-pointer'>
          <MdHelpOutline />
          <h4 className='text-xs'>Help</h4>
        </div>
      </div>
    </section>
  );
};

export default SideMenu;
