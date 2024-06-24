import Logo from "../assets/whitelogo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    "Home",
    "Upload gigs",
    "Our Freelancers",
    "About",
    "Search",
  ];

  const pages = navItems.map((page) => {
    return <li key={page}>{page}</li>;
  });

  return (
    <header className={`sticky top-0 z-20`}>
      <nav className="flex justify-between py-[5px] px-[40px] bg-navColor backdrop-filter backdrop-blur-sm top-0">
        <Link to="/">
          <img src={Logo} alt="MakeWeWork Logo" className="w-[200px]" />
        </Link>
        <div className="flex justify-between items-center w-[70%] font-medium md:text-sm xl:text-lg">
          <ul className="flex list-none text-white gap-x-[65px]">{pages}</ul>
          <div className="flex">
            <Link to="/login">
              <button className="Login bg-green text-white px-8 py-2 rounded-lg">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
