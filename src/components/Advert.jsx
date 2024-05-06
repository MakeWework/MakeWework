import react from "react";
import { TfiAngleRight } from "react-icons/tfi";
import workingman from "../assets/workingman.png";
import laptopguy from "../assets/laptopguy.png";
import Dollar from "../assets/dollar.png";
import Case from "../assets/case.png";
import House from "../assets/house.png";
import "../App.css";

function Advert() {
  const advertList = [
    {
      called: "No hidden cost",
      img: Dollar,
    },
    {
      called: "Post jobs and hire vetted talents",
      img: Case,
    },
    {
      called: "Build the project without breaking the bank",
      img: House,
    },
  ];

  const listItems = advertList.map((item) => {
    return (
      <li key={crypto.randomUUID()}>
        <img src={item.img} alt="" />
        {item.called}
      </li>
    );
  });
  return (
    <section className="adv1">
      {/* First Guy with laptop */}
      <article className="adv-article">
        <div className="inner-div">
          <h2>Building something new? Make we work.</h2>
          <ul className="inner-list">{listItems}</ul>
          <div>
            <button className="learn-more">Learn More</button>
            <button className="sign">
              Sign up <TfiAngleRight />
            </button>
          </div>
        </div>
        <div>
          <img src={workingman} alt="workingman" className="adv-img" />
        </div>
      </article>

      {/* Laptop with hand */}
      <article className="adv-article">
        <div>
          <img src={laptopguy} alt="workingman" className="adv-img" />
        </div>
        <div className="inner-div">
          <span className="intro">Clients</span>
          <h2>Post your projects easily and find freelancers </h2>
          <p>
            Our platform makes it simple to post your projects and connect with
            talented freelancers. Whether you need a website built, a logo
            designed, or content written, we have the right professionals for
            the job.
          </p>
        </div>
      </article>
    </section>
  );
}

export default Advert;
