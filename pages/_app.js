import '../styles/globals.css'
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <header style={{ background: "#e3cfa3", padding: "1rem" }}>
        <Link href="/" style={{ fontWeight: "bold", fontSize: "1.5rem", marginRight: "2rem" }}>
          Treaty of Door & Window
        </Link>
        <Link href="/treaty" style={{ marginRight: "1rem" }}>Treaty</Link>
        <Link href="/thinkers" style={{ marginRight: "1rem" }}>Thinkers</Link>
        <Link href="/timeline" style={{ marginRight: "1rem" }}>Timeline</Link>
        <Link href="/debate" style={{ marginRight: "1rem" }}>Debate</Link>
        <Link href="/quote" style={{ marginRight: "1rem" }}>Quotes</Link>
        <Link href="/map" style={{ marginRight: "1rem" }}>Map</Link>
      </header>
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "1.5rem" }}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}