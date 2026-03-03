import { recipes } from "../data/recipes";
import Recipecard from "../components/recipecard";
import { Button } from "../components/ui/legacy/Button";

// This page uses the legacy Button component — the only page that does

export default function Recipes() {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-black text-center text-stone-800 mb-4">
          Sacred Recipes
        </h1>
        <p className="text-center text-stone-500 max-w-2xl mx-auto mb-4">
          These recipes have been passed down through generations of spaghetti
          scholars. Follow them precisely. Your reputation depends on it.
        </p>
        <div className="text-center mb-12">
          <Button variant="ghost" size="sm" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
            Jump to last recipe
          </Button>
        </div>

        <div className="space-y-6">
          {recipes.map((recipe) => (
            <Recipecard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}
