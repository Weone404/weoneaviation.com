// app/sitemap.js
// Auto-generates sitemap.xml for ALL pages
// Visit: https://www.weoneaviation.com/sitemap.xml

import { locations } from "@/data/locations";

export default function sitemap() {
    const baseUrl = "https://www.weoneaviation.com";

    // ✅ Static pages
    const staticPages = [
        { url: `${baseUrl}/`, priority: 1.0, changeFrequency: "daily" },
        { url: `${baseUrl}/about-us`, priority: 0.8, changeFrequency: "monthly" },
        { url: `${baseUrl}/dgca-ground-classes`, priority: 0.9, changeFrequency: "weekly" },
        { url: `${baseUrl}/dgca-ground-classes-in-india`, priority: 0.9, changeFrequency: "weekly" },
        { url: `${baseUrl}/dgca-pariksha`, priority: 0.8, changeFrequency: "weekly" },
        { url: `${baseUrl}/dgca-medical`, priority: 0.8, changeFrequency: "monthly" },
        { url: `${baseUrl}/dgca-computer-number`, priority: 0.7, changeFrequency: "monthly" },
        { url: `${baseUrl}/egca-login`, priority: 0.7, changeFrequency: "monthly" },

        // CPL pages
        { url: `${baseUrl}/commercial-pilot-license`, priority: 0.9, changeFrequency: "weekly" },
        { url: `${baseUrl}/commercial-pilot-license/eligibility`, priority: 0.8, changeFrequency: "monthly" },
        { url: `${baseUrl}/commercial-pilot-license/salary`, priority: 0.8, changeFrequency: "monthly" },
        { url: `${baseUrl}/commercial-pilot-license/syllabus`, priority: 0.8, changeFrequency: "monthly" },
        { url: `${baseUrl}/commercial-pilot-license/admission-process`, priority: 0.8, changeFrequency: "monthly" },

        // Full form pages
        { url: `${baseUrl}/icse-full-form`, priority: 0.5, changeFrequency: "yearly" },
        { url: `${baseUrl}/cbse-full-form`, priority: 0.5, changeFrequency: "yearly" },
        { url: `${baseUrl}/dgca-full-form`, priority: 0.6, changeFrequency: "yearly" },
        { url: `${baseUrl}/ppl-full-form`, priority: 0.6, changeFrequency: "yearly" },
        { url: `${baseUrl}/cpl-full-form`, priority: 0.6, changeFrequency: "yearly" },
        { url: `${baseUrl}/rtr-full-form`, priority: 0.6, changeFrequency: "yearly" },
    ];

    // ✅ Auto-generate all location pages from locations.js
    const locationPages = locations.map((loc) => ({
        url: `${baseUrl}/pilot-training-in-${loc.slug}`,
        priority: 0.8,
        changeFrequency: "weekly",
        lastModified: new Date(),
    }));

    return [...staticPages, ...locationPages];
}