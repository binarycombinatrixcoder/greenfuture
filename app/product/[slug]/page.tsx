export const revalidate = 0;

import { Container, Heading, Section } from "@/components";
import { client } from "@/sanity/lib/client";
import { getProductDetail } from "@/sanity/queries/page";
import { default as imageUrlBuilder } from "@sanity/image-url";
import { PortableText, PortableTextComponents } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import ProductCarousel from "@/components/sections/products/ProductCarousel";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-5xl ">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-4xl  leading-none">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-3xl mb-6">{children}</h3>,
    h4: ({ children }) => <h4 className="text-2xl mb-6">{children}</h4>,
    normal: ({ children }) => <p className="!mb-6">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-white mb-6 border-l-4 border-opacity-60 bg-white/10 p-6 w-full">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="sm:h-[45vh] aspect-auto w-full h-[33vh]  mb-6">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || " "}
          width={320}
          height={450}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    ),
  },
  marks: {
    em: ({ children }) => (
      <em className="text-gray-400 font-semibold">{children}</em>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          className=" font-bold underline text-yellow-300"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-xl list-disc px-6">{children}</ul>
    ),
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,

    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};

const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const data = await getProductDetail(slug);

  return (
    <Section className="bg-secondary-950">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-8">
          <div className="col-span-2 flex flex-col gap-4 items-start justify-between">
            <Link href="/product" className="text-white">
              Back to Products
            </Link>
          </div>
          <div className="col-span-4 flex flex-col my-8 gap-8 items-start md:text-center md:items-center">
            
            <Heading as="h1" className="text-section text-white leading-none">
              {data.title}
            </Heading>
            <div className="flex gap-3">
              {data.categories.map((category: string, index: number) => {
                return (
                  <span key={index} className="bg-white rounded-full px-2 py-1">
                    {category}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" my-4 md:my-8 flex flex-col items-center">
          {data.mainImages && (
            <div className="w-full">
              <ProductCarousel
                images={data.mainImages.map((image: string) => ({ url: image }))}
              />
            </div>
          )}
          <div className="max-w-3xl text-white my-8 md:my-16 flex flex-col">
            <PortableText value={data.content} components={components} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ProductDetailPage;