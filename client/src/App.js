import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import ErrorAlert from "./ErrorAlert";
import InputForm from "./InputForm";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("/distance")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  function onSubmit(newInputs) {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("/distance", {
      method: "POST",
      headers,
      body: JSON.stringify({ data: newInputs }),
      signal,
    }).catch(setError);
    return () => abortController.abort();
  }

  return (
    <div className="App">
      <header className="App-header">
        <ErrorAlert error={error} />
        <InputForm onSubmit={onSubmit} />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
