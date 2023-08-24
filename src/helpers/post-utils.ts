// @ts-nocheck

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Blog } from "@/interfaces";

const blogDirectory = path.join(process.cwd(), "src/content");

export function getFiles() {
  return fs.readdirSync(blogDirectory); // reads all files in blog-content directory
  //   returns an array of file titles in content directory
  // output: [ 'started-my-own-website.md' ]
}

// pass a slug "started-my-own-website" or a filename "started-my-own-website.md"
export function createBlogData(file) {
  // whatever is passed either a slug or a filename with md --- do the replace method.
  // makes sure to create a plain slug without md extension.
  // even if alvin.md or alvin is passed, removes md.
  // because we also use this function from getStaticPAths which only return a slug
  // also use for files from readdirSync which returns filenames
  const blogSlug = file.replace(/\.md$/, ""); // removes .md extension

  // explicitly add the md extenstion to the newly created slug and saved as filepath
  const filepath = path.join(blogDirectory, `${blogSlug}.md`); // creates filepath for file to read
  const fileContent = fs.readFileSync(filepath, "utf-8"); // read specific file

  const { data, content } = matter(fileContent); // parse file using gray matter
  // - data is the meta data content is the content

  // return object from read file with data , content and slug
  // create new object with the content, the metadata and a slug to be used for dynamic routing
  const blogData = {
    ...data,
    slug: blogSlug,
    content,
  };

  return blogData;
}

// from all the files read in getFiles function, create data to be used as blog content

export function getAllBlogs() {
  const files = getFiles();

  // map through filenames read from content, then pass each file to createBlogData function
  const allBlogsArray: Blog[] = files.map((file) => {
    return createBlogData(file);
  });
  //   .sort((a, b) => (a.date > b.date ? -1 : 1));

  return allBlogsArray;
}

export function getTopPicks() {
  const allBlogs = getAllBlogs();

  return allBlogs.filter((blog) => blog.isTopPick);
}
