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
    <section className='h-screen mt-4 sticky top-20 text-[#272727]'>
      {/* Items */}

      <div className='flex flex-col gap-3 justify-center items-start px-2 font-semibold'>
        <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full'>
          <VscHome />
          <h4 className='textsm '>Home</h4>
        </div>
        <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full'>
          <MdTravelExplore />
          <h4 className='text-sm'>Explore</h4>
        </div>
        <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full'>
          <MdOutlineSubscriptions />
          <h4 className='text-sm'>Subscriptions</h4>
        </div>
        <hr className='border-t-1 w-[90%] border-gray-400 my-2' />
        <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full'>
          <MdPhotoLibrary />
          <h4 className='text-sm'>Library</h4>
        </div>
        <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full'>
          <AiOutlineHistory />
          <h4 className='text-sm'>History</h4>
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
            <button className='text-sm'>SIGNIN</button>
          </div>
        </div>
        <hr className='border-t-1 w-[90%] border-gray-400 ' />
        <h4 className='text-sm'>Best of VidiVerse</h4>
        <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full'>
          <PiMusicNotesSimpleThin />
          <h4 className='text-sm'>Music</h4>
        </div>
        <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full'>
          <MdOutlineSportsSoccer />
          <h4 className='text-sm'>Sports</h4>
        </div>
        <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full'>
          <SiYoutubegaming />
          <h4 className='text-sm'>Gaming</h4>
        </div>
        <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full'>
          <BiCameraMovie />
          <h4 className='text-sm'>Movies</h4>
        </div>
        <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full'>
          <PiNewspaperClipping />
          <h4 className='text-sm'>News</h4>
        </div>{" "}
        <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full'>
          <MdOutlineLiveTv />
          <h4 className='text-sm'>Live</h4>
        </div>
        <hr className='border-t-1 w-[90%] border-gray-400 mt-2' />
        <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full'>
          <MdSettingsApplications />
          <h4 className='text-sm'>Settings</h4>
        </div>{" "}
        <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full'>
          <MdOutlineReportProblem />
          <h4 className='text-sm'>Report</h4>
        </div>{" "}
        <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full'>
          <MdHelpOutline />
          <h4 className='text-sm'>Help</h4>
        </div>
      </div>
    </section>
  );
};

export default SideMenu;
