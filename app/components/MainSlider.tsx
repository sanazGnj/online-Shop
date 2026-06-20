"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  id: number;
  image: string;
}

export default function MainSlider() {
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch("http://localhost:3002/slides");
        const data = await res.json();
        setSlides(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSlides();
  }, []);

  if (!slides.length) {
    return (
      <div className="w-full h-[400px] rounded-2xl bg-gray-200 animate-pulse" />
    );
  }

  return (
    <div className="w-full  mx-auto px-4 mt-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        className="rounded-2xl overflow-hidden h-[220px] md:h-[320px] lg:h-[400px]"
      >
        {slides.map((slide) => (
          // <SwiperSlide key={slide.id}>
          //   <div className="relative w-full h-full">
          //     <div className="w-full h-[400px]">
          //       <img
          //         src={slide.image}
          //         alt={`slide-${slide.id}`}
          //         className="w-full h-full object-cover"
          //       />
          //     </div>
          //   </div>
          // </SwiperSlide>
          
      <SwiperSlide key={slide.id}>
        <img
          src={slide.image}
          alt={`slide-${slide.id}`}
          className="w-full h-[220px] md:h-[320px] lg:h-[400px] object-cover"
        />
      </SwiperSlide>



        ))}
      </Swiper>
    </div>
  );
}