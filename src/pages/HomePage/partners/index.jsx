// src/pages/homepage/partners/index.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import partner images
import partnerImage1 from "@/assets/images/home/partnerImage1.webp";
import partnerImage2 from "@/assets/images/home/partnerImage2.webp";
import partnerImage3 from "@/assets/images/home/partnerImage3.webp";
import partnerImage4 from "@/assets/images/home/partnerImage4.webp";
import partnerImage5 from "@/assets/images/home/partnerImage5.webp";
import partnerImage6 from "@/assets/images/home/partnerImage6.webp";
import partnerImage7 from "@/assets/images/home/partnerImage7.webp";
import partnerImage8 from "@/assets/images/home/partnerImage8.webp";
import partnerImage9 from "@/assets/images/home/partnerImage9.webp";
import partnerImage10 from "@/assets/images/home/partnerImage10.webp";
import partnerImage11 from "@/assets/images/home/partnerImage11.webp";
import partnerImage12 from "@/assets/images/home/partnerImage12.webp";

export default function Partners() {
  const partners = [
    partnerImage1,
    partnerImage2,
    partnerImage3,
    partnerImage4,
    partnerImage5,
    partnerImage6,
    partnerImage7,
    partnerImage8,
    partnerImage9,
    partnerImage10,
    partnerImage11,
    partnerImage12,
  ];

  return (
    <section className="w-full bg-bg py-10">
      <div className="container text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12">
          Our Partners
          <span className="block w-[100px] sm:w-[140px] md:w-[160px] h-1 bg-secondary mx-auto mt-3 rounded-full"></span>
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={0}
          loop={true}
          grabCursor={true}
          allowTouchMove={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 7 },
          }}
          className="partners-swiper"
        >
          {partners.map((image, idx) => (
            <SwiperSlide key={idx} className="flex items-center justify-center">
              <img
                src={image}
                alt={`Partner ${idx + 1}`}
                className="h-44 w-44 md:h-52 md:w-52 object-contain transition duration-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
