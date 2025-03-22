import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";

// Props interface mein params ko Promise ke tor par type kiya gaya hai
interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// Product fetch karne wali async function
async function getProduct(slug: string): Promise<Product | null> {
  return client
    .fetch(
      groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        title,
        description,
        productImage{
          asset->{
            url
          }
        },
        price
      }`,
      { slug }
    )
    .catch(() => null);
}

// Async component jo await ke through params resolve karta hai
export default async function ProductPage({ params }: ProductPageProps) {
  // await karke params se slug hasil karein
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          <Image
            src={product.productImage.asset.url}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-2xl font-sans">${product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}