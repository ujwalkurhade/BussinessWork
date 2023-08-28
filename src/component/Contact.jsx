import React from "react";
import Navbar from "./Navbar";
import Retangle4 from "./Retangle4";
import Footer from "./Footer";
import map from "../component/map.png";
import gps from "../component/gps.png";
import Socialmedia from "./Socialmedia";

function Contact() {
  return (
    <div>
      <Navbar />
      {/*  */}

      <div className="w-[100%] flex justify-center items-center gap-[6rem] mt-[8rem] m-[4rem]">
        <div className=" flex flex-col  gap-4">
          <img
            class="w-14 h-14"
            src="https://via.placeholder.com/56x56"
          />
          <div class="text-black text-[45px] font-semibold leading-[76.50px]">
            Let’s Collaborate
          </div>
          <div class="w-[437px] h-[71px] text-neutral-500 text-xl font-normal leading-[37.90px]">
            Lorem Ipsum is simply dummy text of the
            printing .
          </div>
        </div>
        <div>
          <img class="w-[608px] h-[391px]" src={map} />
        </div>
      </div>
      <div className=" w-[100%] flex justify-center items-center  mt-[5rem] mb-[10rem]">
        <div className="w-[80%] flex justify-center items-center gap-[2rem]">
          <div className="flex  justify-start flex-col ">
            <div class="text-black text-base font-normal leading-[30.32px]">
              Follow us
            </div>
            <Socialmedia />
          </div>
          {/*  */}
          <div class="w-[102px] h-[0px] origin-top-left rotate-90 border border-stone-300"></div>
          <div className="flex ">
            <div class="w-[166px] h-6 text-zinc-800 text-xl font-light">
              +94 4444 5555 6
            </div>
          </div>
          {/*  */}
          <div class="w-[102px] h-[0px] origin-top-left rotate-90 border border-stone-300"></div>
          <div className="flex justify-center items-center gap-5">
            <div class="w-[29px] h-[29px] relative">
              <img src={gps} />
            </div>
            <div class="w-[325px] h-[66px] text-zinc-800 text-xl font-light">
              but also the leap into electronic <br />
              typesetting
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div class="w-[100%] h-[858px] bg-indigo-50 flex items-center   flex-col">
        <div class="text-black text-3xl font-normal leading-[56.85px] mt-[8rem] ">
          Say hello
        </div>
        <div class="w-[432px] h-[26px] text-center text-neutral-500 text-[13px] font-medium leading-normal">
          Lorem Ipsum is simply dummy text of the printing
          .
        </div>
      </div>
      <div>
        <form>div</form>
      </div>

      {/*  */}

      <Retangle4 />
      <Footer />
    </div>
  );
}

export default Contact;
