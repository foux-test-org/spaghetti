import type { SpaghettiFactData } from "../data/facts";
import { copyToClipboard } from "../utils";
import { useState } from "react";

interface FactCardProps {
  fact: SpaghettiFactData;
}

export const FactCard = ({ fact }: FactCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const success = await copyToClipboard(fact.fact);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
      style={{ backgroundColor: fact.bg_color }}
    >
      <p className="text-stone-700 leading-relaxed mb-4 text-sm">
        {fact.fact}
      </p>

      <div className="mb-3">
        <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
          Believability Score
        </p>
        <div className="bg-white bg-opacity-50 rounded-full h-3 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${fact.believability}%`,
              backgroundColor:
                fact.believability > 70
                  ? "#22c55e"
                  : fact.believability > 40
                  ? "#f59e0b"
                  : "#ef4444",
            }}
          />
        </div>
        <p className="text-xs text-stone-500 mt-1">{fact.believability}%</p>
      </div>

      <button
        onClick={handleShare}
        className="text-xs px-3 py-1.5 bg-white bg-opacity-70 rounded-md hover:bg-opacity-100 transition-all text-stone-600 font-medium"
      >
        {copied ? "Copied!" : "Share this fact"}
      </button>
    </div>
  );
};
