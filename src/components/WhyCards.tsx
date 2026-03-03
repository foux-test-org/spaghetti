import clsx from "clsx";

interface WhyCardProps {
  emoji: string;
  title: string;
  description: string;
}

const WhyCard = ({ emoji, title, description }: WhyCardProps) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-xl p-8 shadow-md",
        "hover:shadow-lg transition-shadow duration-300",
        "border-t-4 border-amber-400"
      )}
    >
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className={clsx("text-xl font-bold text-stone-800 mb-3")}>{title}</h3>
      <p className="text-stone-600 leading-relaxed">{description}</p>
    </div>
  );
};

export function WhyCards() {
  const cards = [
    {
      emoji: "\u{1F30D}",
      title: "Global Unifier",
      description:
        "In a world divided by politics, religion, and pineapple-on-pizza discourse, spaghetti remains the one thing every culture can agree on. It transcends borders. It transcends language. It transcends the very concept of food.",
    },
    {
      emoji: "\u{1F9EC}",
      title: "Nutritional Perfection",
      description:
        "Leading nutritionists (who prefer to remain anonymous for safety reasons) have confirmed that spaghetti contains every essential nutrient required for human survival. Some even claim it contains nutrients that haven't been discovered yet.",
    },
    {
      emoji: "\u{1F4A1}",
      title: "Intellectual Catalyst",
      description:
        "Every major breakthrough in human history — from the wheel to the internet — was conceived immediately after a meal of spaghetti. Coincidence? The International Spaghetti Council thinks not.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-amber-50">
      <h2 className="text-4xl font-bold text-center text-stone-800 mb-4">
        Why Spaghetti Matters
      </h2>
      <p className="text-center text-stone-500 mb-12 max-w-2xl mx-auto">
        The evidence is overwhelming. The science is settled. Spaghetti is not
        just food — it is the foundation upon which human civilization rests.
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <WhyCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}
