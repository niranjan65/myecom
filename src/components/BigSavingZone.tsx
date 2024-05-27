import React from 'react'
import { GoArrowDown, GoArrowRight } from "react-icons/go";
import product5 from "../../public/images/Rectangle 74.png"
import product6 from "../../public/images/Rectangle 75.png"
import product7 from "../../public/images/Rectangle 76.png"
import product8 from "../../public/images/Rectangle 77.png"
import product9 from "../../public/images/Rectangle 78.png"
import Image from 'next/image';

const BigSavingZone = () => {
  return (
    <div className="w-[1240px] h-[908px] mx-auto flex flex-col justify-between">
        <div className="flex items-center">
          <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8A33FD]"></div>
          <h3 className="text-[34px] font-semibold ml-4 text-[#3C4242]">
            Big Saving Zone
          </h3>
        </div>

        <div className="w-[1240px] h-[806px] grid grid-cols-6 gap-5 ">
          <div className="col-span-2 text-white">
            <Image src={product5} alt="" className="absolute" />
            <div className="w-[147px] h-[263.84px] top-[64.4px] left-[20px] relative flex flex-col justify-between">
              <h3 className="text-[28px] leading-[38.43px] font-semibold">
                Hawaiian Shirts
              </h3>
              <p className="text-[13px] font-semibold">
                Dress up in summer vibe
              </p>
              <p className="text-[18px] font-bold -mt-5">UPTO 50% OFF</p>
              <GoArrowDown
                
              />
              <button className="py-4 px-2 border-white border-[1px] w-[111px] h-[34px] flex justify-center items-center rounded-[4px] text-[12px]">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <Image src={product6} alt="" className="absolute" />
            <div className="w-[153px] h-[317.67px] top-[34.33px] left-[222px] relative flex flex-col row-end-1 justify-between text-white">
              <button className="py-4 px-2 bg-[#3C4242] w-[104px] h-[34px] flex justify-center items-center rounded-[4px] text-[12px] font-bold">
                Limited Stock
              </button>
              <h3 className="text-[28px] leading-[38.43px] font-semibold">
                Printed T-Shirt
              </h3>
              <p className="text-[13px] font-semibold">
                New Designs Every Week
              </p>
              <p className="text-[18px] font-bold -mt-5">UPTO 40% OFF</p>
              <GoArrowDown
                
              />
              <button className="py-4 px-2 border-white border-[1px] w-[111px] h-[34px] flex justify-center items-center rounded-[4px] text-[12px]">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <Image src={product7} alt="" className="absolute" />
            <div className="w-[147px] h-[263.84px] top-[64.4px] left-[227px] relative flex flex-col justify-between text-[#3C4242]">
              <h3 className="text-[28px] leading-[38.43px] font-semibold">
                Cargo Joggers
              </h3>
              <p className="text-[13px] font-semibold w-[157px]">
                Move with style & comfort
              </p>
              <p className="text-[18px] font-bold -mt-5">UPTO 50% OFF</p>
              <GoArrowDown
                
              />
              <button className="py-4 px-2 border-[#3C4242] border-[1px] w-[111px] h-[34px] flex justify-center items-center rounded-[4px] text-[12px]">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="col-span-3">
            <Image src={product8} alt="" className="absolute" />
            <div className="w-[133px] h-[296.91px] top-[45.42px] left-[357px] relative flex flex-col justify-between text-[#3C4242]">
              <h3 className="text-[32px] leading-[43.92px] font-semibold">
                Urban Shirts
              </h3>
              <p className="text-[16px] font-semibold w-[157px]">
                Live In Confort
              </p>
              <p className="text-[20px] font-bold -mt-5">FLAT 60% OFF</p>
              <GoArrowDown
                
              />
              <button className="py-4 px-2 border-[#3C4242] border-[1px] w-[111px] h-[34px] flex justify-center items-center rounded-[4px] text-[12px] font-semibold">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="col-span-3">
            <Image src={product9} alt="" className="absolute" />
            <div className="w-[133px] h-[296.91px] top-[45.42px] left-[357px] relative flex flex-col justify-between text-[#3C4242]">
              <h3 className="text-[32px] leading-[43.92px] font-semibold">
                Oversized T-Shirts
              </h3>
              <p className="text-[16px] font-semibold w-[157px]">
                Street Style Icon
              </p>
              <p className="text-[20px] font-bold -mt-5">FLAT 60% OFF</p>
              <GoArrowDown
                
              />
              <button className="py-4 px-2 border-[#3C4242] border-[1px] w-[111px] h-[34px] flex justify-center items-center rounded-[4px] text-[12px] font-semibold">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BigSavingZone