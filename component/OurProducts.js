import React from 'react'

export default function OurProducts() {
  return (
    <div className='bg-products h-screen'>

        <p className='text-white  font-bold pt-8 pl-4 text-4xl'>Our Products</p>

        <div className=' flex-col sm:flex-row flex justify-center items-center h-full' >
            <button className='sm:w-[27%]  sm:h-[40%] w-[60%] mb-5 h-[40%] sm:hover:h-[55%]  transition-all duration-500  mr-2 rounded-xl sm:rounded-l-xl flex flex-col items-center justify-evenly bg-gray'>
                <p className='text-white text-center text-2xl font-bold mt-4 '>Biodegradable Plastic</p>
                <p className='text-white text-center mx-4'>
                    here all types of of bio diegarable text which helsp to saves the earth from the waste the is being proudcted daily.
            d
                
                </p>
                <p className='bg-black text-white py-2 mb-1  w-full'>
                    See All product
                </p>
            </button>
            <button className='sm:w-[27%]  sm:h-[40%] w-[60%] h-[40%] mb-5  ml-2 text-center sm:hover:h-[55%] transition-all duration-500 rounded-xl sm:rounded-r-xl flex flex-col items-center justify-evenly bg-white'>
                <p  className='mt-4 text-2xl font-bold '>Composite Tech</p>
                <p className='text-center mx-4'>
                   eing proudcted 
                    of of bio diegarable text which helsp to saves  to saves the earth from the waste the is being proudcted
                   
                </p>
                <p className='bg-black text-white mb-2 py-2 w-full'>
                    See All product
                </p>
            </button>
        </div>

    </div>
  )
}
