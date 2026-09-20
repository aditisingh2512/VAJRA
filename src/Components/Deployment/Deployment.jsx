import './Deployment.css';

const stages = [
  { name: 'Assess', copy: 'The space is looked at to understand its layout and where coverage matters most.' },
  { name: 'Integrate', copy: 'VAJRA is connected to the network it will report through.' },
  { name: 'Initialize', copy: 'The unit is set moving through the space to begin building its baseline.' },
  { name: 'Operate', copy: 'VAJRA continues observing and flagging on an ongoing basis.' },
];

export default function Deployment() {
  return (
    <section id="deployment" className="deployment">
      <div className="wrap">
        <div className="deployment__grid">
          <div className="section-head deployment__head">
            <p className="section-kicker">Deployment</p>
            <h2>Getting VAJRA into a space.</h2>
            <p>The same four-stage process applies whether it&rsquo;s a home or an office floor.</p>
          </div>

          <div className="deployment__media">
            <img src="/images/vajra-all.jpeg" alt="VAJRA unit moving through an office corridor" />
          </div>
        </div>

        <ol className="deployment__stages">
          {stages.map((s, i) => (
            <li key={s.name}>
              <span className="deployment__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.name}</h3>
              <p>{s.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
