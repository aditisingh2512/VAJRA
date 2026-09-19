import './Capabilities.css';

const capabilities = [
  {
    name: 'Autonomous observation',
    copy: 'Moves through a space on its own rather than staying fixed to a single mounted position.',
  },
  {
    name: 'Environmental awareness',
    copy: 'Builds a working sense of what a room normally looks like as it passes through it.',
  },
  {
    name: 'Anomaly awareness',
    copy: 'Notices when something in view breaks from that normal pattern.',
  },
  {
    name: 'Real-time flagging',
    copy: 'Surfaces what it notices as it happens, instead of leaving it for a later review of stored footage.',
  },
  {
    name: 'Operational integration',
    copy: 'Fits into an existing home or office network as another connected system rather than a standalone camera.',
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="capabilities">
      <div className="wrap">
        <div className="section-head">
          <p className="section-kicker">Capabilities</p>
          <h2>What VAJRA actually does.</h2>
        </div>

        <div className="capabilities__list">
          {capabilities.map((c) => (
            <div className="capabilities__row" key={c.name}>
              <h3>{c.name}</h3>
              <p>{c.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
