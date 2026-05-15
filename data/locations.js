// data/locations.js
// Central data source for all location pages
// Add new locations here — sitemap and routes update automatically

export const locations = [
    { name: "India", slug: "india" },
    { name: "Hyderabad", slug: "hyderabad" },
    { name: "Mumbai", slug: "mumbai" },
    { name: "Chennai", slug: "chennai" },
    { name: "Bangalore", slug: "bangalore" },
    { name: "Kerala", slug: "kerala" },
    { name: "Delhi", slug: "delhi" },
    { name: "Pune", slug: "pune" },
    { name: "Kolkata", slug: "kolkata" },
    { name: "Coimbatore", slug: "coimbatore" },
    { name: "Gujarat", slug: "gujarat" },
    { name: "Goa", slug: "goa" },
    { name: "Gurugram", slug: "gurugram" },
    { name: "Tamil Nadu", slug: "tamil-nadu" },
    { name: "Rajasthan", slug: "rajasthan" },
    { name: "Haryana", slug: "haryana" },
    { name: "Punjab", slug: "punjab" },
    { name: "Andhra Pradesh", slug: "andhra-pradesh" },
    { name: "Arunachal Pradesh", slug: "arunachal-pradesh" },
    { name: "Assam", slug: "assam" },
    { name: "Bihar", slug: "bihar" },
    { name: "Chhattisgarh", slug: "chhattisgarh" },
    { name: "Himachal Pradesh", slug: "himachal-pradesh" },
    { name: "Noida", slug: "noida" },
    { name: "Ghaziabad", slug: "ghaziabad" },
    { name: "Nagpur", slug: "nagpur" },
    { name: "Maharashtra", slug: "maharashtra" },
    { name: "Jaipur", slug: "jaipur" },
];

/**
 * Get location data by slug
 * Returns null if not found
 */
export function getLocationBySlug(slug) {
    return locations.find((loc) => loc.slug === slug) || null;
}

/**
 * Generate page data for a given location
 * This is the data object passed to StructurePage
 */
export function generateLocationData(locationName) {
    return {
        hero: {
            title: `Pilot Training in ${locationName}`,
            subtitle: `Join We One Aviation Academy — India's Most Trusted DGCA Approved Pilot Training Institute. 3500+ Pilots Trained Since 2009.`,
            background: "/images/hero-bg.jpg", // update with your actual image path
        },
        sections: [
            {
                title: `Best Pilot Training in ${locationName}`,
                paragraphs: [
                    `We One Aviation Academy offers the best pilot training in ${locationName} with DGCA approved courses designed to help you achieve your dream of becoming a commercial pilot. Our expert faculty, state-of-the-art simulators, and structured curriculum make us the top choice for aviation aspirants in ${locationName}.`,
                    `Our programs in ${locationName} cover CPL (Commercial Pilot License), PPL (Private Pilot License), ATPL (Airline Transport Pilot License), and SPL (Student Pilot License) — all aligned with DGCA standards and international aviation norms.`,
                ],
                list: [],
            },
            {
                title: `Why Choose We One Aviation for Pilot Training in ${locationName}?`,
                paragraphs: [
                    `Students from ${locationName} choose We One Aviation Academy for our proven track record, experienced instructors, and industry connections that open doors to top airlines.`,
                ],
                list: [
                    {
                        title: "DGCA Approved",
                        text: "All our courses are approved by the Directorate General of Civil Aviation (DGCA), India.",
                    },
                    {
                        title: "98% Pass Rate",
                        text: `Our students from ${locationName} consistently achieve a 98% pass rate in DGCA written exams.`,
                    },
                    {
                        title: "Expert Faculty",
                        text: "Learn from experienced pilots and aviation professionals with 10,000+ flying hours.",
                    },
                    {
                        title: "Modern Simulators",
                        text: "Train on advanced flight simulators that replicate real cockpit environments.",
                    },
                    {
                        title: "Placement Support",
                        text: `Dedicated placement assistance for students from ${locationName} with top Indian and international airlines.`,
                    },
                    {
                        title: "Flexible Batches",
                        text: `Weekend and weekday batches available for students in ${locationName} — online and offline modes.`,
                    },
                ],
            },
            {
                title: `DGCA Pilot Training Courses Available in ${locationName}`,
                paragraphs: [
                    `We One Aviation Academy offers a full range of DGCA pilot training courses for students in ${locationName}. Whether you are just starting your aviation journey or looking to upgrade your license, we have the right program for you.`,
                ],
                list: [
                    {
                        title: "CPL — Commercial Pilot License",
                        text: `The most sought-after course among students in ${locationName}. Prepares you to fly commercial aircraft professionally.`,
                    },
                    {
                        title: "PPL — Private Pilot License",
                        text: "The entry-level pilot license. Ideal if you want to fly for personal use or as a stepping stone to CPL.",
                    },
                    {
                        title: "ATPL — Airline Transport Pilot License",
                        text: "The highest level of pilot certification. Required to act as Pilot-in-Command of airline aircraft.",
                    },
                    {
                        title: "SPL — Student Pilot License",
                        text: "The first license issued to student pilots, required before solo flights.",
                    },
                    {
                        title: "DGCA Ground Classes",
                        text: `Comprehensive ground school covering all DGCA exam subjects — Air Navigation, Meteorology, Air Regulations, and more.`,
                    },
                ],
            },
            {
                title: `Pilot Training Eligibility for ${locationName} Students`,
                paragraphs: [],
                list: [
                    {
                        title: "Age",
                        text: "Minimum 17 years of age for SPL/PPL, 18 years for CPL.",
                    },
                    {
                        title: "Education",
                        text: "10+2 with Physics and Mathematics (minimum 50% marks).",
                    },
                    {
                        title: "Medical",
                        text: "DGCA Class 1 Medical Certificate required for CPL.",
                    },
                    {
                        title: "Language",
                        text: "Proficiency in English (spoken and written).",
                    },
                ],
            },
            {
                title: `How to Start Pilot Training in ${locationName}`,
                paragraphs: [
                    `Starting your pilot training journey in ${locationName} with We One Aviation Academy is simple. Follow these steps to begin your aviation career today.`,
                ],
                list: [
                    {
                        title: "Step 1 — Free Counselling",
                        text: "Book a free career counselling session with our aviation experts.",
                    },
                    {
                        title: "Step 2 — Choose Your Course",
                        text: `Select the right pilot training program based on your goals and budget.`,
                    },
                    {
                        title: "Step 3 — DGCA Medical",
                        text: "Complete your DGCA medical examination to check your medical fitness.",
                    },
                    {
                        title: "Step 4 — Enroll & Start",
                        text: `Enroll with We One Aviation Academy and begin your ground school training in ${locationName}.`,
                    },
                    {
                        title: "Step 5 — Flying Training",
                        text: "Complete your flying hours at our affiliated DGCA approved flying schools.",
                    },
                ],
            },
            {
                title: "Frequently Asked Questions",
                paragraphs: [],
                list: [
                    {
                        title: `How much does pilot training cost in ${locationName}?`,
                        text: "CPL training typically costs between ₹35–80 lakhs depending on the flying school and country. We One Aviation offers the most competitive fees with EMI options.",
                    },
                    {
                        title: `How long does pilot training take in ${locationName}?`,
                        text: "Ground school takes 6–12 months. Complete CPL training including flying hours takes 2–3 years.",
                    },
                    {
                        title: "Is We One Aviation DGCA approved?",
                        text: "Yes, We One Aviation Academy is DGCA approved and has been training pilots since 2009.",
                    },
                    {
                        title: `Can I do pilot training online from ${locationName}?`,
                        text: "Yes, our DGCA ground classes are available online for students across India including ${locationName}.",
                    },
                ],
            },
        ],
    };
}