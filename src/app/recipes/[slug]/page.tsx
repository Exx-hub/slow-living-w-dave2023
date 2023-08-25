import { createBlogData, getFiles } from "@/helpers/post-utils";
import { Blog, FixMeLater } from "@/interfaces";

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

  console.log(post);
  return <div>{post.slug}</div>;
}

export default RecipeDetail;
