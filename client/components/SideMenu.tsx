"use client";
import React from "react";
import { RootState } from "@/redux/store";
import { AiOutlineUser, AiOutlineHistory } from "react-icons/ai";
import { BiSolidVideos, BiCameraMovie } from "react-icons/bi";
import { VscHome } from "react-icons/vsc";
import { useSelector } from "react-redux";
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
import Link from "next/link";

const SideMenu = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);

  return (
    <section className='h-screen mt-4 sticky top-20 text-[#272727]'>
      {/* Items */}
      <div className='max-h-[calc(100vh-5rem)] overflow-y-auto max-h-scrollbar'>
        <div className='flex flex-col gap-3 justify-center items-start px-2 font-medium'>
          <Link href='/'>
            <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full lg:text-lg items-center'>
              <VscHome />
              <h4 className='textsm '>Home</h4>
            </div>
          </Link>
          <Link href='/explore'>
            <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full lg:text-lg items-center'>
              <MdTravelExplore />
              <h4 className='text-sm '>Explore</h4>
            </div>
          </Link>
          <Link href='/sub'>
            <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full lg:text-lg items-center'>
              <MdOutlineSubscriptions />
              <h4 className='text-sm '>Subscriptions</h4>
            </div>
          </Link>
          <hr className='border-t-1 w-[75px] lg:w-[140px] xs:w-[100px] border-gray-400 my-2' />
          <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full lg:text-lg items-center'>
            <MdPhotoLibrary />
            <h4 className='text-sm'>Library</h4>
          </div>
          <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full lg:text-lg items-center'>
            <AiOutlineHistory />
            <h4 className='text-sm'>History</h4>
          </div>
          <hr className='border-t-1 w-[75px] lg:w-[140px] xs:w-[100px] border-gray-400 mt-2' />
          {!currentUser && (
            <>
              {" "}
              <div className='flex flex-col gap-2 items-center text-start'>
                <p className='text-xs font-normal'>
                  Sign in to like videos, <br /> comment, subscribe.
                </p>
                <Link href='/login'>
                  <div
                    className='inline-flex items-center gap-1 border-2 border-blue-400 p-2 text-blue-600  cursor-pointer'
                    style={{ maxWidth: "max-content" }}
                  >
                    <AiOutlineUser />
                    <button className='text-sm'>SIGNIN</button>
                  </div>
                </Link>
              </div>
              <hr className='border-t-1 w-[75px] lg:w-[140px] xs:w-[100px] border-gray-400 ' />
            </>
          )}
          <h4 className='text-sm'>Best of VidiVerse</h4>
          <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full lg:text-lg items-center'>
            <PiMusicNotesSimpleThin />
            <h4 className='text-sm'>Music</h4>
          </div>
          <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full lg:text-lg items-center'>
            <MdOutlineSportsSoccer />
            <h4 className='text-sm'>Sports</h4>
          </div>
          <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full lg:text-lg items-center'>
            <SiYoutubegaming />
            <h4 className='text-sm'>Gaming</h4>
          </div>
          <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full lg:text-lg items-center'>
            <BiCameraMovie />
            <h4 className='text-sm'>Movies</h4>
          </div>
          <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full lg:text-lg items-center'>
            <PiNewspaperClipping />
            <h4 className='text-sm'>News</h4>
          </div>{" "}
          <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full lg:text-lg items-center'>
            <MdOutlineLiveTv />
            <h4 className='text-sm'>Live</h4>
          </div>
          <hr className='border-t-1 w-[75px] lg:w-[140px] xs:w-[100px] border-gray-400 mt-2' />
          <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full lg:text-lg items-center'>
            <MdSettingsApplications />
            <h4 className='text-sm'>Settings</h4>
          </div>{" "}
          <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full lg:text-lg items-center'>
            <MdOutlineReportProblem />
            <h4 className='text-sm'>Report</h4>
          </div>{" "}
          <div className='flex gap-2 cursor-pointer hover:bg-gray-200 w-full lg:text-lg items-center'>
            <MdHelpOutline />
            <h4 className='text-sm'>Help</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideMenu;
