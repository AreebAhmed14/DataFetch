import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import {Caveat} from "next/font/google"
const navfont = Caveat({
  subsets:["latin"],
  weight:["400","700"]
})

const Footer = () => {
  return (
    <div className="w-full h-[40vh] flex justify-around items-center bg-blue-500 max-[900px]:flex-col max-[1150px]:h-auto">
      <div>
      <h1 className={`text-5xl max-[1150px]:text-4xl max-[900px]:text-6xl max-[700px]:text-5xl max-[560px]:text-4xl m-7 font-sans font-bold text-white ${navfont.className}`}> 

        BUY <span className={`text-green-500 `}>LINGO</span>
          <p className={` text-xl font-sans font-bold max-[560px]:text-[1rem] mt-3 text-white ${navfont.className}`}>
          MAKE EVERYDAY HAPPY
            </p>
        </h1>
      </div>

      <div className="flex flex-col max-[900px]:m-5">
        <div className="flex items-center">
          <MdEmail className="text-3xl max-[1150px]:text-[1.5rem] text-white mr-2 max-[560px]:text-[1.3rem] max-[900px]:text-[2rem] font-bold" />
          <p className="text-2xl max-[1150px]:text-[1.3rem] text-white max-[700px]:text-[1.2rem] max-[900px]:text-[1.5rem] max-[560px]:text-[1rem] max-[560px]:m-0 m-2 font-sans font-bold">
            lingoshop@gmail.com
          </p>
        </div>

        <div className="flex items-center">
          <TbWorld className="text-3xl max-[1150px]:text-[1.5rem] text-white mr-2 max-[560px]:text-[1.3rem] max-[900px]:text-[2rem] font-bold" />
          <p className="text-2xl max-[1150px]:text-[1.3rem] text-white max-[700px]:text-[1.2rem] max-[900px]:text-[1.5rem] max-[560px]:text-[1rem] max-[560px]:m-0 m-2 font-sans font-bold">buylingo.vercel.app</p>
        </div>

        <div className="flex items-center">
          <RiWhatsappFill className="text-3xl max-[1150px]:text-[1.5rem] text-white mr-2 max-[560px]:text-[1.3rem] max-[900px]:text-[2rem] font-bold" />
          <p className="text-2xl max-[1150px]:text-[1.3rem] text-white max-[700px]:text-[1.2rem] max-[900px]:text-[1.5rem] max-[560px]:text-[1rem] max-[560px]:m-0 m-2 font-sans font-bold">+92 3336667777</p>
        </div>
      </div>

        <div className="flex flex-col justify-center items-center">
            {/* <h1 className="text-2xl font-sans font-bold text-orange-500">I HOPE YOU KNOW ME WELL NOW</h1> */}
            <div className="w-[25rem] max-[1150px]:w-[19rem] max-[700px]:text-[1.3rem] max-[560px]:text-[1rem] text-white max-[560px]:w-[90vw] max-[560px]:my-4 max-[900px]:w-[75vw] max-[900px]:my-7 max-[900px]:text-[1.5rem] m-1 text-xl font-bold font-sans"><center><p>{`We hope your experience with BuyLingo has been exceptional. Thank you for choosing us for your needs, and we look forward to serving you again! Feel free to reach out with any feedback or questions. Together, let’s make every interaction even better`}</p></center>
            </div>
        </div>

    </div>
  );
};

export default Footer;
