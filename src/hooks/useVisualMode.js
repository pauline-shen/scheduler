import React, { useState } from "react";

export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode) {
    setHistory([mode, ...history]);
    setMode(newMode);
  }

  function back() {
    if (history.length < 1) return;
    setMode(history[0]);
    setHistory(history.slice(1));
  }

  return { mode, transition, back };
}

