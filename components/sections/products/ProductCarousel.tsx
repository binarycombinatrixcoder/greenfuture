// "use client";

// import Image from "next/image";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// function ProductCarousel({ images }: { images: { url: string }[] }) {
//   return (
//     <>
//       <Carousel
//         swipeable
//         stopOnHover
//         showStatus={false}
//         showArrows={false}
//         useKeyboardArrows
//         emulateTouch
//         infiniteLoop
//         showThumbs={true}
//         className="w-full cursor-grabbing"
//       >
//         {images.map((item: any, index: number) => {
//           return (
//             <div key={index} className="w-full h-[75vh]">
//               <img
//                 src={item.url}
//                 alt="Product Image"
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           );
//         })}
//       </Carousel>

//       {/* 👇 Custom styles to move thumbnails to the left */}
//       <style jsx global>{`
//       .carousel-root {
//         display: flex;
//         flex-direction: row-reverse;
//         align-items: flex-start;
//       }

//       .carousel .thumbs-wrapper {
//         margin-right: 1rem;
//         width: 90px;
//         height: auto;
//         max-height: 75vh;
//         overflow-y: auto;
//         display: flex;
//         flex-direction: column;
//       }

//       .carousel .thumb {
//         margin-bottom: 10px;
//         width: 100%;
//         display: flex;
//         justify-content: center;
//       }

//       .carousel .thumb img {
//         object-fit: cover;
//         height: 75px;
//         width: 75px;
//       }

//       /* Optional: Hide horizontal overflow just in case */
//       .carousel .thumbs {
//         flex-direction: column !important;
//         display: flex !important;
//       }
//     `}</style>

//     </>
//   );
// }

// export default ProductCarousel;



"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function ProductCarousel({ images }: { images: { url: string }[] }) {
  return (
    <Carousel
    swipeable
    stopOnHover
    showStatus={false}
  //   interval={6000}
    showArrows={true}
    useKeyboardArrows={true}
    emulateTouch
    infiniteLoop
  //   autoPlay
    centerSlidePercentage={90}
    className="w-full cursor-grabbing"
  >
    {images.map((item: any, index: number) => {
      return (
        <div key={index} className="w-full h-[75vh]">
          <img
            src={item.url}
            alt="Product Image"
          //   width={420}
            className="w-full h-full object-contain"
          //   height={530}
          />
        </div>
      );
    })}
  </Carousel>
  );
}

export default ProductCarousel;
