import { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="top" className={`hero ${revealed ? 'is-revealed' : ''}`}>
      <div className="hero__media">
        <img src="/images/vajra-home.jpeg" alt="A VAJRA unit stationed in a home interior" />
        <div className="hero__grid-lines" aria-hidden="true" />
      </div>

      <div className="hero__scrim" />

      <div className="hero__content wrap">
        <p className="hero__status">
          <span className="hero__status-dot" />
          System online
        </p>

        <h1 className="hero__title">
          VAJRA is a security unit that watches the spaces you can&rsquo;t.
        </h1>

        <p className="hero__description">
          It moves through a home, an office or a route on its own, keeping
          watch through onboard cameras and sensors, and flags what it sees
          instead of waiting for someone to check.
        </p>

        <div className="hero__actions">
          <a href="#models" className="btn btn--primary">See the unit</a>
          <a href="#system" className="btn btn--ghost">How it operates</a>
        </div>
      </div>

      <a href="#models" className="hero__scroll">
        <span>Scroll</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}
