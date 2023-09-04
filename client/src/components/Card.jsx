import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import axios from "axios";

const Card = ({ type, video }) => {
  //====== Tailwind CSS instances =======
  const cardClasses = `container ${
    type !== "sm" ? "w-360 mb-45 gap-10" : "mb-10 flex gap-2"
  } cursor-pointer`;

  const ThumbnailImage = `${type !== "sm" ? "h-[202px]" : "h-[120px]"} `;

  const Details = `${
    type !== "sm" ? "mt-[16px]" : ""
  } flex gap-[12px] flex-[1] `;

  const channelImage = `${
    type === "sm" && "hidden"
  } w-[36px] h-[36px] rounded-[50%] bg-[#999] `;

  //========= React-Hooks Section ==========
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/users/find/${video.userId}`
      );
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);

  return (
    <Link to='/video/test' style={{ textDecoration: "none" }}>
      <div type={type} key={video._id} className={cardClasses}>
        <img
          type={type}
          className={ThumbnailImage}
          src={video.imgUrl}
          alt='Video Thumbnail'
        />
        <div className={Details}>
          <img className={channelImage} src={channel.img} />
          <div className='texts'>
            <h2 className='title text-[16px] font-[500]'>{video.title}</h2>
            <h3 className='channelName text-[14px] my-[9px]'>{channel.name}</h3>
            <p className='info text-[14px]'>
              {video.views} views - {format(video.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
