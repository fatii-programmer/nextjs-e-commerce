import Image from "next/image";
import Link from "next/link";

const Blog3 = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Going all-in with millennial design</h1>
      
      <Image
        src="/15.jpg"
        alt="Coffee Table"
        width={800}
        height={500}
        className="rounded-lg mb-6"
      />

      <p className="text-lg mb-4">
        Coffee tables are more than just functional pieces—they are a statement of style. Millennial design emphasizes minimalism and unique shapes that add character to your living room.
      </p>

      <p className="text-lg mb-4">
        Choose tables with sustainable materials, geometric designs, and versatile features. They blend well with sofas and living room decor.
      </p>

      <p className="text-lg mb-6">
        Browse our collection to find coffee tables that balance aesthetics and practicality, perfect for modern homes.
      </p>

      <Link href="/">
        <button className="mt-4 px-6 py-2 bg-black text-white font-bold rounded hover:bg-gray-800">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Blog3;
