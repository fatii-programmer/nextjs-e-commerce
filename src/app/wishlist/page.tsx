"use client";

import { Product } from "../../../types/products";
import React, { useEffect, useState } from "react";
import { getWishlistItems, removeFromWishlist } from "../actions/actions";
import Image from "next/image";
import Swal from "sweetalert2";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  useEffect(() => {
    setWishlistItems(getWishlistItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromWishlist(id);
        setWishlistItems(getWishlistItems()); // Update the state with the new wishlist items
        Swal.fire("Removed!", "Your product has been removed from wishlist.", "success");
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold my-6">Your Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <p className="text-lg">Your wishlist is empty.</p>
      ) : (
        <div className="grid gap-6">
          {wishlistItems.map((product) => (
            <div key={product._id} className="flex items-center gap-6 border p-4 rounded-lg shadow">
              {product.productImage && product.productImage.asset ? (
                <Image
                  src={product.productImage.asset.url}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              ) : (
                <div className="w-[100px] h-[100px] bg-gray-300 rounded-md" /> // Placeholder if no image
              )}
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-lg">${product.price}</p>
              </div>
              <button
                onClick={() => handleRemove(product._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
