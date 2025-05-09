export const revalidate = 0;

import {
  AboutUs,
  Blog,
  Features,
  Hero,
  Metrics,
  NewLetter,
  OurExpert,
  Testimonials,
  Product,
} from "@/components";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      
      <Product />
      <div className="p-2 sm:p-4 bg-secondary-950">
        <Features />
      </div>
      <AboutUs />
      <Metrics />
      <div className="p-2 sm:p-4">
        <Testimonials />
      </div>
      <OurExpert />
      <div className="p-2 sm:p-4 bg-secondary-950">
        <NewLetter />
      </div>
      <Blog />
    </main>
  );
}
