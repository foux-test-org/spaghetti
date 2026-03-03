import { timelineEvents } from "../data/timeline";

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-amber-300" />

        {timelineEvents.map((event, index) => (
          <div key={index} className="relative pl-16 pb-12 last:pb-0">
            {/* dot */}
            <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-amber-500 border-4 border-amber-100 z-10" />

            <div className="bg-white rounded-lg p-6 shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-bold mb-3">
                {event.year}
              </span>
              <h3 className="text-xl font-bold text-stone-800 mb-2">
                {event.title}
              </h3>
              <p className="text-stone-600 leading-relaxed mb-3">
                {event.description}
              </p>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-amber-600 text-sm hover:text-amber-800 underline"
              >
                [{event.citation}]
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
