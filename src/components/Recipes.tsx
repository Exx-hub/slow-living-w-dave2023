import React from "react";
import RecipeCard from "./RecipeCard";

function Recipes() {
  const recipes = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <h2>MY RECIPES</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
