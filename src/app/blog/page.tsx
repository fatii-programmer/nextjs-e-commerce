import React from "react";
import { FaSearch } from 'react-icons/fa'; 
import { FaUserShield } from 'react-icons/fa'; 
import { GiWoodBeam } from 'react-icons/gi'; 
import { AiOutlineCalendar } from 'react-icons/ai'; 
import Image from 'next/image'; // Import the Image component

export default function BlogPage() {
  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <header className="relative bg-cover bg-center h-60" style={{ backgroundImage: "url(/bg.jpg)" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-black">
          {/* Image Section */}
          <Image
            src="/hi.jpg"
            alt="Icon"
            width={128} // Set width
            height={128} // Set height
            className="mt-3"
          />

          {/* Text Section */}
          <div>
            <h1 className="text-6xl font-Poppins text-center mt-6px">Blog</h1>
            <p className="text-2xl mb-2 text-center mt-3">Home &gt; Blog</p>
          </div>
        </div>
      </header>
      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Blog Post */}
          <div className="md:col-span-2">
            {/* First Blog Post */}
            <div className="mb-8">
              <Image
                src="/blog1.jpg"
                alt="Blog Post"
                width={500} // Set width
                height={320} // Set height
                className="object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  Going All-in with millennial design
                </h2>
                <div className="flex items-center text-gray-500 text-sm space-x-10 mb-4">
                  <h3>Admin</h3><FaUserShield style={{ color: 'gray-600', marginRight: '10px' }} />
                  <h3>Handmade</h3> <GiWoodBeam style={{ color: 'gray-600', marginRight: '10px' }} />
                  <h3>14 Oct 2022</h3><AiOutlineCalendar style={{ color: 'gray-600', marginRight: '10px' }} />
                </div>
                <p className="text-gray-700 text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                </p>
                <a href="#" className="text-black-500 border-b-2 border-black text-base sm:text-lg">
                  Read More
                </a>
              </div>
            </div>

            {/* Add similar updates to the other blog posts as well */}
          </div>

          {/* Sidebar */}
          <div>
            {/* Search Bar */}
            <div className="mb-8">
              <form>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <FaSearch style={{ marginRight: '8px', color: '#888' }} />
                  </button>
                </div>
              </form>
            </div>

            {/* Categories */}
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index} className="flex justify-between items-center text-gray-700">
                  <span>{category.name}</span>
                  <span>{category.count}</span>
                </li>
              ))}
            </ul>

            {/* Add small image and text below categories */}
            <h2 className="mt-16 text-2xl">Recent Posts</h2>
            <div className="mt-8 flex items-center">
              <Image
                src="/b-i1.jpg"
                alt="Small Image"
                width={64}
                height={64}
                className="object-cover mr-4 rounded-lg"
              />
              <span className="text-sm text-black-600">Going all-in with millennial design <h1 className="text-gray-400">03 Aug 2022</h1></span>
            </div>
            {/* Add other images similarly */}
          </div>
        </div>
      </div>
    </div>
  );
}
