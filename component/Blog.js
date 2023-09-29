'use client';
import React, { useEffect, useState } from "react";

import BlogCard from "./BlogCard.js";


export default function Blog() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const apiCall = async () =>{
      const response = await fetch(
        "https://register-bpwp.onrender.com/blog/all",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const message = await response.json();
    //  console.log(message.blogs);
      
      setData([...message.blogs]);
      // hi(message.blogs)
    }

    apiCall();
   
  }, []);

  console.log(Data)   
  
  return (
    <div className=" bg-zinc-50 pt-14">
      {/* <Navbar /> */}
      <div className="flex flex-col items-center text-xl sm:text-3xl md:text-4xl  font-bold lg:text-5xl sm:pt-20">
        <p className="p-2 mt-8">For sustainability, waste management</p>
        <p className="p-2">and industry updates....</p>
        <p className="p-2">be with us.</p>
      </div>

    {Data.length>0 &&
      <div className="flex flex-wrap justify-center  pb-8">
       {
        
       Data?.map((element) => (
        // element.title
          <BlogCard
            title={element.title}
            subheading={element.subheading}
            description={element.description}
            image={element.image}
            key={element._id} // You should add a unique key prop when rendering a list of components
          />
        ))} 
      </div>
}
    </div>
  );
}