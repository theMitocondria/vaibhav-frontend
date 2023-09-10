
'use client'
import React, { useState } from "react";

function EPRFORM() {

  const [email, setEmail] = useState('')
  const [phone, setphone] = useState('')
  const [name, setName] = useState('')
  const [Organisation, setorgansation] = useState('');

  const handlesubmit = async (e) => {
    console.log(email, phone, name, Organisation)
    e.preventDefault();
    const data = await fetch("https://register-bpwp.onrender.com/auth/sendmail",{
      method:"POST",
      body:JSON.stringify({
        name ,
        email,
      phoneNo: phone,
       message: `${Organisation} organization is wanted to contact you for epr solution`,
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
    <div className=" p-6  sm:p-8 sm:flex sm:justify-center my-12">
      <div className=" sm:bg-form sm:w-[30%] sm:text-left  sm:rounded-l-3xl sm:z-12 sm:p-20 text-center">
        <p className=" sm:text-white font-extrabold text-4xl mb-2">
          Achieve EPR
        </p>
        <p className=" sm:text-white font-extrabold text-4xl mb-2">
          targets through
        </p>
        <p className=" sm:text-white font-extrabold text-4xl mb-2">
          Sustainable
        </p>
        <p className=" sm:text-white font-extrabold text-4xl mb-2">Solutions</p>

      </div>
      <div className=" border border-solid border-black rounded-3xl sm:rounded-none bg-form sm:bg-none  p-7 sm:bg-black sm:w-[50%] sm:p-12 sm:rounded-r-3xl flex justify-center">
        {/* <form className=" sm:bg-white sm:p-10 sm:pb-10 sm:leading-7  sm:rounded-xl sm:w-[80%] sm:text-center">
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent mb-3 bord w-[80%] p-1 rounded-md outline-1"
          />
          <br />
          <input
            type="text"
            placeholder="Gmail"
            className="bg-transparent mb-3 bord w-[80%] p-1 rounded-md outline-1"
          />
          <br />
          <input
            type="number"
            placeholder="Phone Number"
            className="bg-transparent mb-3 bord w-[80%] p-1 rounded-md outline-1"
          />
          <br />
          <input
            type="text"
            placeholder="Organisation Name"
            className="bg-transparent mb-3 bord w-[80%] p-1 rounded-md outline-1"
          />
          <br />
          <button className=" bg-black sm:rounded-3xl text-center p-1 pl-3 pr-3 mt-6 text-lg text-white hover:font-light">
            Submit
          </button>
        </form> */}
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
  );
}

export default EPRFORM;
