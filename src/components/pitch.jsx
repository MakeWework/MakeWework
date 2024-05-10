// import React from "react";
import pitch1 from "../assets/pitch1.png";
import pitch2 from "../assets/pitch2.png";
import pitch3 from "../assets/pitch3.png";
import { Link } from "react-router-dom";
import { TfiAngleRight } from "react-icons/tfi";

function Pitch() {
  const articleContent = [
    {
      image: pitch1,
      heading: "Hire talented freelancers with just a few clicks",
      text: "Browse through a wide range of skilled professionals and select the one that fits your needs",
      button: "Get started",
      link: "/get_started",
    },
    {
      image: pitch2,
      heading: "Collaborate seamlessly with your chosen freelancer",
      text: "Communicate, share files, and track progress all in one place",
      button: "Sign Up",
      link: "/sign_up",
    },
    {
      image: pitch3,
      heading: "Receive high-quality work delivered on time and within budget",
      text: "Review and approve the completed project, and pay securely through our platform",
      button: "Learn more",
      link: "/learn_more",
    },
  ];

  const pitchArticle = articleContent.map((items) => {
    return (
      <article key={crypto.randomUUID()}>
        <img src={items.image} alt="" />
        <h2>{items.heading}</h2>
        <p>{items.text}</p>
        <div className="pitch-btn">
          <Link to={items.link} className="Link">
            <button>
              {items.button}
              <TfiAngleRight />
            </button>
          </Link>
        </div>
      </article>
    );
  });
  return (
    <>
      <section className="pitch">
        <h1>Find the perfect freelancer for your project</h1>
        <div className="pitch-article">{pitchArticle}</div>
      </section>
    </>
  );
}

export default Pitch;
