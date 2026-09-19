import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">VAJRA</span>
          <p>A project by SIFS Group.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <a href="#models">Unit</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#system">System</a>
          <a href="#environments">Environments</a>
          <a href="#deployment">Deployment</a>
          <a href="#conversation">Ask VAJRA</a>
        </nav>

        <div className="footer__legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
        </div>
      </div>

      <div className="wrap footer__bottom">
        <p>&copy; {new Date().getFullYear()} VAJRA, SIFS Group. All rights reserved.</p>
      </div>
    </footer>
  );
}
