import React from 'react'
import photo1 from "../../public/images/photo1.png"
import photo2 from "../../public/images/photo2.png"
import Image from 'next/image'

const Advertisement = () => {
  return (
    <div className="w-[1240px] h-[640.06px] flex mx-auto justify-between">
        <div>
          <Image src={photo2} alt="" className="absolute" />
          <div className="w-[466px] h-[282px] relative top-[183px] left-[74px] text-white flex flex-col justify-between">
            <h1 className="text-[34px] font-extrabold ">
              WE MADE YOUR EVERYDAY FASHION BETTER!
            </h1>
            <p className="text-[20px] font-light ">
              In our journey to improve everyday fashion, euphoria presents
              EVERYDAY wear range - Comfortable & Affordable fashion 24/7
            </p>
            <div>
              <button className="bg-white text-[18px] text-[#3C4242] font-semibold py-3 px-11 rounded-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image src={photo1} alt="" />
        </div>
      </div>
  )
}

export default Advertisement