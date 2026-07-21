import { useState } from "react";
import { UserRound } from "lucide-react";

export default function ProfileImage() {
  const [missing, setMissing] = useState(false);

  return (
    <div className="profile-frame">
      {!missing ? (
        <img
          src="/images/profile.jpg"
          alt="Bilal, Web and Business Systems Developer"
          loading="lazy"
          onError={() => setMissing(true)}
        />
      ) : (
        <div
          className="profile-placeholder"
          aria-label="Professional headshot placeholder"
        >
          <UserRound aria-hidden="true" />
          <span>/images/profile.jpg</span>
        </div>
      )}
    </div>
  );
}
