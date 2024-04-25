module.exports = {
    experimental: {
        outputFileTracingIncludes: {
            "/*": ["./content/**/*"],
        },
    },
    env: {
        BASE_URL:
            process.env.NODE_ENV === "production"
                ? process.env.VERCEL_URL
                : "localhost:3000",
    },
    async rewrites() {
        return [
            {
                source: "/rss",
                destination: "/rss.xml",
            },
            {
                source: "/rss.xml",
                destination: "/rss.xml",
            },
            {
                source: "/feed",
                destination: "/rss.xml",
            },
        ];
    },
};
