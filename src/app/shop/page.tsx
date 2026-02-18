"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import type { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import { addToCart, addToWishlist } from "../actions/actions";
import Swal from "sweetalert2";
import { Heart } from "lucide-react";

const query = `*[_type == "product"]{
  _id,
  title,
  description,
  productImage{
    asset->{
      url
    }
  },
  price,
  tags,
  discountPercentage,
  isNew,
  slug {
    current
  }
}`;

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await client.fetch(query);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <header
        className="relative bg-cover bg-center h-60"
        style={{ backgroundImage: "url(/bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-black">
          <Image
            src="/hi.jpg"
            alt="Icon"
            width={128} // Equivalent to w-32 in Tailwind
            height={128} // Equivalent to h-32 in Tailwind
            className="mt-3"
          />
          <div>
            <h1 className="text-6xl font-Poppins text-center mt-6px">Shop</h1>
            <p className="text-2xl mb-2 text-center mt-3">Home &gt; Shop</p>
          </div>
        </div>
      </header>
      <main className="px-4 py-4">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">All Products</h2>
          <div className="flex gap-4 mb-4">
            <Link href="/carts">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-out">
                Go to Carts
              </button>
            </Link>
            <Link href="/wishlist">
              <button className="flex items-center gap-2 bg-gradient-to-r from-red-400 to-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-out">
                Your Wish List <Heart className="w-5 h-5" />
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>

        {/* Pagination Section */}
 <div className="mt-16 flex justify-center flex-wrap gap-8">
  <button
    onClick={() => window.location.href = "/shop/page1"}
    className="bg-yellow-200 w-16 h-16 sm:w-16 sm:h-16 flex items-center justify-center text-black rounded-lg font-semibold text-lg sm:text-2xl hover:bg-yellow-300 transition"
  >
    1
  </button>

  <button
    onClick={() => window.location.href = "/shop/page2"}
    className="bg-yellow-100 w-16 h-16 sm:w-16 sm:h-16 flex items-center justify-center text-black rounded-lg font-semibold text-lg sm:text-2xl hover:bg-yellow-200 transition"
  >
    2
  </button>

  <button
    onClick={() => window.location.href = "/shop/page3"}
    className="bg-yellow-100 w-16 h-16 sm:w-16 sm:h-16 flex items-center justify-center text-black rounded-lg font-semibold text-lg sm:text-2xl hover:bg-yellow-200 transition"
  >
    3
  </button>

 
</div>

        {/* Info Section */}
        <div className="flex flex-col sm:flex-row justify-around bg-[#FAF4F4] py-8 sm:py-12 px-4 sm:px-8 mt-12 rounded-lg shadow-md">
          <div className="text-center max-w-xs">
            <h3 className="text-2xl sm:text-3xl font-semibold text-black-700 font-Poppins">Free Delivery</h3>
            <p className="text-gray-500 mt-2 font-Poppins text-base sm:text-2xl leading-relaxed">For all orders over $50, consectetur adipiscing elit.</p>
          </div>
          <div className="text-center max-w-xs mt-4 sm:mt-0">
            <h3 className="text-2xl sm:text-3xl font-semibold text-black-700 font-Poppins">90 Days Return</h3>
            <p className="text-gray-500 mt-2 font-Poppins text-base sm:text-2xl leading-relaxed">If goods have problems, consectetur adipiscing elit.</p>
          </div>
          <div className="text-center max-w-xs mt-4 sm:mt-0">
            <h3 className="text-2xl sm:text-3xl font-semibold text-black-700 font-Poppins">Secure Payment</h3>
            <p className="text-gray-500 mt-2 font-Poppins text-base sm:text-2xl leading-relaxed">100% secure payment, consectetur adipiscing elit.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToCart(product);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleAddToWishlist = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
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
    <div className="text-left relative">
      <Link href={`/product/${product.slug.current}`} className="block">
        <Image
          src={product.productImage.asset.url}
          alt={product.title}
          width={300}
          height={300}
          className="rounded-lg w-full h-[300px] object-cover"
        />
        <h2 className="text-lg sm:text-1xl font-semibold text-gray-800 mt-2 sm:mt-4">
          {product.title}
        </h2>
        <p className="text-xl sm:text-2xl font-bold text-black">${product.price}</p>
      </Link>
      <div className="flex items-center gap-2 mt-2">
        <button
          className="bg-gradient-to-r from-yellow-400 to-yellow-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-out"
          onClick={(e) => handleAddToCart(e, product)}
        >
          ADD TO CART
        </button>
        <button
          className="flex items-center gap-1 text-red-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:text-red-700 hover:scale-110 transition-transform duration-200 ease-out"
          onClick={(e) => handleAddToWishlist(e, product)}
        >
          <Heart className="w-5 h-5" /> Add to Wish List
        </button>
      </div>
    </div>
  );
}
