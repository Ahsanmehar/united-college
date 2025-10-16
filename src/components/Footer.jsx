import { Link } from "react-router-dom";
import Q from "@/Components/Q";
import { Facebook, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Section 1 */}
          <div className="max-w-lg">
            <h3 className="text-2xl font-bold">UNITED COLLEGE</h3>
            <span className="block font-normal text-base mb-5 text-white/90">
              OF TECHNOLOGY (Pvt) Ltd.
            </span>
            <p className="text-sm text-white/80 leading-relaxed text-justify">
              United College of Technology (Pvt) Ltd. Provides essential
              information for all Information Technology & Technical Management
              Study Courses. We hope you will find it a helpful and lively
              introduction to our courses and our educational, social, and
              recreational facilities. We are giving quality training &
              education with Professional Skills, offering a comprehensive
              program of studies at Certificate, one-year Diploma & two years
              Diploma levels.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2 tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Health & Safety Courses",
                "Computer IT Courses",
                "Civil Courses",
                "Technical Courses",
                "Professional Courses",
              ].map((service, i) => (
                <li key={i}>
                  <Link
                    to="/courses"
                    className="text-white/80 hover:text-secondary flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Courses", link: "/courses" },
                { name: "Blog", link: "/blog" },
                { name: "Contact Us", link: "/contact-us" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.link}
                    className="text-white/80 hover:text-secondary flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 - Contact Info */}
          <div className="flex flex-col h-full max-w-xs">
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2 tracking-wide">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Q name="phone" className="w-4 h-4 mt-0.5 text-secondary" />
                <span>0340-7255262 / 0301-5044340</span>
              </li>
              <li className="flex items-start gap-3">
                <Q name="phone" className="w-4 h-4 mt-0.5 text-secondary" />
                <span>0344-5596000 / 0333-9014677</span>
              </li>
              <li className="flex items-start gap-3">
                <Q name="mail" className="w-4 h-4 mt-0.5 text-secondary" />
                <a
                  href="mailto:info@unitedcollege.com.pk"
                  className="hover:text-secondary transition-colors"
                >
                  info@unitedcollege.com.pk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Q name="globe" className="w-4 h-4 mt-0.5 text-secondary" />
                <a
                  href="http://www.unitedcollege.com.pk"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  unitedcollege.com.pk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Q name="map-pin" className="w-8 h-8 mt-0.5 text-secondary" />
                <span>
                  S-272 Main New Katarian Stop, Oppst Govt Girls College,
                  Rawalpindi
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Q name="clock" className="w-4 h-4 mt-0.5 text-secondary" />
                <span>9:00–6:00 (Mon–Sat)</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="relative mt-12 pt-8">
          {/* Gradient Line */}
          <div
            className="absolute top-0 left-0 w-full h-[2px] 
  bg-gradient-to-r from-transparent via-secondary to-transparent 
  animate-gradient-x  blur-[0.5px]"
          ></div>

          {/* Content */}
          <div className="flex justify-center">
            <p className="text-white/70 text-sm tracking-wide">
              © {new Date().getFullYear()} United College of Technology. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
