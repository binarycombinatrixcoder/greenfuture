"use client";
import { useWindScreenowSize } from "@/hooks/useWindowSize";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
export const TestimonialsCarousel = (users: any) => {
  const size = useWindScreenowSize();

  return (
    <Carousel
      stopOnHover
      showThumbs={false}
      showStatus={false}
      interval={4500}
      showArrows={false}
      autoPlay
      showIndicators={false}
      centerMode
      centerSlidePercentage={
        (size.width < 640 && 85) || (size.width < 1024 && 40) || 33
      }
      infiniteLoop
      useKeyboardArrows
      className="cursor-disable w-screen overflow-hidden max-w-7xl  duration-300"
    >
      {users.users.Testimonials.map((user: any, index: number) => {
        return (
          <div
            key={index}
            className="w-full shrink-0  sm:col-span-1 p-10 rounded-3xl bg-primary-300"
          >
            <p className="text-left min-h-[180px]">{user.excerpt}</p>
            <div className="flex gap-6 items-center sm:flex-row flex-col ">
              <div className="h-[56px] w-[56px] shrink-0 relative">
                <Image
                  src={user.image}
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                <div className="text-black flex flex-col ">
                  <h3 className="text-sub-title">{user.heading}</h3>
                  <p className="text-black text-sm opacity-90">
                    {user.tagline}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};
