import React from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion} from "framer-motion";
import { facultyData } from "./facultyData";

const FacultySection = () => {
  const navigate = useNavigate();

  const handleFacultyClick = (facultyIndex) => {
    navigate(`/faculty/${facultyIndex}`);
  };

  const handleLinkClick = (facultyIndex, linkIndex) => {
    navigate(`/faculty/${facultyIndex}/school/${linkIndex}`);
  };

  return (
    <div className="space-y-40 px-10 py-16 bg-white overflow-x-hidden">
      {facultyData.map((faculty, facultyIndex) => {
        const isEven = facultyIndex % 2 === 0;
        return (
          <Motion.div
            key={facultyIndex}
            className={`flex flex-col md:flex-row items-center justify-between ${
              !isEven ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Motion.div
              className="md:w-1/2 space-y-6"
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h1
                className="text-4xl font-serif font-bold leading-snug cursor-pointer"
                onClick={() => handleFacultyClick(facultyIndex)}
              >
                {faculty.title}
              </h1>
              <p
                className="text-gray-700 text-lg leading-relaxed cursor-pointer"
                onClick={() => handleFacultyClick(facultyIndex)}
              >
                {faculty.description}
              </p>
              <div className="space-y-3">
                {faculty.links.map((link, linkIndex) => (
                  <Motion.a
                    key={linkIndex}
                    onClick={() => handleLinkClick(facultyIndex, linkIndex)}
                    className="block text-gray-700 underline hover:text-black transition cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </Motion.a>
                ))}
              </div>
            </Motion.div>

            <Motion.div
              className="md:w-1/2 flex justify-center mt-10 md:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={faculty.image}
                alt={faculty.title}
                className="rounded-lg shadow-lg cursor-pointer max-w-full h-auto"
                onClick={() => handleFacultyClick(facultyIndex)}
              />
            </Motion.div>
          </Motion.div>
        );
      })}
    </div>
  );
};

export default FacultySection;
