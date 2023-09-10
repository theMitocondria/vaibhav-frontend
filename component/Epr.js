'use client'
import { useRouter } from "next/navigation";
import React from "react";

function Epr() {
  const router = useRouter();
  return (
    <div id='epr' className=" bg-black p-6 sm:p-12 items-center">
      <div>
        <h1 className="text-white text-center text-5xl m-6 mb-12 font-bold font-ubuntu">Empower your Sustainability Goals</h1>
      </div>
     <div className="flex justify-center">
     <div className="flex bg-white rounded-2xl sm:rounded-[3rem] w-3/4">
        <div className="p-8 w-full sm:w-[65%]">
          <h1 className=" text-4xl font-bold mt-8 text-left">Fulfill your <span className=" text-gray font-extrabold">EPR </span> targets </h1>
          <h1 className=" text-4xl font-bold mb-6">with Ease</h1>
          <p className=" font-sans mb-6">
            Monitor your EPR Fulfillment process with complete traceability
            .Trust the one-stop solution from EPR Registration to Fulfillment.
            Just few steps away from your goals, click on the button below and stay ahead of them.
          </p>
          <button onClick={()=>{console.log("i am working");router.push("/epr")}} className="bg-black rounded-2xl p-1 text-white pl-5 pr-5 hover:bg-gray" >Schedule Consultation</button>
        </div>
        <div className=" w-0 sm:w-[35%]">
          <img src="/rs.png" className="h-full w-full bg-cover" />
        </div>
      </div>
     </div>
    </div>
  );
}

export default Epr;
