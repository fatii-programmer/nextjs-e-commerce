import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header
        className="relative bg-cover bg-center h-80"
        style={{ backgroundImage: "url(/bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-black">
          <div>
            <h1 className="text-6xl font-Poppins text-center">Contact</h1>
            <p className="text-4xl mt-6">Home &gt; Contact</p>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get In Touch With Us
            </h2>
            <p className="mt-12 text-lg text-gray-600 max-w-2xl mx-auto">
              For more information about our product & services, feel free to
              drop us an email. <br />
              Our staff is always here to help you out!
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Details */}
            <div>
              <div className="flex items-start space-x-4 mb-16">
                <span className="text-4xl text-black">📍</span>
                <div>
                  <h3 className="text-xl font-medium text-black mt-2 ">
                    Address
                  </h3>
                  <p className="text-black mt-4">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-start space-x-4 mb-16">
                <span className="text-2xl text-black">📞</span>
                <div>
                  <h3 className="text-xl font-medium text-black mt-2">
                    Phone
                  </h3>
                  <p className="text-black mt-2">Mobile: (+84) 546-6789</p>
                  <p className="text-black mt-2">Hotline: (+84) 456-6789</p>
                </div>
              </div>
              <div className="mt-6 flex items-start space-x-4 mb-16">
                <span className="text-2xl text-black">⏰</span>
                <div>
                  <h3 className="text-xl font-medium text-black mt-2">
                    Working Time
                  </h3>
                  <p className="text-black mt-2">Monday-Friday: 9:00 - 22:00</p>
                  <p className="text-black mt-2">Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-10">
                <div className="mb-10">
                  <label
                    htmlFor="username"
                    className="block text-gray-700 font-medium text-2xl mb-8"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-black rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-8"
                    placeholder="ABC"
                  />
                </div>

                <div className="mb-20">
                  <label className="block text-gray-700 font-medium text-2xl mb-8">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Abc@def.com"
                    className="w-full border-2 border-black rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-8"
                  />
                </div>

                <div className="mb-20">
                  <label className="block text-gray-700 font-medium text-2xl mb-8">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="This is an optional"
                    className="w-full border-2 border-black rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-8"
                  />
                </div>

                <div className="mb-20">
                  <label className="block text-gray-700 font-medium text-2xl mb-8">
                    Message
                  </label>
                  <textarea
                    placeholder="Hi! I’d like to ask about..."
                    className="w-full border-2 border-black rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-8"
                  ></textarea>
                </div>

                <div>
                <button
              type="submit"
              className="w-40 py-3 px-4 border border-black rounded-lg hover:bg-gray-100 transition text-1xl"
            >
              Submit
            </button>
                </div>
              </form>
            </div>
          </div>

          
        </div>

        <div className="flex justify-around bg-[#FAF4F4] py-12 px-8  rounded-lg shadow-md mt-20">
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
    </div>
  );
};

export default Contact;
