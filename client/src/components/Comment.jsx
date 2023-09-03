import React from "react";

const Comment = () => {
  return (
    <section className='Container flex gap-[10px] my-[30px]'>
      <img
        src='https://images.pexels.com/photos/18054585/pexels-photo-18054585/free-photo-of-face-of-blonde-woman.jpeg?auto=compress&cs=tinysrgb&w=600'
        alt='Channel Image'
        className='avatar w-[50px] h-[50px] rounded-[50%] bg-[#999]'
      />
      <div className='details flex flex-col gap-[10px]'>
        <h2 className='name text-[13px] font-[500]'>studiosnabeel</h2>
        <p className='text text-[14px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </section>
  );
};

export default Comment;
