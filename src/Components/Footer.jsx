
import { useEffect, useState } from "react";
import "../Css/Footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import { FaSquareReddit } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa";
import { FaExternalLinkAlt } from 'react-icons/fa';

function Footer() {
  const [visitorsToday, setVisitorsToday] = useState(null);

  useEffect(() => {
    const fakeCount = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    setVisitorsToday(fakeCount);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="social-links">
          <a href='https://www.sci-tech-today.com/stats/memes-statistics-updated/' target="_blank" rel="noopener noreferrer">MEME INDUSTRY</a>
          <a href='https://www.forbes.com/sites/theyec/2018/07/30/understanding-influencer-marketing-and-why-it-is-so-effective/' target="_blank" rel="noopener noreferrer">INFLUENCER MARKETING</a>
          <a href='https://medium.com/rta902/from-movies-to-memes-examining-netflixs-social-media-stardom-cf6987d5d79e' target="_blank" rel="noopener noreferrer">CASE STUDY</a>
<a
  href="https://form.typeform.com/to/wmlQCmvj"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white font-bold text-lg relative" 
    style={{
  // fixed textShadow
    color: '#00f0ff',
  }} 
>
  HIRING
  <img
    src="/New BG.png"  
    alt="New"
    className="absolute -top-2 -right-10 w-10 h-5 mb-4 mt-1"
    style={{ display: 'inline-block' }}
  />
</a>


        </div>
          <div className="socials flex items-center gap-4 text-3xl mt-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
          className="hover:shadow-lg hover:shadow-pink-500/50 transition duration-300 rounded">
          <FaInstagramSquare />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
          className="hover:shadow-lg hover:shadow-pink-500/50 transition duration-300 rounded">
          <FaFacebookSquare />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer"
          className="hover:shadow-lg hover:shadow-pink-500/50 transition duration-300 rounded">
          <FaTwitter />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"
          className="hover:shadow-lg hover:shadow-pink-500/50 transition duration-300 rounded">
           <FaYoutube />
          </a>
           <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer"
          className="hover:shadow-lg hover:shadow-pink-500/50 transition duration-300 rounded">
           <BsDiscord />
          </a>
           <a href="https://www.reddit.com" target="_blank" rel="noopener noreferrer"
          className="hover:shadow-lg hover:shadow-pink-500/50 transition duration-300 rounded">
          <FaSquareReddit />
          </a>
           <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer"
          className="hover:shadow-lg hover:shadow-pink-500/50 transition duration-300 rounded">
          <FaTwitch />
          </a>
        </div>
      </div>

      <div className="footer-right">
        <p>Visitors Today: {visitorsToday ?? 'Loading...'}</p>
        <p>&copy; {new Date().getFullYear()} HENCE MEDIA. All Rights Reserved.</p>
      </div>
      <div className="qr-png">

  <img 
    src="/QR.png" 
    alt="QR Code" 
    className="footer-qr"
  />
</div>

    </footer>
  );
}

export default Footer;
