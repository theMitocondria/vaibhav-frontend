'use client'

import Link from 'next/link'
import React from 'react'
import{BsFacebook,BsWhatsapp} from 'react-icons/bs';
import {AiFillLinkedin,AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
export default function Footer() {
  return (
    <div className=' md:flex  justify-around leading-[2rem] p-[8%] h-full bg-black text-white  text-center ' >
      <div className='mt-16'>
          <p className=' text-[30px] font-bold mb-[25px] '>
            Products
          </p>
          <p>
            Marketplace
          </p>
          <p>
            Sustainability
          </p>
          <p>
            DRS
          </p>
          <p>
            EPR
          </p>
          <p>
            Smart Center
          </p>
          
      </div>
      <div className='mt-16' >
        <p className=' text-[30px] font-bold mb-[25px]'>
          Company
        </p>
        <p>
          About Us
        </p>
        <p>
          Resources
        </p>
        <Link href='mailto:jf'>
          Support@scarbon.in
        </Link>
        <p>
          +91 7894567892
        </p>
        
      </div>
      <div className=' mt-16 leading-7 '>
        <p className=' text-[30px] font-bold mb-[25px]'>
          Corporate Office
        </p>
        <p>
        FCA 106 E-5 Adarsh Nagr Balabhgarh Faridabad 
        </p>
        <p className='mb-10'>
         121004 , Haryana , India
        </p>
        <p className='mb-4'>
          For the latest Updates , Stay tuned to
        </p>
        <div className='flex  space-x-5 justify-center
        '>
          <Link href='https://www.linkedin.com/company/scarbon/' className=' text-[25px]'>
            <AiFillLinkedin/>
          </Link>
          <Link href='instagram' className=' text-[25px]'>
            <AiOutlineInstagram/>
          </Link>
          <Link href='faebook' className=' text-[25px]'>
            <BsFacebook/>
          </Link>
          <Link href='twitter' className=' text-[25px]'>
             <AiOutlineTwitter/>
          </Link>
          <Link href='whatsapp' className=' text-[25px]'>
             <BsWhatsapp/>
          </Link>

        </div>
      </div>
    </div>
  )
}
