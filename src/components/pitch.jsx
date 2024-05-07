// import React from "react";
import pitch1 from "../assets/pitch1.png";
import pitch2 from "../assets/pitch2.png";
import pitch3 from "../assets/pitch3.png";
import { TfiAngleRight } from "react-icons/tfi";

function Pitch() {
  const articleContent = [
    {
      image: pitch1,
      heading: "Hire talented freelancers with just a few clicks",
      text: "Browse through a wide range of skilled professionals and select the one that fits your needs",
      button: "Get started",
    },
    {
      image: pitch2,
      heading: "Collaborate seamlessly with your chosen freelancer",
      text: "Communicate, share files, and track progress all in one place",
      button: "Sign Up",
    },
    {
      image: pitch3,
      heading: "Receive high-quality work delivered on time and within budget",
      text: "Review and approve the completed project, and pay securely through our platform",
      button: "Learn more",
    },
  ];

  const pitchArticle = articleContent.map((items) => {
    return (
      <article key={crypto.randomUUID()}>
        <img src={items.image} alt="" />
        <h2>{items.heading}</h2>
        <p>{items.text}</p>
        <button>
          {items.button}
          <TfiAngleRight />
        </button>
      </article>
    );
  });
  return (
    <>
      <section>
        <h1>Find the perfect freelancer for your project</h1>
        <div>{pitchArticle}</div>
      </section>
    </>
  );
}

export default Pitch;
