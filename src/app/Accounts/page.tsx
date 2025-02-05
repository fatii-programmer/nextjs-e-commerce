import React from 'react';

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
    <img
      src="/hi.jpg"
      alt="Icon"
      className="w-32 h-32 mt-3"
    />

    {/* Text Section */}
    <div>
      <h1 className="text-6xl font-Poppins text-center mt-6px">Accounts</h1>
      <p className="text-2xl mb-2 text-center mt-3" >Home &gt; Accounts</p>
    </div>
  </div>
</header>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg p-6 sm:p-8 lg:p-12 max-w-6xl w-full flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Log In Section */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-8 text-left">Log In</h2>
            <form>
              <div className="mb-8">
                <label htmlFor="username" className="block text-gray-700 font-medium text-lg sm:text-2xl mb-4">
                  Username or Email Address
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-4 sm:p-6"
                  placeholder="Enter your username or email"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="password" className="block text-gray-700 font-medium text-lg sm:text-2xl mb-4">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-4 sm:p-6"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2 w-5 h-5"
                  style={{ transform: 'scale(1.25)' }}
                />
                <label htmlFor="remember" className="text-gray-700 text-base sm:text-xl">
                  Remember me
                </label>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="w-32 py-2 px-4 border border-black rounded-lg hover:bg-gray-100 transition"
                >
                  Log In
                </button>
                <a href="#" className="text-black-500 hover:underline text-base sm:text-lg">
                  Lost your password?
                </a>
              </div>
            </form>
          </div>

          {/* Register Section */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-bold mb-6 text-left">Register</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium text-lg sm:text-2xl mb-4">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-4 sm:p-6"
                  placeholder="Enter your email"
                />
              </div>
              <p className="text-gray-600 text-base sm:text-lg mb-4">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-gray-600 text-base sm:text-lg mb-6">
                Your personal data will be used to support your experience
                throughout this website, manage access to your account, and for other purposes described in our privacy policy.
              </p>
              <button
                type="submit"
                className="w-32 py-2 px-4 border border-black rounded-lg hover:bg-gray-100 transition"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap justify-around bg-[#FAF4F4] py-6 sm:py-8 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md">
        {[
          { title: 'Free Delivery', text: 'For all orders over $50' },
          { title: '90 Days Return', text: 'If goods have problems' },
          { title: 'Secure Payment', text: '100% secure payment' },
        ].map((feature, idx) => (
          <div key={idx} className="text-center max-w-xs mb-4">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-semibold">{feature.title}</h3>
            <p className="text-gray-500 mt-2 text-base sm:text-lg">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
