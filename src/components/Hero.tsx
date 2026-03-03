import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500">
      <h1
        className="text-8xl md:text-9xl font-black text-white tracking-wider"
        style={{
          textShadow: "4px 4px 0px #92400e, 8px 8px 0px rgba(0,0,0,0.2)",
        }}
      >
        SPAGHETTI
      </h1>
      <p className="text-2xl md:text-3xl text-amber-900 mt-6 font-light tracking-wide">
        The Foundation of Civilization
      </p>
      <button
        onClick={() => navigate("/history")}
        className="mt-12 px-8 py-4 bg-amber-900 text-amber-50 text-xl rounded-full hover:bg-amber-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
      >
        Begin Your Journey
      </button>
      <div className="absolute bottom-8 text-amber-800 text-sm animate-bounce">
        &#8595; Scroll to discover the truth &#8595;
      </div>
    </div>
  );
}
