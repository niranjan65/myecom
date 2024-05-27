import React from 'react';
import hero from "../../public/images/shop-hero1.jpg";
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative w-full bg-red-500">
      <Image src={hero} priority={true} alt='Hero' className='w-full h-auto' />
      <div className="absolute top-[149px] left-[193px] w-[439px] h-[455px] flex flex-col justify-between text-white">
        <p className="text-[32px] font-medium leading-[37.77px]">
          T-Shirt / Tops
        </p>
        <h1 className="text-[78px] font-extrabold leading-[93.62px]">
          Summer Value Pack
        </h1>
        <p className="text-[32px] font-medium leading-[47.21px]">
          Cool / Colourful / Comfy
        </p>
        <button className="w-[250px] h-[61px] bg-white py-4 px-[72px] rounded-lg">
          <p className="text-[#3C4242] text-xl font-bold w-[117px]">
            Shop Now
          </p>
        </button>
      </div>
    </div>
  );
}

export default Banner;
