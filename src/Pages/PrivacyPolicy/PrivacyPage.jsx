import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import '../Privacypolicy/PrivacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <Navbar />
      <main className="wrap legal-doc">
        <p className="legal-doc__kicker">Privacy Policy</p>
        <h1>Privacy Policy</h1>
        <p className="legal-doc__updated">Last updated: [add date]</p>

        <section>
          <h2>1. Overview</h2>
          <p>
            This page describes how VAJRA, a project of SIFS Group, handles
            information. [This section needs the organization's actual data
            practices before publishing: what is collected, why, and by whom.]
          </p>
        </section>

        <section>
          <h2>2. Information collected</h2>
          <p>
            [List the specific categories of information VAJRA collects, for
            example account details, messages sent through the Ask VAJRA
            form, or data captured by the unit itself, once confirmed.]
          </p>
        </section>

        <section>
          <h2>3. How information is used</h2>
          <p>
            [Describe the actual purposes information is used for, such as
            responding to inquiries or improving the product.]
          </p>
        </section>

        <section>
          <h2>4. Data sharing</h2>
          <p>
            [State plainly whether information is shared with third parties,
            and under what circumstances, once confirmed.]
          </p>
        </section>

        <section>
          <h2>5. Data retention and security</h2>
          <p>
            [Describe how long information is kept and the safeguards in
            place, once confirmed.]
          </p>
        </section>

        <section>
          <h2>6. Contact</h2>
          <p>
            [Add a real contact channel for privacy questions once one exists.]
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
