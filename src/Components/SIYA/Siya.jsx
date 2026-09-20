import { useState } from "react";
import "./Siya.css";

function Siya() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Hi! I'm SIYA, VAJRA's AI assistant. How can I help you?"
    }
  ]);
  const [loading, setLoading] = useState(false);

  const SERVER = "http://127.0.0.1:5000/api/chat";

  const sendMessage = async () => {
    const text = input.trim();

    if (!text || loading) return;

    setMessages((prev) => [
      ...prev,
      { type: "user", text }
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch(SERVER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt: text
        })
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: data.content || "Sorry, I couldn't get a response."
        }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "❌ Unable to connect to SIYA right now."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="siya-container">

      <button
        className="siya-toggle"
        onClick={() => setOpen(!open)}
      >
        V
      </button>

      {open && (
        <div className="siya-panel">

          <div className="siya-header">
            <div>
              <strong>VAJRA // SIYA AI</strong>
              <small>INTELLIGENCE INTERFACE</small>
            </div>

            <button onClick={() => setOpen(false)}>
              ×
            </button>
          </div>

          <div className="siya-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`siya-message ${message.type}`}
              >
                {message.text}
              </div>
            ))}

            {loading && (
              <div className="siya-message bot">
                🤖 SIYA is thinking...
              </div>
            )}
          </div>

          <div className="siya-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask SIYA..."
            />

            <button onClick={sendMessage}>
              Send
            </button>
          </div>

        </div>
      )}

    </div>
  );
}

export default Siya;