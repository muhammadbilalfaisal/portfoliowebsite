import Reveal from "./Reveal";

const groups = {
  "AI & Automation": [
    "GPT",
    "Claude",
    "MCP",
    "n8n",
    "FastAPI",
    "AI Automation",
  ],
  Frontend: ["React", "JavaScript", "CSS", "HTML", "Vite", "Responsive UI"],
  Backend: ["Node.js", "Python", "Supabase", "PostgreSQL"],
  Infrastructure: ["Docker", "GitHub", "Netlify", "Linux", "Windows Server"],
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="section skills">
      <Reveal>
        <div className="section-kicker">
          <span>05</span> Technical / Capabilities
        </div>
        <h2>
          TOOLS FOR
          <br />
          <em>USEFUL OUTCOMES.</em>
        </h2>
      </Reveal>
      <div className="skill-groups">
        {Object.entries(groups).map(([name, items], index) => (
          <Reveal key={name} delay={index * 0.05}>
            <div className="skill-group">
              <span className="skill-no">0{index + 1}</span>
              <h3>{name}</h3>
              <div>
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
