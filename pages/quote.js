import { useState } from "react";
import Link from "next/link";

const quotes = [
  {
    thinker: "Aristotle",
    quote: "Man is by nature a political animal.",
  },
  {
    thinker: "Herodotus",
    quote: "Very few things happen at the right time, and the rest do not happen at all. The conscientious historian will correct these defects.",
  },
  {
    thinker: "Niccolò Machiavelli",
    quote: "Whoever wishes to foresee the future must consult the past.",
  },
  {
    thinker: "Mary Beard",
    quote: "History is not what you thought. It is what you remember. All history is contemporary history.",
  },
  {
    thinker: "Hannah Arendt",
    quote: "The most radical revolutionary will become a conservative the day after the revolution.",
  },
];

export default function Quote() {
  const [current, setCurrent] = useState(0);

  function randomQuote() {
    setCurrent(Math.floor(Math.random() * quotes.length));
  }

  return (
    <div className="card">
      <h1>Random Quote Generator</h1>
      <blockquote className="quote" style={{ fontSize: "1.3rem" }}>
        "{quotes[current].quote}"
        <br />
        <span style={{ float: "right" }}>— {quotes[current].thinker}</span>
      </blockquote>
      <button onClick={randomQuote} style={{ padding: "0.5rem 1rem" }}>Show Another Quote</button>
      <div style={{ marginTop: "2rem" }}>
        <Link href="/thinkers">← Back to Thinkers</Link>
      </div>
    </div>
  );
}