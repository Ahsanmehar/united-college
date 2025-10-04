import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock, Mail, Globe } from "lucide-react";
import contact_images from "@/assets/images/contact";

export default function ContactUsPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const contactInfo = [
    {
      id: 1,
      icon: <Phone className="w-10 h-10 text-primary" />,
      title: "Phone Numbers",
      details: ["0301-5044340", "0340-7255262", "0344-5596000", "0333-9014677"],
    },
    {
      id: 2,
      icon: <MapPin className="w-10 h-10 text-primary" />,
      title: "Address",
      details: [
        `S-272 Main New Katarian Stop Oppst
Govt Girls College Karnal Sher Khan Shaheed,
Old IJP Road, Rawalpindi`,
      ],
    },
    {
      id: 3,
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "Working Hours",
      details: ["Mon to Sat – 9:00am to 6:00pm"],
    },
    {
      id: 4,
      icon: <Mail className="w-10 h-10 text-primary" />,
      title: "Email",
      details: ["info@unitedcollege.com.pk"],
    },
    {
      id: 5,
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "Website",
      details: ["www.unitedcollege.com"],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div ref={ref} className="relative w-full h-[70vh] overflow-hidden">
        <motion.img
          src={contact_images.contact}
          alt="Contact Banner"
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
        <motion.h1
          style={{ y: heroY, opacity: heroTextOpacity }}
          className="absolute bottom-10 left-10 text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
        >
          Contact Us
        </motion.h1>
      </div>

      {/* Contact Cards Section */}
      <div className="container mx-auto py-16 px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        {contactInfo.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-8 rounded-2xl shadow-lg bg-[color:var(--color-bg)] hover:shadow-2xl transition"
          >
            {item.icon}
            <h3 className="text-2xl font-bold text-primary mt-4 mb-2">{item.title}</h3>
            {item.details.map((detail, i) => (
              <p key={i} className="text-gray-700 text-center">{detail}</p>
            ))}
          </motion.div>
        ))}
      </div>


      {/* Map Section */}
      <div className="container mx-auto pb-16 px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Find Us on Map</h2>
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-primary/20">
          <a
            href="https://maps.app.goo.gl/wEYsMB5ch8egPpZV8"
            target="_blank"
            rel="noopener noreferrer"
          >

            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424978.8984943235!2d72.73533910624994!3d33.679240952555205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95a05915202d%3A0xb7360e88f94d21b9!2sUnited%20College%20of%20Technology%20Rawalpindi%20Islamabad!5e0!3m2!1sen!2s!4v1758727178224!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </a>
        </div>
      </div>
    </div>
  );
}
