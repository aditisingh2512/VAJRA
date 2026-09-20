import { useState } from 'react';
import './ModelShowcase.css';

const details = [
  {
    id: 'sensor',
    label: 'Sensor head',
    x: 47,
    y: 30,
    copy: "A raised head carries the unit's dual-lens camera and an indicator light, kept above the chassis for an unobstructed view of the room.",
  },
  {
    id: 'antenna',
    label: 'Dual antennas',
    x: 62,
    y: 22,
    copy: "Twin antennas maintain the unit's wireless connection back to the network it reports to.",
  },
  {
    id: 'strip',
    label: 'Status strip',
    x: 30,
    y: 62,
    copy: "A illuminated strip along the front signals the unit's current state at a glance, useful in low light.",
  },
  {
    id: 'chassis',
    label: 'Wheeled chassis',
    x: 50,
    y: 84,
    copy: 'Four wheels let the unit reposition itself across a room or building rather than staying fixed to one mount point.',
  },
];

// Images for each environment
const sceneImages = {
  home: '/images/vajra-home.jpeg',
  office: '/images/vajra-office.jpeg',
  travel: '/images/vajra-travel.jpeg',
};
export default function ModelShowcase() {
  const [active, setActive] = useState(details[0].id);
  const [scene, setScene] = useState('home');

  const activeDetail = details.find((d) => d.id === active);

  return (
    <section id="models" className="models">
      <div className="wrap">
        <div className="section-head">
          <p className="section-kicker">The unit</p>

          <h2>One unit, built to move through real rooms.</h2>

          <p>
            VAJRA is a single wheeled unit rather than a fixed camera. The
            points below are the parts of it worth knowing.
          </p>
        </div>

        <div className="models__stage">

          {/* LEFT SIDE - IMAGE */}
          <div className="models__image-frame">
            <img
              src={sceneImages[scene]}
              alt={`VAJRA unit in ${scene} environment`}
            />

            {details.map((d) => (
              <button
                key={d.id}
                className={`models__dot ${
                  active === d.id ? 'is-active' : ''
                }`}
                style={{
                  left: `${d.x}%`,
                  top: `${d.y}%`,
                }}
                onClick={() => setActive(d.id)}
                aria-label={d.label}
              >
                <span />
              </button>
            ))}
          </div>

          {/* RIGHT SIDE - INFORMATION */}
          <div className="models__panel">

            {/* HOME / OFFICE / TRAVEL */}
            <div
              className="models__scene-toggle"
              role="tablist"
              aria-label="Viewing environment"
            >
              <button
                className={scene === 'home' ? 'is-active' : ''}
                onClick={() => setScene('home')}
                role="tab"
                aria-selected={scene === 'home'}
              >
                Home
              </button>

              <button
                className={scene === 'office' ? 'is-active' : ''}
                onClick={() => setScene('office')}
                role="tab"
                aria-selected={scene === 'office'}
              >
                Office
              </button>

              <button
                className={scene === 'travel' ? 'is-active' : ''}
                onClick={() => setScene('travel')}
                role="tab"
                aria-selected={scene === 'travel'}
              >
                Travel
              </button>
            </div>

            <h3>{activeDetail.label}</h3>

            <p>{activeDetail.copy}</p>

            {/* HARDWARE DETAILS */}
            <div
              className="models__list"
              role="tablist"
              aria-label="Hardware detail"
            >
              {details.map((d) => (
                <button
                  key={d.id}
                  className={active === d.id ? 'is-active' : ''}
                  onClick={() => setActive(d.id)}
                >
                  {d.label}
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}