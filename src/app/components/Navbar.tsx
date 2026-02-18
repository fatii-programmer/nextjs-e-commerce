"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { client } from "@/sanity/lib/client";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    { title: string; slug: { current: string } }[]
  >([]);
  const [products, setProducts] = useState<
    { title: string; slug: { current: string } }[]
  >([]);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  // Fetch products from Sanity for search
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(`*[_type == "product"]{title, slug}`);
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products for search:", err);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Real login via API
  const handleAuthSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      setSuccessMessage(data.message);

      if (res.ok) {
        setTimeout(() => {
          setSuccessMessage(null);
          setAuthModalOpen(false);
        }, 2000);
      }
    } catch (err) {
      console.error("Login error:", err);
      setSuccessMessage("Something went wrong!");
    }
  };

  return (
    <div className="relative w-full h-[80px] flex justify-between items-center px-4 md:px-8 lg:px-16 bg-transparent">
      {/* Left Links */}
      <div className="flex gap-4 md:gap-8 lg:gap-12 items-center">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Right Search + Icons */}
      <div className="flex gap-6 items-center relative">
        {/* Search */}
        <div className="flex items-center gap-2 relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="border rounded-lg px-3 py-4 text-sm w-[200px] md:w-[300px]"
          />
          <button className="bg-blue-500 text-white px-3 py-1 rounded-lg">
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
                      <Link href={`/product/${result.slug.current}`}>
                        {result.title}
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 flex items-center gap-2">
                    <span>😔</span> No products found.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Icons */}
        <div className="flex gap-4 md:gap-6 lg:gap-8 items-center relative">
          {/* Login */}
          <button onClick={() => setAuthModalOpen(true)}>
            <FaRegUser size={26} />
          </button>

          {/* Heart (Wishlist) */}
          <CiHeart
            size={26}
            className="cursor-pointer"
            onClick={() => alert("Go to Wishlist page")}
          />

          {/* Cart */}
          <div className="relative">
            <button
              onClick={() => setCartDropdownOpen(!cartDropdownOpen)}
              className="focus:outline-none"
            >
              <IoCartOutline size={26} />
            </button>
            {cartDropdownOpen && (
              <div className="absolute top-[35px] right-0 bg-white shadow-lg rounded-lg p-4 w-[200px] z-50">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg">Your Cart</h3>
                  <button
                    className="text-red-500 font-bold"
                    onClick={() => setCartDropdownOpen(false)}
                  >
                    X
                  </button>
                </div>
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

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[350px]">
            <h2 className="text-xl font-bold mb-4">
              {isLogin ? "Login" : "Register"}
            </h2>
            <form onSubmit={handleAuthSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border px-3 py-2 rounded-lg"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border px-3 py-2 rounded-lg"
                required
              />
              {!isLogin && (
                <input
                  type="text"
                  name="fullName"
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
