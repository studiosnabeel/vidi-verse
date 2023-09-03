import React from "react";
import Comment from "./Comment";

const Comments = () => {
  return (
    <section className='Container'>
      <div className='newComment flex items-center gap-[10px]'>
        <img
          className='image w-[50px] h-[50px] rounded-[50%] bg-[#999]'
          src='https://images.pexels.com/photos/18078266/pexels-photo-18078266/free-photo-of-a-man-with-tattoos.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt=''
        />
        <input
          className='border-none border-b-[1px] border-gray-500 bg-transparent outline-none p-[5px] w-full'
          type='text'
          placeholder='Add a comment...'
        />
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </section>
  );
};

export default Comments;
