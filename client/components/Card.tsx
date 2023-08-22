import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <Link href='/video/test'>
      <div className='w-[350px] cursor-pointer mb-2 flex flex-col gap-2'>
        <Image
          className='w-[100%]'
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
          <div className='flex flex-col gap-2'>
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
