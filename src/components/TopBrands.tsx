import React from 'react'
import nike from "../../public/images/nike.png"
import hm from "../../public/images/hm.png"
import levis from "../../public/images/levis.png"
import polo from "../../public/images/polo.png"
import puma from "../../public/images/puma.png"
import Image from 'next/image'

const TopBrands = () => {
  return (
    <div className="h-[357.17px] w-[1233px] mx-auto rounded-xl bg-[#323232] flex flex-col justify-around">
        <div>
          <h2 className="text-white text-[50px] font-extrabold text-center">
            Top Brands Deal
          </h2>
          <p className="text-[22px] font-normal text-white text-center mt-5">
            Up To <span className="font-bold text-[#FBD103]">60%</span> off on
            brands
          </p>
        </div>

        <div className="h-[85.55px] w-[985.97px] mx-auto flex gap-5">
          <div className="h-full w-[177.52px] bg-white rounded-xl flex items-center justify-center">
            <Image src={nike} alt="" />
          </div>
          <div className="h-full w-[177.52px] bg-white rounded-xl flex items-center justify-center">
            <Image src={hm} alt="" />
          </div>
          <div className="h-full w-[177.52px] bg-white rounded-xl flex items-center justify-center">
            <Image src={levis} alt="" />
          </div>
          <div className="h-full w-[177.52px] bg-white rounded-xl flex items-center justify-center">
            <Image src={polo} alt="" />
          </div>
          <div className="h-full w-[177.52px] bg-white rounded-xl flex items-center justify-center">
            <Image src={puma} alt="" />
          </div>
        </div>
      </div>
  )
}

export default TopBrands