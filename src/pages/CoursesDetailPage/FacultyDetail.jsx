import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { facultyData } from "./facultyData";

const CoursesIntro = () => {
  return (
    <Motion.div
      className="p-10 bg-[var(--color-bg)] min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center bg-[var(--color-white)] rounded-xl shadow-[var(--shadow-two)] p-10 max-w-3xl">
        <Motion.h1
          className="text-4xl font-bold font-serif text-[var(--color-primary)] mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Discover Your Learning Journey
        </Motion.h1>

        <Motion.p
          className="text-[var(--color-text)] text-lg leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Unlock your potential with our modern, career-driven programs.
          Whether you're passionate about technology, business, or creativity —
          we’ve got you covered. From <strong>Freelancing</strong> and
          <strong> SEO</strong> to <strong>Fiber Optics</strong>,
          <strong> QuickBooks</strong>, and <strong>QC/QA</strong>, each course
          is carefully designed to enhance your professional skills and prepare
          you for real-world success.
        </Motion.p>

        <Motion.img
          src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
          alt="Courses Illustration"
          className="rounded-lg shadow-[var(--shadow-three)] mx-auto w-full max-w-md mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <p className="text-[var(--color-secondary)] text-lg font-medium">
          🌟 Start your journey today — learn, grow, and lead the future.
        </p>
      </div>
    </Motion.div>
  );
};

const FacultyDetail = () => {
  const { facultyId, schoolId } = useParams();
  const faculty = facultyData[facultyId];

  // Show our CoursesIntro if no data found
  if (!faculty) return <CoursesIntro />;

  const school = schoolId !== undefined ? faculty.links[schoolId] : null;

  return (
    <Motion.div
      className="p-10 bg-[var(--color-bg)] min-h-screen overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🔹 Back Button */}
      <Motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Link
          to="/"
          className="text-[var(--color-primary)] underline mb-6 inline-block hover:text-[var(--color-secondary)] transition"
        >
          ← Back to Home
        </Link>
      </Motion.div>

      <Motion.div
        className="max-w-4xl mx-auto bg-[var(--color-white)] rounded-xl shadow-[var(--shadow-two)] p-8 space-y-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Motion.h1
          className="text-4xl font-bold font-serif text-[var(--color-primary)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {faculty.title}
        </Motion.h1>

        {school ? (
          <>
            <Motion.h2
              className="text-2xl font-semibold text-[var(--color-secondary)]"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {school.name}
            </Motion.h2>
            <Motion.p
              className="text-[var(--color-text)] text-lg leading-relaxed"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {school.description}
            </Motion.p>
          </>
        ) : (
          <Motion.p
            className="text-[var(--color-text)] text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {faculty.description}
          </Motion.p>
        )}

        <Motion.img
          src={faculty.image}
          alt={faculty.title}
          className="w-full rounded-lg shadow-[var(--shadow-three)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </Motion.div>
    </Motion.div>
  );
};

export default FacultyDetail;
