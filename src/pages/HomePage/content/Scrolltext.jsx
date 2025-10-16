// src/pages/homepage/content/Scrolltext.jsx
import React from "react";
import Q from "@/components/Q";

export default function Scrolltext() {
  return (
    <section className="w-full bg-bg ">
      <div className="relative w-full bg-white text-primary py-5 overflow-hidden border-y-2 border-primary shadow-md">
        {/* Scrolling Content */}
        <div className="whitespace-nowrap animate-scroll">
          <div className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide uppercase leading-none">
            <Q name="graduation-cap" className="text-primary" />
            <span>
              ADMISSIONS OPEN — 10% DISCOUNT OFFER IN QUALITY CONTROL COURSE /
              HEALTH & SAFETY COURSE / COMPUTER IT COURSE / AUTO COURSES / CIVIL
              COURSE / TECHNICAL COURSE / AUTO MECHANIC COURSE — AND 200+
              COURSES
            </span>
            <Q name="graduation-cap" className="text-primary" />
          </div>
        </div>

        {/* Fade effects on both sides */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
}
