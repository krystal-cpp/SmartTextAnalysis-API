# SmartTextAnalysis-API

A simple Node.js REST API that analyzes text input to determine sentiment and extract key topics using natural language processing (NLP). The project includes a minimal React frontend to interact with the API.

## Features

- Analyze text sentiment (positive, negative, neutral)
- Extract key topics from text
- Store analysis history in MongoDB
- Simple React frontend for submitting text and viewing results and history
- Written in JavaScript with Express and node-nlp library

## Tech Stack

- Backend: Node.js, Express, node-nlp, MongoDB (with Mongoose)
- Frontend: React, Axios, JavaScript
- No authentication for initial version

## How to Run

1. Clone the repository
2. Install backend dependencies: `npm install`
3. Start MongoDB (local or cloud)
4. Run backend server: `node server.js`
5. Navigate to frontend directory, install dependencies and run frontend

## API Endpoints

- `POST /api/analyze` — submit text for analysis
- `GET /api/history` — get all past analysis results

## Future Improvements

- Add user authentication
- Deploy with CI/CD pipeline
- Dockerize backend and frontend
- Integrate advanced NLP services

---
