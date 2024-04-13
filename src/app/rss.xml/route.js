export const dynamic = "force-dynamic"; // defaults to auto
import { BLOG_TITLE } from "@/constants";
import { getBlogPostList } from "@/helpers/file-helpers";
import RSS from "rss";

export async function GET() {
    const siteUrl =
        process.env.NODE_ENV === "production" ? "" : "localhost:3000";

    const feedOptions = {
        title: BLOG_TITLE,
        description: "description",
        feed_url: `${siteUrl}/rss.xml`,
        site_url: siteUrl,
        // image_url: "http://example.com/icon.png",
        // docs: "http://example.com/rss/docs.html",
        managingEditor: "Rosa Hong",
        webMaster: "Rosa Hong",
        copyright: `${new Date().getFullYear()} Rosa Hong`,
        language: "zh-tw",
        // categories: ['Category 1','Category 2','Category 3'],
        pubDate: new Date(),
        ttl: "60",
    };
    const feed = new RSS(feedOptions);
    const posts = await getBlogPostList();

    posts.forEach(({ slug, title, abstract, publishedOn }) => {
        feed.item({
            title,
            description: abstract,
            url: `${siteUrl}/${slug}`, // link to the item
            guid: slug, // optional - defaults to url
            author: "Rosa Hong", // optional - defaults to feed author property
            date: publishedOn, // any format that js Date can parse.
            categories: [],
        });
    });

    return new Response(feed.xml({ indent: true }), {
        headers: {
            "Content-Type": "application/atom+xml; charset=utf-8",
        },
    });
}
