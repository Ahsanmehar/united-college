import React from "react";
import gallery_images from "@/assets/images/Gallery";
import Breadcrumb from "@/components/Breadcrumb";

export default function GalleryHead() {
  return (
    <div>
      <div
        className="relative h-120 bg-cover bg-center"
        style={{ backgroundImage: `url(${gallery_images.bul1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-secondary/50 z-10" />

        <div className="relative z-20 h-full flex flex-col justify-end">
          <div className="container flex flex-col md:flex-row items-start md:items-end justify-between pb-8">
            <div className="text-white max-w-xl">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-3 animate-fadeInUp bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent drop-shadow-lg leading-tight">
                Gallery
              </h2>
              <p className="text-sm md:text-base text-gray-200">
                Explore our glorious campus and experience our lifestyle
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Breadcrumb currentPage="Blogs" className="text-white" /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
