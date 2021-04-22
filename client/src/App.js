import React, { useState } from "react";
import "./App.css";
import ErrorAlert from "./layout/ErrorAlert";
import Greetings from "./layout/Greetings";
import InputForm from "./distance/InputForm";
import LevenshteinDistance from "./distance/LevenshteinDistance";
const url = "https://levenshtein-distance-server.vercel.app/distance";
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [stringState, setStringState] = useState({});

  function clearState() {
    setData(() => null);
    setError(() => null);
  }

  async function calculateDistance(newInputs) {
    clearState();
    setStringState(() => newInputs);
    const abortController = new AbortController();
    const signal = abortController.signal;
    try {
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: newInputs }),
        signal,
      });
      let results = await response.json();
      if (response.status === 400) throw results.error;
      setData(() => results.data);
    } catch (error) {
      setError(() => error);
    }
    // .catch(setError);
    return () => abortController.abort();
  }

  return (
    <div className="App">
      <header className="App-header">
        <Greetings />
        <div className="App-alert pb-4">
          {data ? (
            <LevenshteinDistance string={stringState} data={data} />
          ) : error ? (
            <ErrorAlert error={error} />
          ) : (
            <p>Words may not include any spaces or special characters.</p>
          )}
        </div>
        <InputForm calculateDistance={calculateDistance} />
      </header>
    </div>
  );
}

export default App;
