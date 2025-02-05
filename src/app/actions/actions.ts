// actions.ts (or actions.js)

import { Product } from "../../../types/products";

// Sample data for cart and wishlist items in localStorage
const getCartItems = (): { product: Product; quantity: number }[] => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const getWishlistItems = (): Product[] => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

// Add product to cart
const addToCart = (product: Product) => {
  const cartItems = getCartItems();
  const existingProduct = cartItems.find(item => item.product._id === product._id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cartItems.push({ product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cartItems));
};

// Remove product from cart
const removeFromCart = (id: string) => {
  let cartItems = getCartItems();
  cartItems = cartItems.filter(item => item.product._id !== id);
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

// Update cart quantity
const updateCartQuantity = (id: string, quantity: number) => {
  const cartItems = getCartItems();
  const itemToUpdate = cartItems.find(item => item.product._id === id);

  if (itemToUpdate) {
    itemToUpdate.quantity = quantity;
  }

  localStorage.setItem("cart", JSON.stringify(cartItems));
};

// Add product to wishlist
const addToWishlist = (product: Product) => {
  const wishlistItems = getWishlistItems();
  const existingProduct = wishlistItems.find(item => item._id === product._id);

  if (!existingProduct) {
    wishlistItems.push(product);
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
};

// Remove product from wishlist
const removeFromWishlist = (id: string) => {
  let wishlistItems = getWishlistItems();
  wishlistItems = wishlistItems.filter(item => item._id !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
};

export { getCartItems, getWishlistItems, addToCart, removeFromCart, updateCartQuantity, addToWishlist, removeFromWishlist };
