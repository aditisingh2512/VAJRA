
import requests
from flask import Flask, request, jsonify

LLM_URL = "https://limited-drew-sealed-specializing.trycloudflare.com/api"

app = Flask(__name__)


@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    return response


@app.route("/")
def home():
    return "VAJRA Backend is running!"


@app.route("/api/chat", methods=["POST", "OPTIONS"])
def chat():

    if request.method == "OPTIONS":
        return "", 204

    data = request.get_json(silent=True) or {}
    prompt = data.get("prompt", "")

    if not isinstance(prompt, str) or not prompt.strip():
        return jsonify({
            "error": "Prompt is required"
        }), 400

    try:
        print("\nSending request to LLM:", LLM_URL)

        response = requests.post(
            LLM_URL,
            json={"prompt": prompt.strip()},
            headers={"Content-Type": "application/json"},
            timeout=(15, 120)
        )

        print("LLM HTTP status:", response.status_code)
        print("LLM raw response:", response.text[:2000])

        response.raise_for_status()

        try:
            llm_data = response.json()
        except ValueError:
            app.logger.exception("LLM returned invalid JSON")
            return jsonify({
                "error": "LLM returned a non-JSON response",
                "details": response.text[:500]
            }), 502

        # Handle common response formats
        content = (
            llm_data.get("content")
            or llm_data.get("response")
            or llm_data.get("answer")
            or llm_data.get("message")
        )

        if isinstance(content, dict):
            content = content.get("content") or content.get("text")

        if not isinstance(content, str) or not content.strip():
            print("Unexpected LLM response format:", llm_data)

            return jsonify({
                "error": "LLM response did not contain expected text",
                "details": str(llm_data)[:500]
            }), 502

        return jsonify({
            "content": content
        })

    except requests.exceptions.Timeout:
        app.logger.exception("LLM request timed out")

        return jsonify({
            "error": "LLM server timed out"
        }), 504

    except requests.exceptions.HTTPError as e:
        status = e.response.status_code if e.response is not None else 502

        app.logger.exception("LLM returned HTTP error")

        return jsonify({
            "error": f"LLM returned HTTP {status}",
            "details": e.response.text[:500] if e.response is not None else ""
        }), 502

    except requests.exceptions.RequestException as e:
        app.logger.exception("LLM connection failed")

        return jsonify({
            "error": "Could not connect to LLM server",
            "details": str(e)
        }), 502


if __name__ == "__main__":
    app.run(debug=True, port=5000)