// src/pages/homepage/content/index.jsx
import React from "react";
import Q from "@/Components/Q";

// Importing images
import content_pic1 from "@/assets/images/home/content_pic1.webp";
import content_pic2 from "@/assets/images/home/content_pic2.webp";
import content_pic3 from "@/assets/images/home/content_pic3.webp";

export default function Content() {
  return (
    <section className="w-full bg-bg py-10 pr-6 sm:pr-8 md:pr-30">
      {/* Big Frame */}
      <div className="w-full bg-white rounded-br-4xl rounded-tr-4xl overflow-hidden shadow-[0_0_40px_rgba(13,77,155,0.5)]">
        {/* Grid for Left + Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10 md:p-16 items-stretch">
          {/* Left side */}
          <div className="flex flex-col justify-between">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-8">
              United College of Technology
            </h2>

            {/* Courses List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <ul className="list-disc list-inside text-gray text-lg space-y-3">
                <li>Health & Safety Courses</li>
                <li>Computer IT Courses</li>
                <li>Auto Courses</li>
                <li>Civil Courses</li>
                <li>Technical Courses</li>
              </ul>

              <ul className="list-disc list-inside text-gray text-lg space-y-3">
                <li>Management Courses</li>
                <li>Oil & Gas Courses</li>
                <li>Professional Courses</li>
                <li>Electrical Courses</li>
                <li>Mechanical Courses</li>
              </ul>
            </div>

            {/* Admission Notice */}
            <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-xl flex gap-2">
              <Q name="graduation-cap" className="text-primary flex-shrink-0" />
              <p className="text-lg md:text-xl text-primary font-semibold">
                Admissions are open for one and two year technical and
                professional courses.
              </p>
            </div>
          </div>

          {/* Right side - 3 Images side by side */}
          <div className="flex gap-6 items-center justify-center h-full">
            {[content_pic1, content_pic2, content_pic3].map((pic, i) => (
              <div
                key={i}
                className="relative flex-1 max-w-[220px] lg:max-w-[260px] h-[320px] rounded-2xl overflow-hidden shadow-xl shadow-gray/20 group"
              >
                {/* Image */}
                <img
                  src={pic}
                  alt={`Students ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Fade on all sides */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/10  to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent"></div>
                  <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/10 to-transparent"></div>
                  <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/10  to-transparent"></div>
                </div>

                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
