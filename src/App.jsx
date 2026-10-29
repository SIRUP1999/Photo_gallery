import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import { profiles } from "./data/profiles";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  // Derived value: calculated on every render, never stored in state
  const visibleProfiles = profiles.filter((profile) => {
    const matchesName = profile.name
      .toLowerCase()
      .includes(search.trim().toLowerCase());
    const matchesAvailability = !onlyAvailable || profile.available;
    return matchesName && matchesAvailability;
  });

  return (
    <main className="gallery">
      <h1>Profile Gallery</h1>

      <div className="controls">
        <input
          type="search"
          placeholder="Search by name..."
          aria-label="Search profiles by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label className="toggle">
          <input
            type="checkbox"
            checked={onlyAvailable}
            onChange={(e) => setOnlyAvailable(e.target.checked)}
          />
          Available only
        </label>
      </div>

      {visibleProfiles.length === 0 ? (
        <p className="empty">No profiles match your search.</p>
      ) : (
        <div className="grid">
          {visibleProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              initials={profile.initials}
              image={profile.image}
              name={profile.name}
              role={profile.role}
              bio={profile.bio}
              skills={profile.skills}
              available={profile.available}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default App;
