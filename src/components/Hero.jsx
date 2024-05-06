import React from "react";
import Navbar from "./Navbar";
import "../App.css";

function Hero() {
  return (
    <section className="background">
      <Navbar />
      <main>
        <section>
          <h1>Find the perfect freelance gig for you</h1>
          <p className="catch-phrase">
            Skip the search, find the right fit here. Vetted talents, vetted
            hirers
          </p>
          <button className="Join">Join</button>
        </section>
      </main>
    </section>
  );
}

export default Hero;
