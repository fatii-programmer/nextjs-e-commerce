"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const [showAll, setShowAll] = useState(false);

  const products = [
    { src: "/image1.jpg", alt: "Trenton modular sofa", title: "Trenton modular sofa_3" },
    { src: "/image2.jpg", alt: "Granite dining table", title: "Granite dining table with dining chair" },
    { src: "/image3.jpg", alt: "Outdoor bar table", title: "Outdoor bar table and stool" },
    { src: "/image4.jpg", alt: "Plain console", title: "Plain console with teak mirror" },
    { src: "/image5.jpg", alt: "Product 5", title: "Grain coffee table" },
    { src: "/image6.jpg", alt: "Product 6", title: "Kent coffee table" },
    { src: "/image7.jpg", alt: "Product 7", title: "Round coffee table_color 2" },
    { src: "/image8.jpg", alt: "Product 8", title: "Reclaimed teak coffee table" },
    { src: "/image9.jpg", alt: "Product 9", title: "Plain console_" },
    { src: "/image10.jpg", alt: "Product 10", title: "Reclaimed teak Sideboard" },
    { src: "/image11.jpg", alt: "Product 11", title: "SJP_0825 " },
    { src: "/image12.jpg", alt: "Product 12", title: "Bella chair and table" },
    { src: "/image13.jpg", alt: "Product 13", title: "Granite square side table" },
    { src: "/image14.jpg", alt: "Product 14", title: "Asgaard sofa" },
    { src: "/image15.jpg", alt: "Product 15", title: "Maya sofa three seater" },
    { src: "/image16.jpg", alt: "Product 16", title: "Maya sofa three seater" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#FFF2CC] flex flex-col md:flex-row justify-center items-center px-6 md:px-12 py-8">
        <div className="md:max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold mb-8">Rocket single seater</h1>
          <Link href="/shop">
            <button className="text-xl md:text-2xl border-b-2 border-black hover:text-gray-700 hover:border-gray-500 mb-8">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/chair.jpg"
            alt="Rocket single seater"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>

      

      {/* Related Products Section */}
      <div className="mt-20">
        <h2 className="text-center text-4xl font-bold">Top Picks For You</h2>
        <h3 className="text-center mt-4">Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.</h3>
        <div className="flex flex-wrap justify-center mt-8 gap-4 lg:gap-8">
          {(showAll ? products : products.slice(0, 4)).map((product, index) => (
            <div key={index} className="text-center">
              <Image src={product.src} alt={product.alt} width={350} height={200} />
              <p>{product.title}</p>
              <p className="font-bold">Rs. 25,000.00</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 mb-12">
          <button className="text-black-500 underline" onClick={() => setShowAll(!showAll)}>
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>

      {/* New Arrivals Section */}
      <section className="bg-[#FFF9E5] py-10">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/asgardsofa.jpg"
                width={800}
                height={800}
                alt="Asgaard Sofa"
                className="w-20px h-auto mb-4"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="mb-4 sm:text-4xl md:text-5xl">New Arrivals</p>
              <h1 className="text-5xl font-bold mb-6 sm:text-6xl md:text-7xl lg:text-8xl">Asgaard sofa</h1>
              <Link href="/order">
                <button className="border-2 border-black text-black py-2 px-4 hover:bg-gray-500">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <div className="bg-[#FAF4F4] py-4 px-4">
        <h2 className="text-center text-4xl font-bold">Our Blogs</h2>
        <h3 className="text-center mt-4">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h3>
        <div className="flex justify-evenly gap-4 mt-12 flex-wrap">
          {/* Blog 1 */}
          <div className="flex flex-col items-center justify-center w-[300px]">
            <div className="w-full h-[300px] rounded-lg flex justify-center items-center">
              <Image src="/13.jpg" width={300} height={300} alt="Side Table" className="object-cover rounded-lg" />
            </div>
            <h4 className="text-1xl font-bold mt-4">Going all-in with millennial design</h4>
            <Link href="/blogs/blog1">
              <button className="underline hover:bg-gray-300 text-black-800 py-4 px-4 rounded mt-1 text-2xl font-poppins font-bold">
                Learn More
              </button>
            </Link>
          </div>

          {/* Blog 2 */}
          <div className="flex flex-col items-center justify-center w-[300px]">
            <div className="w-full h-[300px] rounded-lg flex justify-center items-center">
              <Image src="/14.jpg" width={300} height={300} alt="Sofa" className="object-cover rounded-lg" />
            </div>
            <h4 className="text-1xl font-bold mt-4">Going all-in with millennial design</h4>
            <Link href="/blogs/blog2">
              <button className="underline hover:bg-gray-300 text-black-800 py-4 px-4 rounded mt-1 text-2xl font-poppins font-bold">
                Learn More
              </button>
            </Link>
          </div>

          {/* Blog 3 */}
          <div className="flex flex-col items-center justify-center w-[300px]">
            <div className="w-full h-[300px] rounded-lg flex justify-center items-center">
              <Image src="/15.jpg" width={300} height={300} alt="Coffee Table" className="object-cover rounded-lg" />
            </div>
            <h4 className="text-1xl font-bold mt-4">Going all-in with millennial design</h4>
            <Link href="/blogs/blog3">
              <button className="underline hover:bg-gray-300 text-black-800 py-4 px-4 rounded mt-1 text-2xl font-poppins font-bold">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Instagram Section */}
      <div
        className="bg-cover bg-center py-16 px-12"
        style={{ backgroundImage: "url('/instabg.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center text-center text-[#000000]">
          <h1 className="text-[24px] md:text-[36px] font-bold">Our Instagram</h1>
          <p className="opacity-[0.8] max-w-[600px] text-[16px] md:text-[18px] mt-2">
            Follow our store on Instagram
          </p>
          <a
            href="https://www.instagram.com/amitaf.8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-8 px-6 py-3 bg-white text-black font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">
              Join Our Instagram
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
