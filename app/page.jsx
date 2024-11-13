import React from "react";
import Marque from "./components/Marque";
import Navbar from "./components/Navbar";

import FilmSection from "./Section/Homepage/Film/page";
import HeroSection from "./Section/Homepage/Hero/page";
import TrailerSection from "./Section/Homepage/Trailer/Trailer";

export default function page() {
  return (
    <div className="text-white">
      <Navbar />
      {/* Hero Section with trending movies overlay */}
      <HeroSection />
      <FilmSection />
      <TrailerSection />
      <section id="Marque" className="w-full py-20">
        <div className=" mt-[-40px] px-6 lg:px-12">
          <h1 className="text-2xl font-semibold text-center text-primary">
            Ulasan Dari Para Member
          </h1>
          <p className="text-center mb-8 text-md font-light">
            Ulasan dari member iblix terhadap kualitas iblix memberikan
            rekomendasi
          </p>
          <Marque />
        </div>
      </section>
    </div>
  );
}
