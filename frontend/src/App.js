import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App()
{
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRephrase = async () => {
    if(!text.trim()) return;
    setLoading(true);
    setResult(null);

    try
    {
        const response = await axios.post('https://smarttextanalysis-api.onrender.com/api/rephrase', {text});
        setResult(response.data.rewritten);
        setError(null);
    }
    catch(error)
    {
        if(error.response)
        {
          setError(error.response.data.error || 'Server error');
          console.error('Rephrase failed:', error);
        }
        else
        {
          setError('Network error. Please try again later.');
          console.error('Rephrase failed:', error);
        }  
    }
    setLoading(false);
  };

  return(
    <div className='container'>
      <h1>Smart Text Rewriter</h1>
      <textarea 
      rows="8"
      placeholder="Enter your text here..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      /> 
      <button onClick={handleRephrase} disabled={loading}>
        {loading ? 'Rephrasing...' : 'Rephrase Text'}
      </button>
      {error && <div className='error'>{error}</div>}
      {result && (
        <div className='result'>
          {result.error ? (
            <p className='error'>{result.error}</p>
          ) : (
            <>
            <h3>Original:</h3>
            <p>{result.original}</p>
            <h3>Rewritten:</h3>
            <p>{result.rewritten}</p>
            </>
          )}
        </div>
      )} 
    </div>
  );
}

export default App;