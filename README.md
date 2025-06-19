# SmartTextAnalysis-API

A Node.js REST API that uses AI to rewrite (rephrase/paraphrase) text input into natural, human-like language.  
It leverages the **LLaMA 3 70B Instruct** model hosted by **Groq** via [OpenRouter](https://openrouter.ai/) — one of the fastest available large language model (LLM) APIs.

## Live Demo

Frontend: [https://endearing-queijadas-237724.netlify.app/](https://endearing-queijadas-237724.netlify.app/)

Backend: [https://smarttextanalysis-api.onrender.com](https://smarttextanalysis-api.onrender.com)

## ✨ Features

- 🔁 Rephrase any text into fluent, human-like English
- 🧠 Powered by `meta-llama/llama-3-70b-instruct` via OpenRouter API
- 💨 Fast inference using Groq’s ultra-low latency backend
- 📦 Modular structure with `rephraser` service
- ☁️ Supports future deployment and frontend integration
- 📜 Clean API response with original and rewritten text

## 🛠 Tech Stack

| Part     | Tech                               |
|----------|------------------------------------|
| Backend  | Node.js, Express, Axios, dotenv    |
| AI Model | LLaMA 3 (via OpenRouter & Groq)    |
| Optional | MongoDB (for future history saving)|
| Frontend | Planned: React or Vue (optional)   |

## 🔌 API Endpoint

### `POST /api/rephrase`

#### Request:
{
  "text": "I live in a house near the mountains."
}
#### Response:
{
  "original": "I live in a house near the mountains.",
  "rewritten": "My home is nestled in the mountains."
}

## Getting Started

### 1. Clone the repository
`git clone https://github.com/krystal-cpp/SmartTextAnalysis-API.git`
`cd SmartTextAnalysis-API`

### 2. Install dependencies
`npm install`

### 3. Add your .env file:
`API_KEY_OPENROUTER=sk-or-xxxxxxxxxxxxxxxxxxxxxxxx`

### 4. Run the server
`node server.js`
The API will be available at: `http://localhost:5000/api/rephrase`

## Roadmap
- Add style options (formal, casual, etc.)

- Store rephrase history in MongoDB

- React-based frontend interface

- Rate limiting / abuse protection

- User authentication (optional)

- Dockerization + CI/CD pipeline

## Why This Project?
This project demonstrates how to:

- Integrate cutting-edge AI models (LLaMA 3 via OpenRouter)
  
- Build clean REST APIs in JavaScript
  
- Work with third-party LLM APIs
  
- Prepare for real-world backend developer roles
