import matter from "gray-matter";
import * as React from "react";
import { readFile } from "./getPosts";
const loadPost = React.cache(async (slug) => {
    let rawContent;
    try {
        rawContent = await readFile(`/content/${slug}.mdx`);
    } catch (e) {
        return null;
    }
    const { data: frontmatter, content } = matter(rawContent);
    return {
        frontmatter,
        content,
    };
});
export default loadPost;
