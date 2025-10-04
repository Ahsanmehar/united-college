import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import about_images from "../../assets/images/about";

export default function AboutPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const aboutY = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  const aboutOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div ref={ref} className="relative w-full h-[70vh] overflow-hidden">
        <motion.img
          src={about_images.slider_about}
          alt="United College Banner"
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
        <motion.h1
          style={{ y: aboutY, opacity: aboutOpacity }}
          className="absolute bottom-2 left-10 text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
        >
          About Us
        </motion.h1>
      </div>

      {/* Navigation Links */}
      <div className="mt-6">
        <div className="container mx-auto flex justify-center gap-10 py-4 text-primary">
          <a href="#about" className="hover:text-secondary font-semibold">About</a>
          <a href="#ceo" className="hover:text-secondary font-semibold">CEO Philosophy</a>
          <a href="#vision" className="hover:text-secondary font-semibold">Our Vision</a>
          <a href="#mission" className="hover:text-secondary font-semibold">Our Mission</a>
          <a href="#orgChart" className="hover:text-secondary font-semibold">Organization Chart</a>
        </div>
      </div>

      {/* Page Content */}
      <div className="container px-6 lg:px-12 space-y-20 py-6">

        {/* About Section */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl shadow-xl p-10 md:p-14 bg-[color:var(--color-bg)]"
        >
          <div className="grid md:grid-cols-3 gap-10 items-stretch">
            {/* Left Content */}
            <div className="md:col-span-2 flex flex-col justify-center text-gray-700">
              <h2 className="text-4xl font-bold text-primary mb-4">United College of Technology</h2>
              <p className="text-lg leading-relaxed flex-grow">
                <b className="text-primary">United College of Technology (Pvt) Ltd.™</b> is registered with <b className="text-primary">NAVTTC – National Vocational & Technical Training Commission</b>, the supreme government authority for technical education & vocational training in Pakistan, and is also affiliated with the <b className="text-primary">TTB – Trade Testing Board</b>. The college offers a wide range of Information Technology and Technical Management courses, including Certificate, one-year Diploma, and two-year Diploma programs, ensuring quality education combined with professional skills. With a highly qualified teaching faculty, United College focuses on preparing students for international-level assessments, equipping them with modern skills to meet the ever-changing demands of global industries. The institution strongly believes in nurturing the potential of every student through a learner-centered approach, creating a vibrant academic community committed to excellence, professional growth, and personal development.
              </p>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src={about_images.building}
                alt="College Building"
                className="rounded-2xl shadow-lg w-full max-w-sm h-full object-cover transform hover:scale-105 transition duration-500 border-4 border-primary/20"
              />
            </motion.div>
          </div>

        </motion.div>

        {/* CEO Philosophy */}
        <motion.div
          id="ceo"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl shadow-xl p-10 bg-[color:var(--color-bg)]"
        >
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">CEO Philosophy</h2>

          <p>
            <b className="text-primary">United College of Technology</b> is{" "}
            <b className="text-primary">registered with NAVTTC – National Vocational & Technical Training Commission</b>.
            NAVTTC is the supreme government authority and regulator created under the act of Parliament (NAVTTC Act 2011),
            for technical education & vocational training throughout Pakistan. Affiliated with{" "}
            <b className="text-primary">TTB – Trade Testing Board</b>, according to the National Training Ordinance 1980 (amended in 2002),
            the Provincial Training Boards (PTB) establish a Trade Testing Board in each province.
          </p>

          <p>
            <b className="text-primary">United College of Technology (Pvt) Ltd.™</b> provides essential information for all
            Information Technology & Technical Management Study Courses. We hope you will find it a helpful and lively introduction
            to our courses and our educational, social, and recreational facilities. From our website you will notice that we are
            giving quality training & education with Professional Skills, offering a comprehensive program of studies at the
            Certificate, one-year Diploma, & two years Diploma levels.
          </p>

          <p>
            <b className="text-primary">United College of Technology (Pvt) Ltd.™</b> has a highly qualified teaching faculty that
            instructs students in information technology, technical training, and training to undertake international-level tests
            to become international experts & professionals. We are forever reassessing ourselves and our programs to develop and
            improve courses to meet the ever-changing demands of the world and to prepare students for high professional standards
            while at the same time promoting personal growth.
          </p>

          <p>
            <b className="text-primary">United College of Technology (Pvt) Ltd.™</b> believes that every student has the requisite
            potential and we aim to see that this potential is realized and fulfilled. Such a committed, learner-centered approach
            to education means we have a happy and purposeful community striving for excellence in all academic activities.
          </p>

          <p>
            We are all proud of our achievements. We can assure you that if you choose to achieve Information Technology and
            Technical Qualifications with us, your time will be stimulating and rewarding, and you will develop understanding,
            reasoning, originality, and creativity in your personality.
          </p> <br />

          <p className="font-semibold text-lg text-primary">
            Tanveer Hussain <br />
            CEO / Principal <br />
            United College of Technology (Pvt) Ltd.™
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          id="vision"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl shadow-xl p-12 bg-[color:var(--color-bg)]"
        >
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            To be recognized as a premier institution in technical and
            vocational education, empowering students with modern skills to
            meet global challenges and contribute to national development.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          id="mission"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl shadow-xl p-12 bg-[color:var(--color-bg)]"
        >
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-6">
            To provide quality technical education and vocational training
            through innovative teaching, industry collaboration, and
            skill-based learning, preparing students for successful careers.
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            <li>Promote demand-driven technical & vocational training.</li>
            <li>Upgrade teaching abilities, skills, and equipment to required standards.</li>
            <li>Assess manpower training needs in domestic & global markets.</li>
            <li>Enhance private sector participation in training & management.</li>
            <li>Establish monitoring, evaluation, and feedback systems.</li>
            <li>Develop & regulate examinations, testing, and certification systems.</li>
            <li>Offer need-based short courses in modern technologies for industry.</li>
            <li>Organize seminars & workshops for continuous professional growth.</li>
          </ul>
        </motion.div>



        {/* Org Chart */}
        <motion.div
          id="orgChart"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl shadow-xl p-10 bg-[color:var(--color-bg)]"
        >
          <h2 className="text-4xl font-bold mb-10 text-center text-primary">
            Organization Organogram Chart
          </h2>
          <div className="flex justify-center">
            <img
              src={about_images.orgChart}
              alt="Organization Chart"
              className="rounded-xl shadow-md max-w-4xl w-full transition hover:scale-105 duration-500 border-4 border-primary/20"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
