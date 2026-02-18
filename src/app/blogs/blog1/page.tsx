import Image from "next/image";
import Link from "next/link";

const Blog1 = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Going all-in with millennial design</h1>
      
      <Image
        src="/13.jpg"
        alt="Side Table"
        width={800}
        height={500}
        className="rounded-lg mb-6"
      />

      <p className="text-lg mb-4">
        Millennial design is all about clean lines, functionality, and minimalistic aesthetics. In this blog, we explore the latest trends in side tables that perfectly fit the modern home.
      </p>

      <p className="text-lg mb-4">
        Choosing the right side table can elevate the style of your living room. Materials like reclaimed wood, metal, and glass are in trend. Our collection brings together design and practicality seamlessly.
      </p>

      <p className="text-lg mb-6">
        Explore more styles in our store and create a living space that is not just beautiful but also functional.
      </p>

      <Link href="/">
        <button className="mt-4 px-6 py-2 bg-black text-white font-bold rounded hover:bg-gray-800">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Blog1;
