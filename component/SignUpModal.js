'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import SigninModal from "./SignInModal";
import OtpModal from "./OtpModal";

function saveUserDetails(userDetails) {
  localStorage.setItem('user', JSON.stringify(userDetails));
}

const SignupModal = ({ isOpen, onClose }) => {

  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [registerState, setRegisterState] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false); // State to control SignIn modal
  const [otpModalOpen, setotpModalOpen] = useState(false); // State to control SignIn modal

 
  const toggleModal = () => {
    setSignInModalOpen(!signInModalOpen);
  };

  const otptoggleModal = () => {
    setotpModalOpen(!otpModalOpen);
  }

  const signupwithgoogle = async() => {
    console.log("pusing to new page of the router")
    router.push("https://register-bpwp.onrender.com/auth/google")
   // router.push("http:localhost:3000/auth/google");
    const data = await fetch("https://register-bpwp.onrender.com/auth/google");
   
    if(data.success=='true'){
      router.push("/");
      const message = await data.json();
    }
  }

  const handleSubmit = async (e) => {


    if(registerState) return;
    e.preventDefault();
    console.log(name, email, phone, password);
    const data = await fetch("https://register-bpwp.onrender.com/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        password,
        confirmPassword: password,
        email,
        phoneNo: phone,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const status = data.status;

    if (status === 200) {
      setRegisterState(true);
      setotpModalOpen(true);
    }

    const message = await data.json();
    console.log(message);
    saveUserDetails(message);
    // if(message.isver)
  
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-full flex items-center justify-center bg-black bg-opacity-50 z-50 transform transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white py-4 sm:w-1/2 max-w-[600px] rounded-lg shadow-lg">
        <div className="flex justify-around items-center align-middle">
          <h2 className="text-2xl ml-8 mb-8 font-semibold pt-16">Sign Up</h2>
          <div className="relative sm:top-[-3rem] sm:right-[-6rem]  top-[-2rem]">
            <button
              className="bg-black text-white font-semibold px-3 py-1 rounded-full"
              onClick={onClose}
            >
              X
            </button>
          </div>
        </div>
        <div className="bg-white p-10   pb-16 leading-7   rounded-xl m-auto w-[80%] text-center">
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
            className=" mb-3 bord w-[80%] p-1 rounded-md border-black"
          />
          {/* ...other input fields... */}

          <input
              type="text"
              onChange={(e) => {
                  console.log(e.target.value)
                setEmail(e.target.value);
              }}
              placeholder="Gmail"
              className=" mb-3 bord w-[80%] p-1 rounded-md outline-1"
            />
            <br />
            <input
              type="tel"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              pattern="[0-9]{10}"
              placeholder="746-7836-699"
              className=" mb-3 bord w-[80%] p-1 rounded-md outline-1"
            />
            <br />
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              className=" mb-3 bord w-[80%] p-1 rounded-md outline-1"
            />
            <br />

          <div className="flex w-full text-right">
            <Link
              onClick={() => {
                // onClose();
                setSignInModalOpen(true);
              }}
              className="text-right w-full"
              href="#greencredit"
            >
              SignIn
            </Link>
          </div>
          <br />
          <button
            onClick={handleSubmit}
           
            className="bg-black m-auto block rounded-md text-center p-1 pl-3 pr-3 mt-6 w-[90%] text-lg text-white hover:font-light"
          >
            Submit
            {registerState ? otpModalOpen &&  <OtpModal email={email} isOpen={true} onClose={otptoggleModal} /> : ""}
          </button>
          <button onClick={signupwithgoogle} className="bg-gray block m-auto rounded-md text-center p-1 pl-3 pr-3 mt-6 text-lg w-[90%] text-white hover:font-light">
            Sign Up with Google
          </button>
        </div>
      </div>
      {signInModalOpen && <SigninModal signupclose = {onclose}  isOpen={true} onClose={() => setSignInModalOpen(false)} />}
    </div>
  );
};

export default SignupModal;
