import React from 'react'
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="w-100% h-[100px]  text-[#000000] flex justify-between pr-[100px]">
       
        <div className="flex w-[430px] h-[24] gap-[75px] relative left-[400px] pt-[38px] font-semibold">
           
        <Link href="/"> Home</Link>
        <Link href="/shop"> Shop</Link>
        <Link href="/about"> About</Link>
         <Link href="/contact"> Contact</Link>

        </div>
       
            
        <div className="flex w-[247px] h-[28px]  gap-[45px]  pt-[36px] ">

             <FaRegUser size={24}/> 
            <IoIosSearch size={24}/> 
            <CiHeart size={24}/> 
             <IoCartOutline size={24}/> 
        </div>
            
    </div>
  )
}

export default Navbar



