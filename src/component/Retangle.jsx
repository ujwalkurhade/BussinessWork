import React from "react";
import websitecontent from "../component/website-content.png";
import seotag from "../component/seo-tag.png";
import immersive from "../component/immersive.png";
import coding from "../component/coding.png";

function Retangle() {
  return (
    <div>
      <div class="w-[1440px] h-[169px] bg-white flex justify-center items-center  gap-[7rem]">
        <div className="flex gap-3 items-center">
          <div class="w-[83px] h-[83px] bg-violet-100 rounded-[20px] flex items-center justify-center">
            <img src={websitecontent} />
          </div>
          <div>
            <div class="text-black text-xl font-medium leading-[35px]">
              Web Application
            </div>
            <div class="text-neutral-400 text-[15px] font-normal leading-relaxed">
              Lorem Ipsum is simply
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex gap-3 items-center">
          <div class="w-[83px] h-[83px] bg-lime-100 rounded-[20px] flex items-center justify-center">
            <img src={seotag} />
          </div>
          <div>
            <div class="text-black text-xl font-medium leading-[35px]">
              SEO
            </div>
            <div class="text-neutral-400 text-[15px] font-normal leading-relaxed">
              Lorem Ipsum is simply
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex gap-3 items-center">
          <div class="w-[83px] h-[83px] bg-blue-100 rounded-[20px] flex items-center justify-center">
            <img src={immersive} />
          </div>
          <div>
            <div class="text-black text-xl font-medium leading-[35px]">
              AR/VR Solutions
            </div>
            <div class="text-neutral-400 text-[15px] font-normal leading-relaxed">
              Lorem Ipsum is simply
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex gap-3 items-center">
          <div class="w-[83px] h-[83px] bg-red-100 rounded-[20px] flex items-center justify-center">
            <img src={coding} />
          </div>
          <div>
            <div class="text-black text-xl font-medium leading-[35px]">
              Mobile Applications
            </div>
            <div class="text-neutral-400 text-[15px] font-normal leading-relaxed">
              Lorem Ipsum is simply
            </div>
          </div>
        </div>
      </div>
      <div class="w-[100%]   border  border-neutral-300 "></div>
    </div>
  );
}

export default Retangle;
