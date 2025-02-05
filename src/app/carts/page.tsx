"use client";

import { useState, useEffect } from "react";
import { Product } from "../../../types/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation"; // Importing useRouter for redirection

const CartPage = () => {
  const [cartItems, setCartItems] = useState<{ product: Product; quantity: number }[]>([]);
  const router = useRouter(); // useRouter hook for navigation

  useEffect(() => {
    setCartItems(getCartItems());
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
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Your product has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Success!",
      text: "Proceeding to checkout...",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Proceed",
      cancelButtonText: "OK",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirecting to the checkout page
        router.push("/checkouts"); // Update with your checkout page route
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Action after clicking "OK"
        Swal.fire("You can review your cart again.", "", "info");
      }
    });
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold my-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6">
          {cartItems.map(({ product, quantity }) => (
            <div key={product._id} className="flex items-center gap-6 border p-4 rounded-lg shadow">
              <Image
                src={product.productImage.asset.url}
                alt={product.title}
                width={100}
                height={100}
                className="rounded-md"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-lg">${product.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => handleQuantityChange(product._id, quantity - 1)}
                    className="px-2 py-1 border rounded"
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(product._id, quantity + 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
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

      {cartItems.length > 0 && (
        <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total:</h2>
            <p className="text-xl font-bold text-gray-800">${calculateTotal().toFixed(2)}</p>
          </div>
          <button
            onClick={handleProceed}
            className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Proceed
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
