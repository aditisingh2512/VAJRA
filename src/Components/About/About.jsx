import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="wrap about__grid">
        <p className="about__statement">
          Most security cameras record a fixed corner of a room and wait for
          someone to review the footage. VAJRA moves through the space
          itself and looks at what changes.
        </p>

        <div className="about__body">
          <p>
            VAJRA is built around the idea that a security system should
            observe continuously, not just when something trips a sensor.
            By moving between rooms or along a route, it covers ground a
            fixed camera never sees, and keeps a running sense of what the
            environment normally looks like.
          </p>
          <p>
            When something in view doesn&rsquo;t match that pattern, VAJRA
            flags it rather than leaving the decision to whoever eventually
            checks the recording.
          </p>
        </div>
      </div>
    </section>
  );
}
