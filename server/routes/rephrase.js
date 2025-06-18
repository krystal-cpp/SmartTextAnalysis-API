const express = require('express');
const router = express.Router();
const { rephraseText } = require('../services/rephraser');

router.post('/', async (req, res) => {
    const { text } = req.body;
    if(!text) return res.status(400).json({error: 'Text is required'});

    try
    {
        const rewritten = await rephraseText(text);
        res.json({original: text, rewritten: rewritten});
    }
    catch(err)
    {
        res.status(500).json({error: 'Server error'});
    }
    
});

module.exports = router;