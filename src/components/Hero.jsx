// import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
// import "../App.css";
import "../components/Style/Hero.css";

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
        <Link to="/sign_up">
          <button className="Join">Join</button>
        </Link>
      </section>
    </main>
  );
}

export default Hero;
