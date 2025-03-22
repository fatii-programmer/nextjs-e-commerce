import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <header
        className="relative bg-cover bg-center h-60"
        style={{ backgroundImage: "url(/bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-black">
          {/* Image Section */}
          <Image
            src="/hi.jpg"
            alt="Icon"
            width={128} 
            height={128} 
            className="w-32 h-32 mt-3"
          />

          {/* Text Section */}
          <div>
            <h1 className="text-6xl font-Poppins text-center mt-6px">Checkout</h1>
            <p className="text-2xl mb-2 text-center mt-3">Home &gt; Checkout</p>
          </div>
        </div>
      </header>

      <div className="min-h-screen bg-gray-100 mt-20">
        <div className="rounded-lg p-12 max-w-6xl mx-auto flex flex-col lg:flex-row gap-28">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-left mb-12 mt-10">Billing Details</h2>
            <form>
              {/* Form Fields */}
              {[
                { id: 'firstName', label: 'First Name' },
                { id: 'lastName', label: 'Last Name' },
                { id: 'companyName', label: 'Company Name (Optional)' },
                { id: 'streetAddress', label: 'Street Address' },
                { id: 'city', label: 'Town / City' },
                { id: 'province', label: 'Province' },
                { id: 'zipCode', label: 'ZIP Code' },
                { id: 'phone', label: 'Phone' },
                { id: 'email', label: 'Email Address', type: 'email' }
              ].map(({ id, label, type = 'text' }) => (
                <div key={id} className="mb-6">
                  <label htmlFor={id} className="block text-gray-700 font-medium text-2xl mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                    placeholder={`Enter your ${label.toLowerCase()}`}
                  />
                </div>
              ))}
            </form>
          </div>

          {/* Order Summary */}
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Product</h2>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">SubTotal</h2>
            <div className="mt-8">
              <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                <span>Asgaard sofa x 1</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between text-gray-800 font-semibold mt-2 text-sm sm:text-base">
                <span>SubTotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between text-gray-800 font-semibold mt-2 text-sm sm:text-base">
                <span>Total</span>
                <span className='text-2xl text-yellow-600'>Rs. 250,000.00</span>
              </div>
            </div>

            {/* Payment Options */}
            <div className="mb-8">
              <h3 className="text-2xl font-medium mb-4 mt-12">Direct Bank Transfer</h3>
              <p className="text-sm mt-10">Make your payment directly into our bank account...</p>
              <label className="flex items-center mb-4 mt-10">
                <input type="radio" name="payment" value="bank" className="mr-2" />
                Direct Bank Transfer
              </label>
              <label className="flex items-center mb-4">
                <input type="radio" name="payment" value="cod" className="mr-2" />
                Cash On Delivery
              </label>
            </div>
            <button className="w-80 py-3 px-4 border border-black rounded-lg hover:bg-gray-100 transition text-1xl mt-8">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
