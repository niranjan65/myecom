import React from 'react'
import banner1 from '../../public/images/banner1.jpg'
import banner2 from '../../public/images/banner2.jpg'
import Image from 'next/image'

const Deals = () => {
  return (
    <div className=' flex justify-between w-[1239.87px] h-[356.2px] mx-auto'>
        {/* Banner Cards */}
        <div className="w-[604.93px] h-[356.2px] drop-shadow-3xl">
          <Image src={banner1} alt="" className="absolute rounded-[12px]" />
          <div className="relative text-white top-[67.29px] left-[28.12px] ">
            <h3 className="text-[18px] font-extrabold">Low Price</h3>
            <div className="mt-9">
              <h2 className="text-[32px] font-extrabold">High Coziness</h2>
              <h6 className="text-[16px] font-medium">UPTO 50% OFF</h6>
            </div>
            <h6 className="text-[20px] font-extrabold mt-9">Explore Items</h6>
          </div>
        </div>

        <div className="w-[604.93px] h-[356.2px] drop-shadow-3xl">
          <Image src={banner2} alt="" className="absolute rounded-[12px] w-[604.93px] h-[355.84px]" />
          <div className="relative text-white top-[57px] left-[30.07px] ">
            <h3 className="text-[18px] font-extrabold">Beyoung Presents</h3>
            <div className="mt-9">
              <h2 className="text-[32px] font-extrabold w-[20rem]">
                Breezy Summer Style
              </h2>
              <h6 className="text-[16px] font-medium">UPTO 50% OFF</h6>
            </div>
            <h6 className="text-[20px] font-extrabold mt-9">Explore Items</h6>
          </div>
        </div>
    </div>
  )
}

export default Deals