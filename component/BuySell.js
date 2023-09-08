import React from "react";

export default function BuySell() {
  return (
    <div>
      <div className="flex sm:flex-row flex-col ">
        <div className="bg-hello bg-no-repeat bg-cover  sm:h-screen sm:w-[50%]">
          <div>
            <p className="text-white sm:hidden text-2xl text-center "> Our Solution</p>
            <p className=" hidden sm:block relative text-2xl  font-bold  text-white top-2 md:text-5xl lg:left-[80%]  md:left-[77%] xl:left-[85%] sm:left-[84%]">Our</p>
          </div>

          <div className="flex flex-col  h-screen justify-center items-center">
            <p className=" text-8xl font-extrabold text-white">SELL</p>
            <p className="text-white text-2xl">Get rid of your waste</p>
            <button className="bg-white mt-4 px-6 py-3 text-xl rounded-full">Make some Monkey</button>
          </div>
        </div>
        <div className="bg-white sm:h-screen sm:w-[50%]">
          <div>
          {/* <p className="top-1 md:text-5xl md:left-[86%]">Our</p> */}
            <p className=" hidden sm:block relative text-2xl font-bold  md:text-5xl text-black top-2 left-0">&nbsp;Solutions</p>
          </div>

          <div className="flex flex-col  h-screen justify-center items-center">
            <p className=" text-8xl font-extrabold text-black">BUY</p>
            <p className="text-black text-2xl">Want some product from us</p>
            <button className="bg-black text-white mt-4 px-6 py-3 text-xl rounded-full">Fell free to contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}
