import { profile } from '../data/profile';

export default function IdentityCard() {
  return (
    <div className="identity-card" aria-label="Profile">
      <div className="card-top"><span>INTRODUCTION</span></div>
      <div className="monogram" aria-hidden="true">{profile.initials}<span>.</span></div>
      <div className="card-bottom"><div><p>{profile.name}</p><span>{profile.role}</span></div></div>
    </div>
  );
}
