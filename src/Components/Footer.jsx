
import { useEffect, useState } from "react";
import "../Css/Footer.css";

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
          <a href='https://medium.com/rta902/from-movies-to-memes-examining-netflixs-social-media-stardom-cf6987d5d79e' target="_blank" rel="noopener noreferrer">MUST READ</a>
      
        </div>
        <div className="footer-contact">
          <li>Contact Us - info@hencemedia.in</li>
          <li>Contact - 9876543210</li>
          <li>Address - Palam Vihar, Gurgaon</li>
        </div>
      </div>

      <div className="footer-right">
        <p>Visitors Today: {visitorsToday ?? 'Loading...'}</p>
        <p>&copy; {new Date().getFullYear()} HENCE MEDIA. All Rights Reserved.</p>
      </div>
      <div className="qr-png">

  <img 
    src="src/assets/QR.png" 
    alt="QR Code" 
    className="footer-qr"
  />
</div>

    </footer>
  );
}

export default Footer;
