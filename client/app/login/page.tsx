import Navbar from "@/components/Navbar";
import Signin from "@/components/Signin";
import React from "react";

const login = () => {
  return (
    <div className='mx-4 font-roboto'>
      <Navbar />
      <Signin />
    </div>
  );
};

export default login;
