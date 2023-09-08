import React from 'react'

function SendMessage() {
  return (
    <div id='contactus' className='flex sm:h-screen pl-0'>

        <div className='w-[40%] h-full  bg-messages bg-cover  bg-no-repeat p-12 pt-40 hidden sm:block'>
           <div className='h-[20%]'>
           <img src="/map.png" className=' z-10 h-10 '/>
           <span className=' z-10 h-10 text-white'>Address: The Unit | IDEASHACKS Metro Pillar 564, Faridabad,Haryana - 121003</span>
           </div>
            <div className='h-[20%]'>
            <img  src="/phone.png" className='z-10 h-10'/>
            <span className=' z-10 h-10 text-white'>Lets Talk : +91 9811102303</span>
            </div>
           <div className='h-[20%]'>
           <img  src="/envelope.png" className='z-10 h-10'/>
           <span className=' z-10 h-10 text-white'>Mail Us : scarbonpacks@gmail.com</span>
           </div>
        </div>
        <div className=' sm:flex sm:flex-col sm:items-center sm:p-16 w-full sm:w-[60%] bg-messages sm:bg-none sm:bg-light-gray align-middle justify-center py-10 sm:py-0' >
            <p className='text-white sm:text-black text-4xl font-extrabold pl-4'>Send us a message</p>
            <div className=' w-screen sm:w-2/3 flex justify-center'>
            <form className='bg-white p-10 pt-24 pb-24 leading-7  mt-12 rounded-xl w-[80%] text-center' >
                <input type="text" placeholder='Name' className=' mb-3 bord w-[80%] p-1 rounded-md border-black'/>
                <br/>
                <input type="text" placeholder='Gmail' className=' mb-3 bord w-[80%] p-1 rounded-md outline-1'/>
                <br/>
                <input type="number" placeholder='Phone Number' className=' mb-3 bord w-[80%] p-1 rounded-md'/>
                <br/>
                <input type="text" placeholder='Organisation Name' className=' mb-3 bord w-[80%] p-1 rounded-md'/>
                <br/>
                <button className=' bg-black rounded-md text-center p-1 pl-3 pr-3 mt-6 text-lg text-white hover:font-light'>Submit</button>
            </form>
            </div>
        </div>

    </div>
  )
}

export default SendMessage