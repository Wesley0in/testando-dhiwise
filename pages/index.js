import React, { useState } from "react";
import axios from 'axios';

function Home() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const fetchResponse = async () => {
    try {
      // Simulando uma chamada à API do GPT-3
      // Nota: Substitua a URL e os parâmetros conforme necessário
      const result = await axios.get(`https://api.openai.com/v4/engines/davinci-codex/completions?prompt=${query}`);
      setResponse(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <button onClick={fetchResponse}>
        Pesquisar
      </button>
      {response && <div>{response}</div>}
    </div>
  );
}

export default Home;
