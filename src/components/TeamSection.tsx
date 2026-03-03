import { team_members } from "../data/team";

// Exports 3 components from one file: TeamSection, TeamMember, TeamAvatar
// Mix of Tailwind, inline styles, and a global CSS class

interface TeamMemberData {
  name: string;
  title: string;
  color: string;
  bio: string;
}

export const TeamAvatar = ({ color, name }: { color: string; name: string }) => {
  return (
    <div
      style={{
        width: 80,
        height: 80,
        borderRadius: "50%",
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        color: "white",
        fontWeight: "bold",
        flexShrink: 0,
      }}
    >
      {name.charAt(0)}
    </div>
  );
};

export const TeamMember = ({ member }: { member: TeamMemberData }) => {
  return (
    <div
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow fancy-border"
      style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
    >
      <TeamAvatar color={member.color} name={member.name} />
      <div>
        <h3 className="text-lg font-bold text-stone-800">{member.name}</h3>
        <p
          className="text-amber-600 font-semibold text-sm mb-2"
          style={{ textTransform: "uppercase", letterSpacing: "0.5px" }}
        >
          {member.title}
        </p>
        <p className="text-stone-600 text-sm leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
};

export function TeamSection() {
  return (
    <section style={{ padding: "48px 24px" }}>
      <h2 className="text-3xl font-bold text-center text-stone-800 mb-4">
        The Team
      </h2>
      <p className="text-center text-stone-500 mb-12 max-w-xl mx-auto">
        Meet the brilliant minds behind the world's foremost spaghetti
        awareness organization.
      </p>
      <div className="max-w-3xl mx-auto space-y-6">
        {team_members.map((member, i) => (
          <TeamMember key={i} member={member} />
        ))}
      </div>
    </section>
  );
}
