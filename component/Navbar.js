"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link'

const RightNavbar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-screen  sm:w-1/3 bg-gray z-50 transform  transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        onClick={onClose}
      >
        Close
      </button>



      <p className=" text-center pt-16  font-bold text-4xl">Menu</p>
   
      <div className="flex flex-col h-screen pt-32 justify-center  items-center">
       
        <div className="flex font-bold  text-xl ml-16 flex-col h-2/3  ">

        <Link   onClick={onClose} href={'#greencredit'}>Green Credit</Link>
        <Link   onClick={onClose} href={'#epr'}>EPR</Link>
        <Link   onClick={onClose} href={'#products'}>Products</Link>
        <Link   onClick={onClose} href={'#projectmanagement'}>Project Management</Link>
        <Link   onClick={onClose} href={'/blog'}>Blogs</Link>
        </div>

        <div className="flex w-full justify-between p-16 mb-16">
        <img src="/linkedin.png" alt="linkedin" />
        <img src="/instagram.png" alt="instagram" />
      </div>

      </div>
     
    </div>
  );
};

export default function Navbar() {
  const router = useRouter()
  const [isRightNavbarOpen, setIsRightNavbarOpen] = useState(false);

  const toggleRightNavbar = () => {
    setIsRightNavbarOpen(!isRightNavbarOpen);
  };
  

  return (
    <div className=" fixed w-screen bg-white  z-10 flex border-b border-b-2 p-4 px-6 items-center justify-between">
      <button  onClick={() => {router.push('/')}} className="text-2xl font-bold">
        <span className="  text-gray">S</span>carbon
      </button>

      <div className="flex items-center  justify-center">

      <button className="mx-8  border rounded-3xl border-2 px-3 py-1">
        Contact Us
      </button>

      <button
          className="text-black text-xl hover:text-gray-100"
          onClick={toggleRightNavbar}
        >
          ☰
        </button>

        <div>
       

       
        </div>
      </div>
      <RightNavbar isOpen={isRightNavbarOpen} onClose={toggleRightNavbar} />
    </div>


  //   <div>
  //   <nav className="bg-blue-500 p-4">
  //     <div className="flex items-center justify-between">
  //       <h1 className="text-white text-2xl font-semibold">Your Logo</h1>
  //       <button
  //         className="text-white text-xl hover:text-gray-100"
  //         onClick={toggleRightNavbar}
  //       >
  //         ☰
  //       </button>
  //     </div>
  //   </nav>
  //   <RightNavbar isOpen={isRightNavbarOpen} onClose={toggleRightNavbar} />
  // </div>
  );
}
