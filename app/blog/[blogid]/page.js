'use client'


import React, { useState, useEffect } from "react";

const BlogPost = ({ title, subheadings, descriptions, image }) => {
  const combined = [];
  for(let i = 0; i<subheadings.length; i++){
    combined.push(subheadings[i]);
    combined.push(descriptions[i]);
  }
  console.log(combined)
  return (
    <div className="max-w-screen-md mx-auto p-4">

<h1 className="text-3xl font-bold mb-4">{title}</h1>
       <img src={image} alt={title} className="w-full rounded-lg mb-4" />

    
      {combined.map((subheading, index) => (
        <p key={index} className="text-gray-500 mb-2">
          {subheading}
        </p>
      ))}
      
     
    </div>
  );
};

export default function Page({ params }) {
  const [Data, setData] = useState([]);
  const [blog, setBlog] = useState(null); // Initialize blog as null

  useEffect(() => {
    const apiCall = async () => {
      try {
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
        setData([...message.blogs]);
      } catch (error) {
        console.error("API call error:", error);
      }
    };

    apiCall();

    // Move the logic to set the 'blog' state inside the useEffect to ensure it happens after the API call.
    const blogToSearch = Data.find((bg) => bg._id === params.blogid);
    setBlog(blogToSearch);
  }, [params.blogid, Data]); // Add 'params.blogid' and 'Data' to the dependency array

  // console.log(blog);
  return (
    <div>
   
      {blog ? (
        <BlogPost
          title={blog.title}
          subheadings={blog.subheading}
          descriptions={blog.description}
          image={blog.image}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
