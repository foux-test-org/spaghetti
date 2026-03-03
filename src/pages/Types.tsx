import { useState } from "react";
import { spaghettiTypes } from "../data/spaghetti-types";
import TypeCard from "../components/TypeCard";
import { CompareModal } from "../components/CompareModal";

export default function Types() {
  // Using useState for complex nested state that probably should use useReducer
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  const handleToggleCompare = (id: number) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      }
      if (prev.length >= 2) {
        return [prev[1], id];
      }
      return [...prev, id];
    });
  };

  const handleOpenCompare = () => {
    if (selectedIds.length === 2) {
      setShowCompare(true);
    }
  };

  const typeA = spaghettiTypes.find((t) => t.id === selectedIds[0]);
  const typeB = spaghettiTypes.find((t) => t.id === selectedIds[1]);

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-black text-center text-stone-800 mb-4">
          Spaghetti Taxonomy
        </h1>
        <p className="text-center text-stone-500 max-w-2xl mx-auto mb-12">
          A scientific classification of the world's most important pasta
          species. Handle with care — some varieties have been known to cause
          existential crises.
        </p>

        {selectedIds.length === 2 && (
          <div className="text-center mb-8">
            <button
              onClick={handleOpenCompare}
              className="px-6 py-3 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-colors shadow-md"
            >
              Compare Selected Types
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaghettiTypes.map((type) => (
            <TypeCard
              key={type.id}
              type={type}
              isSelected={selectedIds.includes(type.id)}
              onToggleCompare={handleToggleCompare}
            />
          ))}
        </div>
      </div>

      {showCompare && typeA && typeB && (
        <CompareModal
          typeA={typeA}
          typeB={typeB}
          onClose={() => setShowCompare(false)}
        />
      )}
    </div>
  );
}
