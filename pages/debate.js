import { useState } from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    title: "Does history shape politics, or does politics shape history?",
    arguments: [
      {
        thinker: "Herodotus",
        side: "History shapes politics",
        text: "Without the stories and lessons of the past, leaders would repeat old mistakes. The histories of nations explain their rise and fall."
      },
      {
        thinker: "Aristotle",
        side: "Both are intertwined",
        text: "A wise statesman studies history, but also acts to shape it. The present becomes the past, and so each molds the other."
      },
      {
        thinker: "Machiavelli",
        side: "Politics shapes history",
        text: "Powerful rulers create history through decisive action. Those who act boldly leave their mark for historians to record."
      }
    ]
  }
];

export default function Debate() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="card">
      <h1>Debate Simulator</h1>
      <p>
        Choose a debate topic and see how great thinkers might respond.
      </p>
      <ul>
        {topics.map((t, i) => (
          <li key={i}>
            <button onClick={() => setSelected(i)} style={{ fontWeight: "bold", fontSize: "1rem", margin: "1rem 0" }}>
              {t.title}
            </button>
          </li>
        ))}
      </ul>
      {selected !== null && (
        <div>
          <h3>{topics[selected].title}</h3>
          {topics[selected].arguments.map((a, idx) => (
            <div key={idx} className="card" style={{ background: "#f9f6f1", margin: "1rem" }}>
              <b>{a.thinker} ({a.side})</b>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      )}
      <Link href="/thinkers">← Back to Thinkers</Link>
    </div>
  );
}