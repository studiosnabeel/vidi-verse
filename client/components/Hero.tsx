"use client";
import Card from "@/components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

const Hero = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchvideos = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/videos/${type}`);
        // console.log(res.data);
        setVideos(res.data);
      } catch (err) {
        console.error("Unable to fetch data", err);
      }
    };
    fetchvideos();
  }, [type]);
  return (
    <div className='p-4 w-[100%] flex flex-wrap flex-[7] justify-center gap-4 bg-yellow-50'>
      {videos.map((video) => (
        <Card
          key={video._id}
          title={video.title}
          imgUrl={video.imgUrl}
          videoUrl={video.videoUrl}
          desc={video.desc}
          views={video.views}
          createdAt={video.createdAt}
          userId={video.userId}
          isSideBar={false}
        />
      ))}
    </div>
  );
};

export default Hero;
