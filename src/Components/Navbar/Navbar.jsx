import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const links = [
  { href: '#models', label: 'Unit' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#system', label: 'System' },
  { href: '#environments', label: 'Environments' },
  { href: '#deployment', label: 'Deployment' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar__inner wrap">
        <Link to="/" className="navbar__logo">VAJRA</Link>

        {onHome && (
          <nav className="navbar__links" aria-label="Primary">
            {links.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
        )}

        {onHome ? (
          <a href="#conversation" className="navbar__cta">Ask VAJRA</a>
        ) : (
          <Link to="/" className="navbar__cta">Back to site</Link>
        )}

        <button
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {onHome && (
        <div className={`navbar__drawer ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#conversation" onClick={() => setOpen(false)} className="navbar__drawer-cta">
            Ask VAJRA
          </a>
        </div>
      )}
    </header>
  );
}
