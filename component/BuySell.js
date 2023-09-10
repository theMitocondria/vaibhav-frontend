'use client'
import React, { useState } from 'react';
import SignupModal from "./SignUpModal";



export default function BuySell() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlebuy = async () => {
    
    const userinls = JSON.parse(localStorage.getItem('user'));
   
    if(userinls){
      console.log("sending mail");
     console.log('message send');
     const data = await fetch("https://register-bpwp.onrender.com/auth/sendmail",{
      method:"POST",
      body:JSON.stringify({
        name : userinls.user.name,
        email: userinls.user.email,
        phoneNo: userinls.user.phoneNo,
        message:"want to buy some product from you please contact him soon ",
      }),
      headers:{
        "Content-Type": "application/json",
      }
     })

     if(data.status == 200){
      window.alert('your Query is send to the owner he will contact you soon')
     }
    else{
      window.alert("some went wrong we server please try again.")
    }
   
    }else{
      console.log("buyed")
      setIsModalOpen(!isModalOpen);
    }
  }

  return (
    <div id='greencredit'>
      <div className="flex sm:flex-row flex-col ">
        <div className="bg-hello bg-no-repeat bg-cover  sm:h-screen sm:w-[50%]">
          <div>
            <p className="text-white sm:hidden text-2xl text-center "> Green Credit</p>
            <p className=" hidden sm:block relative text-2xl  pt-4 font-bold  text-white top-2 md:text-5xl lg:left-[80%]  md:left-[60%] xl:left-[81%] sm:left-[73%]">Green</p>
          </div>

          <div className="flex flex-col  h-screen justify-center items-center">
            <p className=" text-8xl font-extrabold text-white">SELL</p>
            <p className="text-white text-2xl">Get rid of your waste</p>
            <button onClick={handlebuy} className="bg-white mt-4 px-6 py-3 text-xl rounded-full">Make some Monkey</button>
          </div>
        </div>
        <div className="bg-white sm:h-screen sm:w-[50%]">
          <div>
          {/* <p className="top-1 md:text-5xl md:left-[86%]">Our</p> */}
            <p className=" hidden sm:block relative pt-4 text-2xl font-bold  md:text-5xl text-black top-2 left-0">&nbsp;Credit</p>
          </div>

          <div className="flex flex-col  h-screen justify-center items-center">
            <p className=" text-8xl font-extrabold text-black">BUY</p>
            <p className="text-black text-2xl">Want some product from us</p>
            <button onClick={handlebuy} className="bg-black text-white mt-4 px-6 py-3 text-xl rounded-full">Fell free to contact</button>
            <SignupModal isOpen={isModalOpen} onClose={toggleModal} />
          </div>
        </div>
        
      </div>
    </div>
  );
}
