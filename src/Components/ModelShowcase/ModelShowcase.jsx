import { useEffect, useState } from 'react';
import './ModelShowcase.css';

const sceneDetails = {
home: [
  {
    id: 'sensor',
    label: 'Sensor head',
    x: 50,
    y: 50,
    copy: "A raised head carries the unit's dual-lens camera and an indicator light, kept above the chassis for an unobstructed view of the room.",
  },
  {
    id: 'antenna',
    label: 'Dual antennas',
    x: 50,
    y: 38,
    copy: "Twin antennas maintain the unit's wireless connection back to the network it reports to.",
  },
  {
    id: 'strip',
    label: 'Status strip',
    x: 50,
    y: 62,
    copy: "An illuminated strip along the front signals the unit's current state at a glance, useful in low light.",
  },
  {
    id: 'chassis',
    label: 'Wheeled chassis',
    x: 30,
    y: 79,
    copy: "Four wheels let the unit reposition itself across a room or building rather than staying fixed to one mount point.",
  },
],
 office: [
  {
    id: 'sensor',
    label: 'Sensor head',
    x: 45,
    y: 60,
    copy: "A raised head carries the unit's dual-lens camera and an indicator light, kept above the chassis for an unobstructed view of the office.",
  },
  {
    id: 'antenna',
    label: 'Dual antennas',
    x: 56,
    y: 60,
    copy: "Twin antennas maintain the unit's wireless connection while VAJRA operates across office spaces.",
  },
  {
    id: 'strip',
    label: 'Status strip',
    x: 44,
    y: 72,
    copy: "An illuminated strip along the front signals the unit's current state at a glance.",
  },
  {
    id: 'chassis',
    label: 'Wheeled chassis',
    x: 56,
    y: 72,
    copy: "Four wheels allow the unit to reposition itself through rooms, corridors and shared office spaces.",
  },
],

 travel: [
  {
    id: 'sensor',
    label: 'Sensor head',
    x: 50,
    y: 43,
    copy: "A raised head carries the unit's dual-lens camera and provides an unobstructed view while operating in different environments.",
  },
  {
    id: 'antenna',
    label: 'Dual antennas',
    x: 67,
    y: 26,
    copy: "Twin antennas maintain the unit's wireless connection while VAJRA operates away from its usual environment.",
  },
  {
    id: 'strip',
    label: 'Status strip',
    x: 50,
    y: 58,
    copy: "An illuminated strip along the front signals the unit's current state at a glance.",
  },
  {
    id: 'chassis',
    label: 'Wheeled chassis',
    x: 39,
    y: 78,
    copy: "Four wheels let the unit reposition itself across different surfaces during travel and outdoor operation.",
  },
],
};

// Images for each environment
const sceneImages = {
  home: '/images/vajra-home.jpeg',
  office: '/images/vajra-office.jpeg',
  travel: '/images/vajra-travel.jpeg',
};

export default function ModelShowcase() {
  const [active, setActive] = useState('sensor');
  const [scene, setScene] = useState('home');

  const details = sceneDetails[scene];

  const activeDetail =
    details.find((d) => d.id === active) || details[0];

  // When environment changes, select the first feature automatically
  useEffect(() => {
    setActive('sensor');
  }, [scene]);

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

            {/* BLUE FEATURE DOTS */}
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

            {/* ACTIVE FEATURE */}
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