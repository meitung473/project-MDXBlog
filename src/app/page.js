import BlogSummaryCard from "@/components/BlogSummaryCard";

import { BLOG_TITLE } from "@/constants";
import getPostsList from "@/helpers/getPosts";
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
    const files = await getPostsList();
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.mainHeading}>Latest Content:</h1>

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
