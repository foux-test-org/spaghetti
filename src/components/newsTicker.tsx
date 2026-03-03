// camelCase filename, inline styles — this is intentional chaos
import { useState } from "react"; // unused import

const HEADLINES = [
  "BREAKING: Scientists Confirm Spaghetti Existed Before the Big Bang",
  "Local Man Achieves Enlightenment Through Perfect Al Dente",
  "URGENT: World Spaghetti Reserves at All-Time High, Experts Cautiously Optimistic",
  "Study Finds Spaghetti Consumption Directly Linked to Happiness",
  "The International Spaghetti Council Announces Emergency Session",
  "DEVELOPING: New Pasta Species Discovered in Remote Italian Cave",
  "Opinion: If You Break Spaghetti Before Cooking, You're a Monster",
  "Breaking: Local Restaurant Achieves Perfect Twirl-to-Bite Ratio",
];

const newsTicker = () => {
  const ticker_text = HEADLINES.join("  \u{1F35D}  ");

  return (
    <div
      style={{
        backgroundColor: "#1c1917",
        color: "#fbbf24",
        padding: "12px 0",
        overflow: "hidden",
        whiteSpace: "nowrap" as const,
        position: "relative" as const,
        fontFamily: "'Georgia', serif",
      }}
    >
      <div
        style={{
          display: "inline-block",
          animation: "ticker-scroll 30s linear infinite",
          paddingLeft: "100%",
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: "bold", letterSpacing: "1px" }}>
          {ticker_text}
        </span>
      </div>
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default newsTicker;
