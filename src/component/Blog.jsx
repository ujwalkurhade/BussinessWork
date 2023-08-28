import React from "react";
import Navbar from "./Navbar";
import Retangle4 from "./Retangle4";
import Footer from "./Footer";
import Blog1 from "../component/Blog1.png";
import BlogContant from "./BlogContant";

function Blog() {
  return (
    <div>
      <Navbar />
      <div className="w-[100%] flex items-center justify-center flex-col">
        <div class="w-[318px] h-[135px] text-center">
          <span className="text-black text-[42px] font-bold leading-[74.72px] tracking-wide">
            Latest news
            <br />{" "}
          </span>
          <span className="text-sky-600 text-[42px] font-bold leading-[74.72px] tracking-wide">
            Updates
            <br />
          </span>
        </div>
        <div class="w-[432px] h-[71px] mt-[2rem] text-center text-neutral-500 text-xl font-medium leading-[37.90px]">
          Lorem Ipsum is simply dummy text of the printing.
        </div>
        <div class="w-[400px] h-[49px] bg-zinc-100 rounded-[10px] mt-[2rem] border-2 border-slate-950 overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-[100%] h-[100%] p-1 border-none"
          />
        </div>
        <div className="flex justify-between items-center m-[2rem] gap-5">
          <div class="w-[162px] h-12 bg-slate-200 rounded-[30px]">
            <div class="mt-2 text-center flex items-center justify-center text-sky-600 text-sm font-normal leading-[24.91px] tracking-tight">
              Lorem ipsum
            </div>
          </div>
          <div class="w-[162px] h-12 bg-slate-200 rounded-[30px]">
            {" "}
            <div class="mt-2 text-center flex items-center justify-center text-sky-600 text-sm font-normal leading-[24.91px] tracking-tight">
              Lorem ipsum
            </div>
          </div>
          <div class="w-[162px] h-12 bg-slate-200 rounded-[30px]">
            {" "}
            <div class="mt-2 text-center flex items-center justify-center text-sky-600 text-sm font-normal leading-[24.91px] tracking-tight">
              Lorem ipsum
            </div>
          </div>
          <div class="w-[162px] h-12 bg-slate-200 rounded-[30px]">
            {" "}
            <div class="mt-2 text-center flex items-center justify-center text-sky-600 text-sm font-normal leading-[24.91px] tracking-tight">
              Lorem ipsum
            </div>
          </div>
          <div class="w-[162px] h-12 bg-slate-200 rounded-[30px]">
            {" "}
            <div class="mt-2 text-center flex items-center justify-center text-sky-600 text-sm font-normal leading-[24.91px] tracking-tight">
              Lorem ipsum
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] justify-center items-center flex mt-[5rem] mb-[4rem]">
        <div className="w-[80%] flex justify-center items-center gap-[4rem]">
          <div>
            <img class="w-[545px] h-[340px]" src={Blog1} />
          </div>
          <div className="flex  flex-col ">
            <div class="w-[525px] h-[92px] text-black text-[27px] font-semibold leading-[48.03px] tracking-tight">
              Lorem Ipsum is simply dummy text of the
              printing.
            </div>
            <div class="w-[525px] h-[105px] text-neutral-700 text-base mt-6 font-normal leading-[33.74px] tracking-tight">
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy
              text ever since the .
            </div>

            <div className="flex gap-4">
              <img
                class="w-[54px] h-[54px] rounded-full"
                src="https://via.placeholder.com/54x54"
              />
              <div className="flex  flex-col">
                <div class="text-black text-lg font-medium leading-[37.96px] tracking-tight">
                  Name here
                </div>
                <div class="text-neutral-500 text-sm font-normal leading-[29.53px] tracking-tight">
                  20.12.2020
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div>
        <BlogContant />
        <BlogContant />
      </div>

      {/* <div class="w-[100%] flex justify-center items-center flex-col bg-white">
        <div class="w-[100%] flex justify-center items-center flex-col text-center top-[174px]  ">
          <div class="w-[432px] flex justify-center items-center flex-col h-[247px] left-0 top-0  ">
            <div class="w-[318px] flex justify-center items-center flex-col h-[135px]  top-0   text-center">
              <span className="text-black text-[42px] font-bold leading-[74.72px] tracking-wide">
                Latest news
                <br />{" "}
              </span>
              <span className="text-sky-600 text-[42px] font-bold leading-[74.72px] tracking-wide">
                Updates
                <br />
              </span>
            </div>
            <div class="w-[432px] h-[71px] left-0 top-[176px]   text-center text-neutral-500 text-xl font-medium leading-[37.90px]">
              Lorem Ipsum is simply dummy text of the
              printing .
            </div>
          </div>
          <div class="w-[400px] flex justify-center items-center   ">
            <div class="w-[100%]  bg-zinc-100 rounded-[10px]">
              <div class=" w-[100%] text-center text-neutral-500 text-base font-normal leading-[30.32px]">
                <input
                  className="w-[100%] ml-2 overflow-hidden"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="w-[946px] h-12  left-[247px] top-[588px] flex justify-center items-center  ">
          <div class="w-[162px] h-12 left-0 top-0 justify-center items-center  ">
            <div class="w-[162px] h-12 left-0 top-0   bg-slate-200 rounded-[30px]"></div>
            <div class="left-[34px] top-[11px]   text-center text-sky-600 text-sm font-normal leading-[24.91px] tracking-tight">
              Lorem ipsum{" "}
            </div>
          </div>
          <div class="w-[162px] h-12 left-[196px] top-0  ">
            <div class="w-[162px] h-12 left-0 top-0   bg-slate-200 rounded-[30px]"></div>
            <div class="left-[34px] top-[11px]   text-center text-sky-600 text-sm font-normal leading-[24.91px] tracking-tight">
              Lorem ipsum{" "}
            </div>
          </div>
          <div class="w-[162px] h-12 left-[392px] top-0  ">
            <div class="w-[162px] h-12 left-0 top-0   bg-slate-200 rounded-[30px]"></div>
            <div class="left-[34px] top-[11px]   text-center text-sky-600 text-sm font-normal leading-[24.91px] tracking-tight">
              Lorem ipsum{" "}
            </div>
          </div>
          <div class="w-[162px] h-12 left-[588px] top-0  ">
            <div class="w-[162px] h-12 left-0 top-0   bg-slate-200 rounded-[30px]"></div>
            <div class="left-[34px] top-[11px]   text-center text-sky-600 text-sm font-normal leading-[24.91px] tracking-tight">
              Lorem ipsum{" "}
            </div>
          </div>
          <div class="w-[162px] h-12 left-[784px] top-0  ">
            <div class="w-[162px] h-12 left-0 top-0   bg-sky-600 rounded-[30px]"></div>
            <div class="left-[34px] top-[11px]   text-center text-white text-sm font-normal leading-[24.91px] tracking-tight">
              Lorem ipsum{" "}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div class="w-[1130px] h-[340px] left-[136px] top-[745px]   ">
            <img
              class="w-[545px] h-[340px] left-0 top-0  "
              src="https://via.placeholder.com/545x340"
            />
            <div class="left-[976px] top-[280px]   text-sky-600 text-sm font-normal leading-[24.91px] tracking-tight">
              Read More
            </div>
            <div class="w-[525px] h-[230px] left-[605px] top-[17px]  ">
              <div class="w-[525px] h-[105px] left-0 top-[125px]   text-neutral-700 text-base font-normal leading-[33.74px] tracking-tight">
                Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem
                Ipsum has been the industry's standard
                dummy text ever since the .
              </div>
              <div class="w-[525px] h-[92px] left-0 top-0   text-black text-[27px] font-semibold leading-[48.03px] tracking-tight">
                Lorem Ipsum is simply dummy text of the
                printing.
              </div>
            </div>
            <div class="w-[177px] h-[60px] left-[605px] top-[264px]  ">
              <img
                class="w-[54px] h-[54px] left-0 top-[3px]   rounded-full"
                src="https://via.placeholder.com/54x54"
              />
              <div class="w-[102px] h-[60px] left-[75px] top-0  ">
                <div class="left-0 top-0   text-black text-lg font-medium leading-[37.96px] tracking-tight">
                  Name here
                </div>
                <div class="left-0 top-[30px]   text-neutral-500 text-sm font-normal leading-[29.53px] tracking-tight">
                  20.12.2020
                </div>
              </div>
            </div>
          </div>
          <div class="w-[333px] h-[672px] left-[136px] top-[1221px]  flex justify-center items-center ">
            <img
              class="w-[333px] h-[306px] left-0 top-0   rounded-[45px]"
              src="https://via.placeholder.com/333x306"
            />
            <div class="w-[333px] h-[326px] left-0 top-[346px]  ">
              <div class="w-[333px] h-[247.07px] left-0 top-0  ">
                <div class="w-[333px] h-[144.07px] left-0 top-[103px]   text-neutral-700 text-base font-normal leading-[33.74px] tracking-tight">
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard
                  dummy text ever since the .
                </div>
                <div class="w-[333px] h-[126.23px] left-0 top-0   text-black text-[23px] font-semibold leading-[40.92px] tracking-tight">
                  Lorem Ipsum is simply dummy text of the
                  printing.
                </div>
              </div>
              <div class="w-[177px] h-[60px] left-0 top-[266px]  ">
                <img
                  class="w-[54px] h-[54px] left-0 top-[3px]   rounded-full"
                  src="https://via.placeholder.com/54x54"
                />
                <div class="w-[102px] h-[60px] left-[75px] top-0  ">
                  <div class="left-0 top-0   text-black text-lg font-medium leading-[37.96px] tracking-tight">
                    Name here
                  </div>
                  <div class="left-0 top-[30px]   text-neutral-500 text-sm font-normal leading-[29.53px] tracking-tight">
                    20.12.2020
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[333px] h-[672px] left-[136px] top-[2031px]  flex justify-center items-center ">
            <img
              class="w-[333px] h-[306px] left-0 top-0   rounded-[45px]"
              src="https://via.placeholder.com/333x306"
            />
            <div class="w-[333px] h-[326px] left-0 top-[346px]  ">
              <div class="w-[333px] h-[247.07px] left-0 top-0  ">
                <div class="w-[333px] h-[144.07px] left-0 top-[103px]   text-neutral-700 text-base font-normal leading-[33.74px] tracking-tight">
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard
                  dummy text ever since the .
                </div>
                <div class="w-[333px] h-[126.23px] left-0 top-0   text-black text-[23px] font-semibold leading-[40.92px] tracking-tight">
                  Lorem Ipsum is simply dummy text of the
                  printing.
                </div>
              </div>
              <div class="w-[177px] h-[60px] left-0 top-[266px]  ">
                <img
                  class="w-[54px] h-[54px] left-0 top-[3px]   rounded-full"
                  src="https://via.placeholder.com/54x54"
                />
                <div class="w-[102px] h-[60px] left-[75px] top-0  ">
                  <div class="left-0 top-0   text-black text-lg font-medium leading-[37.96px] tracking-tight">
                    Name here
                  </div>
                  <div class="left-0 top-[30px]   text-neutral-500 text-sm font-normal leading-[29.53px] tracking-tight">
                    20.12.2020
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[333px] h-[672px] left-[553px] top-[1221px]  ">
            <img
              class="w-[333px] h-[306px] left-0 top-0   rounded-[45px]"
              src="https://via.placeholder.com/333x306"
            />
            <div class="w-[333px] h-[326px] left-0 top-[346px]  ">
              <div class="w-[333px] h-[247.07px] left-0 top-0  ">
                <div class="w-[333px] h-[144.07px] left-0 top-[103px]   text-neutral-700 text-base font-normal leading-[33.74px] tracking-tight">
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard
                  dummy text ever since the .
                </div>
                <div class="w-[333px] h-[126.23px] left-0 top-0   text-black text-[23px] font-semibold leading-[40.92px] tracking-tight">
                  Lorem Ipsum is simply dummy text of the
                  printing.
                </div>
              </div>
              <div class="w-[177px] h-[60px] left-0 top-[266px]  ">
                <img
                  class="w-[54px] h-[54px] left-0 top-[3px]   rounded-full"
                  src="https://via.placeholder.com/54x54"
                />
                <div class="w-[102px] h-[60px] left-[75px] top-0  ">
                  <div class="left-0 top-0   text-black text-lg font-medium leading-[37.96px] tracking-tight">
                    Name here
                  </div>
                  <div class="left-0 top-[30px]   text-neutral-500 text-sm font-normal leading-[29.53px] tracking-tight">
                    20.12.2020
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[333px] h-[672px] left-[553px] top-[2031px]  ">
            <img
              class="w-[333px] h-[306px] left-0 top-0   rounded-[45px]"
              src="https://via.placeholder.com/333x306"
            />
            <div class="w-[333px] h-[326px] left-0 top-[346px]  ">
              <div class="w-[333px] h-[247.07px] left-0 top-0  ">
                <div class="w-[333px] h-[144.07px] left-0 top-[103px]   text-neutral-700 text-base font-normal leading-[33.74px] tracking-tight">
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard
                  dummy text ever since the .
                </div>
                <div class="w-[333px] h-[126.23px] left-0 top-0   text-black text-[23px] font-semibold leading-[40.92px] tracking-tight">
                  Lorem Ipsum is simply dummy text of the
                  printing.
                </div>
              </div>
              <div class="w-[177px] h-[60px] left-0 top-[266px]  ">
                <img
                  class="w-[54px] h-[54px] left-0 top-[3px]   rounded-full"
                  src="https://via.placeholder.com/54x54"
                />
                <div class="w-[102px] h-[60px] left-[75px] top-0  ">
                  <div class="left-0 top-0   text-black text-lg font-medium leading-[37.96px] tracking-tight">
                    Name here
                  </div>
                  <div class="left-0 top-[30px]   text-neutral-500 text-sm font-normal leading-[29.53px] tracking-tight">
                    20.12.2020
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[334px] h-[672px] left-[970px] top-[1221px]  ">
            <img
              class="w-[334px] h-[306px] left-0 top-0   rounded-[45px]"
              src="https://via.placeholder.com/334x306"
            />
            <div class="w-[333px] h-[326px] left-0 top-[346px]  ">
              <div class="w-[333px] h-[247.07px] left-0 top-0  ">
                <div class="w-[333px] h-[144.07px] left-0 top-[103px]   text-neutral-700 text-base font-normal leading-[33.74px] tracking-tight">
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard
                  dummy text ever since the .
                </div>
                <div class="w-[333px] h-[126.23px] left-0 top-0   text-black text-[23px] font-semibold leading-[40.92px] tracking-tight">
                  Lorem Ipsum is simply dummy text of the
                  printing.
                </div>
              </div>
              <div class="w-[177px] h-[60px] left-0 top-[266px]  ">
                <img
                  class="w-[54px] h-[54px] left-0 top-[3px]   rounded-full"
                  src="https://via.placeholder.com/54x54"
                />
                <div class="w-[102px] h-[60px] left-[75px] top-0  ">
                  <div class="left-0 top-0   text-black text-lg font-medium leading-[37.96px] tracking-tight">
                    Name here
                  </div>
                  <div class="left-0 top-[30px]   text-neutral-500 text-sm font-normal leading-[29.53px] tracking-tight">
                    20.12.2020
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[334px] h-[672px] left-[970px] top-[2031px]  ">
            <img
              class="w-[334px] h-[306px] left-0 top-0   rounded-[45px]"
              src="https://via.placeholder.com/334x306"
            />
            <div class="w-[333px] h-[326px] left-0 top-[346px]  ">
              <div class="w-[333px] h-[247.07px] left-0 top-0  ">
                <div class="w-[333px] h-[144.07px] left-0 top-[103px]   text-neutral-700 text-base font-normal leading-[33.74px] tracking-tight">
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard
                  dummy text ever since the .
                </div>
                <div class="w-[333px] h-[126.23px] left-0 top-0   text-black text-[23px] font-semibold leading-[40.92px] tracking-tight">
                  Lorem Ipsum is simply dummy text of the
                  printing.
                </div>
              </div>
              <div class="w-[177px] h-[60px] left-0 top-[266px]  ">
                <img
                  class="w-[54px] h-[54px] left-0 top-[3px]   rounded-full"
                  src="https://via.placeholder.com/54x54"
                />
                <div class="w-[102px] h-[60px] left-[75px] top-0  ">
                  <div class="left-0 top-0   text-black text-lg font-medium leading-[37.96px] tracking-tight">
                    Name here
                  </div>
                  <div class="left-0 top-[30px]   text-neutral-500 text-sm font-normal leading-[29.53px] tracking-tight">
                    20.12.2020
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Retangle4 />
      <Footer />
    </div>
  );
}

export default Blog;
