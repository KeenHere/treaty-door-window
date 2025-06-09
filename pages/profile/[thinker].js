import { useRouter } from 'next/router';
import Link from 'next/link';

const thinkers = {
  aristotle: {
    name: "Aristotle",
    image: "/oilpastel_aristotle.png",
    bio: `
Aristotle (384–322 BC) was a Greek philosopher whose influence spans philosophy, politics, science, and history. As a student of Plato and tutor to Alexander the Great, Aristotle systematized knowledge, laying the foundations for Western political theory and historiography.

**Major Works:** "Politics", "Nicomachean Ethics", "Constitution of the Athenians"
    `,
    highlight: `
Aristotle called man a "political animal," emphasizing that understanding the past is vital for wise governance. In "Politics," he analyzed over 150 constitutions, using history to inform ideals of statecraft. His method—rooting political theory in historical reality—remains foundational today.
    `,
    quote: `"Man is by nature a political animal."`
  },
  herodotus: {
    name: "Herodotus",
    image: "/oilpastel_herodotus.png",
    bio: `
Herodotus (c. 484–c. 425 BC), the "Father of History," wrote "Histories," the earliest surviving major prose work in Western literature. He investigated the causes of the Greco-Persian Wars, delving into the customs, politics, and stories of many peoples.

**Major Works:** "Histories"
    `,
    highlight: `
Herodotus pioneered the idea that history is not mere chronicle, but an inquiry into causes—often political. His work bridges storytelling, ethnography, and political analysis, showing how the fate of nations is shaped by both leaders and the broader tides of history.
    `,
    quote: `"Very few things happen at the right time, and the rest do not happen at all. The conscientious historian will correct these defects."`
  },
  "niccolo-machiavelli": {
    name: "Niccolò Machiavelli",
    image: "/oilpastel_machiavelli.png",
    bio: `
Machiavelli (1469–1527) was an Italian diplomat, philosopher, and historian. His works, especially "The Prince," scrutinized the exercise of power, advocating for realism and historical awareness in politics.

**Major Works:** "The Prince", "Discourses on Livy"
    `,
    highlight: `
Machiavelli believed that political wisdom comes from studying history—learning from the actions of great leaders and the rise and fall of states. His pragmatic approach forever changed political theory.
    `,
    quote: `"Whoever wishes to foresee the future must consult the past."`
  },
  "mary-beard": {
    name: "Mary Beard",
    image: "/oilpastel_marybeard.png",
    bio: `
Mary Beard (b. 1955) is a British historian and public intellectual, renowned for making classical history accessible and relevant. Her work draws parallels between ancient Rome and modern political life.

**Major Works:** "SPQR", "Women & Power"
    `,
    highlight: `
Beard’s scholarship shows how ancient history can illuminate current debates in politics, gender, and power—reminding us that all history is, in a sense, contemporary.
    `,
    quote: `"History is not what you thought. It is what you remember. All history is contemporary history."`
  },
  "hannah-arendt": {
    name: "Hannah Arendt",
    image: "/oilpastel_arendt.png",
    bio: `
Hannah Arendt (1906–1975) was a German-American political theorist who explored the nature of power, authority, and totalitarianism. Her works trace the intersections of political action and historical fate.

**Major Works:** "The Origins of Totalitarianism", "The Human Condition"
    `,
    highlight: `
Arendt’s analysis of the 20th century reveals how political choices and historical circumstances intertwine—her thought is a guide to understanding our own era.
    `,
    quote: `"The most radical revolutionary will become a conservative the day after the revolution."`
  },
};

export default function ThinkerProfile() {
  const router = useRouter();
  const { thinker } = router.query;
  const profile = thinkers[thinker];

  if (!profile) return <div className="card">Thinker not found.</div>;

  return (
    <div className="card">
      <h1>{profile.name}</h1>
      <img src={profile.image} className="thinker-img" style={{ width: 120 }} alt={profile.name} />
      <blockquote className="quote">{profile.quote}</blockquote>
      <h3>Biography</h3>
      <p style={{ whiteSpace: "pre-line" }}>{profile.bio}</p>
      <h3>Significance</h3>
      <p style={{ whiteSpace: "pre-line" }}>{profile.highlight}</p>
      <Link href="/thinkers">← Back to Thinkers</Link>
    </div>
  );
}