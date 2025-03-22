"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "@/app/actions/actions";
import Link from "next/link";
import { Product } from "../../../types/products";
import { CgChevronRight } from "react-icons/cg";

// Define the structure of cart items
interface CartItem {
  product: Product;
  quantity: number;
}

export default function CheckoutsPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState<Record<string, string>>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, boolean>>({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    async function fetchCartItems() {
      const items = await getCartItems();
      if (Array.isArray(items)) {
        setCartItems(items.map((item) => ({ product: item.product, quantity: item.quantity })));
      }
    }
    fetchCartItems();

    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + (item.product.price || 0) * item.quantity, 0);
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors: Record<string, boolean> = {};
    Object.keys(formValues).forEach((key) => {
      errors[key] = !formValues[key].trim();
    });
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
      alert("Order placed successfully!");
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link href="/carts" className="text-[#666666] hover:text-black transition text-sm">
              Carts
            </Link>
            <CgChevronRight className="w-4 h-4 text-[#666666]" />
            <span className="text-sm">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.product._id} className="flex items-center gap-4 py-3 border-b">
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.product.productImage?.asset?.url && (
                      <Image
                        src={item.product.productImage.asset.url}
                        alt={item.product.title || "Product"}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                        priority
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.product.title || "Unknown Product"}</h3>
                    <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium">${(item.product.price || 0) * item.quantity}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">Subtotal: <span className="font-medium">${subtotal.toFixed(2)}</span></p>
              <p className="text-sm">Discount: <span className="font-medium">-${discount.toFixed(2)}</span></p>
              <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
            </div>
          </div>

          {/* Billing Form */}
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.keys(formValues).map((key) => (
                <div key={key}>
                  <label htmlFor={key} className="block text-sm font-medium">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </label>
                  <input
                    id={key}
                    placeholder={`Enter your ${key}`}
                    value={formValues[key]}
                    onChange={handleInputChange}
                    className={`border w-full p-2 rounded-md ${formErrors[key] ? "border-red-500" : ""}`}
                  />
                  {formErrors[key] && <p className="text-sm text-red-500">{key.replace(/([A-Z])/g, ' $1')} is required.</p>}
                </div>
              ))}
            </div>
            <button className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
