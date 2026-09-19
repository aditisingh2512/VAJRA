import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import '../PrivacyPolicy/PrivacyPolicy.css';

export default function Terms() {
  return (
    <div className="legal-page">
      <Navbar />
      <main className="wrap legal-doc">
        <p className="legal-doc__kicker">Terms &amp; Conditions</p>
        <h1>Terms &amp; Conditions</h1>
        <p className="legal-doc__updated">Last updated: [add date]</p>

        <section>
          <h2>1. About this page</h2>
          <p>
            This website presents information about VAJRA, a project of SIFS
            Group. It is currently a product information site rather than a
            platform with user accounts or transactions. [Update this section
            once the site's actual functionality changes.]
          </p>
        </section>

        <section>
          <h2>2. Use of this website</h2>
          <p>
            [Add the organization's actual terms for acceptable use of the
            site and its content once confirmed.]
          </p>
        </section>

        <section>
          <h2>3. Intellectual property</h2>
          <p>
            [State ownership of the VAJRA name, imagery and content once
            confirmed with SIFS Group.]
          </p>
        </section>

        <section>
          <h2>4. Limitation of liability</h2>
          <p>
            [Add the organization's actual liability terms once confirmed
            with legal counsel.]
          </p>
        </section>

        <section>
          <h2>5. Contact</h2>
          <p>
            [Add a real contact channel once one exists.]
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
