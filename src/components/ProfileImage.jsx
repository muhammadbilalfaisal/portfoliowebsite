import { useState } from "react";
import { UserRound } from "lucide-react";

export default function ProfileImage() {
  const [missing, setMissing] = useState(false);

  return (
    <div className="profile-frame">
      {!missing ? (
        <img
          src="/images/profile-optimized.jpg"
          alt="Bilal, Web and Business Systems Developer"
          width="1254"
          height="1254"
          loading="lazy"
          onError={() => setMissing(true)}
        />
      ) : (
        <div
          className="profile-placeholder"
          aria-label="Professional headshot placeholder"
        >
          <UserRound aria-hidden="true" />
          <span>/images/profile-optimized.jpg</span>
        </div>
      )}
    </div>
  );
}
