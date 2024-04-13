import matter from "gray-matter";
import fs from "node:fs/promises";
import path from "node:path";

export async function getPostsList() {
    const fileNames = await readDirFiles("/content");
    const posts = [];
    for (let fileName of fileNames) {
        if (/\.mdx$/.test(fileName)) return;

        const rawContent = await readFile(`/content/${fileName}`);

        const { data: frontmatter } = matter(rawContent);

        posts.push({
            slug: fileName.replace(".mdx", ""),
            ...frontmatter,
        });
    }
    // new -> old
    // p1.publishedOn < p2.publishedOn ? 1 : -1
    return posts.sort((p1, p2) => {
        return p1.publishedOn < p2.publishedOn ? 1 : -1;
    });
}

export function readFile(localPath) {
    return fs.readFile(path.join(process.cwd(), localPath), "utf-8");
}

export function readDirFiles(localPath) {
    return fs.readdir(path.join(process.cwd(), localPath), "utf-8");
}
