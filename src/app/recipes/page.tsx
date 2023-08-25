import Recipes from "@/components/Recipes";
import { getAllBlogs } from "@/helpers/post-utils";

async function RecipesPage() {
  const blogs = getAllBlogs();

  // console.log(blogs);

  return (
    <article className="h-screen max-w-6xl mx-auto pt-[131px]">
      <Recipes blogs={blogs} />
    </article>
  );
}

export default RecipesPage;
