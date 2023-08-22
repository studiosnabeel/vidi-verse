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
    <section className='flex justify-between gap-6 w-full mt-6'>
      <div className='flex-[5] mx-6'>
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
      </div>
      <div className='flex-[2] '>Recommendations</div>
    </section>
  );
};

export default Video;
