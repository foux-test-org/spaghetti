// lowercase filename — because why not
import Timeline from "../components/Timeline";
import { disputedFacts } from "../data/timeline";

function history() {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-black text-center text-stone-800 mb-4">
          The History of Spaghetti
        </h1>
        <p className="text-center text-stone-500 max-w-2xl mx-auto mb-12">
          A comprehensive and entirely accurate account of spaghetti's role in
          shaping human civilization. All events have been verified by the
          International Spaghetti Historical Society.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline - main content */}
          <div className="lg:col-span-2">
            <Timeline />
          </div>

          {/* Disputed Facts sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold text-stone-800 mb-6">
                Disputed Facts
              </h2>
              <p className="text-sm text-stone-500 mb-6">
                The following claims remain under active investigation by the
                Spaghetti Academic Review Board.
              </p>
              <div className="space-y-4">
                {disputedFacts.map((fact, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-amber-400"
                  >
                    <h3 className="font-bold text-stone-800 text-sm mb-2">
                      {fact.title}
                    </h3>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      {fact.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default history;
