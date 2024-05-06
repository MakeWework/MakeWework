import React from "react";
import Logo from "../assets/whitelogo.png";
import "../App.css";

function Navbar() {
  const navItems = [
    "Home",
    "Post Jobs",
    "Find Freelancer",
    "How it works",
    "Browse categories",
  ];

  const pages = navItems.map((page) => {
    return <li key={page}>{page}</li>;
  });

  return (
    <header>
      <nav>
        <img src={Logo} alt="MakeWeWork Logo" className="Logo" />
        <div className="nav-links">
          <ul className="navitems">{pages}</ul>
          <div className="nav-btn">
            <button className="sign-up">Sign up</button>
            <button className="Login">Login</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
