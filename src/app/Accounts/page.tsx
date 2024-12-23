import React from 'react';

export default function Home() {
  return (
    <div>
         <header
        className="relative bg-cover bg-center h-80"
        style={{ backgroundImage: 'url(/bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-black">
          <div>
            <h1 className="text-6xl font-Poppins text-center">Shop</h1>
            <p className="text-4xl mt-6">Home &gt; Shop</p>
          </div>
        </div>
      </header>
   
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className=" rounded-lg p-8 max-w-6xl w-full flex flex-col lg:flex-row gap-40">
    
        <div className="flex-1">
          <h2 className="text-7xl font-bold mb-8 text-center">Log In</h2>
          <form>
            <div className="mb-20">
              <label htmlFor="username" className="block text-gray-700 font-medium text-2xl mb-8">
                Username or Email Address
              </label>
              <input
                type="text"
                id="username"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-8"
                placeholder="Enter your username or email"
              />
            </div>
            <div className="mb-20">
              <label htmlFor="password" className="block text-gray-700 font-medium text-2xl mb-8">Password</label>
              <input
                type="password"
                id="password"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-8"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6 flex items-center">
        <input
         type="checkbox"
        id="remember"
       className="mr-6 w-6 h-6"
     
        style={{ transform: 'scale(1.5)' }}
      />
           <label htmlFor="remember" className="text-gray-700 text-2xl">
          Remember me
          </label>
             </div>

            <div className="flex justify-left items-center gap-4">
              <button
                type="submit"
                className="w-40 py-2 px-4 border border-black rounded-lg hover:bg-gray-100 transition"
              >
                Log In
              </button>
              <a href="#" className="text-black-500 hover:underline text-large">
                Lost your password?
              </a>
            </div>
          </form>
        </div>
        <div className="flex-1">
          <h2 className="text-7xl font-bold mb-6 text-center">Register</h2>
          <form>
            <div className="mb-8">
              <label htmlFor="email" className="block text-gray-700 font-medium text-2xl mb-8">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-8"
                placeholder="Enter your email"
              />
              
            </div>
            <p className="text-gray-600 text-2xl mb-8">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-gray-600 text-2xl mb-10">
              Your personal data will be used to support your experience
              throughout this website, manage access to your account, and for other purposes described in our privacy policy.
            </p>
            <button
              type="submit"
              className="w-40 py-3 px-4 border border-black rounded-lg hover:bg-gray-100 transition text-1xl"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="flex justify-around bg-[#FAF4F4] py-12 px-8  rounded-lg shadow-md">
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
