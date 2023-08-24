import Card from "@/components/Card";
import Comments from "@/components/Comments";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import {
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineSave,
  AiOutlineShareAlt,
} from "react-icons/ai";

const Video = () => {
  return (
    <section className='mx-4 font-roboto'>
      <Navbar />
      <div className='bg-yellow-50 pt-4 justify-between gap-2 w-full mt-4  flex-col flex md:flex-1 lg:flex-row mb-12'>
        <div className='flex-[4] mx-6'>
          <div className='w-full flex flex-col'>
            <div className='w-full h-full mb-2'>
              <iframe
                width='100%'
                height='440px'
                src='https://www.youtube.com/embed/EaI1ncovO8M'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>
            <h2 className='text-lg font-semibold text-[#292929]'>
              Full-stack Booking app walkthrough
            </h2>
            <div className='flex justify-between items-center'>
              <h2 className='text-md font-extralight text-gray-600'>
                8739837 views . Aug 21, 2023
              </h2>
              <div className='flex items-center gap-5'>
                <div className='flex items-center cursor-pointer gap-2'>
                  <AiOutlineLike />
                  <p>235 like</p>
                </div>
                <div className='flex items-center cursor-pointer gap-2'>
                  <AiOutlineDislike />
                  <p>4 dislike</p>
                </div>
                <div className='flex items-center cursor-pointer gap-2'>
                  <AiOutlineShareAlt />

                  <p>share</p>
                </div>
                <div className='flex items-center cursor-pointer gap-2'>
                  <AiOutlineSave />

                  <p>save</p>
                </div>
              </div>
            </div>
          </div>
          <hr className='border-gray-400 mt-6' />
          <div className='flex justify-between mt-4'>
            <div className='flex gap-2'>
              <Image
                className='rounded-full h-14'
                src='/dp.jpg'
                alt='dp'
                width={60}
                height={100}
              />
              <div className='flex flex-col gap-1 text-sm font-semibold'>
                <h2>VidiVerse</h2>
                <h4>200K subscribers</h4>

                <p className='text-gray-800 font-light'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ab, praesentium optio natus possimus voluptas nobis
                  dolor magnam quidem odio delectus a blanditiis impedit laborum
                  numquam maxime quo inventore nulla.
                </p>
              </div>
            </div>
            <button className='text-white bg-[#ff0000] border-2 border-gray-500 rounded-sm px-6 py-[2px] cursor-pointer h-max'>
              Subscribe
            </button>
          </div>
          <Comments />
        </div>

        {/* Recommended Videos Section */}

        <div className='md:flex-[3] flex-[1] order-1 lg:order-2'>
          <Card isSideBar={true} />
          <Card isSideBar={true} />
          <Card isSideBar={true} />
          <Card isSideBar={true} />
          <Card isSideBar={true} />
        </div>
      </div>
    </section>
  );
};

export default Video;
