// import React from "react";
import Logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

import "../styles/footer.css";


function Footer() {
  const footerLinks = [
    {
      heading: "About",
      footerlinks: [
        "How it works",
        "Featured",
        "Partnership",
        "Bussiness Relation",
      ],
    },
    {
      heading: "Community",
      footerlinks: ["Events", "Blog", "Podcast", "Invite a friend"],
    },
    {
      heading: "Socials",
      footerlinks: ["Discord", "Instagram", "Twitter", "Facebook"],
    },
  ];

  const Links = footerLinks.map((link) => {
    return (
      <article key={crypto.randomUUID()}>
        <h1>{link.heading}</h1>
        <ul>
          {link.footerlinks.map((item) => {
            return <li key={crypto.randomUUID()}>{item}</li>;
          })}
        </ul>
      </article>
    );
  });
  return (
    <>
      <footer>
        <div className="first-footer">
          <section className="footer-img">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <div>
              <FaFacebook />
              <BsTwitterX />
              <FaInstagram />
            </div>
          </section>
          <section className="footer-links">{Links}</section>
        </div>

        <hr />
        <section className="second-footer">
          <p>©2024 MakeWeWork. All rights reserved</p>
          <div className="second-inner">
            <p>Privacy & Policy</p>
            <p>Terms & Condition</p>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
