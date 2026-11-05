import MouseParallax from "./MouseParallax";
import ScrollParallax from "./ScrollParallax";

export default function InteractivePaperBackground() {
  return (
    <div className="paper-background" aria-hidden="true">
      <div className="paper-grain" />
      <div className="paper-fibers" />
      <MouseParallax
        intensity={2}
        spring={{ stiffness: 72, damping: 24, mass: 0.9 }}
        className="paper-shape shape-a"
      >
        <span />
      </MouseParallax>
      <MouseParallax
        intensity={3.5}
        invert
        spring={{ stiffness: 66, damping: 25, mass: 1 }}
        className="paper-lines layer-one"
      >
        <svg viewBox="0 0 1200 900" preserveAspectRatio="none">
          <path d="M-90 166C104 76 238 92 349 203C463 318 538 266 659 151C789 27 967 77 1290 248" />
          <path d="M-70 721C131 594 284 576 416 687C548 797 672 748 773 637C892 508 1047 529 1290 688" />
          <path d="M52 447C214 386 318 414 421 492C527 572 660 557 772 459C889 357 1034 363 1176 418" />
        </svg>
      </MouseParallax>
      <MouseParallax
        intensity={4.5}
        axis="x"
        spring={{ stiffness: 62, damping: 26, mass: 1.05 }}
        className="paper-lines layer-two"
      >
        <svg viewBox="0 0 1200 900" preserveAspectRatio="none">
          <path d="M246-110C337 73 301 193 205 311C119 416 151 526 268 632C382 736 430 854 368 1018" />
          <path d="M1008-91C882 86 910 225 1021 342C1118 445 1082 572 949 667C821 758 789 867 842 1022" />
        </svg>
      </MouseParallax>
      <MouseParallax
        intensity={2.75}
        axis="y"
        invert
        spring={{ stiffness: 58, damping: 27, mass: 1.1 }}
        className="paper-lines layer-three"
      >
        <svg viewBox="0 0 1200 900" preserveAspectRatio="none">
          <path d="M91-30C38 171 166 273 126 459C91 622 28 733 143 951" />
          <path d="M1114-24C1172 162 1052 290 1095 463C1137 632 1176 754 1047 954" />
        </svg>
      </MouseParallax>
      <ScrollParallax distance={38} className="paper-type-stack">
        <MouseParallax
          intensity={5}
          spring={{ stiffness: 60, damping: 26, mass: 1 }}
          className="paper-ghost"
        >
          BUILD
          <br />
          CREATE
          <br />
          AUTOMATE
        </MouseParallax>
      </ScrollParallax>
      <MouseParallax intensity={5} className="paper-coordinate coordinate-a">
        X 24.8607 / Y 67.0011
      </MouseParallax>
      <MouseParallax
        intensity={7}
        invert
        className="paper-coordinate coordinate-b"
      >
        + BILAL / 26
      </MouseParallax>
    </div>
  );
}
