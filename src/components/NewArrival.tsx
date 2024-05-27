import Image from 'next/image';
import React from 'react'
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import product1 from "../../public/images/product1.png"
import product2 from "../../public/images/product2.png"
import product3 from "../../public/images/product3.png"
import product4 from "../../public/images/product4.png"


const NewArrival = () => {
  return (
    <div className="w-[1238.59px]  mx-auto flex flex-col gap-7 ">
        <div className="flex items-center">
          <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8A33FD]"></div>
          <h3 className="text-[34px] font-semibold ml-4 text-[#3C4242]">
            New Arrival
          </h3>
        </div>

        {/* products */}
        <div className="w-[1237.59px] h-[313.67px] flex items-center justify-between">
          <IoMdArrowBack  />
          <div className="w-[1167px] h-[319.67px] flex gap-[38.58px]">
            {/* product 1 */}
            <div className="w-[262.81px] h-[319.67px] flex flex-col justify-between">
              <Image src={product1} alt="" />
              <p className="text-[20px] font-bold text-[#3C4242]">
                Knitted Joggers
              </p>
            </div>
            <div className="w-[262.81px] h-[319.67px] flex flex-col justify-between">
              <Image src={product2} alt="" />
              <p className="text-[20px] font-bold text-[#3C4242]">
                Full Sleeve
              </p>
            </div>
            <div className="w-[262.81px] h-[319.67px] flex flex-col justify-between">
              <Image src={product3} alt="" />
              <p className="text-[20px] font-bold text-[#3C4242]">
                Active T-Shirts
              </p>
            </div>
            <div className="w-[262.81px] h-[319.67px] flex flex-col justify-between">
              <Image src={product4} alt="" />
              <p className="text-[20px] font-bold text-[#3C4242]">
                Urban Shirts
              </p>
            </div>
          </div>
          <IoMdArrowForward  />
        </div>
      </div>
  )
}

export default NewArrival