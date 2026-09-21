
import { useState, useEffect, useRef } from "react";
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
  const [listening, setListening] = useState(false);
  const [voiceError, setVoiceError] = useState("");

  const recognitionRef = useRef(null);

  const SERVER = "http://127.0.0.1:5000/api/chat";

  // Setup browser speech recognition
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceError(
        "Voice input is not supported in this browser. Try Chrome."
      );
      return;
    }

    const recognition = new SpeechRecognition();

    // Language used for speech recognition
    recognition.lang = "en-IN";

    // Show partial speech as the user speaks
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.onstart = () => {
      setListening(true);
      setVoiceError("");
    };

    recognition.onresult = (event) => {
      let transcript = "";

      for (
        let i = 0;
        i < event.results.length;
        i++
      ) {
        transcript += event.results[i][0].transcript;
      }

      setInput(transcript);
    };

    recognition.onerror = (event) => {
      setVoiceError(
        event.error === "not-allowed"
          ? "Please allow microphone access."
          : `Voice input error: ${event.error}`
      );
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, []);

  // Start or stop voice recognition
  const handleVoiceInput = () => {
    const recognition = recognitionRef.current;

    if (!recognition) {
      setVoiceError(
        "Voice input is not available in this browser."
      );
      return;
    }

    if (listening) {
      recognition.stop();
    } else {
      try {
        recognition.start();
      } catch (error) {
        setVoiceError(
          "Could not start microphone. Please try again."
        );
      }
    }
  };

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

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error || `Request failed (${response.status})`
        );
      }

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: data.content ||
            "Sorry, I couldn't get a response."
        }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: error.message ||
            "❌ Unable to connect to SIYA right now."
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

          {voiceError && (
            <div className="siya-voice-error">
              {voiceError}
            </div>
          )}

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

            <button
              type="button"
              onClick={handleVoiceInput}
              disabled={loading}
              title="Voice input"
            >
              {listening ? "⏹️" : "🎙️"}
            </button>

            <button
              onClick={sendMessage}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>

          {listening && (
            <small className="siya-listening">
              🎙️ Listening... Speak now
            </small>
          )}
        </div>
      )}
    </div>
  );
}

export default Siya;