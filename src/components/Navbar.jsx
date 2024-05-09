import Logo from "../assets/whitelogo.png";
import "../App.css";
// import Login from "../pages/Login";
import { Link } from "react-router-dom";

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
            <Link to="/sign_up" className="sign-up-link">
              <button className="sign-up">Sign up</button>
            </Link>
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
