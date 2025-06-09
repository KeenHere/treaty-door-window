import Link from "next/link";

export default function Home() {
  return (
    <div className="card">
      <h1>Welcome to the Treaty of Door & Window</h1>
      <p>
        Discover how history and politics are intertwined through the ideas of great thinkers. Explore deep profiles, interactive debates, timelines, and more!
      </p>
      <ul>
        <li>
          <Link href="/thinkers">Featured Thinkers</Link>
        </li>
        <li>
          <Link href="/timeline">Interactive Timeline</Link>
        </li>
        <li>
          <Link href="/debate">Debate Simulator</Link>
        </li>
        <li>
          <Link href="/quote">Quote Generator</Link>
        </li>
        <li>
          <Link href="/map">World Map of Thinkers</Link>
        </li>
      </ul>
    </div>
  );
}