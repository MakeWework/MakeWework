import react from "react";
import Navbar from "./Navbar";
import "./hero.css";

function Hero() {
  return (
    <section className="background">
      <Navbar />
      <main>
        <section>
          <h1>Find the perfect freelance gig for you</h1>
          <p>
            Skip the search, find the right fit here. Vetted talents, vetted
            hirers
          </p>
          <button>Join</button>
        </section>
      </main>
    </section>
  );
}

export default Hero;
