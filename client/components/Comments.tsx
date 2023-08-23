import Image from "next/image";
import React from "react";
import Comment from "./Comment";

const Comments = () => {
  return (
    <section>
      <div className='flex gap-2 items-center'>
        <Image
          className='rounded-full h-14 mt-6'
          src='/dp.jpg'
          alt='avatar'
          width={60}
          height={50}
        />
        <textarea
          className='border-b-2 border-black outline-none mt-6 w-full '
          rows={1}
          cols={6}
          placeholder='Enter comment here'
        />
      </div>
      <div className='flex flex-col gap-4'>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </section>
  );
};

export default Comments;
