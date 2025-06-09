import Link from "next/link";

const events = [
  {
    year: "5th Century BC",
    title: "Herodotus' Histories",
    desc: "Herodotus chronicles the causes of the Greco-Persian Wars, blending narrative with political analysis.",
    slug: "herodotus"
  },
  {
    year: "4th Century BC",
    title: "Aristotle’s Politics",
    desc: "Aristotle studies over 150 constitutions, using history to inform political wisdom.",
    slug: "aristotle"
  },
  {
    year: "1513",
    title: "Machiavelli’s The Prince",
    desc: "Machiavelli fuses history and statecraft, forever changing political thought.",
    slug: "niccolo-machiavelli"
  },
  {
    year: "2015",
    title: "Mary Beard’s SPQR",
    desc: "Mary Beard connects ancient Roman history to present-day politics.",
    slug: "mary-beard"
  },
  {
    year: "1951",
    title: "Arendt’s The Origins of Totalitarianism",
    desc: "Hannah Arendt analyzes how 20th-century politics is shaped by historical forces.",
    slug: "hannah-arendt"
  },
  {
    year: "2025",
    title: "Treaty of Door and Window",
    desc: "A symbolic recognition of the indivisibility of history and politics.",
    slug: null
  }
];

export default function Timeline() {
  return (
    <div className="card">
      <h1>Timeline: History Meets Politics</h1>
      {events.map(e => (
        <div className="timeline-item" key={e.year + e.title}>
          <h3>
            {e.year}: {e.title}
            {e.slug && (
              <span> — <Link href={`/profile/${e.slug}`}>Learn more</Link></span>
            )}
          </h3>
          <p>{e.desc}</p>
        </div>
      ))}
      <Link href="/thinkers">← Back to Thinkers</Link>
    </div>
  );
}