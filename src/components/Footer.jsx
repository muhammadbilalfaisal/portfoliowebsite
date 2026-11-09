import { ArrowUp } from "lucide-react";
import { createSectionClickHandler } from "../utils/scrollToSection";

const links = ["About", "Services", "Work", "Process", "Contact"];

export default function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="footer-brand">
        <div>
          <strong>BilalHustle</strong>
          <p>ENTREPRENEUR · FOUNDER · TECHNOLOGIST</p>
        </div>
      </div>

      <nav aria-label="Footer navigation">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={createSectionClickHandler(link.toLowerCase())}
          >
            {link}
          </a>
        ))}
      </nav>

      <a
        href="#home"
        className="back-to-top"
        onClick={createSectionClickHandler("home")}
      >
        Back to top <ArrowUp size={14} />
      </a>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Muhammad Bilal Faisal</span>
        <span>Pakistan · PKT / UTC+5</span>
      </div>
    </footer>
  );
}
