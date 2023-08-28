import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center border-b-2 z-50 relative ">
      <div className="text-sky-600 text-[29px] font-bold mt-[9px] ml-[32px]">
        <Link to={"/"}>LOGO</Link>
      </div>
      <div className="flex justify-between items-center text-center">
        <div className="w-[436px] h-6 relative">
          <div className="left-0 top-0 absolute text-sky-600 text-base font-normal">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="left-[131px] top-0 absolute text-black text-base font-normal">
            <Link to={"/About"}> About us </Link>
          </div>
          <div className="left-[273px] top-0 absolute text-black text-base font-normal">
            <Link to={"/Services"}> Services</Link>
          </div>
          <div className="left-[401px] top-0 absolute text-black text-base font-normal">
            <Link to={"/Blog"}>Blog</Link>
          </div>
        </div>
        <div className="w-[125px] h-[41px] bg-sky-600 rounded-md ml-[15px] mr-[32px]  text-white  text-[13px] font-normal">
          <h3 className="text-center mt-[8px]">
            <button type="button" className="w-[100%]">
              <Link to={"/Contact"}>Contact us</Link>
            </button>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
