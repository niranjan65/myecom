import React from 'react'
import { GoArrowRight } from "react-icons/go";
import shirt1 from "../../public/images/shirt1.png"
import Image from 'next/image';

const MensCategory = () => {
  return (
    <div className="w-[1240px] h-[1054px] mx-auto flex flex-col justify-between">
        <div className="flex items-center">
          <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8A33FD]"></div>
          <h3 className="text-[34px] font-semibold ml-4 text-[#3C4242]">
            Categories For Men
          </h3>
        </div>

        <div className="w-[1240px] h-[952px] grid grid-cols-4">
          {/* Cards */}

          <div className="w-[270.36px] h-[451.35px] flex flex-col justify-between ">
            <Image src={shirt1} alt="" className="rounded-[10px]" />
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
            <Image src={shirt1} alt="" className="rounded-[10px]" />
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
            <Image src={shirt1} alt="" className="rounded-[10px]" />
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
            <Image src={shirt1} alt="" className="rounded-[10px]" />
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
            <Image src={shirt1} alt="" className="rounded-[10px]" />
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
            <Image src={shirt1} alt="" className="rounded-[10px]" />
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
            <Image src={shirt1} alt="" className="rounded-[10px]" />
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
            <Image src={shirt1} alt="" className="rounded-[10px]" />
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

export default MensCategory