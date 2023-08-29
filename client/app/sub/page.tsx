import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SideMenu from "@/components/SideMenu";
import React from "react";

const Sub = () => {
  const type = "sub";
  return (
    <div className='mx-4 font-roboto'>
      <Navbar />
      <div className='flex'>
        <div className='flex-[1] hidden xs:block'>
          <SideMenu />
        </div>
        <div className='flex-[7]'>
          <Hero type={type} />
        </div>
      </div>
    </div>
  );
};

export default Sub;
