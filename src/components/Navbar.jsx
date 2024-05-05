import React from "react";
import Logo from "../assets/whitelogo.png";
import "./navbar.css";

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
          <ul>{pages}</ul>

          <button className="sign-up">Sign up</button>
          <button className="Login">Login</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
