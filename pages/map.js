import Link from "next/link";

const thinkers = [
  { name: "Aristotle", place: "Stagira, Greece", coords: [40.432, 23.575] },
  { name: "Herodotus", place: "Halicarnassus (Bodrum, Turkey)", coords: [37.0344, 27.4303] },
  { name: "Machiavelli", place: "Florence, Italy", coords: [43.7696, 11.2558] },
  { name: "Mary Beard", place: "Much Wenlock, England", coords: [52.595, -2.558] },
  { name: "Hannah Arendt", place: "Linden, Germany", coords: [52.401, 9.734] },
];

export default function Map() {
  return (
    <div className="card">
      <h1>World Map of Thinkers</h1>
      <p>
        Explore where each featured thinker lived and worked.
      </p>
      <ul>
        {thinkers.map(t => (
          <li key={t.name}>
            <b>{t.name}</b>: {t.place}
          </li>
        ))}
      </ul>
      <p style={{ fontStyle: "italic" }}>
        (For a real interactive map, use a tool like Leaflet or Google Maps—ask if you want help with this!)
      </p>
      <Link href="/thinkers">← Back to Thinkers</Link>
    </div>
  );
}