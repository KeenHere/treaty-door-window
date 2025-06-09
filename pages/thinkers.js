import Link from 'next/link';

const thinkers = [
  {
    slug: "aristotle",
    name: "Aristotle",
    role: "Philosopher & Political Theorist",
    summary: "Pioneered the study of politics as a science and history as a tool for understanding statecraft.",
    image: "/oilpastel_aristotle.png"
  },
  {
    slug: "herodotus",
    name: "Herodotus",
    role: "Historian",
    summary: "Known as the 'Father of History', he chronicled events with an eye for their political and cultural causes.",
    image: "/oilpastel_herodotus.png"
  },
  {
    slug: "niccolo-machiavelli",
    name: "Niccolò Machiavelli",
    role: "Political Theorist",
    summary: "Blended historical precedent and political strategy in his influential works.",
    image: "/oilpastel_machiavelli.png"
  },
  {
    slug: "mary-beard",
    name: "Mary Beard",
    role: "Historian",
    summary: "Modern chronicler connecting Roman history with contemporary politics.",
    image: "/oilpastel_marybeard.png"
  },
  {
    slug: "hannah-arendt",
    name: "Hannah Arendt",
    role: "Political Theorist",
    summary: "Explored the nature of power, authority, and historical memory.",
    image: "/oilpastel_arendt.png"
  },
];

export default function Thinkers() {
  return (
    <div className="card">
      <h1>Featured Thinkers</h1>
      <p>
        Click on a thinker to explore their profile and see how their ideas bridge history and politics.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {thinkers.map(t => (
          <Link key={t.slug} href={`/profile/${t.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ width: 200, textAlign: "center", cursor: "pointer" }}>
              <img src={t.image} className="thinker-img" alt={t.name} style={{ width: "120px", borderRadius: "50%" }} />
              <h3>{t.name}</h3>
              <p><em>{t.role}</em></p>
              <p>{t.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}