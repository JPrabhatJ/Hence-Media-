import { Link } from 'react-scroll'; 
import "../Css/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="#" className="logo">
          <img
            src="/NewLogo.png"
            alt="Logo"
            className="navbar-logo"
          />
        </a>

                <span className="navbar-text border-black-300 text-2xl ">Because Media + Memes = Great Tool to Control the Mind of the Masses</span> 

        <div className="nav-buttons arrow-cursor text xl ">
          <Link 
            to="services" 
            className="nav-btn arrow-cursor" 
            smooth={true} 
            duration={500}
            offset={-70} 
          >
            Services
          </Link>
          <Link 
            to="campaign" 
            className="nav-btn" 
            smooth={true} 
            duration={500}
            offset={-70}
          >
            PR & Campaigns
          </Link>
          <Link 
            to="contact" 
            className="nav-btn" 
            smooth={true} 
            duration={500}
            offset={-70}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
