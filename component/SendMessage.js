'use client'
import React, { useState } from 'react'

function SendMessage() {

  const [email, setEmail] = useState('')
  const [phone, setphone] = useState('')
  const [name, setName] = useState('')
  const [Organisation, setorgansation] = useState('');

  const handlesubmit = async (e) => {
    console.log(email, phone, name, Organisation)
    e.preventDefault();
    const data = await fetch('https://register-bpwp.onrender.com/auth/sendmail',{
      method:"POST",
      body:JSON.stringify({
        name ,
        email,
      phoneNo: phone,
       message: `${Organisation} organization is wanted to contact you`,
      }),
      headers:{
        "Content-Type": "application/json",
      }
     })

     

     if(data.status == 200){
      window.alert(' the owner he will contact you soon')
      setEmail("");
      setName('')
      setorgansation('')
      setphone('')
     }
    else{
      window.alert("some went wrong we server please try again.")
    }
   

     
  }
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
                <input type="text" required onChange={(e) => { setName(e.target.value)}} placeholder='Name' value={name} className=' mb-3 bord w-[80%] p-1 rounded-md border-black'/>
                <br/>
                <input type="text" required onChange={(e) => {setEmail(e.target.value)}} placeholder='Gmail' value={email} className=' mb-3 bord w-[80%] p-1 rounded-md outline-1'/>
                <br/>
                <input type="number" required onChange={(e) => {setphone(e.target.value)}} placeholder='Phone Number' value={phone} className=' mb-3 bord w-[80%] p-1 rounded-md'/>
                <br/>
                <input type="text" required onChange={(e) => {setorgansation(e.target.value)}} placeholder='Organisation Name' value={Organisation} className=' mb-3 bord w-[80%] p-1 rounded-md'/>
                <br/>
                <button onClick={handlesubmit} className=' bg-black rounded-md text-center p-1 pl-3 pr-3 mt-6 text-lg text-white hover:font-light'>Submit</button>
            </form>
            </div>
        </div>

    </div>
  )
}

export default SendMessage