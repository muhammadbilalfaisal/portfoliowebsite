import { ArrowUpRight } from "lucide-react";
import { contact } from "../data/contact";

const methods = [
  ["Email", contact.email],
  ["GitHub", contact.github],
  ["LinkedIn", contact.linkedin],
  ["WhatsApp", contact.whatsapp],
];

export default function ContactLinks() {
  const availableMethods = methods.filter(([, url]) => Boolean(url));
  if (!availableMethods.length) return null;

  return (
    <nav className="contact-links" aria-label="Contact links">
      {availableMethods.map(([label, url]) => (
        <a key={label} href={url} target="_blank" rel="noopener noreferrer">
          {label}
          <ArrowUpRight size={15} />
        </a>
      ))}
    </nav>
  );
}
