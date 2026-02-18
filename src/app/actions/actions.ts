import { Product } from "@/types/products";

// Cart item type
export interface CartItem {
  product: Product;
  quantity: number;
}

// Get cart items from localStorage
export const getCartItems = (): CartItem[] => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

// Get wishlist items from localStorage
export const getWishlistItems = (): Product[] => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

// Add product to cart
export const addToCart = (product: Product, qty: number = 1) => {
  const cartItems = getCartItems();
  const existingIndex = cartItems.findIndex(item => item.product._id === product._id);

  if (existingIndex !== -1) {
    cartItems[existingIndex].quantity += qty;
  } else {
    cartItems.push({ product, quantity: qty });
  }

  localStorage.setItem("cart", JSON.stringify(cartItems));
};

// Remove product from cart
export const removeFromCart = (id: string) => {
  const cartItems = getCartItems().filter(item => item.product._id !== id);
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

// Update cart quantity
export const updateCartQuantity = (id: string, quantity: number) => {
  const cartItems = getCartItems();
  const index = cartItems.findIndex(item => item.product._id === id);
  if (index !== -1) {
    cartItems[index].quantity = quantity;
  }
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

// Add product to wishlist
export const addToWishlist = (product: Product) => {
  const wishlist = getWishlistItems();
  if (!wishlist.find(item => item._id === product._id)) {
    wishlist.push(product);
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

// Remove product from wishlist
export const removeFromWishlist = (id: string) => {
  const wishlist = getWishlistItems().filter(item => item._id !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};
