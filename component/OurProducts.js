'use client'
import Link from 'next/link'
import React from 'react'

 
import { useRouter } from 'next/navigation'


export default function OurProducts() {
    const router = useRouter()
  return (
    <div className='bg-products pb-32  sm:pb-0 sm:h-screen'>

        <p className='text-white pb-8 sm:pb-0  font-extrabold pt-12 text-center text-4xl sm:text-6xl'>Our Products</p>

        <div className=' flex-col  sm:flex-row flex justify-center items-center h-full' >
            <button onClick={() => router.push("/products")} className='sm:w-[27%]  sm:h-[40%] w-[60%] mb-5 h-[40%] sm:hover:h-[55%]  transition-all duration-500  mr-2 rounded-xl sm:rounded-none sm:rounded-l-3xl flex flex-col items-center justify-evenly bg-gray'>
                <p className='text-white text-center text-2xl sm:text-3xl font-extrabold mt-4 '>Biodegradable Plastic</p>
                <p className='text-white text-center mx-4'>
                    here all types of of bio diegarable text which helsp to saves the earth from the waste the is being proudcted daily.
            d
                
                </p>
                <p  className='bg-black text-white py-2 mb-1  w-fit px-6 rounded-full'>
                    <Link href='/products'>See All product</Link>
                </p>
            </button>
            <button onClick={() => router.push("/products")}  className='sm:w-[27%]  sm:h-[40%] w-[60%] h-[40%] mb-5   text-center sm:hover:h-[55%] transition-all duration-500 rounded-xl sm:rounded-none sm:rounded-r-3xl flex flex-col items-center justify-evenly bg-white'>
                <p  className='mt-4 text-2xl sm:text-3xl font-extrabold '>Composite Tech</p>
                <p className='text-center mx-4'>
                   eing proudcted 
                    of of bio diegarable text which helsp to saves  to saves the earth from the waste the is being proudcted
                   
                </p>
                <p className='bg-black text-white mb-2 py-2 w-fit px-6 rounded-full'>
                  <Link href='/products'>See All product</Link>
                </p>
            </button>
        </div>

    </div>
  )
}
