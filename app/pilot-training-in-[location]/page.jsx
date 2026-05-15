// app/pilot-training-in-[location]/page.jsx
// Handles all URLs like:
//   /pilot-training-in-delhi
//   /pilot-training-in-mumbai
//   /pilot-training-in-bangalore ... etc.

import { notFound } from "next/navigation";
import { locations, getLocationBySlug, generateLocationData } from "@/data/locations";
import StructurePage from "@/components/StructurePage";

// ✅ Generate all static pages at build time
export async function generateStaticParams() {
    return locations.map((loc) => ({
        location: loc.slug,
    }));
}

// ✅ Unique SEO metadata for every location page
export async function generateMetadata({ params }) {
    const loc = getLocationBySlug(params.location);

    if (!loc) {
        return {
            title: "Page Not Found | We One Aviation Academy",
        };
    }

    return {
        title: `Pilot Training in ${loc.name} | Online Aviation Classes | We One Aviation`,
        description: `Looking for pilot training or online aviation classes in ${loc.name}? We One Aviation Academy offers DGCA approved CPL, PPL & ATPL courses — online & offline. 3500+ pilots trained. 98% pass rate. Free counselling available.`,
        keywords: [
            // Pilot training keywords
            `pilot training in ${loc.name}`,
            `DGCA pilot training ${loc.name}`,
            `CPL training ${loc.name}`,
            `aviation academy ${loc.name}`,
            `flying school ${loc.name}`,
            `commercial pilot license ${loc.name}`,
            `best pilot training institute ${loc.name}`,
            // Online aviation keywords
            `online aviation classes in ${loc.name}`,
            `online aviation course in ${loc.name}`,
            `DGCA online classes in ${loc.name}`,
            `aviation ground classes online ${loc.name}`,
            `online pilot training ${loc.name}`,
            `online DGCA ground school ${loc.name}`,
            `aviation online coaching ${loc.name}`,
        ],
        alternates: {
            canonical: `https://www.weoneaviation.com/pilot-training-in-${loc.slug}`,
        },
        openGraph: {
            title: `Pilot Training & Online Aviation Classes in ${loc.name} | We One Aviation`,
            description: `Join India's best DGCA approved aviation academy for pilot training & online aviation classes in ${loc.name}. CPL, PPL, ATPL courses. 3500+ pilots trained since 2009.`,
            url: `https://www.weoneaviation.com/pilot-training-in-${loc.slug}`,
            siteName: "We One Aviation Academy",
            type: "website",
            images: [
                {
                    url: "https://www.weoneaviation.com/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: `Pilot Training & Online Aviation Classes in ${loc.name} - We One Aviation`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `Pilot Training & Online Aviation Classes in ${loc.name} | We One Aviation`,
            description: `DGCA approved pilot training & online aviation classes in ${loc.name}. CPL, PPL, ATPL courses. 98% pass rate.`,
        },
    };
}

// ✅ JSON-LD Schema for each location page
function LocationSchema({ locationName, slug }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "We One Aviation Academy",
        url: `https://www.weoneaviation.com/pilot-training-in-${slug}`,
        description: `Best pilot training & online aviation classes in ${locationName}. DGCA approved CPL, PPL, ATPL courses — online & offline. 3500+ pilots trained.`,
        telephone: "+919355611996",
        email: "info@weoneaviation.in",
        address: {
            "@type": "PostalAddress",
            streetAddress: "C-404, 3rd Floor, Ramphal Chowk, Dwarka, Sector-7",
            addressLocality: "New Delhi",
            addressRegion: "Delhi",
            postalCode: "110077",
            addressCountry: "IN",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Aviation Courses",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Course",
                        name: `Pilot Training in ${locationName}`,
                        description: `DGCA approved CPL, PPL, ATPL pilot training for students in ${locationName}`,
                        provider: { "@type": "Organization", name: "We One Aviation Academy" },
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Course",
                        name: `Online Aviation Classes in ${locationName}`,
                        description: `Online DGCA ground classes and aviation courses for students in ${locationName}. Study from home with expert faculty.`,
                        courseMode: "online",
                        provider: { "@type": "Organization", name: "We One Aviation Academy" },
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Course",
                        name: `Online Aviation Course in ${locationName}`,
                        description: `Comprehensive online aviation courses for DGCA exam preparation in ${locationName}.`,
                        courseMode: "online",
                        provider: { "@type": "Organization", name: "We One Aviation Academy" },
                    },
                },
            ],
        },
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: `How much does pilot training cost in ${locationName}?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "CPL training typically costs between ₹35–80 lakhs depending on the flying school and country. We One Aviation offers competitive fees with EMI options.",
                },
            },
            {
                "@type": "Question",
                name: `How long does pilot training take in ${locationName}?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ground school takes 6–12 months. Complete CPL training including flying hours takes 2–3 years.",
                },
            },
            {
                "@type": "Question",
                name: "Is We One Aviation DGCA approved?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, We One Aviation Academy is DGCA approved and has been training pilots since 2009.",
                },
            },
            {
                "@type": "Question",
                name: `Can I do pilot training online from ${locationName}?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `Yes, our DGCA ground classes are available online for students across India including ${locationName}.`,
                },
            },
            {
                "@type": "Question",
                name: `Are online aviation classes available in ${locationName}?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `Yes, We One Aviation Academy offers online aviation classes for students in ${locationName}. Our live and recorded sessions cover all DGCA subjects — Air Navigation, Meteorology, Air Regulations, and more.`,
                },
            },
            {
                "@type": "Question",
                name: `What is the best online aviation course in ${locationName}?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `We One Aviation Academy provides the best online aviation courses in ${locationName} with DGCA approved curriculum, experienced faculty, and 98% pass rate in DGCA written exams.`,
                },
            },
            {
                "@type": "Question",
                name: `How do I join DGCA online classes from ${locationName}?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `You can join our DGCA online classes from ${locationName} by calling +919355611996 or visiting weoneaviation.com for a free counselling session. Classes are conducted live via video conferencing.`,
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}

// ✅ Main page component
export default function PilotTrainingLocationPage({ params }) {
    const loc = getLocationBySlug(params.location);

    // Return 404 if location not in our list
    if (!loc) {
        notFound();
    }

    const pageData = generateLocationData(loc.name);

    return (
        <>
            <LocationSchema locationName={loc.name} slug={loc.slug} />
            <StructurePage data={pageData} />
        </>
    );
}