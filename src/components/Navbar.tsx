import React from 'react'
import logo from '../images/euphoria.png'
import { FaRegHeart } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='h-[108px] w-screen  p-[31px]'>
        <div className='w-[1237px] h-[45px] mx-auto flex justify-between items-center '>
            <div>
            {/* <img src={logo} alt="" /> */}
            <p>Logo</p>
            </div>

            <div className="nav-items flex gap-10">
                <p className='font-bold'>Shop</p>
                <p>Men</p>
                <p>Women</p>
                <p>Combos</p>
                <p>Joggers</p>
            </div>

            <div className="searchbar">
                <input type="text" id='search' name='search' className='bg-[#F6F6F6] w-[267px] h-[44px] px-3 py-5 rounded-[8px]' placeholder='Search' />
            </div>

            <div className="buttons flex gap-3">
                <div className='h-[44px] w-[44px] bg-[#F6F6F6] p-3 rounded-[8px] flex items-center justify-center'>
                    <FaRegHeart />
                </div>
                <div className='h-[44px] w-[44px] bg-[#F6F6F6] p-3 rounded-[8px] flex items-center justify-center'>
                    <LuUser2 />
                </div>
                <div className='h-[44px] w-[44px] bg-[#F6F6F6] p-3 rounded-[8px] flex items-center justify-center'>
                    <CiShoppingCart />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar