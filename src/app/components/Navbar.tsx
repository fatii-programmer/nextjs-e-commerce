"use client"; // Ensure client-side rendering

import React, { useState } from "react";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [searchResults, setSearchResults] = useState<string[]>([]); // Search results state
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false); // State for controlling dropdown visibility
  const [isAuthModalOpen, setAuthModalOpen] = useState(false); // State for authentication modal
  const [isLogin, setIsLogin] = useState(true); // true -> Login, false -> Register
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // State for success message

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Mock search results based on the query
    const results = query
      ? ["Product 1", "Product 2", "Product 3"].filter((product) =>
          product.toLowerCase().includes(query.toLowerCase())
        )
      : [];
    setSearchResults(results);
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Fake success response for demo purposes
    const message = isLogin
      ? "You are successfully logged in!"
      : "You are successfully registered!";
    setSuccessMessage(message);

    // Hide the success message after 2 seconds
    setTimeout(() => {
      setSuccessMessage(null);
      setAuthModalOpen(false); // Close the modal
    }, 2000);
  };

  return (
    <div className="relative w-full h-[80px] text-[#000000] flex justify-between items-center px-4 md:px-8 lg:px-16 bg-transparent">
      {/* Left: Navigation Links */}
      <div className="flex gap-4 md:gap-8 lg:gap-12 items-center">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Right: Search Bar and Icons */}
      <div className="flex gap-6 items-center relative">
        {/* Search Bar */}
        <div className="flex items-center gap-2 relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className=" border rounded-lg px-3 py-4 text-sm w-[200px] md:w-[300px]"
          />
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded-lg"
            onClick={() => console.log("Search submitted")}
          >
            <IoIosSearch size={25} />
          </button>

          {/* Search Results */}
          {searchQuery && (
            <div className="absolute top-[45px] left-0 w-full bg-white shadow-lg rounded-lg p-4 z-50">
              <h2 className="text-lg font-semibold">
                Search Results for &quot;{searchQuery}&quot;
              </h2>
              <div className="flex flex-col gap-2 mt-2">
                {searchResults.length > 0 ? (
                  searchResults.map((result, index) => (
                    <div key={index} className="text-gray-800">
                      <Link
                        href={`/product/${result.toLowerCase().replace(" ", "-")}`}
                      >
                        {result}
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 flex items-center gap-2">
                    <span>😔</span>
                    No products found.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Icons */}
        <div className="flex gap-4 md:gap-6 lg:gap-8 items-center relative">
          {/* Login/Register Button */}
          <button onClick={() => setAuthModalOpen(true)}>
            <FaRegUser size={26} />
          </button>

          <CiHeart size={26} />

          {/* Cart Icon with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCartDropdownOpen(!cartDropdownOpen)}
              className="focus:outline-none"
            >
              <IoCartOutline size={26} />
            </button>
            {cartDropdownOpen && (
              <div className="absolute top-[35px] right-0 bg-white shadow-lg rounded-lg p-4 w-[200px] z-50">
                <h3 className="font-semibold text-lg">Your Cart</h3>
                <ul className="mt-2">
                  <li className="hover:bg-gray-200 p-2 rounded">
                    <Link href="/SingleProduct">Single Product</Link>
                  </li>
                  <li className="hover:bg-gray-200 p-2 rounded">
                    <Link href="/cartsidebar">Cart Sidebar</Link>
                  </li>
                  <li className="hover:bg-gray-200 p-2 rounded">
                    <Link href="/Accounts">My Account</Link>
                  </li>
                  <li className="hover:bg-gray-200 p-2 rounded">
                    <Link href="/checkout">Checkout</Link>
                  </li>

                  <li className="hover:bg-gray-200 p-2 rounded">
                    <Link href="/cart">Cart</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Authentication Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[350px]">
            <h2 className="text-xl font-bold mb-4">
              {isLogin ? "Login" : "Register"}
            </h2>
            <form onSubmit={handleAuthSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                className="border px-3 py-2 rounded-lg"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border px-3 py-2 rounded-lg"
                required
              />
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border px-3 py-2 rounded-lg"
                  required
                />
              )}
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded-lg"
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </form>
            <p
              className="text-sm text-center mt-3 cursor-pointer text-blue-600"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin
                ? "Don't have an account? Register"
                : "Already have an account? Login"}
            </p>
            <button
              className="mt-4 bg-red-500 text-white py-1 px-3 rounded-lg"
              onClick={() => setAuthModalOpen(false)}
            >
              Close
            </button>
            {/* Success Message */}
            {successMessage && (
              <div className="mt-3 p-2 bg-green-500 text-white rounded-lg text-center">
                {successMessage}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
