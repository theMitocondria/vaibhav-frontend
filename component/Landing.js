
'use client'
import Link from "next/link";
import React from "react";


// import leaf from '../public/leaf.png'
export default function Landing() {
  return (
    <div className=" pt-32 pb-32 sm:pb-32 px-6 flex h-full  flex-col items-start ">
        
     <div className="">
     <p className="text-xl  mb-4">Hello! I'm Chaman</p>
      <p className=" font-extrabold mb-3 xl:text-8xl md:text-6xl  text-4xl">Waste Management</p>
      <p className=" font-extrabold mb-3 xl:text-8xl md:text-6xl  text-4xl ">made easy with Scarbon</p>
      <p  className=" font-extrabold mb-3 xl:text-8xl md:text-6xl text-4xl" >
        in <span className="text-gray">online mode</span>
      </p>
     </div>
        
      <Link href="#contactus" className="border border-1 mt-16 text-white bg-black px-8 py-4 l rounded-full"><p className="md:text-2xl">Let's Talk</p></Link>
      <div className="hidden sm:block">
      <div className="absolute bottom-0   z-[-1] right-0 w-[50%]  h-[100%] bg-leafs bg-no-repeat bg-fit bg-center"></div>
      </div>
    </div>
  );
}
