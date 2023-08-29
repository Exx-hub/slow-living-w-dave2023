import Recipes from "@/components/Recipes";
import { getAllBlogs } from "@/helpers/post-utils";

async function RecipesPage() {
  const blogs = getAllBlogs();

  return (
    <article className="h-screen max-w-5xl mx-auto pt-[80px] md:pt-[131px]">
      <Recipes blogs={blogs} />
    </article>
  );
}

export default RecipesPage;
