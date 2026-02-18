import Image from "next/image";
import Link from "next/link";

const Blog2 = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Going all-in with millennial design</h1>
      
      <Image
        src="/14.jpg"
        alt="Sofa"
        width={800}
        height={500}
        className="rounded-lg mb-6"
      />

      <p className="text-lg mb-4">
        Sofas are the centerpiece of any living room. Millennial design focuses on sleek shapes, neutral tones, and multi-functional furniture. In this blog, we highlight the top sofa trends.
      </p>

      <p className="text-lg mb-4">
        Comfort and aesthetics go hand in hand. Modular sofas, minimalist colors, and sustainable materials are trending choices. Perfect for small apartments or large living rooms.
      </p>

      <p className="text-lg mb-6">
        Visit our collection to choose a sofa that complements your style and space effortlessly.
      </p>

      <Link href="/">
        <button className="mt-4 px-6 py-2 bg-black text-white font-bold rounded hover:bg-gray-800">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Blog2;
