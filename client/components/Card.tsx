"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { format } from "timeago.js";

const Card = ({
  isSideBar,
  title,
  imgUrl,
  videoUrl,
  desc,
  views,
  createdAt,
  userId,
}) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchchannels = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/users/find/${userId}`
        );
        // console.log(res.data);
        setChannel(res.data);
      } catch (err) {
        console.error("Unable to fetch data", err);
      }
    };
    fetchchannels();
  }, [userId]);
  return (
    <Link href='/video/test'>
      <div
        className={`cursor-pointer mb-2 gap-2 cardContainer ${
          isSideBar ? "flex" : "flex-col"
        }`}
      >
        <div className='w-[200px] lg:w-[360px]'>
          <Image
            className='w-[100%] lg:w-[400px] hover:rounded-none mb-2 rounded-md'
            src={imgUrl}
            alt='Video thumbnail'
            width={50}
            height={50}
          />
        </div>
        <div className='w-[100%] flex gap-2'>
          <Image
            className='rounded-[100%] h-10'
            src={channel.img}
            alt=''
            width={50}
            height={50}
          />
          <div className='flex flex-col gap-2 md:w-full'>
            <h2 className='text-md font-semibold'>{title}</h2>
            <p className='text-sm font-regular'>{channel.name}</p>
            <p className='text-xs font-light'>
              {views} views - {format(createdAt)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
