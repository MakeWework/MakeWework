// import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Advert from "../components/Advert";
import Pitch from "../components/pitch";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="background">
        <Navbar />
        <Hero />
      </div>
      <Advert />
      <Pitch />
      <Footer />
    </>
  );
}

export default Home;
