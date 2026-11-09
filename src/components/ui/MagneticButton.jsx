export default function MagneticButton({ children, className = "" }) {
  return <span className={`magnetic-button ${className}`}>{children}</span>;
}
