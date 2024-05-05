import react from "react";
import { TfiAngleRight } from "react-icons/tfi";
import workingman from "../assets/workingman.png";
import laptopguy from "../assets/laptopguy.png";
import "./advert.css";

function Advert() {
  const advertList = [
    "No hidden cost",
    "Post jobs and hire vetted talents",
    "Build the project without breaking the bank",
  ];

  const listItems = advertList.map((item) => {
    return <li key={item}>{item}</li>;
  });
  return (
    <section className="adv1">
      <div className="adv-div">
        <div className="inner-div">
          <h2>Building something new? Make we work.</h2>
          <ul className="">{listItems}</ul>
          <button>Learn More</button>
          <button>
            Sign up <TfiAngleRight />
          </button>
        </div>
        <div>
          <img src={workingman} alt="workingman" className="adv-img" />
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Advert;
