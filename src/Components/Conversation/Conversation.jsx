import { useState } from 'react';
import './Conversation.css';

export default function Conversation() {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    // No backend is connected yet. Wire this handler to your API
    // endpoint when one is available, in place of this local state update.
    setSubmitted(true);
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
          <p>Send a message and it will reach our team directly.</p>

          {submitted ? (
            <div className="conversation__confirm">
              <p>Received. Someone from the team will follow up.</p>
              <button onClick={() => { setSubmitted(false); setValue(''); }}>
                Send another
              </button>
            </div>
          ) : (
            <form className="conversation__form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Ask about deployment, integration, or the unit itself..."
                aria-label="Ask VAJRA a question"
              />
              <button type="submit" className="btn btn--primary">Send</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
