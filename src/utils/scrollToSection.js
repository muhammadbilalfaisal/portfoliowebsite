const FALLBACK_NAV_HEIGHT = 78;
export const SECTION_SPACING = 26;

export function getNavbarHeight(navElement) {
  return navElement?.getBoundingClientRect().height || FALLBACK_NAV_HEIGHT;
}

export function scrollToSection(sectionId, navElement, options = {}) {
  const target = document.getElementById(sectionId);
  if (!target) return false;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const navbarHeight = getNavbarHeight(
    navElement ?? document.querySelector(".nav"),
  );
  const top =
    sectionId === "home"
      ? 0
      : Math.max(
          0,
          target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight -
            SECTION_SPACING,
        );

  window.scrollTo({ top, behavior: reducedMotion ? "auto" : "smooth" });
  if (
    options.updateHistory !== false &&
    window.location.hash !== `#${sectionId}`
  ) {
    window.history.pushState(null, "", `#${sectionId}`);
  }
  return true;
}

export function createSectionClickHandler(sectionId, navElement) {
  return (event) => {
    event.preventDefault();
    scrollToSection(sectionId, navElement);
  };
}
