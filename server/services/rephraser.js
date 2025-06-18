const axios = require('axios');
const { text } = require('express');

async function rephraseText(text)
{
    try
    {
        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model:'meta-llama/llama-3-70b-instruct',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a helpful assistant that rewrites texts to sound more natural and human-like while preserving their original meaning. You must ONLY return the rewritten version, without any introductory phrases or explanations.'
                    },
                    {
                        role: 'user',
                        content: `Please rephrase the following text:\n\n${text}`
                    }
                ]
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.API_KEY_OPENROUTER}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': 'http://localhost:5000', 
                    'X-Title': 'SmartTextRewriter'
                }
            }
        );
        console.log(response.data.choices[0].message.content.trim());
        const rewritten = response.data.choices[0].message.content.trim();
        return rewritten;
    }
    catch(err)
    {
        console.error('Rephrase error:', err.response?.data || err.message);
        return '[Error while rephrasing]';
    }
}

module.exports = {rephraseText};