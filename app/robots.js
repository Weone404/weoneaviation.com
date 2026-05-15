// app/robots.js
// Auto-generates /robots.txt

export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin/", "/api/", "/_next/"],
            },
        ],
        sitemap: "https://www.weoneaviation.com/sitemap.xml",
        host: "https://www.weoneaviation.com",
    };
}