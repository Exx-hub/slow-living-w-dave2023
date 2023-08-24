import React from "react";
import RecipeCard from "./RecipeCard";
import { Blog } from "@/interfaces";

function Recipes({ blogs }: { blogs: Blog[] }) {
  return (
    <div>
      <h2>MY RECIPES</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
        {blogs.map((blog) => (
          <RecipeCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
