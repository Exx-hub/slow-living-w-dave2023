import GridBG from "@/components/GridBG";
import RecipesBtn from "@/components/RecipesBtn";
import Title from "@/components/Title";

export default function Home() {
  return (
    <article className="relative h-[300vh] px-5 bg-white">
      <Title />
      <GridBG />
      <RecipesBtn />
    </article>
  );
}
