require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rephraseRoute = require('./routes/rephrase');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/rephrase', rephraseRoute);

app.listen(PORT, () => {
    console.log(`The server started on port: ${PORT}`);
});