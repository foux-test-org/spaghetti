import { useState, useEffect } from "react";
import "./recipecard.css";
import { get_difficulty_display } from "../helpers/formatters";
import type { Recipe } from "../data/recipes";

// all lowercase filename, mixes Tailwind + inline styles + CSS file
// this component is intentionally a 150+ line monster with all logic inline

export default function recipecard({ recipe }: { recipe: Recipe }) {
  // state for expand/collapse
  const [is_expanded, set_is_expanded] = useState(false);
  // state for countdown timer (only used by speed spaghetti recipe)
  const [countdown, setCountdown] = useState(300);
  const [timer_running, set_timer_running] = useState(false);
  // unused variable
  const MAX_RECIPES_PER_PAGE = 10;

  // handle the countdown timer for competitive speed spaghetti
  useEffect(() => {
    let interval: number | undefined;
    if (timer_running && countdown > 0) {
      interval = window.setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            set_timer_running(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer_running, countdown]);

  // format seconds into mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // toggle expand
  const handleClick = () => {
    set_is_expanded(!is_expanded);
  };

  // reset timer
  const resetTimer = () => {
    setCountdown(300);
    set_timer_running(false);
  };

  return (
    <div className="recipe-card-wrapper">
      {/* header area - clickable */}
      <div
        className="recipe-header p-6"
        onClick={handleClick}
        style={{ borderBottom: is_expanded ? "1px solid #e7e5e4" : "none" }}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-stone-800 mb-1">
              {recipe.title}
            </h3>
            <p className="text-stone-500 text-sm mb-2">
              Serves: {recipe.servingSize}
            </p>
            <div style={{ fontSize: "1.2rem" }}>
              {get_difficulty_display(recipe.difficulty)}
            </div>
          </div>
          <span
            className="text-2xl text-stone-400 transition-transform duration-200"
            style={{
              transform: is_expanded ? "rotate(180deg)" : "rotate(0deg)",
              display: "inline-block",
            }}
          >
            &#8964;
          </span>
        </div>
        <p
          className="text-stone-600 mt-3 leading-relaxed"
          style={{ fontSize: "0.95rem" }}
        >
          {recipe.description}
        </p>
      </div>

      {/* expandable content */}
      {is_expanded && (
        <div style={{ padding: "24px" }}>
          {/* ingredients */}
          <div className="mb-6">
            <h4
              className="font-bold text-stone-700 mb-3"
              style={{ textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1px" }}
            >
              Ingredients
            </h4>
            <ul className="space-y-1">
              {recipe.ingredients.map((ingredient, i) => (
                <li
                  key={i}
                  className="text-stone-600 text-sm"
                  style={{ paddingLeft: "16px", position: "relative" }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "#f59e0b",
                    }}
                  >
                    •
                  </span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* steps */}
          <div>
            <h4
              className="font-bold text-stone-700 mb-3"
              style={{ textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1px" }}
            >
              Instructions
            </h4>
            <ol className="recipe-steps-list">
              {recipe.steps.map((step, i) => (
                <li key={i}>
                  <span className="font-semibold text-amber-600 mr-2">
                    {i + 1}.
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* countdown timer for speed spaghetti */}
          {recipe.title === "Competitive Speed Spaghetti" && (
            <div
              className="mt-6 p-4 rounded-lg text-center"
              style={{ backgroundColor: "#fef3c7", border: "2px solid #f59e0b" }}
            >
              <p className="text-sm font-bold text-amber-800 mb-2">
                SPEED CHALLENGE TIMER
              </p>
              <p
                className="text-4xl font-mono font-bold"
                style={{ color: countdown <= 60 ? "#ef4444" : "#92400e" }}
              >
                {formatTime(countdown)}
              </p>
              <div className="mt-3 space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    set_timer_running(!timer_running);
                  }}
                  className="px-4 py-2 bg-amber-600 text-white rounded font-bold text-sm hover:bg-amber-700"
                >
                  {timer_running ? "PAUSE" : "START"}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    resetTimer();
                  }}
                  className="px-4 py-2 bg-stone-300 text-stone-700 rounded font-bold text-sm hover:bg-stone-400"
                >
                  RESET
                </button>
              </div>
              <p className="text-xs text-amber-700 mt-2">
                World record: 4:37 (unverified)
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
