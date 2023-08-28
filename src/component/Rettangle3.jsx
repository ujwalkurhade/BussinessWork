import React from "react";
import caspio from "../component/caspio.png";
import beneoshop from "../component/beneoshop.png";
import leotrippi from "../component/leotrippi.png";
import HyperGrid from "../component/HyperGrid.png";

function Rettangle3() {
  return (
    <div className="mt-[8rem] flex items-center justify-center flex-col">
      <div class="text-black text-2xl font-medium leading-[38.16px]">
        You will be in good Company
      </div>

      <div class="w-[1085px] h-[185px] justify-start items-start gap-[115px] inline-flex">
        <img class="w-[185px] h-[185px]" src={beneoshop} />
        <img class="w-[185px] h-[185px]" src={caspio} />
        <img class="w-[185px] h-[185px]" src={HyperGrid} />
        <img class="w-[185px] h-[185px]" src={leotrippi} />
      </div>
    </div>
  );
}

export default Rettangle3;
