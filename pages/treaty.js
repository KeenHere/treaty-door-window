import Link from "next/link";
import { useState } from "react";

// Permanent official participants
const officialParticipants = [
  { name: "Swastik Rijal", discipline: "Politics" },
  { name: "Sanjay Yakkha", discipline: "History" },
];

export default function Treaty() {
  const [signatories, setSignatories] = useState([]);
  const [name, setName] = useState("");
  const [signed, setSigned] = useState(false);

  function handleSign(e) {
    e.preventDefault();
    if (
      name.trim() &&
      !signatories.find(
        (sig) => sig.name.toLowerCase() === name.trim().toLowerCase()
      )
    ) {
      setSignatories([
        ...signatories,
        { name: name.trim() }
      ]);
      setSigned(true);
      setName("");
      setTimeout(() => setSigned(false), 2000);
    }
  }

  return (
    <div className="card">
      <h1>The Treaty of Door & Window</h1>
      <img
        src="/treaty_document.png"
        alt="Treaty Document"
        style={{
          display: "block",
          margin: "2rem auto",
          maxWidth: "350px",
          width: "90%",
          border: "2px solid #e3cfa3",
          borderRadius: "8px",
          boxShadow: "0 0 12px #e8d9b6"
        }}
      />
      <p>
        <b>Signed: 2025</b>
      </p>
      <blockquote className="quote" style={{ fontSize: "1.2rem" }}>
        "Let Politics be the door through which we enter, and History the window through which we see."
      </blockquote>
      <h2>Preamble</h2>
      <p>
        We, the students of history and politics, recognizing the indivisible bond between past and present, do hereby affirm this Treaty of Door and Window. By this document, we acknowledge that neither history nor politics stands alone, but each is both the entry and the outlook for understanding societies, peoples, and ideas.
      </p>
      <h2>Articles</h2>
      <ol>
        <li>
          <b>The Door:</b> Politics is the door to knowledge as philosophy in motion. It is the unfolding of human will, power, and ethical conflict across time.
        </li>
        <li>
          <b>The Window:</b> History is the window to action as philosophy in memory. It is not just a record of events, but the deeper narrative of power, struggle, and meaning in human life.
        </li>
        <li>
          <b>Unity:</b> We pledge to explore politics and history together, seeing one as the threshold and the other as the outlook of human experience. Politics creates the world. History explains why it became what it is.
        </li>
        <li>
          <b>Dialogue:</b> We welcome debate, diverse perspectives, and the meeting of minds at this intersection.
        </li>
        <li>
          <b>Legacy:</b> Let this treaty remind all who visit that understanding the past and the present together is essential for shaping the future.
        </li>
      </ol>
      <p style={{ fontStyle: "italic" }}>
        In witness whereof, we set our thoughts and signatures to this document, opening the door and window to a world of ideas.
      </p>
      <hr />
      <h2>Official Participants</h2>
      <ul style={{ listStyle: "none", paddingLeft: 0, fontFamily: 'Caveat, cursive', fontSize: "1.6rem" }}>
        {officialParticipants.map((p, i) => (
          <li key={i} style={{ marginBottom: "0.3rem" }}>
            ✍️ {p.name}
            <span style={{ fontSize: "1.1rem", color: "#835f18", fontFamily: "serif", marginLeft: "0.7rem" }}>
              ({p.discipline})
            </span>
          </li>
        ))}
      </ul>
      <h2 style={{ marginTop: "2rem" }}>Sign the Treaty Campaign</h2>
      <p>
        <b>Be part of the movement:</b> Sign below to acknowledge and support the Treaty of Door & Window!
      </p>
      <form onSubmit={handleSign} style={{ marginTop: "1rem", textAlign: "left" }}>
        <label htmlFor="signName" style={{ fontWeight: "bold" }}>
          Your Name:
        </label>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "0.5rem" }}>
          <input
            id="signName"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name to sign"
            style={{ fontSize: "1rem", padding: "0.4rem", borderRadius: "5px", border: "1px solid #d1bc8a" }}
            required
          />
          <button type="submit" style={{ fontSize: "1rem", padding: "0.4rem 1.2rem" }}>Sign</button>
        </div>
        {signed && <span style={{ color: "green", marginLeft: "1rem" }}>Thank you for signing!</span>}
      </form>
      <h3 style={{ marginTop: "2.2rem" }}>Campaign Signatories</h3>
      {signatories.length === 0 && (
        <span style={{ color: "#888", fontStyle: "italic" }}>No campaign signatures yet. Be the first!</span>
      )}
      <ul style={{ listStyle: "none", paddingLeft: 0, fontFamily: 'Caveat, cursive', fontSize: "1.3rem" }}>
        {signatories.map((sig, i) => (
          <li key={i} style={{ marginBottom: "0.2rem" }}>✍️ {sig.name}</li>
        ))}
      </ul>
      <div style={{ marginTop: "2.5rem" }}>
        <Link href="/">← Back to Home</Link>
      </div>
      {/* Google Fonts for cursive signature look */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap');
      `}</style>
    </div>
  );
}
