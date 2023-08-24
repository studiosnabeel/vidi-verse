import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ isSideBar }) => {
  return (
    <Link href='/video/test'>
      <div
        className={`cursor-pointer mb-2 gap-2 cardContainer ${
          isSideBar ? "flex" : "flex-col"
        }`}
      >
        <Image
          className='w-[100%] lg:w-[400px] hover:rounded-none mb-2 rounded-md'
          src='/thumbnail.jpg'
          alt=''
          width={50}
          height={50}
        />
        <div className='w-[100%] flex gap-2'>
          <Image
            className='rounded-[100%] h-14'
            src='/dp.jpg'
            alt=''
            width={50}
            height={50}
          />
          <div className='flex flex-col gap-2 md:w-full'>
            <h2 className='text-md font-semibold'>How to Sunset like a Pro</h2>
            <p className='text-sm font-regular'>TechOasis</p>
            <p className='text-xs font-light'>600000 - 1 day ago</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
