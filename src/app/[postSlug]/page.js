import BlogHero from "@/components/BlogHero";

import loadPost from "@/helpers/loadPost";
import COMPONENT_MAP from "@/helpers/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import styles from "./postSlug.module.css";
export async function generateMetadata({ params }) {
    const { postSlug } = params;

    const blogPostData = await loadPost(postSlug);
    if (!blogPostData) {
        return null;
    }

    const { frontmatter } = blogData;
    return {
        title: frontmatter.title,
        description: frontmatter.abstract,
    };
}

async function BlogPost({ params }) {
    const { postSlug } = params;
    const post = await loadPost(postSlug);
    if (!post) {
        notFound();
    }

    const { content, frontmatter } = post;

    return (
        <article className={styles.wrapper}>
            <BlogHero
                title={frontmatter.title}
                publishedOn={frontmatter.publishedOn}
            />
            <div className={styles.page}>
                <MDXRemote source={content} components={COMPONENT_MAP} />
            </div>
        </article>
    );
}

export default BlogPost;
