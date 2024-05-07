// import React from "react";
import Navbar from "./Navbar";
import "../App.css";

function Hero() {
  return (
    <main className="background">
      <Navbar />
      <section className="main">
        <h1>Find the perfect freelance gig for you</h1>
        <p className="catch-phrase">
          Skip the search, find the right fit here. Vetted talents, vetted
          hirers
        </p>
        <button className="Join">Join</button>
      </section>
    </main>
  );
}

export default Hero;
