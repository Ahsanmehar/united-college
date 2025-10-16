import { Button } from "@/components/ui/button";
import hero_background from "@/assets/images/home/hero_background.webp"; // make sure file exists
import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero_background})` }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-secondary/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center  h-full text-center text-white px-5 ">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fadeInUp bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent drop-shadow-lg leading-tight">
          Achieve your dreams
        </h1>

        <p className="max-w-2xl text-lg md:text-xl mb-8 tracking-wide leading-relaxed">
          Learn at United College of Technology
        </p>

        <Button
          className="shadow-btn-hover hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/50"
          variant="default"
          size="lg"
        >
          Explore Courses
        </Button>
      </div>
    </section>
  );
}
