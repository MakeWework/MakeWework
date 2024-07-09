// import React from "react";
import { TfiAngleRight } from "react-icons/tfi";
import workingman from "../assets/workingman.png";
import laptopguy from "../assets/laptopguy.png";
import Dollar from "../assets/dollar.png";
import Case from "../assets/case.png";
import House from "../assets/house.png";
import { Link } from "react-router-dom";
import "../styles/advert.css";



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
      <li key={crypto.randomUUID()} className="flex gap-[10px] items-center">
        <img src={item.img} alt="" />
        {item.called}
      </li>
    );
  });

  const subParagraph = [
    {
      heading: "Efficient Process",
      text: "Post your project, review proposals, and hire the perfect freelancer all in one place.",
    },
    {
      heading: "Quality Results",
      text: "Our freelancers are highly skilled and dedicated to delivering exceptional work on time.",
    },
  ];

  const subPara = subParagraph.map((item) => {
    return (
      <article key={crypto.randomUUID()}>
        <h3 className="font-[700]">{item.heading}</h3>
        <p className="w-[210px] pt-3">{item.text}</p>
      </article>
    );
  });

  return (
    <section className="flex flex-col pt-5 items-center justify-center">
      {/* First Guy with laptop */}
      <article className="flex mb-9 gap-[80px]">
        <div className="flex flex-col">
          <h2 className="pt-[30px] text-[40px] font-[500] leading-[50px] w-[400px] pb-[25px]">
            Building something new? Make we work.
          </h2>
          <ul className="flex flex-col gap-6 pb-[20px] list-none">
            {listItems}
          </ul>
          <div className="flex items-center">
            <Link to="/learn_more">
              <button className="rounded-lg px-10 py-3 border border-[#9e9e9e]">
                Learn More
              </button>
            </Link>
            <Link to="/sign_up">
              <button className="flex items-center ml-8 gap-1">
                Sign up <TfiAngleRight />
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src={workingman} alt="workingman" className="w-[550px]" />
        </div>
      </article>

      {/* Laptop with hand */}
      <article className="flex mb-5 gap-[60px]">
        <div>
          <img src={laptopguy} alt="workingman" className="w-[550px]" />
        </div>
        <div className="flex flex-col">
          <span className="text-green text-xl mb-[-15px]">Clients</span>
          <h2 className="pt-[30px] text-[40px] font-[500] leading-[50px] w-[400px] pb-[10px]">
            Post your projects easily and find freelancers{" "}
          </h2>
          <p className="w-[450px]">
            Our platform makes it simple to post your projects and connect with
            talented freelancers. Whether you need a website built, a logo
            designed, or content written, we have the right professionals for
            the job.
          </p>
          <section className="flex gap-5 pt-[10px]">{subPara}</section>
        </div>
      </article>
    </section>
  );
}

export default Advert;
