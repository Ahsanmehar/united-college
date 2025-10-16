import React, { useState } from "react";
import Q from "@/components/Q";
import uctlogo from "@/assets/images/home/uctlogo.webp";
import introVideoThumbnail from "@/assets/images/home/introVideoThumbnail.webp";

const Introduction = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-14 bg-bg">
      <div className="container text-center">
        {/* Logo */}
        <img
          src={uctlogo}
          alt="United College Logo"
          className="mx-auto mb-6 w-28 md:w-36 drop-shadow-md"
        />
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-5 leading-tight">
          Welcome to{" "}
          <span className="text-secondary">
            UNITED COLLEGE OF TECHNOLOGY (PVT) LTD.
          </span>
        </h2>
        <p className="text-lg md:text-xl text-text/80 mb-8">
          Rawalpindi · Islamabad
        </p>

        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="text-2xl font-bold text-primary mb-4 relative inline-block">
            Introduction
            <span className="block w-[40px] sm:w-[80px] md:w-[100px] h-1 bg-secondary mx-auto mt-3 rounded-full"></span>
          </h3>
          <p className="text-base md:text-lg text-text/80 leading-relaxed">
            United College of Technology is registered with{" "}
            <span className="font-semibold text-primary">
              NAVTTC (National Vocational & Technical Training Commission)
            </span>
            . NAVTTC is the supreme government authority and regulator created
            under the act of Parliament (NAVTTC Act 2011) for technical
            education & vocational training throughout Pakistan. The college is
            also affiliated with{" "}
            <span className="font-semibold text-secondary">
              TTB (Trade Testing Board)
            </span>
            . According to the National Training Ordinance 1980 (amended in
            2002), provincial training boards (PTBs) are responsible for
            establishing Trade Testing Boards in each province.
          </p>
        </div>

        {/* Video Section */}
        <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          {/* Thumbnail */}
          <img
            src={introVideoThumbnail}
            alt="Intro Video Thumbnail"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {/* Play Button */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Play introduction video"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-white flex items-center justify-center animate-pulse shadow-lg hover:scale-110 transition-transform">
              <Q name="play" className="w-8 h-8" />
            </div>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
            >
              ✕
            </button>

            {/* YouTube iframe */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/sld_FG6D2Xk?autoplay=1"
              title="Intro Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Introduction;
