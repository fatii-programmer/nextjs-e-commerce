"use client";

import { useState, useEffect } from "react";
import { CartItem, getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => setCartItems(getCartItems()), []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Remove item?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
      }
    });
  };

  const handleQuantityChange = (id: string, qty: number) => {
    if (qty < 1) return;
    updateCartQuantity(id, qty);
    setCartItems(getCartItems());
  };

  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4">
            {cartItems.map(({ product, quantity }) => (
              <div key={product._id} className="flex items-center gap-4 border p-4 rounded-lg shadow">
                <Image src={product.productImage.asset.url} alt={product.title} width={100} height={100} className="rounded-md"/>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{product.title}</h2>
                  <p className="text-lg">${product.price}</p>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => handleQuantityChange(product._id, quantity - 1)} className="px-2 border rounded" disabled={quantity === 1}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange(product._id, quantity + 1)} className="px-2 border rounded">+</button>
                  </div>
                </div>
                <button onClick={() => handleRemove(product._id)} className="bg-red-500 text-white px-3 py-1 rounded-lg">Remove</button>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 border rounded-lg shadow flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total:</h2>
            <p className="text-xl font-bold">${total.toFixed(2)}</p>
          </div>

          <button
            onClick={() => router.push("/checkout")}
            className="mt-4 w-full py-2 bg-green-500 text-white rounded-md"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}
