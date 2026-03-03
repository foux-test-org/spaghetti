import type { SpaghettiType } from "../data/spaghetti-types";

interface CompareModalProps {
  typeA: SpaghettiType;
  typeB: SpaghettiType;
  onClose: () => void;
}

// Inline styles + Tailwind mixed together
export const CompareModal = ({ typeA, typeB, onClose }: CompareModalProps) => {
  const metrics = [
    { label: "Structural Integrity", key: "structuralIntegrity" as const },
    { label: "Sauce Adhesion Coefficient", key: "sauceAdhesion" as const },
    { label: "Spiritual Resonance", key: "spiritualResonance" as const },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full mx-4"
        style={{ padding: "32px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-stone-800">
            Spaghetti Comparison Analysis
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "#78716c",
            }}
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div
              className="rounded-lg p-4"
              style={{ backgroundColor: typeA.borderColor + "20" }}
            >
              <h3 className="font-bold text-lg">{typeA.name}</h3>
              <p style={{ fontStyle: "italic", color: "#78716c", fontSize: "0.85rem" }}>
                {typeA.scientificName}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span
              className="text-3xl font-black"
              style={{ color: "#f59e0b" }}
            >
              VS
            </span>
          </div>
          <div className="text-center">
            <div
              className="rounded-lg p-4"
              style={{ backgroundColor: typeB.borderColor + "20" }}
            >
              <h3 className="font-bold text-lg">{typeB.name}</h3>
              <p style={{ fontStyle: "italic", color: "#78716c", fontSize: "0.85rem" }}>
                {typeB.scientificName}
              </p>
            </div>
          </div>
        </div>

        {metrics.map((metric) => (
          <div key={metric.key} style={{ marginBottom: "20px" }}>
            <p className="text-sm font-semibold text-stone-500 mb-2 uppercase tracking-wider">
              {metric.label}
            </p>
            <div className="grid grid-cols-3 gap-4 items-center">
              <div>
                <div className="bg-stone-100 rounded-full h-4 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${typeA[metric.key]}%`,
                      backgroundColor: typeA.borderColor,
                    }}
                  />
                </div>
                <span className="text-sm text-stone-600 mt-1 block text-center">
                  {typeA[metric.key]}%
                </span>
              </div>
              <div className="text-center text-stone-400 text-sm">vs</div>
              <div>
                <div className="bg-stone-100 rounded-full h-4 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${typeB[metric.key]}%`,
                      backgroundColor: typeB.borderColor,
                    }}
                  />
                </div>
                <span className="text-sm text-stone-600 mt-1 block text-center">
                  {typeB[metric.key]}%
                </span>
              </div>
            </div>
          </div>
        ))}

        <div
          className="text-center mt-6 pt-6"
          style={{ borderTop: "1px solid #e7e5e4" }}
        >
          <p style={{ color: "#a8a29e", fontSize: "0.8rem", fontStyle: "italic" }}>
            Metrics provided by the International Spaghetti Research Institute.
            Results may vary based on sauce conditions and fork technique.
          </p>
        </div>
      </div>
    </div>
  );
};
