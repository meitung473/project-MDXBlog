import BlogSummaryCard from "@/components/BlogSummaryCard";

import { BLOG_TITLE } from "@/constants";
import { getBlogPostList } from "@/helpers/file-helpers";
import styles from "./homepage.module.css";

export const metadata = {
    title: BLOG_TITLE,
    description: "A wonderful blog about JavaScript",
    alternates: {
        types: {
            "application/rss+xml": "http://localhost:300/rss.xml",
        },
    },
};

async function Home() {
    const files = await getBlogPostList();
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.mainHeading}>Latest Content:</h1>

            {/* TODO: Iterate over the data read from the file system! */}
            {files.map(({ slug, title, abstract, publishedOn }) => {
                return (
                    <BlogSummaryCard
                        key={slug}
                        slug={slug}
                        title={title}
                        abstract={abstract}
                        publishedOn={publishedOn}
                    />
                );
            })}
        </div>
    );
}

export default Home;
