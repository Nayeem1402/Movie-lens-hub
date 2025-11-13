 import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// ✅ Import local images
import img1 from "./../assets/Images/1267903-widescreen-movie-poster-wallpaper-1920x1080-smartphone.jpg";
import img2 from "./../assets/Images/action-movie-3840-x-2160-wallpaper-4zy74vxvayski2ee.jpg";
import img3 from "./../assets/Images/mission-impossible-3840x2160-11684.jpg";
import img4 from "./../assets/Images/1267903-widescreen-movie-poster-wallpaper-1920x1080-smartphone.jpg";
import { js } from '@eslint/js';

export default function Hero() {
  // Image array
  const slides = [img1, img2, img3, img4];

  return (
    <div className="w-full h-2/3 relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // change every 3 seconds
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        className="mySwiper"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-2/3 lg:h-[700px] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional: dark overlay for better visibility */}
      <div className="absolute inset-0  from-black/50 to-transparent"></div>
    </div>
  );
}
