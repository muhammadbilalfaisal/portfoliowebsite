import Reveal from "./Reveal";

const groups = [
  {
    name: "Frontend development",
    items: ["React", "JavaScript", "HTML", "CSS", "Vite", "Responsive UI"],
  },
  {
    name: "Backend & integrations",
    items: ["Node.js", "Python", "FastAPI", "Supabase", "PostgreSQL", "APIs"],
  },
  {
    name: "AI & automation",
    items: [
      "GPT",
      "Claude",
      "MCP",
      "n8n",
      "AI Workflows",
      "Process Automation",
    ],
  },
  {
    name: "Systems & infrastructure",
    items: [
      "Docker",
      "GitHub",
      "Netlify",
      "Linux",
      "Windows Server",
      "Networking",
    ],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="section editorial-capabilities">
      <Reveal>
        <div className="capabilities-heading">
          <span className="micro-label">Skills &amp; expertise / 05</span>
          <h2>
            A PRACTICAL TOOLSET FOR
            <br />
            <em>USEFUL DIGITAL SYSTEMS.</em>
          </h2>
        </div>
      </Reveal>

      <div className="capabilities-list">
        {groups.map((group, index) => (
          <Reveal key={group.name} delay={index * 0.05}>
            <article>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.name}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
