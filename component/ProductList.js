import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function ProductList() {
  const data = [
    {
      im: "/goli.png",
      title: "title1",
      desc: "desc1",
    },
    {
      im: "/honey.png",
      title: "title2",
      desc: "desc2",
    },
    {
      im: "/greengp.png",
      title: "title3",
      desc: "desc3",
    },
  ];
  return (
    <div className=" pb-32 bg-zinc-50">
      {/* <Navbar /> */}
      <div className="flex flex-col items-center text-xl sm:text-3xl md:text-4xl  font-bold lg:text-5xl">
        <p className="p-2 mt-8">Buy sustinale thing and save earth</p>
        <p className="p-2">save earth save yourself</p>
        <p className="p-2">be with us.</p>
      </div>

      <div className="flex mt-16 justify-center flex-wrap items-center">
      
        {
          // console.log(data.length);
          data.forEach(element => {
            console.log(element.title)
          })
        }
   {
    // bg-url(${element.in}) 
  data.map((element, index) => (
    <div
      key={index}
      className="mx-4 my-4 bg-white shadow-sm rounded-xl flex justify-center flex-col"
    >
      <div
      style={{
        backgroundImage:`url(${element.im})`
      }}
        className={`sm:w-[500px] rounded-t-xl sm:h-[500px] w-[300px] h-[300px] flex justify-center items-center bg-cover bg-center hover:bg-none text-transparent hover:transition-all hover:duration-700 transition-all duration-800 hover:text-black z-4`}
      >
        <p>{element.desc}</p>
      </div>
      <p className="text-center bg-white font-bold text-xl">{element.title}</p>
      <Link
        scroll={true}
        href="#contactus"
        className="bg-black hover:scale-x-[1.1] hover:transition-all hover:duration-300 text-white w-fit m-auto px-4 my-4 py-1 rounded-full"
      >
        Enquire Now
      </Link>
    </div>
  ))
}

      
      </div>
    </div>
  );
}
