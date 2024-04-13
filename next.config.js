module.exports = {
    experimental: {
        outputFileTracingIncludes: {
            "/*": ["./content/**/*"],
        },
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
