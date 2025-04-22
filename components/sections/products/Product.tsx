import { Heading } from "@/components/elements";
import { Container, Section } from "@/components/layouts";
import { getProductPage } from "@/sanity/queries/page"; // Import the correct query
import Image from "next/image";
import Link from "next/link";

export const Product = async () => {
  const products = await getProductPage(); // Fetch products using getProductPage
  const latestProducts = products.slice(0, 4); // Display the latest 4 products

  return (
    <Section className="bg-secondary-950 py-0 sm:py-0">
      <Container>
        <div>
          <div className="w-full flex justify-between items-center">
            <Heading as="h2" className="text-section leading-none text-white">
              Products
            </Heading>
            <button className="border px-6 py-3 rounded-full text-white">
              <Link href="/product">See all</Link>
            </button>
          </div>
          <div className="grid mt-12 sm:mt-24 grid-cols-1 md:grid-cols-2 gap-8">
            {latestProducts.map((product: any, index: number) => {
              return (
                <div key={index} className="flex group flex-col gap-8">
                  <div className="aspect-video rounded-3xl overflow-hidden h-[360px]">
                    <Link href={`/product/${product.slug}`}>
                      <Image
                        src={product.mainImages[0]} // Access the first image in the array
                        alt={product.title}
                        width={330}
                        height={330}
                        className="w-full h-full group-hover:scale-110 duration-300 object-contain"
                      />
                    </Link>
                  </div>
                  <div>
                    <div>
                      <Heading
                        as="h3"
                        className="text-white text-sub-title mb-4"
                      >
                        <Link href={`/product/${product.slug}`}>{product.title}</Link>
                      </Heading>
                      <p className="text-neutral-400 line-clamp-2">
                        {product.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-6 mt-6">
                      {/* You can add product-specific details here, like price or rating */}
                      {/* <span className="text-white">${product.price}</span> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};