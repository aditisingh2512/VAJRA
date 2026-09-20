import requests
from flask import Flask, request, jsonify
from flask_cors import CORS

LLM_URL = "https://termination-inspiration-recommendation-finished.trycloudflare.com/api"

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "VAJRA Backend is running!"


@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json()

    prompt = data.get("prompt", "").strip()

    if not prompt:
        return jsonify({
            "error": "Prompt is required"
        }), 400

    # LLM will be connected here later
    response = requests.post(
    LLM_URL,
    json={"prompt": prompt}
    )

    data = response.json()

    return jsonify({
    "content": data.get("content", "No response from LLM")
    })


if __name__ == "__main__":
    app.run(debug=True)