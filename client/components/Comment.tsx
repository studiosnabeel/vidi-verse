import Image from "next/image";
import React from "react";

const Comment = () => {
  return (
    <div className='flex gap-4 items-center text-[#272727] '>
      <Image
        className='rounded-full h-14 mt-6'
        src='/dp.jpg'
        alt='Avatar'
        width={60}
        height={60}
      />
      <div className='mt-6'>
        <h2 className='text-md font-semibold'>
          Nabeel Akbar{" "}
          <span className='font-light text-gray-500 text-xs'>1 day ago</span>
        </h2>
        <p className='text-sm font-normal'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
          consequuntur?
        </p>
      </div>
    </div>
  );
};

export default Comment;
