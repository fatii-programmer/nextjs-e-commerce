import React from 'react';

export default function Home() {
  return (
    <div>
     
      <header
        className="relative bg-cover bg-center h-60"
        style={{ backgroundImage: 'url(/bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-black">
          <div>
            <h1 className="text-6xl font-Poppins text-center">Checkout</h1>
            <p className="text-4xl mt-6">Home &gt; Checkout</p>
          </div>
        </div>
      </header>

      
      <div className="min-h-screen bg-gray-100 mt-20">
        <div className="rounded-lg p-12 max-w-6xl mx-auto flex flex-col lg:flex-row gap-28">
     
          <div className="flex-1">
            <h2 className="text-5xl font-bold text-center mb-12 mt-10">Billing Details</h2>
            <form>
           
              <div className="mb-6">
                <label htmlFor="firstName" className="block text-gray-700 font-medium text-2xl mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                  placeholder="Enter your first name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="lastName" className="block text-gray-700 font-medium text-2xl mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                  placeholder="Enter your last name"
                />
              </div>
             
              <div className="mb-6">
                <label htmlFor="companyName" className="block text-gray-700 font-medium text-2xl mb-2">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                  placeholder="Enter your company name"
                />
              </div>
          
              <div className="mb-6">
                <label htmlFor="streetAddress" className="block text-gray-700 font-medium text-2xl mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                  placeholder="Enter your street address"
                />
              </div>
            
              <div className="mb-6">
                <label htmlFor="city" className="block text-gray-700 font-medium text-2xl mb-2">
                  Town / City
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                  placeholder="Enter your town or city"
                />
              </div>
            
              <div className="mb-6">
                <label htmlFor="province" className="block text-gray-700 font-medium text-2xl mb-2">
                  Province
                </label>
                <input
                  type="text"
                  id="province"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                  placeholder="Enter your province"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="zipCode" className="block text-gray-700 font-medium text-2xl mb-2">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                  placeholder="Enter your ZIP code"
                />
              </div>
            
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium text-2xl mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium text-2xl mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                  placeholder="Enter your email"
                />
              </div>
            </form>
          </div>

       
          <div className="flex-1">
            <form>
              <div className="mb-8">
                <h3 className="text-3xl font-medium mb-4 mt-10">Direct Bank Transfer</h3>
                <p className="text-1xl mt-10">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                <div>
                  <label className="flex items-center mb-4 mt-10">
                    <input type="radio" name="payment" value="bank" className="mr-2" />
                    Direct Bank Transfer
                  </label>
                  <label className="flex items-center mb-4">
                    <input type="radio" name="payment" value="cod" className="mr-2" />
                    Cash On Delivery
                  </label>
                </div>
              </div>

              <p className="text-1xl">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
              <button
                type="submit"
                className="w-full py-4 mt-8 bg-black text-white rounded-lg hover:bg-gray-800 transition text-xl"
              >
                Place Order
              </button>
            </form>
          </div>
          
        </div>
      </div>
      <div className="flex justify-around bg-[#FAF4F4] py-12 px-8 mt-12 rounded-lg shadow-md">
          <div className="text-center max-w-xs">
            <h3 className="text-4xl font-semibold text-black-700 font-Poppins">
              Free Delivery
            </h3>
            <p className="text-gray-500 mt-2 font-Poppins text-2xl leading-relaxed">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center max-w-xs">
            <h3 className="text-4xl font-semibold text-black-700 font-Poppins">
              90 Days Return
            </h3>
            <p className="text-gray-500 mt-2 font-Poppins text-2xl leading-relaxed">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center max-w-xs">
            <h3 className="text-4xl font-semibold text-black-700 font-Poppins">
              Secure Payment
            </h3>
            <p className="text-gray-500 mt-2 font-Poppins text-2xl leading-relaxed">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
    </div>
    </div>
  );
}
