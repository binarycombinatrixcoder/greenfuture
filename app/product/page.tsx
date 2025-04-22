export const revalidate = 0;

import { Container, Heading, Section } from "@/components";
import { getProductPage } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";

const ProductPage = async () => {
  const data = await getProductPage();

  return (
    <Section className="bg-secondary-950">
      <Container>
        <div className="text-white">
          <Heading as="h1" className="text-hero leading-none">
            Our Products
          </Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-12 mt-24">
          {data.map((product: any, index: number) => {
            return (
              <div key={index} className="flex group flex-col gap-8">
                <div className="aspect-video rounded-3xl overflow-hidden h-[360px] ">
                  <Link href={`/product/${product.slug}`}>
                    <Image
                      src={product.mainImages[0]}
                      alt={product.title}
                      width={330}
                      height={330}
                      className="w-full h-full group-hover:scale-110 duration-300 object-contain"
                    />
                  </Link>
                </div>
                <div>
                  <div>
                    <Heading as="h3" className="text-white text-sub-title mb-4">
                      <Link href={`/product/${product.slug}`}>{product.title}</Link>
                    </Heading>
                    <p className="text-neutral-400 line-clamp-2">{product.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default ProductPage;