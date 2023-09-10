'use client'

import React, {useState} from 'react';
import Link from 'next/link'
import SignupModal from './SignUpModal';

const OtpModal = ({ email, isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otp, setOtp] = useState('')
  
  const [status, setStatus] = useState(false);
  const [isverified, setisverified] = useState(false);


  const otphandleSubmit = async(e) => {

    e.preventDefault();
    console.log(email);
    console.log("otp preseed")
    console.log(otp);
    const data = await fetch("https://register-bpwp.onrender.com/auth/verify-user", {
        method: "POST",
        body: JSON.stringify({
       
         
          email,
         verificationCode:otp,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });


      if(data.status == 200){
        setStatus(true);
      }
    const message = await data.json();
      console.log(message);
      console.log(message.user.isVerified)
      if(message.user.isVerified == true) setisverified(true);
      console.log(isverified);

  }
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    
  };


  return (
    <div
      className={`fixed top-0 left-0 h-full w-full flex items-center justify-center bg-black bg-opacity-50 z-50 transform transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
          

      <div className="bg-white py-4 w-1/2 max-w-[600px] rounded-lg shadow-lg">
      <div className='flex justify-around items-center align-middle'>
      <h2 className="text-2xl text-black ml-8 mb-8 font-semibold mt-16 pt-16">Verify Otp</h2>
       <div className='relative top-[-3rem] right-[-6rem]'>
       <button
          className="bg-black text-white font-semibold px-3 py-1 rounded-full"
          onClick={onClose}
        >
          X
        </button>
       </div>

      </div>
        <div className='bg-white p-10   pb-16 leading-7   rounded-xl m-auto w-[80%] text-center' >
               
                {/* <input typ" placeholder='Gmail' className=' mb-3 bord w-[80%] p-1 rounded-md outline-1'/>
                <br/> */}

                <input type="number" onChange={(e) => {
                    setOtp(e.target.value)
                    console.log(e.target.value)
                }} placeholder='Otp' className=' text-black mb-3 bord w-[80%] p-1 rounded-md outline-1'/>
                <br/>
               
                <div className='flex w-full  text-right'>
                {/* <Link onClick={() => {setIsModalOpen(true); onClose;}} className='text-right w-full mb-12' href= "/">Sign Up</Link> */}
                {/* <SignupModal isOpen={isModalOpen} onClose={toggleModal} /> */}
                </div>
                <br/>
               
                <button onClick={() => {console.log(otp)}} className=' bg-red-800 m-auto block rounded-md text-center p-1 pl-3 pr-3 mt-6 w-[90%] text-lg text-white hover:font-light'>Submit</button>
            
            
                <button onClick={otphandleSubmit} className=' bg-gray block mb-28 m-auto rounded-md text-center p-1 pl-3 pr-3  mt-8 text-lg  w-[90%] text-white hover:font-light'>Sign Up with Google</button>
            


            </div>
      
      </div>
    </div>
  );
};

export default OtpModal;
