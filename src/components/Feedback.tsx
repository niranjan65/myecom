import React from 'react'
import profile3 from "../../public/images/profile3.png"
import profile2 from "../../public/images/profile2.png"
import profile1 from "../../public/images/profile1.png"
import Image from 'next/image'
import star from "../../public/images/star.png"

const Feedback = () => {
  return (
    <div className="w-[1237px] h-[430.19px] mx-auto flex flex-col justify-between">

        <div className="flex items-center">
          <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8A33FD]"></div>
          <h3 className="text-[34px] font-semibold ml-4 text-[#3C4242]">
            Feedback
          </h3>
        </div>

        <div className='w-full h-[292px]  flex gap-[23.19px]'>

          {/* reviews box */}
          <div className='border-[#BEBCBD] w-[396.87px] h-full border-[1.8px] rounded-[10px] p-[23.19px] flex flex-col justify-between'>
            
            <div className='w-full h-[292px] flex flex-col justify-between'>
            <div className='w-full flex justify-between'>
              <div><Image src={profile1} alt="" /></div>
              <div><Image src={star} alt="" /></div>
            </div>

            <h2 className='text-[21px] font-medium text-[#3C4242]'>Floyd Miles</h2>
            <p className='text-[13px] text-[#807D7E]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            
          </div>
          <div className='border-[#BEBCBD] w-[396.87px] h-full border-[1.8px] rounded-[10px] p-[23.19px] flex flex-col justify-between'>
            
            <div className='w-full h-[292px] flex flex-col justify-between'>
            <div className='w-full flex justify-between'>
              <div><Image src={profile2} alt="" /></div>
              <div><Image src={star} alt="" /></div>
            </div>

            <h2 className='text-[21px] font-medium text-[#3C4242]'>Ronald Richards</h2>
            <p className='text-[13px] h-[125.63px] text-[#807D7E]'>ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            
          </div>
          <div className='border-[#BEBCBD] w-[396.87px] h-full border-[1.8px] rounded-[10px] p-[23.19px] flex flex-col justify-between'>
            
            <div className='w-full h-[292px] flex flex-col justify-between'>
            <div className='w-full flex justify-between'>
              <div><Image src={profile3} alt="" /></div>
              <div><Image src={star} alt="" /></div>
            </div>

            <h2 className='text-[21px] font-medium text-[#3C4242]'>Savannah Nguyen</h2>
            <p className='text-[13px] text-[#807D7E]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            
          </div>
        </div>
      </div>
  )
}

export default Feedback