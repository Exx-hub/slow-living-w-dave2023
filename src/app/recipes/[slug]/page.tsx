import { convertDate } from "@/helpers/convertDate";
import { createBlogData, getFiles } from "@/helpers/post-utils";
import { Blog, FixMeLater } from "@/interfaces";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PiCookingPotBold } from "react-icons/pi";
import { RiTimeLine } from "react-icons/ri";

interface IContext {
  params: {
    slug: string;
  };
}

interface IParams {
  slug: string;
}

export async function generateStaticParams() {
  const allBlogFiles = getFiles();

  // map through allBlogFiles array and remove .md extenstion of each file and pass as slug in params object
  // return array of slugs
  const paths = allBlogFiles.map((file) => {
    const slug = file.replace(/\.md$/, "");

    return {
      slug,
    };
  });

  // return paths array
  // paths: [
  //   { slug: 'aeropress-coffee' },
  //   { slug: 'aeropress-coffee1' },
  //   { slug: 'tuna-salpicao' }
  // ]

  return paths;
}

// { params: { slug: 'aeropress-coffee' } } --- calls this function for each path, passes slug in params object
const getBlog = async (params: IParams) => {
  const slug = params?.slug;
  const blog = createBlogData(slug);

  return blog as Blog;
};

async function RecipeDetail(context: IContext) {
  const post = await getBlog(context.params);

  const { title, date, image, slug, content, cooked, contentImage } = post;

  const imagePath = `/blogImages/${slug}/${contentImage}`;
  const readableDate = convertDate(date);

  const customRenderers = {
    img(imageObj: FixMeLater) {
      return (
        <Image
          src={`/blogImages/${slug}/${imageObj.src}`}
          alt={imageObj.alt}
          width={450}
          height={350}
          className="mx-auto mb-10"
        />
      );
    },
  };

  return (
    <article className="h-screen max-w-4xl mx-auto pt-[131px] mb-8 recipeDetail">
      <section className="text-center mb-4 p-2">
        <h1 className="text-5xl text-[#2d8d5c] font-semibold mb-2">{title}</h1>
        <p className="text-gray-500 italic text-sm">{readableDate}</p>
      </section>

      <section className="mb-10">
        <Image src={imagePath} alt="" width={450} height={350} className="mx-auto shadow-lg" />
        <div className="flex items-center justify-center mt-2 text-base space-x-3">
          <div className="flex items-center space-x-1">
            <RiTimeLine />
            <h5>
              <span className="font-bold">Prep:</span> 15 minutes
            </h5>
          </div>

          {cooked && (
            <div className="flex items-center space-x-1">
              <PiCookingPotBold />
              <h5>
                <span className="font-bold">Cook:</span> 1 hour
              </h5>
            </div>
          )}
        </div>
      </section>

      <section className="pt-2 px-8 pb-20 text-justify text-[#525252] font-medium text-2xl">
        <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
      </section>
    </article>
  );
}

export default RecipeDetail;
