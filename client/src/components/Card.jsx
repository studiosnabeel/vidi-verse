import React from "react";
import { Link } from "react-router-dom";

const Card = ({ type }) => {
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

  return (
    <Link to='/video/test' style={{ textDecoration: "none" }}>
      <div type={type} className={cardClasses}>
        <img
          type={type}
          className={ThumbnailImage}
          src='https://img.freepik.com/premium-psd/youtube-thumbnail-web-banner-template-review-any-products_633645-89.jpg?size=626&ext=jpg&ga=GA1.1.1177778389.1693544291&semt=ais'
          alt='Video Thumbnail'
        />
        <div className={Details}>
          <img
            className={channelImage}
            src='https://images.pexels.com/photos/18090582/pexels-photo-18090582/free-photo-of-portrait-of-a-young-woman.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Channel Image'
          />
          <div className='texts'>
            <h2 className='title text-[16px] font-[500]'>
              This is a test video
            </h2>
            <h3 className='channelName text-[14px] my-[9px]'>studiosnabeel</h3>
            <p className='info text-[14px]'>15,500 views - 1 day ago</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
