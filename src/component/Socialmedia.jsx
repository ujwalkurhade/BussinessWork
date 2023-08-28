import React from "react";

import facebook from "../component/facebook1.png";
import instagram from "../component/instagram.png";
import linkedin from "../component/linkedin.png";
import twitter from "../component/twitter.png";

function Socialmedia() {
  return (
    <div className="flex justify-between items-center gap-5 mt-[30px]">
      <div class="w-[34px] h-[34px] bg-white rounded-full shadow flex items-center justify-center">
        <img src={facebook} />
      </div>

      <div class="w-[34px] h-[34px] bg-white rounded-full shadow flex items-center justify-center">
        <img src={instagram} />
      </div>

      <div class="w-[34px] h-[34px] bg-white rounded-full shadow flex items-center justify-center">
        <img src={linkedin} />
      </div>

      <div class="w-[34px] h-[34px] bg-white rounded-full shadow flex items-center justify-center">
        <img src={twitter} />
      </div>
    </div>
  );
}

export default Socialmedia;
