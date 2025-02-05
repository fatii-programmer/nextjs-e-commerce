# Furniture E-Commerce Website Documentation

## 📌 Introduction
This documentation provides an in-depth overview of the **Furniture E-Commerce Website**, detailing its architecture, features, technologies, and setup process.

---

## 🚀 Features & Functionalities
✅ **Dynamic Product Pages** - Uses dynamic routing for product pages.
✅ **Sanity CMS Integration** - Fetches and manages product data.
✅ **User Authentication** - Secure login & registration via Firebase.
✅ **Wishlist & Cart System** - Users can save or add items to cart.
✅ **Search Bar** - Enables quick product searches.
✅ **Payment Gateway** - Secure checkout using Stripe/Razorpay.
✅ **Optimized Performance** - Implements SSR, lazy loading, and caching.

---

## 🛠 Technology Stack
- **Frontend:** Next.js, React.js, Tailwind CSS
- **Backend:** Sanity.io (CMS), Firebase Auth
- **Database:** Sanity.io for structured data storage

---

## 📂 Project Structure
```
/furniture-ecommerce
│── /components     # Reusable UI components
│── /pages          # Dynamic product & checkout pages
│── /public         # Static assets
│── /styles         # Tailwind CSS styles
│── /utils          # Helper functions & API calls
│── sanity.json     # Sanity CMS config
│── package.json    # Dependencies
│── next.config.js  # Next.js settings
```

---

## 🔗 API Integration with Sanity
Fetching products:
```js
import { client } from '../sanity';
const fetchProducts = async () => {
  const query = `*[_type == 'furniture']`;
  return await client.fetch(query);
};
```

---

## 🔄 Dynamic Routing & Data Fetching
Each product page is dynamically created:
```js
export async function getServerSideProps({ params }) {
  const query = `*[_type == 'furniture' && slug.current == '${params.slug}'][0]`;
  const product = await client.fetch(query);
  return { props: { product } };
}
```

---

## 🔑 Authentication System
Secure Firebase login:
```js
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((user) => console.log('User Logged In'))
  .catch((error) => console.error(error));
```

---

## 🛒 Cart & Wishlist Functionality
```js
const addToCart = (product) => {
  setCart([...cart, product]);
};
```

---

## 💳 Checkout & Payment
1️⃣ **Cart Selection** → 2️⃣ **Shipping Details** → 3️⃣ **Payment Processing** → 4️⃣ **Order Confirmation**

---

## 🔍 Search Functionality
```js
const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
);
```

---

## 📈 Performance Optimizations
✔ **Server-Side Rendering (SSR)**
✔ **Lazy Loading Components**
✔ **Rate Limiting API Calls**
✔ **Secure HTTPS & Headers**

---

## 🏗 Installation & Setup
**Clone Repository:**
```sh
git clone https://github.com/your-repo/furniture-ecommerce.git
cd furniture-ecommerce
```
**Install Dependencies:**
```sh
npm install
```
**Run Project:**
```sh
npm run dev
```
**Setup Environment Variables:**
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_key
```

---

## 🔮 Future Enhancements
🚀 **Real-time Order Tracking**
🛒 **AI-Based Recommendations**
🏠 **Augmented Reality for Preview**

---

## ❓ Need Help?
For any issues, feel free to open a GitHub issue. 🚀
