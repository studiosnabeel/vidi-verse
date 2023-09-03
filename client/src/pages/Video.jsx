import {
  BsHandThumbsUp,
  BsHandThumbsDown,
  BsShare,
  BsSave,
} from "react-icons/bs";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Video = () => {
  return (
    <section className='Container flex flex-col lg:flex-row gap-[24px] py-4 px-6'>
      <div className='content flex-[5]'>
        <div className='videoWrapper'>
          <iframe
            className='max-h-[720px] w-full object-cover'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/navpQnqhwvg?si=OVOVurIAA1SyvwUZ'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>
        <h2 className='title text-[18px] font-[400] mt-[20px] mb-[10px]'>
          Technology World
        </h2>
        <div className='details flex items-center justify-between'>
          <p className='info'> 23000 views - 2 days ago</p>
          <div className='buttons flex gap-[20px]'>
            <button className='flex items-center gap-[5px] cursor-pointer'>
              <BsHandThumbsUp /> 3
            </button>
            <button className='flex items-center gap-[5px] cursor-pointer'>
              <BsHandThumbsDown /> 0
            </button>
            <button className='flex items-center gap-[5px] cursor-pointer'>
              <BsShare /> Share
            </button>
            <button className='flex items-center gap-[5px] cursor-pointer'>
              <BsSave /> Save
            </button>
          </div>
        </div>
        <hr className='my-[15px] border-[0.5px]' />
        <div className='channel flex justify-between'>
          <div className='channelInfo flex gap-[20px]'>
            <img
              className='image w-[50px] h-[50px] rounded-[50%] bg-[#999]'
              src='https://images.pexels.com/photos/18078266/pexels-photo-18078266/free-photo-of-a-man-with-tattoos.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
            />

            <div className='channelDetail flex flex-col'>
              <h2 className='channelName font-[500]'>StudiosNabeel</h2>
              <div className='channelCounter mt-[5px] mb-[20px] text-[12px]'>
                25 subscribers
              </div>
              <p className='description text-[14px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae velit neque error ratione accusamus quo doloremque
                possimus dolore corporis iure.
              </p>
            </div>
          </div>
          <button
            style={{ height: "max-content" }}
            className='subscribe bg-[#cc1a00] font-[500] text-white border-none rounded-[3px]
            px-[20px] py-[10px] cursor-pointer]'
          >
            Subscribe
          </button>
        </div>
        <hr className='my-[15px] border-[0.5px]' />
        <Comments />
      </div>
      <div className='Recommendations flex-[2]'>
        <Card type={"sm"} />
        <Card type={"sm"} />
        <Card type={"sm"} />
        <Card type={"sm"} />
        <Card type={"sm"} />
        <Card type={"sm"} />
        <Card type={"sm"} />
        <Card type={"sm"} />
        <Card type={"sm"} />
        <Card type={"sm"} />
        <Card type={"sm"} />
        <Card type={"sm"} />
        <Card type={"sm"} />
      </div>
    </section>
  );
};

export default Video;
