"use client";

import React, { useState, FormEvent } from "react";

const OrderPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const productName = "Asgaard Sofa";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevents page reload

    if (!name || !email || !phone || !address) {
      alert("Please fill all fields!");
      return;
    }

    setMessage(`Thank you, ${name}! Your order for "${productName}" has been placed.`);

    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-yellow-900">Place Your Order</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="block font-semibold mb-1">Product Name</label>
            <input
              type="text"
              value={productName}
              readOnly
              className="w-full p-3 border-2 border-yellow-300 rounded-lg bg-yellow-50 font-semibold text-yellow-900"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block font-semibold mb-1">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-3 border-2 border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 border-2 border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-1">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full p-3 border-2 border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block font-semibold mb-1">Delivery Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              className="w-full p-3 border-2 border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
              rows={3}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-lg transition-all duration-300"
          >
            Place Order
          </button>
        </form>

        {/* Success Message */}
        {message && (
          <p className="mt-6 text-green-700 font-semibold text-center">{message}</p>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
