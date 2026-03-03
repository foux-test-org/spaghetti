// camelCase filename
import { facts } from "../data/facts";
import { FactCard } from "../components/FactCard";
import { Quiz } from "../components/Quiz";
import Counter from "../components/Counter";

const funFacts = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-black text-center text-stone-800 mb-4">
          Fun Facts & More
        </h1>
        <p className="text-center text-stone-500 max-w-2xl mx-auto mb-12">
          Expand your spaghetti knowledge with these carefully curated facts.
          Some are real. Some are not. All are important.
        </p>

        {/* fact cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {facts.map((fact) => (
            <FactCard key={fact.id} fact={fact} />
          ))}
        </div>

        {/* quiz section */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-stone-800 mb-8">
            Spaghetti or Not?
          </h2>
          <p className="text-center text-stone-500 mb-8">
            Test your ability to distinguish spaghetti fact from spaghetti
            fiction. Your score will be recorded for posterity.
          </p>
          <Quiz />
        </div>

        {/* counter */}
        <div className="max-w-md mx-auto">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default funFacts;
