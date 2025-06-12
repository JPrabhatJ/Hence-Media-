import { useState } from 'react';
import { Link } from 'react-scroll';
import "../Css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar ">
      <a href="#" className="logo">
        <img src="/NewLogo.png" alt="Logo" className="navbar-logo absolute -bottom-1" />
      </a>

      <img src="/Puneet-BG.png" alt="Navbar-img" className="w-30 h-20 mt-4" />

      <span className="navbar-text">
        Because Media + Memes = Great Tool to Control the Mind of the Masses
      </span>

      {/* Hamburger Icon */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Navigation Links */}
      <div className={`nav-buttons ${menuOpen ? 'open' : ''}`}>
        <Link to="services" className="nav-btn arrow-cursor" smooth={true} duration={500} offset={-70}>
          Services
        </Link>
        <Link to="campaign" className="nav-btn arrow-cursor" smooth={true} duration={500} offset={-70}>
          PR & Campaigns
        </Link>
        <Link to="contact" className="nav-btn arrow-cursor" smooth={true} duration={500} offset={-70}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
