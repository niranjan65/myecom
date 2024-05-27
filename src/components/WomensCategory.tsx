import React from 'react'
import { GoArrowRight } from "react-icons/go";
import women1 from "../../public/images/women1.png"
import women2 from "../../public/images/women2.png"
import women3 from "../../public/images/women3.png"
import women4 from "../../public/images/women4.png"
import Image from 'next/image';

const WomensCategory = () => {
  return (
    <div className="w-[1240px] h-[553px] mx-auto flex flex-col justify-between">
        <div className="flex items-center">
          <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8A33FD]"></div>
          <h3 className="text-[34px] font-semibold ml-4 text-[#3C4242]">
            Categories For Women
          </h3>
        </div>

        <div className="w-[1240px] h-[451px] grid grid-cols-4">
          {/* Cards */}

          <div className="w-[270.36px] h-[451.35px] flex flex-col justify-between ">
            <Image src={women1} alt="" className="rounded-[10px]" />
            <div className="w-full h-[42.45px] flex justify-between items-center">
              <div className="left w-[179.31px] h-full flex flex-col justify-between">
                <h2 className="text-[#2A2F2F] text-[17.88px] font-bold">
                  Shirts
                </h2>
                <p className="text-[#7F7F7F] text-[13.41px]">Explore Now!</p>
              </div>
              <div className="right">
                <GoArrowRight  />
              </div>
            </div>
          </div>
          <div className="w-[270.36px] h-[451.35px] flex flex-col justify-between ">
            <Image src={women2} alt="" className="rounded-[10px]" />
            <div className="w-full h-[42.45px] flex justify-between items-center">
              <div className="left w-[179.31px] h-full flex flex-col justify-between">
                <h2 className="text-[#2A2F2F] text-[17.88px] font-bold">
                  Shirts
                </h2>
                <p className="text-[#7F7F7F] text-[13.41px]">Explore Now!</p>
              </div>
              <div className="right">
                <GoArrowRight  />
              </div>
            </div>
          </div>
          <div className="w-[270.36px] h-[451.35px] flex flex-col justify-between ">
            <Image src={women3} alt="" className="rounded-[10px]" />
            <div className="w-full h-[42.45px] flex justify-between items-center">
              <div className="left w-[179.31px] h-full flex flex-col justify-between">
                <h2 className="text-[#2A2F2F] text-[17.88px] font-bold">
                  Shirts
                </h2>
                <p className="text-[#7F7F7F] text-[13.41px]">Explore Now!</p>
              </div>
              <div className="right">
                <GoArrowRight  />
              </div>
            </div>
          </div>
          <div className="w-[270.36px] h-[451.35px] flex flex-col justify-between ">
            <Image src={women4} alt="" className="rounded-[10px]" />
            <div className="w-full h-[42.45px] flex justify-between items-center">
              <div className="left w-[179.31px] h-full flex flex-col justify-between">
                <h2 className="text-[#2A2F2F] text-[17.88px] font-bold">
                  Shirts
                </h2>
                <p className="text-[#7F7F7F] text-[13.41px]">Explore Now!</p>
              </div>
              <div className="right">
                <GoArrowRight  />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default WomensCategory