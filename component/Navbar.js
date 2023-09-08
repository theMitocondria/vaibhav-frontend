"use client";

import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import { NavLink } from "next/router";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);

  let width = 500

  return (
    <div className=" flex border-b border-b-2 p-4 px-6 items-center justify-between">
      <button  onClick={() => {router.push('/')}} className="text-2xl font-bold">
        <span className="  text-gray">S</span>carbon
      </button>

      <button className="mx-8  border rounded-3xl border-2 px-3 py-1">
        Contact Us
      </button>

      <div className="flex items-center  justify-center">
        {/* <GiHamburgerMenu  className='h-8'/> */}

        <div>
          <button
            className={`cursor-pointer hover:text-gray-700 ${
              isOpen ? "hidden" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <GiHamburgerMenu />
          </button>

          {isOpen && (
            <div className={`w-[${width}px]`}>
              <nav className="bg-white fixed w-full h-screen z-10">
                <button
                  className={`cursor-pointer  hover:text-gray-700 `}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <GiHamburgerMenu />
                </button>
                <ul className="flex flex-col mt-4">
                  <li>
                    <p>hello</p>
                    {/* <NavLink to="/">Home</NavLink> */}
                  </li>
                  <li>
                    <p>hi</p>
                    {/* <NavLink to="/about">About</NavLink> */}
                  </li>
                  <li>
                    <p>by</p>
                    {/* <NavLink to="/contact">Contact</NavLink> */}
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// export default function Navbar() {

//   return (
//     <div className="p-2">

//       <div>
//         <button
//           className={`cursor-pointer hover:text-gray-700 ${isOpen ? 'hidden' : ''}`}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <GiHamburgerMenu />
//         </button>

//         {isOpen && (
//           <nav className="bg-white shadow-md fixed w-full h-screen z-10">
//             <ul className="flex flex-col mt-4">
//               <li>
//                 <NavLink to="/">Home</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about">About</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/contact">Contact</NavLink>
//               </li>
//             </ul>
//           </nav>
//         )}
//       </div>
//     </div>
//   );
// }
