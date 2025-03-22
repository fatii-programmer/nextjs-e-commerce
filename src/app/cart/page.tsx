import React from "react";
import Image from "next/image";

const CartPage = () => {
  return (
    <div>
      {/* Header */}
      <header className="relative bg-cover bg-center h-60" style={{ backgroundImage: "url(/bg.jpg)" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-black">
          {/* Image Section */}
          <Image src="/hi.jpg" alt="Icon" width={128} height={128} className="mt-3" />

          {/* Text Section */}
          <div>
            <h1 className="text-6xl font-Poppins text-center mt-6px">Cart</h1>
            <p className="text-2xl mb-2 text-center mt-3">Home &gt; Cart</p>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <div className="bg-white flex justify-center items-start py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Product Table */}
          <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-center text-sm sm:text-base text-black-500 bg-[#FFF2CC]">
                  <th className="py-2">Product</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t text-center">
                  <td className="py-8 flex items-center justify-center sm:justify-start">
                    <Image src="/asgardsofa.jpg" alt="Asgaard Sofa" width={64} height={64} className="rounded mr-4 bg-[#FFF2CC]" />
                    <span className="text-gray-800 text-sm sm:text-base">Asgaard Sofa</span>
                  </td>
                  <td className="py-4 text-gray-800 text-sm sm:text-base">Rs. 250,000.00</td>
                  <td className="py-4">
                    <input type="number" defaultValue="1" className="w-12 sm:w-16 border border-gray-300 rounded text-center" />
                  </td>
                  <td className="py-4 text-gray-800 text-sm sm:text-base">Rs. 250,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="bg-[#FFF2CC] p-4 sm:p-6 rounded-lg shadow-md h-80">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Cart Totals</h2>
            <div className="mt-4">
              <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between text-gray-800 font-semibold mt-4 text-sm sm:text-base">
                <span>Total</span>
                <span className="text-yellow-600">Rs. 250,000.00</span>
              </div>
            </div>
            <div className="flex justify-center mt-14">
              <button type="submit" className="w-32 sm:w-40 py-4 sm:py-4 px-4 border border-black rounded-lg hover:bg-gray-100 transition">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap justify-around bg-[#FAF4F4] py-6 sm:py-20 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md gap-6">
        {[
          { title: 'Free Delivery', text: 'For all orders over $50, consectetur adipiscing elit.' },
          { title: '90 Days Return', text: 'If goods have problems, consectetur adipiscing elit.' },
          { title: 'Secure Payment', text: '100% secure payment, consectetur adipiscing elit.' },
        ].map((feature, idx) => (
          <div key={idx} className="text-center max-w-xs">
            <h3 className="text-xl sm:text-2xl font-semibold">{feature.title}</h3>
            <p className="text-gray-500 mt-2 text-sm sm:text-base leading-relaxed">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
