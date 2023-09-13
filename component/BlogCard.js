import Image from 'next/image'
import React from 'react'


export default function BlogCard({image , title , subheading , description}) {
  return (
    <button className='w-96 shadow-md rounded-xl bg-white m-4'>
        <img className='rounded-xl' width={500} height={500} alt="pickt" src={image}/>
        <p className='mt-2 px-4 font-bold text-lg mb-1'>{title}</p>
        <p>{description}</p>
        <button className='text-blue-500'>Read More...</button>
    </button>
  )
}