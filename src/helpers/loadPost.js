import matter from "gray-matter";
import { notFound } from "next/navigation";
import * as React from "react";
import { readFile } from "./getPosts";
const loadPost = React.cache(async (slug) => {
    try {
        const rawContent = await readFile(`/content/${slug}.mdx`);
        const { data: frontmatter, content } = matter(rawContent);
        return {
            frontmatter,
            content,
        };
    } catch (e) {
        if (e.code === "ENOENT") {
            notFound();
        } else {
            throw e;
        }
    }
});
export default loadPost;
