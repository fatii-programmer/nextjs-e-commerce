"use client";

import { useState } from "react";
import { Product } from "../../../types/products";
import { addToCart } from "../../actions/actions";
import Swal from "sweetalert2";

export default function AddToCartButton({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState<number>(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.title} added to cart (x${quantity})`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center border rounded-lg border-gray-400">
        <button className="px-4 py-2 text-lg" onClick={decrementQuantity}>-</button>
        <span className="px-6 text-lg">{quantity}</span>
        <button className="px-4 py-2 text-lg" onClick={incrementQuantity}>+</button>
      </div>
      <button
        className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
