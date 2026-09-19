import { useEffect, useRef, useState } from 'react';
import './System.css';

const stages = [
  {
    step: '01',
    name: 'Observe',
    copy: 'Onboard cameras and sensors take in the room continuously as the unit moves through it.',
  },
  {
    step: '02',
    name: 'Understand',
    copy: 'What comes in is compared against the pattern VAJRA has built for what that space normally looks like.',
  },
  {
    step: '03',
    name: 'Respond',
    copy: 'A break from that pattern is flagged, so a person can decide what to do next.',
  },
];

export default function System() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="system" className="system" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <p className="section-kicker">System</p>
          <h2>How VAJRA operates.</h2>
        </div>

        <div className={`system__pipeline ${inView ? 'is-active' : ''}`}>
          {stages.map((s, i) => (
            <div className="system__stage" key={s.step} style={{ transitionDelay: `${i * 140}ms` }}>
              <span className="system__step">{s.step}</span>
              <h3>{s.name}</h3>
              <p>{s.copy}</p>
              {i < stages.length - 1 && <span className="system__connector" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
