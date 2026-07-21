import { createSectionClickHandler } from "../utils/scrollToSection";

const links = ["Home", "About", "Services", "Work", "Process", "Contact"];

export default function Footer() {
  return (
    <footer>
      <div>
        <a
          className="wordmark"
          href="#home"
          onClick={createSectionClickHandler("home")}
        >
          BI<span>LAL</span>
        </a>
        <p>Web & Business Systems Developer</p>
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
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Bilal. All rights reserved.</span>
        <span>DESIGNED FOR CLARITY — BUILT FOR USE</span>
      </div>
    </footer>
  );
}
