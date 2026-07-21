import Reveal from "./Reveal";
const steps = [
  ["Discovery", "Understand the business, users, and workflow."],
  ["Planning", "Define architecture, scope, and implementation strategy."],
  ["Development", "Build responsive, maintainable, and scalable solutions."],
  ["Delivery", "Deploy, optimize, and provide ongoing support when required."],
];
export default function Process() {
  return (
    <section id="process" className="section process">
      <Reveal>
        <div className="section-kicker">
          <span>04</span> Process / Method
        </div>
        <h2>HOW I WORK</h2>
      </Reveal>
      <div className="process-grid">
        <div className="process-intro">
          A clear, practical path from problem to working system.
        </div>
        <div className="process-steps">
          {steps.map((s, i) => (
            <Reveal key={s[0]} delay={i * 0.05}>
              <article>
                <div className="step-marker">
                  <span>0{i + 1}</span>
                </div>
                <h3>{s[0]}</h3>
                <p>{s[1]}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
