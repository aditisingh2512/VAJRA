import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './EnvironmentPage.css';

export default function EnvironmentPage({ environment }) {
      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="environment-page">
      <section className="environment-page__hero">
  <div className="wrap environment-page__hero-inner">
    <div className="environment-page__hero-content">
      <p className="environment-page__kicker">
        VAJRA · {environment.name}
      </p>

      <h1>{environment.title}</h1>

      <p className="environment-page__intro">
        {environment.intro}
      </p>

      <Link to="/#environments" className="btn btn--ghost">
        Back to environments
      </Link>
    </div>

    <div className="environment-page__hero-image">
      <img
        src={environment.image}
        alt={`VAJRA operating in a ${environment.name.toLowerCase()} environment`}
      />
    </div>
  </div>
</section>

      <section className="environment-page__section">
        <div className="wrap">
          <div className="section-head">
            <p className="section-kicker">How it operates</p>
            <h2>{environment.operationTitle}</h2>
          </div>

          <div className="environment-page__content-grid">
            {environment.operations.map((item) => (
              <article
                className="environment-page__item"
                key={item.title}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="environment-page__section environment-page__section--alt">
        <div className="wrap">
          <div className="environment-page__feature">
            <div>
              <p className="section-kicker">Built for the environment</p>
              <h2>{environment.featureTitle}</h2>
              <p>{environment.featureDescription}</p>
            </div>

            <div className="environment-page__feature-image">
              <img
                src={environment.featureImage}
                alt={environment.featureImageAlt}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="environment-page__section">
        <div className="wrap">
          <div className="section-head">
            <p className="section-kicker">Use cases</p>
            <h2>What VAJRA can watch for.</h2>
          </div>

          <div className="environment-page__use-cases">
            {environment.useCases.map((item) => (
              <div
                className="environment-page__use-case"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="environment-page__cta">
        <div className="wrap">
          <div className="environment-page__cta-inner">
            <p className="section-kicker">VAJRA · {environment.name}</p>
            <h2>Ready to put autonomous awareness to work?</h2>
            <p>
              Talk to the team about deploying VAJRA in your environment.
            </p>

            <Link to="/#conversation" className="btn btn--primary">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}