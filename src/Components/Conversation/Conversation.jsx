import { useState } from 'react';
import './Conversation.css';

export default function Conversation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    question: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.question.trim()
    ) {
      return;
    }

    // Backend will be connected here later.
    // The complete form data will be sent to the API at that stage.

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      question: '',
    });
  };

  return (
    <section id="conversation" className="conversation">
      <div className="wrap">
        <div className="conversation__panel">
          <div className="conversation__status">
            <span className="conversation__status-dot" />
            <span>VAJRA · standing by</span>
          </div>

          <h2>Ask VAJRA a question.</h2>

          <p>
            Send your details and your question. Our team will get back to you.
          </p>

          {submitted ? (
            <div className="conversation__confirm">
              <p>
                Received. Someone from the team will follow up.
              </p>

              <button onClick={handleReset}>
                Send another
              </button>
            </div>
          ) : (
            <form className="conversation__form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                aria-label="Your name"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number, e.g. +91 9876543210"
                aria-label="Phone number"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                aria-label="Email address"
                required
              />

              <textarea
                name="question"
                value={formData.question}
                onChange={handleChange}
                placeholder="Ask about deployment, integration, or the unit itself..."
                aria-label="Ask VAJRA a question"
                rows="5"
                required
              />

              <button type="submit" className="btn btn--primary">
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}