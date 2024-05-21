import Logo from "../assets/whitelogo.png";
import "../styles/navbar.css";
// import Login from "../pages/Login";
import { Link } from "react-router-dom";

function Navbar() {
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
    <header>
      <nav>
        <Link to="/">
          <img src={Logo} alt="MakeWeWork Logo" className="Logo" />
        </Link>
        <div className="nav-links">
          <ul className="navitems">{pages}</ul>
          <div className="nav-btn">
            <Link to="/login">
              <button className="Login">Login</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
