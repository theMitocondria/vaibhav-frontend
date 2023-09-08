import Image from 'next/image'
import React from 'react'


export default function BlogCard() {
  return (
    <button className='w-96 shadow-md rounded-xl bg-white m-4'>
        <Image className='rounded-xl' width={500} height={500} alt="pickt" src="/products.png" />
        <p className='mt-2 px-4 font-bold text-lg mb-1'>This is and a very  for all of this good tile title</p>
        <p>this is the small desction fot eh dest and soemthigna ll aoubt it in just 2 5o 5 odfsa...</p>
        <button className='text-blue-500'>Read More...</button>
    </button>
  )
}
