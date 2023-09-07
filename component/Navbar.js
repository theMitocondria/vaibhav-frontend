import React from 'react'
import{ GiHamburgerMenu} from 'react-icons/gi'

export default function Navbar() {
  return (
    <div className=' flex border-b border-b-2 p-4 px-6 items-center justify-between'>
        <p className='text-2xl font-bold' >
            <span className='  text-gray'>S</span>carbon
        </p>

        <div className='flex items-center  justify-center'>
            <button className='mx-8  border rounded-3xl border-2 px-3 py-1'>
                Contact Us
            </button>

            <GiHamburgerMenu  className='h-8'/>

        </div>
    </div>
  )
}
