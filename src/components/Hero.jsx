// import React from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

function Hero() {
  return (
    <main>
      <section className="relative top-[160px] pl-[50px]">
        <h1 className="text-white w-[850px] text-2xl font-extraBold pb-2 leading-9">
          Find the perfect freelance gig for you
        </h1>
        <p className="w-[550px] leading-2 pb-[20px] text-[19px]">
          Skip the search, find the right fit here. Vetted talents, vetted
          hirers
        </p>
        <Link to="/sign_up">
          <button className="bg-">Join</button>
        </Link>
      </section>
    </main>
  );
}

export default Hero;
