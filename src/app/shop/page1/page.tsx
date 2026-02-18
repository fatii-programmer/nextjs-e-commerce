"use client";

import { useState, useEffect } from "react";
import type { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import { addToCart, addToWishlist } from "@/app/actions/actions";
import Swal from "sweetalert2";
import { Heart, X } from "lucide-react";

export default function Page2() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const dummyProducts: Product[] = Array.from({ length: 16 }, (_, i) => ({
      _id: `${i + 1}`,
      title: `Product ${i + 1}`,
      description: `Description for product ${i + 1}`,
      price: Math.floor(Math.random() * 100) + 50,
      tags: ["tag"],
      discountPercentage: Math.floor(Math.random() * 20),
      isNew: i % 2 === 0,
      productImage: {
        asset: {
          url: `/ss${i + 1}.jpg`,
        },
      },
      slug: { current: `product-${i + 1}` },
      inventory: Math.floor(Math.random() * 20) + 1,
    }));

    setProducts(dummyProducts);
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleAddToWishlist = (product: Product) => {
    addToWishlist(product);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.title} added to wishlist`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header
        className="relative bg-cover bg-center h-60"
        style={{ backgroundImage: "url(/bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-black">
          <Image src="/hi.jpg" alt="Icon" width={128} height={128} />
          <h1 className="text-6xl font-Poppins">Shop</h1>
          <p className="text-2xl mt-2">Home &gt; Shop &gt; Page 2</p>
        </div>
      </header>

      <main className="px-4 py-4">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Page 2 Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product._id}>
                {/* VIP IMAGE CLICK */}
                <div className="relative">
                  <Image
                    src={product.productImage.asset.url}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="rounded-lg w-full h-[300px] object-cover cursor-pointer hover:scale-105 transition"
                    onClick={() => setSelectedImage(product.productImage.asset.url)}
                  />
                </div>

                <h2 className="text-lg font-semibold text-gray-800 mt-3">
                  {product.title}
                </h2>
                <p className="text-xl font-bold">${product.price}</p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="bg-gradient-to-r from-yellow-400 to-yellow-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:scale-110 transition"
                    onClick={() => handleAddToCart(product)}
                  >
                    ADD TO CART
                  </button>

                  <button
                    className="flex items-center gap-1 text-red-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:scale-110 transition"
                    onClick={() => handleAddToWishlist(product)}
                  >
                    <Heart className="w-5 h-5" />
                    Wish List
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/shop">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:scale-110 transition">
                ← Back to Shop
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* VIP IMAGE POPUP */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            {/* CLOSE BUTTON */}
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-50 rounded-full p-1 hover:bg-opacity-80 transition"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <Image
              src={selectedImage}
              alt="Preview"
              width={800}
              height={800}
              className="rounded-lg max-h-[90vh] w-auto object-contain animate-scale-in"
            />
          </div>
        </div>
      )}
    </div>
  );
}
