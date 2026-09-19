import { useState } from 'react';
import './Environments.css';

const environments = [
  {
    key: 'home',
    name: 'Home',
    tagline: 'Awareness for the rooms you already live in.',
    image: '/images/vajra-home.jpeg',
  },
  {
    key: 'office',
    name: 'Office',
    tagline: 'Coverage across floors, corridors and shared spaces.',
    image: '/images/vajra-office.jpeg',
  },
  {
    key: 'travel',
    name: 'Travel',
    tagline: 'Watching over a space away from home.',
    image: '/images/vajra-travel.jpeg',
  },
];

function EnvironmentCard({ env }) {
  const [failed, setFailed] = useState(false);

  return (
    <article className="env-card">
      <div className="env-card__media">
        {!failed ? (
          <img
            src={env.image}
            alt={`VAJRA operating in a ${env.name.toLowerCase()} setting`}
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="env-card__placeholder">Image pending</div>
        )}
      </div>
      <div className="env-card__body">
        <h3>{env.name}</h3>
        <p>{env.tagline}</p>
      </div>
    </article>
  );
}

export default function Environments() {
  return (
    <section id="environments" className="environments">
      <div className="wrap">
        <div className="section-head">
          <p className="section-kicker">Environments</p>
          <h2>Built to operate in the spaces you use.</h2>
        </div>

        <div className="environments__grid">
          {environments.map((env) => (
            <EnvironmentCard key={env.key} env={env} />
          ))}
        </div>
      </div>
    </section>
  );
}
