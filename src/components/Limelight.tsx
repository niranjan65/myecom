import React from 'react'
import fem1 from "../../public/images/fem1.png"
import fem2 from "../../public/images/fem2.png"
import fem3 from "../../public/images/fem3.png"
import fem4 from "../../public/images/fem4.png"
import {CiHeart} from "react-icons/ci"
import Image from 'next/image'


const Limelight = () => {
  return (
    <div className="w-[1238px] h-[543px] mx-auto flex flex-col justify-between">
        <div className="flex items-center">
          <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8A33FD]"></div>
          <h3 className="text-[34px] font-semibold ml-4 text-[#3C4242]">
            In The Limelight
          </h3>
        </div>

        <div className="w-[1236px] h-[441px] flex gap-9">
          {/* product card */}

          <div className="w-[282px] h-full flex flex-col justify-between">
            <div>
              <Image src={fem1} alt="" className="rounded-xl absolute" />
              <div className="w-[32.36px] h-[32.36px] relative left-[221px] top-5 bg-white rounded-[50%] flex items-center justify-center">
                <CiHeart />
              </div>
            </div>

            <div className="w-full h-[41px] flex justify-between">
              <div className="left w-[166px] h-full">
                <h3 className="text-[15px] text-[#3C4242] font-semibold">
                  Black Sweatshirt with ....
                </h3>
                <p className="text-[14px] font-medium text-[#807D7E]">
                  Jhanvi’s Brand
                </p>
              </div>
              <div className="right">
                <div className="h-[36.58px] w-[82.31px] bg-[#F6F6F6] rounded-lg flex items-center justify-center">
                  <p className="text-[14px] font-bold">$123.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[282px] h-full flex flex-col justify-between">
            <div>
              <Image src={fem2} alt="" className="rounded-xl absolute" />
              <div className="w-[32.36px] h-[32.36px] relative left-[221px] top-5 bg-white rounded-[50%] flex items-center justify-center">
                <CiHeart />
              </div>
            </div>

            <div className="w-full h-[41px] flex justify-between">
              <div className="left w-[166px] h-full">
                <h3 className="text-[15px] text-[#3C4242] font-semibold">
                  line Pattern Black H...
                </h3>
                <p className="text-[14px] font-medium text-[#807D7E]">
                  AS’s Brand
                </p>
              </div>
              <div className="right">
                <div className="h-[36.58px] w-[82.31px] bg-[#F6F6F6] rounded-lg flex items-center justify-center">
                  <p className="text-[14px] font-bold">$123.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[282px] h-full flex flex-col justify-between">
            <div>
              <Image src={fem3} alt="" className="rounded-xl absolute" />
              <div className="w-[32.36px] h-[32.36px] relative left-[221px] top-5 bg-white rounded-[50%] flex items-center justify-center">
                <CiHeart />
              </div>
            </div>

            <div className="w-full h-[41px] flex justify-between">
              <div className="left w-[166px] h-full">
                <h3 className="text-[15px] text-[#3C4242] font-semibold">
                  Black Shorts
                </h3>
                <p className="text-[14px] font-medium text-[#807D7E]">
                  MM’s Brand
                </p>
              </div>
              <div className="right">
                <div className="h-[36.58px] w-[82.31px] bg-[#F6F6F6] rounded-lg flex items-center justify-center">
                  <p className="text-[14px] font-bold">$37.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[282px] h-full flex flex-col justify-between">
            <div>
              <Image src={fem4} alt="" className="rounded-xl absolute" />
              <div className="w-[32.36px] h-[32.36px] relative left-[221px] top-5 bg-white rounded-[50%] flex items-center justify-center">
                <CiHeart />
              </div>
            </div>

            <div className="w-full h-[41px] flex justify-between">
              <div className="left w-[166px] h-full">
                <h3 className="text-[15px] text-[#3C4242] font-semibold">
                  Levender Hoodie with
                </h3>
                <p className="text-[14px] font-medium text-[#807D7E]">
                  Nike’s Brand
                </p>
              </div>
              <div className="right">
                <div className="h-[36.58px] w-[82.31px] bg-[#F6F6F6] rounded-lg flex items-center justify-center">
                  <p className="text-[14px] font-bold">$119.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Limelight