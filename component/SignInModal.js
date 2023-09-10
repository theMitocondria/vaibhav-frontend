// SigninModal.js

import React, { useState } from 'react';
import Link from 'next/link';

const SigninModal = ({signupclose, isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className={`fixed top-0 left-0 h-full w-full flex items-center justify-center bg-black bg-opacity-50 z-50 transform transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white w-1/2 max-w-[600px] rounded-lg shadow-lg">
        <div className='flex justify-around items-center align-middle'>
          <h2 className="text-2xl ml-8 mb-8 font-semibold mt-12 pt-16">Sign In</h2>
          <div className='relative top-[-3rem] right-[-6rem]'>
            <button
              className="bg-black text-white font-semibold px-3 py-1 rounded-full"
              onClick={onClose }
            >
              X
            </button>
          </div>
        </div>
        <form className='bg-white p-10 pb-16 leading-7 rounded-xl m-auto w-[80%] text-center'>
          <input type="text" placeholder='Gmail' className=' mb-3 bord w-[80%] p-1 rounded-md outline-1' onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input type="password" placeholder='Password' className=' mb-3 bord w-[80%] p-1 rounded-md outline-1' onChange={(e) => setPassword(e.target.value)} />
          <br />
          <div className='flex w-full text-right'>
            <Link onClick={onClose} className='text-right w-full mb-12' href="#greencredit">Sign Up</Link>
          </div>
          <br />
          <button className=' bg-black m-auto block rounded-md text-center p-1 pl-3 pr-3 mt-6 w-[90%] text-lg text-white hover:font-light'>Submit</button>
          <button className=' bg-gray block mb-10 m-auto rounded-md text-center p-1 pl-3 pr-3 mt-6 text-lg w-[90%] text-white hover:font-light'>Sign Up with Google</button>
        </form>
      </div>
    </div>
  );
};

export default SigninModal;
