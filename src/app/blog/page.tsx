import React from "react";
import { FaSearch } from 'react-icons/fa'; // Import search icon
import { FaUserShield } from 'react-icons/fa'; // Admin Icon
import { GiWoodBeam } from 'react-icons/gi';  // Wood Icon
import { AiOutlineCalendar } from 'react-icons/ai'; // Calendar Icon

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


<header
  className="relative bg-cover bg-center h-60"
  style={{ backgroundImage: "url(/bg.jpg)" }}
>
  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-black">
    {/* Image Section */}
    <img
      src="/hi.jpg"
      alt="Icon"
      className="w-32 h-32 mt-3"
    />

    {/* Text Section */}
    <div>
      <h1 className="text-6xl font-Poppins text-center mt-6px">Blog</h1>
      <p className="text-2xl mb-2 text-center mt-3" >Home &gt; Blog</p>
    </div>
  </div>
</header>
      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Blog Post */}
          <div className="md:col-span-2">
            {/* First Blog Post */}
            <div className="mb-8">
              <img
                src="/blog1.jpg"
                alt="Blog Post"
             
                className="w-[500px] h-80 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  Going All-in with millennial design
                </h2>
                <div className="flex items-center text-gray-500 text-sm space-x-10 mb-4">
                
                <h3>Admin</h3><FaUserShield style={{ color: 'gray-600', marginRight: '10px' }}  />  
                <h3>Handmade</h3> <GiWoodBeam style={{ color: 'gray-600', marginRight: '10px' }} />
               <h3>14 Oct 2022</h3><AiOutlineCalendar style={{ color: 'gray-600', marginRight: '10px' }} />
      
     
                </div>
                <p className="text-gray-700 text-xs ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor <br />incididunt ut labore et dolore magna aliqua. Mus mauris vitae  ultricies leo <br />integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi<br />  blandit cursus risus at ultrices mi tempus imperdiet. Libero  enim sed faucibus <br />turpis in. Cursus mattis molestie a iaculis at erat. Nibh  cras pulvinar mattis nunc<br /> sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et <br />ultrices neque ornare aenean euismod elementum.
                </p>
                <a href="#" className="text-black-500 border-b-2 border-black text-base sm:text-lg ">
                  Read More
                </a>

              </div>
            </div>

            {/* Second Blog Post */}
            <div className="mb-8">
              <img
                src="/blog2.jpg"
                alt="Blog Post"
                className="w-[500px] h-80 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  Sustainable Living: Design for the Future
                </h2> 
                <div className=" flex items-center text-gray-500 text-sm space-x-4 mb-4">
                <h3>Admin</h3><FaUserShield style={{ color: 'gray-600', marginRight: '10px' }}  />  
                <h3>Handmade</h3> <GiWoodBeam style={{ color: 'gray-600', marginRight: '10px' }} />
               <h3>14 Oct 2022</h3><AiOutlineCalendar style={{ color: 'gray-600', marginRight: '10px' }} />
                </div>
                <p className="text-gray-700 text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor <br />incididunt ut labore et dolore magna aliqua. Mus mauris vitae  ultricies leo <br />integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi<br />  blandit cursus risus at ultrices mi tempus imperdiet. Libero  enim sed faucibus <br />turpis in. Cursus mattis molestie a iaculis at erat. Nibh  cras pulvinar mattis nunc<br /> sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et <br />ultrices neque ornare aenean euismod elementum.
                </p>
                <a href="#" className="text-black-500 border-b-2 border-black text-base sm:text-lg ">
                 Read More
                </a>

              </div>
            </div>

            {/* Third Blog Post */}
            <div className="mb-8 flex flex-col">
              <img
                src="/blog3.jpg"
                alt="Blog Post"
               
                className="w-[500px] h-80 object-cover"
  />
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-2">
      Going All-in with millennial design
    </h2>
    <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
    <h3>Admin</h3><FaUserShield style={{ color: 'gray-600', marginRight: '10px' }}  />  
                <h3>Handmade</h3> <GiWoodBeam style={{ color: 'gray-600', marginRight: '10px' }} />
               <h3>14 Oct 2022</h3><AiOutlineCalendar style={{ color: 'gray-600', marginRight: '10px' }} />
    </div>
    <p className="text-gray-700 text-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor <br />incididunt ut labore et dolore magna aliqua. Mus mauris vitae  ultricies leo <br />integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi<br />  blandit cursus risus at ultrices mi tempus imperdiet. Libero  enim sed faucibus <br />turpis in. Cursus mattis molestie a iaculis at erat. Nibh  cras pulvinar mattis nunc<br /> sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et <br />ultrices neque ornare aenean euismod elementum.
    </p>
    <a href="#" className="text-black-500 border-b-2 border-black text-base sm:text-lg">
  Read More
</a>

  </div>
</div>

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
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    <FaSearch style={{ marginRight: '8px', color: '#888' }} />
                  </button>
                </div>
              </form>
            </div>

            {/* Categories */}
            
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
  <img
    src="/b-i1.jpg" // Replace with your image path
    alt="Small Image"
    className="w-16 h-16 object-cover mr-4 rounded-lg"
  /> 
  <span className="text-sm text-black-600">Going all-in with <br /> millennial design <br /><h1 className="text-gray-400">03 Aug 2022</h1></span>

  </div>
<div className="mt-8 flex items-center">
  <img
    src="/b-i2.jpg" // Replace with your image path
    alt="Small Image"
    className="w-16 h-16 object-cover mr-4 rounded-lg"
  />
  <span className="text-sm text-black-600">Exploring new ways <br /> of decorating <br /><h1 className="text-gray-400">03 Aug 2022</h1></span>

  </div>
<div className="mt-8 flex items-center">
  <img
    src="/b-i3.jpg" // Replace with your image path
    alt="Small Image"
    className="w-16 h-16 object-cover mr-4 rounded-lg"
  />
  <span className="text-sm text-black-600">Handmade pieces <br /> that took time to make <br /><h1 className="text-gray-400">03 Aug 2022</h1></span>

  </div>
<div className="mt-8 flex items-center">
  <img
    src="/b-i4.jpg" // Replace with your image path
    alt="Small Image"
    className="w-16 h-16 object-cover mr-4 rounded-lg"
  />
  <span className="text-sm text-black-600">Modern home in <br /> Milan <br /><h1 className="text-gray-400">03 Aug 2022</h1></span>

  </div>
  <div className="mt-8 flex items-center">
  <img
    src="/b-i5.jpg" // Replace with your image path
    alt="Small Image"
    className="w-16 h-16 object-cover mr-4 rounded-lg" // Add rounded-lg to make the corners round
  />
  <span className="text-sm text-black-600">Colorful office <br /> redesign <br /><h1 className="text-gray-400">03 Aug 2022</h1></span>
</div>

  </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center flex-wrap gap-4">
            <div className="bg-yellow-200 w-16 h-16 sm:w-16 sm:h-16 flex items-center justify-center text-black rounded-lg">
              <p className="font-semibold text-lg sm:text-2xl">1</p>
            </div>
            <div className="bg-yellow-100 w-16 h-16 sm:w-16 sm:h-16 flex items-center justify-center text-black rounded-lg">
              <p className="font-semibold text-lg sm:text-2xl">2</p>
            </div>
            <div className="bg-yellow-100 w-16 h-16 sm:w-16 sm:h-16 flex items-center justify-center text-black rounded-lg">
              <p className="font-semibold text-lg sm:text-2xl">3</p>
            </div>
            <div className="bg-yellow-100 w-16 h-16 sm:w-16 sm:h-16 flex items-center justify-center text-black rounded-lg">
              <p className="font-semibold text-lg sm:text-2xl">Next</p>
            </div>
          </div>

        <div className="flex flex-col sm:flex-row justify-around bg-[#FAF4F4] py-6 sm:py-12 px-4 sm:px-8 mt-12 rounded-lg shadow-md">
          <div className="text-center max-w-xs">
            <h3 className="text-2xl sm:text-3xl font-semibold text-black-700 font-Poppins">Free Delivery</h3>
            <p className="text-gray-500 mt-2 font-Poppins text-base sm:text-2xl leading-relaxed">For all orders over $50, consectetur adipiscing elit.</p>
          </div>
          <div className="text-center max-w-xs mt-4 sm:mt-0">
            <h3 className="text-2xl sm:text-3xl font-semibold text-black-700 font-Poppins">90 Days Return</h3>
            <p className="text-gray-500 mt-2 font-Poppins text-base sm:text-2xl leading-relaxed">If goods have problems, consectetur adipiscing elit.</p>
          </div>
          <div className="text-center max-w-xs mt-4 sm:mt-0">
            <h3 className="text-2xl sm:text-3xl font-semibold text-black-700 font-Poppins">Secure Payment</h3>
            <p className="text-gray-500 mt-2 font-Poppins text-base sm:text-2xl leading-relaxed">100% secure payment, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    
  );
}
