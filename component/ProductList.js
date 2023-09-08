import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList() {
  return (
    <div className=' bg-zinc-50'>
        {/* <Navbar /> */}
        <div className='flex flex-col items-center text-xl sm:text-3xl md:text-4xl  font-bold lg:text-5xl'>
            <p className='p-2 mt-8'>Buy sustinale thing and save earth</p>
            <p className='p-2'>save earth save yourself</p>
            <p className='p-2'>be with us.</p>
        </div>

        {/* <div className={`w-[500px] h-[500px] bg-bproduct3 bg-cover bg:place-content-center  hover:bg-none text-transparent  hover:transition-all hover:duration-700 transition-all duration-800  hover:text-black z-4`}>
            <p >hdsjbnajdkf jkhds fjahksd fhlkj sdhflka </p>
        </div>
        <p>hdkfsdj fkjadhsf jklads fass</p>
        <button>Enquire Now</button> */}

        <div className='flex justify-center flex-wrap items-center'>

        <ProductCard title="product2" desc="goog proudct" image='bproduct2' />
        <ProductCard title="product2" desc="goog proudct" image='bproduct3' />
        <ProductCard title="good quality adshive" desc="dhjkasfjb ajkhsdf kahsd fkjahsdfkjha sdkjfhasd kjahsd fkjahsdjkfh akjdf askjdhfkjasd fjsakhd fkjh kj" image='bproduct1' /> 
  
        </div>

  </div>
  )
}
