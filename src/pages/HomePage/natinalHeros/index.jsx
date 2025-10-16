// src/pages/homepage/nationalHero/index.jsx
import React from "react";

import natinalHero1 from "@/assets/images/home/natinalHero1.webp";
import natinalHero2 from "@/assets/images/home/natinalHero2.webp";
import natinalHero3 from "@/assets/images/home/natinalHero3.webp";
import natinalHero4 from "@/assets/images/home/natinalHero4.webp";

const NationalHero = () => {
  const heros = [
    { id: 1, name: "Quaid-e-Azam", img: natinalHero1 },
    { id: 2, name: "Allama Iqbal", img: natinalHero2 },
    { id: 3, name: "Fatima Jinnah", img: natinalHero3 },
    { id: 4, name: "Abdul Qadeer Khan", img: natinalHero4 },
  ];

  return (
    <section className="py-14 bg-bg">
      <div className="container text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12">
          Our National Heros
          <span className="block w-[100px] sm:w-[140px] md:w-[160px] h-1 bg-secondary mx-auto mt-3 rounded-full"></span>
        </h2>

        {/* Hero Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {heros.map((hero) => (
            <div
              key={hero.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 bg-white border-2 border-secondary"
            >
              <img
                src={hero.img}
                alt={hero.name}
                className="w-full h-74 object-center group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold drop-shadow-lg">
                  {hero.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NationalHero;
