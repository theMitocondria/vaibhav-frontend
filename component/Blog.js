import React from 'react'
import Navbar from './Navbar'
import BlogCard from './BlogCard'

export default function Blog() {
  return (
    <div className=' bg-zinc-50'>
        {/* <Navbar /> */}
        <div className='flex flex-col items-center text-xl sm:text-3xl md:text-4xl  font-bold lg:text-5xl'>
            <p className='p-2 mt-8'>For sustainability, waste management</p>
            <p className='p-2'>and industry updates....</p>
            <p className='p-2'>be with us.</p>
        </div>

        <div className='flex flex-wrap justify-center  pb-8'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />


        </div>
    </div>
  )
}
