require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const rephraseRoute = require('./routes/rephrase');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 10,
    message: {
        error: 'Too many requests. Please try again later.'
    }
});

app.use('/api/rephrase', rephraseRoute);

app.listen(PORT, () => {
    console.log(`The server started on port: ${PORT}`);
});