import React, { useState } from "react";
import { motion as Motion} from "framer-motion";
import courses_images from "@/assets/images/courses";
import FacultySection from "../CoursesDetailPage/FacultySection";
const CoursesPage = () => {
  const [active, setActive] = useState(null);

  const faculties = [
    [
      "SCAFFOLDING INSPECTOR COURSE ",
      "QUICK BOOKS COURSE ",
      "DM DRAWING MASTER COURSE ",
      "SEO COURSE ",
    ],
    [
      "FREELANCING COURSE",
      "Skill Development & Professional ",
      "Technical & Professional ",
      "FIBER OPTICS COURSE ",
    ],
    [
      "LAP TOP REPAIRING COURSE ",
      "QCQA COURSE",
      "Enhancing careers with technology",
      "SAP ERP Course",
    ],
  ];
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full">
      <div
        className="relative w-full h-[350px] bg-cover bg-center"
        style={{ backgroundImage: `url(${courses_images.coursesbanner})` }}
      >
        <div className="absolute inset-0 bg-black opacity-65"></div>

        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-10 left-10 z-10"
        >
          <h1 className="text-white text-6xl font-serif font-bold">
Courses          </h1>
        </Motion.div>
      </div>
      <div className="w-full bg-[var(--color-light-gray)] py-12">
<Motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-6 px-6 text-xl text-[var(--color-text)]"
>
  {faculties.map((group, i) => (
    <div key={i} className="space-y-4">
      {group.map((faculty, index) => (
        <Motion.p
          key={index}
          variants={item}
          onClick={() => setActive(faculty)}
          className={`cursor-pointer relative inline-block pb-1 transition-all duration-300
            ${
              active === faculty
                ? "text-[var(--color-primary)] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[var(--color-primary)]"
                : "hover:text-[var(--color-primary)] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary)] hover:after:w-full after:transition-all after:duration-300"
            }`}
        >
          {faculty}
        </Motion.p>
      ))}
    </div>
  ))}
</Motion.div>
      </div>
      <FacultySection />
    </div>
  );
};

export default CoursesPage;
