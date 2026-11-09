import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import {
  getNavbarHeight,
  SECTION_SPACING,
  scrollToSection,
} from "../utils/scrollToSection";

const links = ["Home", "About", "Services", "Work", "Process", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [pendingSection, setPendingSection] = useState(null);
  const [navbarHeight, setNavbarHeight] = useState(110);
  const navbarRef = useRef(null);
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);
  const initialHashAligned = useRef(false);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.25,
  });

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return undefined;
    const updateHeight = () => {
      const height = getNavbarHeight(navbar);
      setNavbarHeight((current) => (current === height ? current : height));
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
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      {
        rootMargin: `-${navbarHeight + SECTION_SPACING}px 0px -58% 0px`,
        threshold: [0.08, 0.25, 0.5],
      },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navbarHeight]);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => menuRef.current?.querySelector("a")?.focus());
    const close = () => setOpen(false);
    const handleKeyDown = (event) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const navigate = (event, sectionId) => {
    event.preventDefault();
    scrollToSection(sectionId, navbarRef.current);
  };
  const navigateMobile = (event, sectionId) => {
    event.preventDefault();
    setPendingSection(sectionId);
    setOpen(false);
  };
  const finishMobileNavigation = () => {
    if (!pendingSection) return;
    scrollToSection(pendingSection, navbarRef.current);
    setPendingSection(null);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  return (
    <header className="nav editorial-nav" ref={navbarRef}>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: reducedMotion ? scrollYProgress : smoothProgress }}
        aria-hidden="true"
      />
      <div className="header-primary">
        <div className="header-role">
          <span>Creative Developer</span>
          <small>Portfolio / 2026</small>
        </div>
        <div className="header-status">
          <span>Pakistan</span>
          <a href="#contact" onClick={(event) => navigate(event, "contact")}>
            Building ventures · Open to strategic collaborations
          </a>
        </div>
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
      </div>

      <nav
        className="desktop-nav editorial-nav-links"
        aria-label="Main navigation"
      >
        {links.map((link) => {
          const id = link.toLowerCase();
          return (
            <a
              key={link}
              href={`#${id}`}
              className={activeSection === id ? "active" : undefined}
              aria-current={activeSection === id ? "page" : undefined}
              onClick={(event) => navigate(event, id)}
            >
              {link}
            </a>
          );
        })}
        <a
          className="nav-cta"
          href="#contact"
          onClick={(event) => navigate(event, "contact")}
        >
          Get in touch <ArrowUpRight size={14} />
        </a>
      </nav>

      <AnimatePresence onExitComplete={finishMobileNavigation}>
        {open && (
          <motion.nav
            id="mobile-navigation"
            ref={menuRef}
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={reducedMotion ? { opacity: 0 } : { y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: "-100%" }}
            transition={{ duration: reducedMotion ? 0 : 0.42 }}
          >
            {links.map((link, index) => {
              const id = link.toLowerCase();
              return (
                <a
                  key={link}
                  href={`#${id}`}
                  className={activeSection === id ? "active" : undefined}
                  onClick={(event) => navigateMobile(event, id)}
                >
                  <span>0{index + 1}</span>
                  {link}
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
