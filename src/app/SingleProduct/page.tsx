"use client";

import Image from "next/image";
import React, { useState } from "react";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";

const FirstSection: React.FC = () => {
  // Quantity & Color State
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>("#816DFA");

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const handleColorSelect = (color: string) => setSelectedColor(color);
  const handleAddToCart = () => {
    const product = {
      _id: "asgaard-sofa-001",
      title: "Asgaard Sofa",
      description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero...",
      price: 25000,
      productImage: { asset: { url: "/asgardsofa.jpg" } },
      slug: { current: "asgaard-sofa" },
      inventory: 10,
    };
    addToCart(product, quantity);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.title} added to cart (x${quantity})`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const colors = [
    { code: "#816DFA", name: "Purple" },
    { code: "#000000", name: "Black" },
    { code: "#CDBA7B", name: "Beige" },
  ];

  return (
    <>
      {/* Main Product Section */}
      <div className="mt-8 md:flex flex-wrap justify-center gap-10 px-4 md:px-12">
        {/* Side Images and Main Image */}
        <div className="flex space-x-10">
          <div className="space-y-6">
            <Image src="/side1.jpg" alt="Side 1" width={85} height={80} />
            <Image src="/side2.jpg" alt="Side 2" width={85} height={80} />
            <Image src="/side3.jpg" alt="Side 3" width={85} height={80} />
            <Image src="/side4.jpg" alt="Side 4" width={85} height={80} />
          </div>
          <div className="bg-[#FFF9E5] w-96 h-96 flex justify-center items-center">
            <Image src="/asgardsofa.jpg" alt="Asgaard Sofa" width={200} height={200} className="w-80 h-80" />
          </div>
        </div>

        {/* Product Details */}
        <div className="max-w-lg">
          <h2 className="text-2xl font-bold">Asgaard Sofa</h2>
          <p className="text-gray-400 mt-1">Rs. 25,000.00</p>

          {/* Rating */}
          <div className="flex mt-1 items-center">
            {[...Array(4)].map((_, i) => (
              <Image key={i} src="/star.jpg" alt="Star" width={20} height={20} className="h-5 w-5" />
            ))}
            <Image src="/hstar.jpg" alt="Half Star" width={20} height={20} className="h-5 w-5" />
            <p className="text-gray-400 ml-2">5 Customer Review</p>
          </div>

          {/* Product Description */}
          <p className="text-gray-500 mt-2">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero...
          </p>

          {/* Size */}
          <p className="text-gray-400 mt-2">Size</p>
          <div className="flex gap-4 mt-1">
            <span className="bg-[#FBEBB5] rounded text-lg px-3 py-1 cursor-pointer">L</span>
            <span className="bg-gray-50 rounded text-lg px-2 py-1 cursor-pointer">XL</span>
            <span className="bg-gray-50 rounded text-lg px-2 py-1 cursor-pointer">XS</span>
          </div>

          {/* Color */}
          <p className="text-gray-400 mt-4">Color</p>
          <div className="flex mt-2 gap-4">
            {colors.map((color) => (
              <div
                key={color.code}
                onClick={() => handleColorSelect(color.code)}
                className={`h-8 w-8 rounded-full cursor-pointer border-2 ${selectedColor === color.code ? "border-black" : "border-transparent"}`}
                style={{ backgroundColor: color.code }}
              ></div>
            ))}
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center mt-4 gap-4">
            <div className="flex items-center border rounded-lg border-gray-400">
              <button className="px-4 py-2 text-lg" onClick={decrementQuantity}>-</button>
              <span className="px-6 text-lg">{quantity}</span>
              <button className="px-4 py-2 text-lg" onClick={incrementQuantity}>+</button>
            </div>

            <button
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

        <div className="flex flex-col items-center text-gray-400 mt-6 space-y-4">
  <div className="flex space-x-2">
    <p>SKU</p>
    <p>: SS001</p>
  </div>

  <div className="flex space-x-2">
    <p>Category</p>
    <p>: Sofa</p>
  </div>

  <div className="flex space-x-2">
    <p>Tag</p>
    <p>: Sofa, Chair, Home, Shop</p>
  </div>

  <div className="flex items-center space-x-2">
    <p>Share</p>
    <p>:</p>
    <div className="flex space-x-4">
      <Image src="/f.jpg" width={24} height={24} alt="Facebook" className="h-7 w-7" />
      <Image src="/link.jpg" width={24} height={24} alt="LinkedIn" className="h-7 w-7" />
      <Image src="/tit.jpg" width={50} height={50} alt='facbook' className='h-8 w-8 ' />
    </div>
  </div>
</div>


        
    

      <div className="border-t-2 border-gray-400 mt-20">
      {/* Tabs Section */}
      <div className="flex justify-center mt-12 space-x-4 lg:space-x-16">
        <h2 className="text-xl font-semibold">Description</h2>
        <p className="text-gray-500">Additional Information</p>
        <p className="text-gray-500">Reviews [5]</p>
      </div>

      {/* Text Content */}
      <p className="text-gray-500 max-w-[950px] mx-auto text-center mt-6 mb-8">
        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable
        active stereo speaker takes the unmistakable look and sound of Marshall,
        unplugs the chords, and takes the show on the road.
        <br />
        <br />
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled
        engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn
        is a compact, stout-hearted hero with a well-balanced audio which boasts a clear
        midrange and extended highs for a sound that is both articulate and pronounced.
        The analogue knobs allow you to fine-tune the controls to your personal preferences
        while the guitar-influenced leather strap enables easy and stylish travel.
      </p>

      {/* Images Section */}
      <div className="md:flex justify-center space-y-4 space-x-2 lg:space-x-12">
        <div className="bg-[#FFF9E5] p-4">
          <Image
            src="/cartsofa1.jpg"
            alt="Sofa"
            width={400}
            height={400}
            className="h-[350px] w-[550px]"
          />
        </div>
        <div className="bg-[#FFF9E5] p-4">
          <Image
            src="/cartsofa2.jpg"
            alt="Sofa"
            width={400}
            height={400}
            className="h-[350px] w-[550px]"
          />
        </div>
      </div>
    </div>
    
    {/* Related Products Section */}
  <div className="mt-20 ">
    <h2 className="text-center text-3xl font-bold">Related Products</h2>
    <div className="flex justify-center mt-8 space-x-4 lg:space-x-8">
      <div className="text-center">
        <Image src="/image1.jpg" alt="Trenton modular sofa" width={350} height={200} />
        <p>Trenton modular sofa_3</p>
        <p className="font-bold">Rs. 25,000.00</p>
      </div>
      <div className="text-center">
        <Image src="/image2.jpg" alt="Granite dining table" width={350} height={200} />
        <p>Granite dining table with dining chair</p>
        <p className="font-bold">Rs. 25,000.00</p>
      </div>
      <div className="text-center">
        <Image src="/image3.jpg" alt="Outdoor bar table" width={350} height={200} />
        <p>Outdoor bar table and stool</p>
        <p className="font-bold">Rs. 25,000.00</p>
      </div>
      <div className="text-center">
        <Image src="/image4.jpg" alt="Plain console" width={350} height={200} />
        <p>Plain console with teak mirror</p>
        <p className="font-bold">Rs. 25,000.00</p>
      </div>
    </div>
    <div className="text-center mt-16 mb-12">
      <button className="text-black-500 underline">View More</button>
    </div>
  </div>

    </>
  )
}

export default FirstSection