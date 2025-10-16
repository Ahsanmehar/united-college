// src/pages/HomePage/index.jsx

import Hero from "./Hero";
import Content from "./content";
import Scrolltext from "./content/Scrolltext";
import Introduction from "./introduction";
import Partners from "./partners";
import NationalHero from "./natinalHeros";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Content />
      <Scrolltext />
      <Introduction />
      <Partners />
      <NationalHero />
    </main>
  );
}
