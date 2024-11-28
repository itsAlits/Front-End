import React from "react";
import Navbar from "./components/Navbar";
import FilmSection from "./Section/Homepage/Film/page";
import HeroSection from "./Section/Homepage/Hero/page";
import TrailerSection from "./Section/Homepage/Trailer/Trailer";
import ReviewSection from "./components/ReviewSection";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <main className="text-white">
      <Navbar />
      <HeroSection />
      <FilmSection />
      <TrailerSection />
      <ReviewSection />
      <Footer />
    </main>
  );
};

export default Home;
