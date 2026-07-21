import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import {
  getNavbarHeight,
  SECTION_SPACING,
  scrollToSection,
} from "../utils/scrollToSection";

const links = ["Home", "About", "Services", "Work", "Process", "Contact"];
const desktopQuery = "(min-width: 761px)";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [pendingSection, setPendingSection] = useState(null);
  const [navbarHeight, setNavbarHeight] = useState(78);
  const navbarRef = useRef(null);
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);
  const initialHashAligned = useRef(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return undefined;
    const updateHeight = () => {
      const height = getNavbarHeight(navbar);
      setNavbarHeight(height);
      document.documentElement.style.setProperty("--nav-height", `${height}px`);
      const sectionId = window.location.hash.slice(1);
      if (sectionId && !initialHashAligned.current) {
        initialHashAligned.current = true;
        requestAnimationFrame(() =>
          scrollToSection(sectionId, navbar, { updateHistory: false }),
        );
      }
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(navbar);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.toLowerCase()))
      .filter(Boolean);
    const visibleSections = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            visibleSections.set(entry.target.id, entry.target);
          else visibleSections.delete(entry.target.id);
        });
        const marker = navbarHeight + SECTION_SPACING;
        const [closest] = [...visibleSections.values()].sort(
          (a, b) =>
            Math.abs(a.getBoundingClientRect().top - marker) -
            Math.abs(b.getBoundingClientRect().top - marker),
        );
        if (closest) setActiveSection(closest.id);
      },
      {
        rootMargin: `-${navbarHeight + SECTION_SPACING}px 0px -62% 0px`,
        threshold: [0, 0.05, 0.2, 0.5],
      },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navbarHeight]);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    const desktopMedia = window.matchMedia(desktopQuery);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => menuRef.current?.querySelector("a")?.focus());

    const closeAndRestoreFocus = () => {
      setOpen(false);
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    };
    const handleDesktop = (event) => {
      if (event.matches) closeAndRestoreFocus();
    };
    const handlePointerDown = (event) => {
      if (
        !menuRef.current?.contains(event.target) &&
        !menuButtonRef.current?.contains(event.target)
      )
        closeAndRestoreFocus();
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeAndRestoreFocus();
      if (event.key !== "Tab") return;
      const focusable = [
        ...menuRef.current.querySelectorAll("a[href], button:not([disabled])"),
      ];
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    desktopMedia.addEventListener("change", handleDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      desktopMedia.removeEventListener("change", handleDesktop);
    };
  }, [open]);

  const handleDesktopNavigation = (event, sectionId) => {
    event.preventDefault();
    scrollToSection(sectionId, navbarRef.current);
  };
  const handleMobileNavigation = (event, sectionId) => {
    event.preventDefault();
    setPendingSection(sectionId);
    setOpen(false);
  };
  const handleMenuExit = () => {
    if (!pendingSection) return;
    scrollToSection(pendingSection, navbarRef.current);
    setPendingSection(null);
  };

  return (
    <header className="nav" ref={navbarRef}>
      <a
        className="wordmark"
        href="#home"
        aria-label="Bilal, home"
        onClick={(event) => handleDesktopNavigation(event, "home")}
      >
        BI<span>LAL</span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => {
          const id = link.toLowerCase();
          return (
            <a
              key={link}
              href={`#${id}`}
              className={activeSection === id ? "active" : undefined}
              aria-current={activeSection === id ? "page" : undefined}
              onClick={(event) => handleDesktopNavigation(event, id)}
            >
              {link}
            </a>
          );
        })}
        <a
          className="nav-cta"
          href="#contact"
          onClick={(event) => handleDesktopNavigation(event, "contact")}
        >
          Let&apos;s Talk <ArrowUpRight size={15} />
        </a>
      </nav>
      <button
        ref={menuButtonRef}
        className="menu-button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        {open ? <X /> : <Menu />}
      </button>
      <AnimatePresence onExitComplete={handleMenuExit}>
        {open && (
          <motion.nav
            id="mobile-navigation"
            ref={menuRef}
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={
              reducedMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }
            }
            animate={
              reducedMotion ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }
            }
            exit={
              reducedMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }
            }
            transition={{
              duration: reducedMotion ? 0 : 0.45,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {links.map((link, index) => {
              const id = link.toLowerCase();
              return (
                <motion.a
                  key={link}
                  href={`#${id}`}
                  className={activeSection === id ? "active" : undefined}
                  aria-current={activeSection === id ? "page" : undefined}
                  onClick={(event) => handleMobileNavigation(event, id)}
                  initial={reducedMotion ? false : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: reducedMotion ? 0 : 0.12 + index * 0.04,
                  }}
                >
                  <span>0{index + 1}</span>
                  {link}
                </motion.a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
