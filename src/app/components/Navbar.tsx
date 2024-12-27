import React from 'react';
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="w-full h-[80px]  text-[#000000] flex justify-between px-4 md:px-8 lg:px-16 bg-transparent">
      <div className="flex gap-4 md:gap-8 lg:gap-12 items-center">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="flex gap-4 md:gap-6 lg:gap-8 items-center">
        <FaRegUser size={24} />
        <IoIosSearch size={24} />
        <CiHeart size={24} />
        <IoCartOutline size={24} />
      </div>
    </div>
  );
}

export default Navbar;
