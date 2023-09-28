
'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function BlogCard({image , title , subheading , description, id}) {
  const router = useRouter();
  // const substr = descriptio
  return (
    <button className='w-96  shadow-md rounded-xl bg-white m-4'>
        <img className='rounded-xl' width={500} height={500} alt="pickt" src={image}/>
        <p className='mt-2 px-4 font-bold text-lg mb-1'>{title.substring(0, 40  )}...</p>
        <p>{description[0].substring(0, 100)}.......</p>
        <button onClick={() => router.push(`/blog/${id}`)} className='text-blue-500'>Read More...</button>
    </button>
  )
}