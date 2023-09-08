import React from "react";

function EPRFORM() {
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
        <form className=" sm:bg-white sm:p-10 sm:pb-10 sm:leading-7  sm:rounded-xl sm:w-[80%] sm:text-center">
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
        </form>
      </div>
    </div>
  );
}

export default EPRFORM;
