"use client";

import Image from "next/image";
import Link from "next/link";
import "./style.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

const keyFacts = [
    { detail: "Duration", info: "6 – 12 months" },
    { detail: "Minimum Flight Hours", info: "40 hours" },
    { detail: "Eligibility", info: "10+2 (any stream)" },
    { detail: "Course Fee", info: "₹6 – 10 Lakh" },
    { detail: "License Type", info: "DGCA Private Pilot License" },
    { detail: "Training Mode", info: "Ground School + Flight Training" },
];

const highlights = [
    "DGCA approved training aircraft",
    "Expert CFIs with 5000+ hours",
    "Cross-country navigation flights",
    "Night flying included",
    "Solo flight milestone",
    "Instrument fundamentals",
    "Radio telephony (RTR) included",
    "Medical guidance provided",
];

const syllabus = [
    "Air Regulations & Law",
    "Aviation Meteorology",
    "Air Navigation Basics",
    "Aircraft Technical Knowledge",
    "Human Performance & Limitations",
    "Pre-solo training (dual)",
    "Solo circuits & emergencies",
    "Navigation & cross-country",
    "Night flying",
    "Skill test preparation",
];

const careerProspects = [
    "Fly for leisure, personal travel, or aerial photography",
    "Progress to CPL and airline career",
    "Qualify for multi-engine and instrument ratings",
    "Opportunity to become a flight instructor (CFI)",
];

const whyWeOne = [
    { title: "DGCA Approved Aircraft", desc: "Modern, well-maintained training fleet" },
    { title: "Expert Instructors", desc: "CFIs with 5000+ flight hours" },
    { title: "100% DGCA Results", desc: "High first-attempt success rate" },
    { title: "RTR Included", desc: "Radio telephony training as part of the course" },
    { title: "Medical Guidance", desc: "Help with DGCA Class 2 medical process" },
    { title: "Placement Support", desc: "Career guidance after license completion" },
    { title: "Free Notes & Extra Classes", desc: "Until you clear every subject" },
];

// ─── Component ────────────────────────────────────────────────────────────────

const PPL = () => {
    return (
        <main className="ppl-page">

            {/* ── Hero ── */}
            <header className="ppl-hero">
                <div className="ppl-hero-inner">
                    <p className="ppl-subject-label">Private Pilot License</p>
                    <h1 className="ppl-hero-title">
                        Private Pilot License{" "}
                        <span className="highlight">(PPL)</span>
                    </h1>
                    <p className="ppl-hero-subtitle">
                        Your first step to the sky – learn to fly for leisure or professional
                        aspirations
                    </p>
                    <div className="ppl-hero-actions">
                        <button className="btn btn-primary">Get Free Counselling</button>
                        <button className="btn btn-secondary">Explore Courses →</button>
                    </div>
                    <div className="ppl-stats">
                        <div className="ppl-stat"><strong>6–12 mo</strong><span>Duration</span></div>
                        <div className="ppl-stat"><strong>40 hrs</strong><span>Min Flight Hours</span></div>
                        <div className="ppl-stat"><strong>10+2</strong><span>Eligibility</span></div>
                        <div className="ppl-stat"><strong>₹6–10L</strong><span>Course Fee</span></div>
                    </div>
                </div>
                <Image
                    src="/assets/GroundSchool.jpg"
                    alt="Private Pilot License PPL Training"
                    width={900}
                    height={500}
                    className="ppl-hero-image"
                    priority
                />
            </header>

            {/* ── Badges ── */}
            <div className="ppl-badges">
                <span className="ppl-badge">🪪 DGCA Approved</span>
                <span className="ppl-badge">✈️ PPL Training</span>
                <span className="ppl-badge">📍 India</span>
                <span className="ppl-badge">🛩️ 40+ Flight Hours</span>
                <span className="ppl-badge">🎯 CPL Prerequisite</span>
            </div>

            {/* ── Intro ── */}
            <section className="ppl-intro">
                <p>
                    The Private Pilot License (PPL) is the foundation of your aviation career.
                    It allows you to fly single-engine aircraft for non-commercial purposes and
                    is the prerequisite for the CPL.
                </p>
                <p>
                    Our DGCA-approved PPL program covers 40+ hours of flight training,
                    comprehensive ground school, and navigation flights across India.
                </p>
            </section>

            {/* ── TOC ── */}
            <aside className="ppl-toc">
                <h2>Contents</h2>
                <ol>
                    <li>Course Overview &amp; Key Facts</li>
                    <li>Course Highlights</li>
                    <li>Syllabus</li>
                    <li>Eligibility Requirements</li>
                    <li>Career Prospects</li>
                    <li>Why WeOne Aviation?</li>
                </ol>
            </aside>

            {/* ── Key Facts ── */}
            <section className="ppl-section">
                <h2>Course Overview &amp; Key Facts</h2>
                <p>
                    Here's a quick breakdown of everything you need to know about the PPL
                    program at WeOne Aviation:
                </p>
                <table className="ppl-table">
                    <thead>
                        <tr><th>Detail</th><th>Info</th></tr>
                    </thead>
                    <tbody>
                        {keyFacts.map(row => (
                            <tr key={row.detail}>
                                <td>{row.detail}</td>
                                <td>{row.info}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* ── Highlights ── */}
            <section className="ppl-section">
                <h2>Course Highlights</h2>
                <p>What's included in the WeOne Aviation PPL program:</p>
                <ul className="ppl-checklist">
                    {highlights.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </section>

            {/* ── Syllabus ── */}
            <section className="ppl-section">
                <h2>Syllabus</h2>
                <p>The PPL course covers the following subjects and training modules:</p>
                <ol className="ppl-numbered-list">
                    {syllabus.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ol>
            </section>

            {/* ── Eligibility ── */}
            <section className="ppl-section">
                <h2>Eligibility Requirements</h2>

                <h3>Educational Qualification</h3>
                <ul className="ppl-checklist">
                    <li>10+2 pass from any recognized board (any stream)</li>
                    <li>No mandatory Physics/Maths for PPL (required for CPL)</li>
                </ul>

                <h3>Minimum Age</h3>
                <p>16 years to begin training; 17 years to obtain PPL.</p>

                <h3>Medical Fitness</h3>
                <p>
                    DGCA Class 2 Medical Certificate required from a DGCA-approved
                    aviation medical examiner.
                </p>

                <h3>English Proficiency</h3>
                <p>Must read, write, and understand English fluently for ATC communication.</p>
            </section>

            {/* ── Career ── */}
            <section className="ppl-section">
                <h2>Career Prospects After PPL</h2>
                <p>
                    PPL opens doors to CPL and an airline career. Once you hold a PPL, you
                    can progress to the Commercial Pilot License (CPL) and eventually qualify
                    for airline First Officer positions.
                </p>

                <h3>Average CPL Salary After Progression</h3>
                <table className="ppl-table">
                    <thead>
                        <tr><th>Role</th><th>Average Salary</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>First Officer at airlines</td>
                            <td className="salary-highlight">₹1.8 – 2.5 LPM</td>
                        </tr>
                    </tbody>
                </table>

                <ul className="ppl-checklist" style={{ marginTop: "12px" }}>
                    {careerProspects.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </section>

            {/* ── Why WeOne ── */}
            <section className="ppl-section">
                <h2>Why Choose WeOne Aviation for PPL?</h2>
                <ul className="ppl-icon-list">
                    {whyWeOne.map(item => (
                        <li key={item.title}>
                            <span>✅</span>
                            <div><strong>{item.title}</strong> – {item.desc}</div>
                        </li>
                    ))}
                </ul>

                <div className="ppl-cta">
                    <Link href="/contactform" className="btn btn-primary">
                        Book Your Seat Now
                    </Link>
                    <p className="ppl-note">
                        WeOne Aviation Academy – Delhi's trusted name for pilot training.
                    </p>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="ppl-footer">
                <div className="ppl-footer-links">
                    <h4>Related Courses</h4>
                    <ul>
                        <li>Commercial Pilot License (CPL)</li>
                        <li>Multi-Engine Rating</li>
                        <li>Instrument Rating</li>
                        <li>Airline Transport Pilot License (ATPL)</li>
                    </ul>
                </div>
                <div className="ppl-footer-right">
                    <p>
                        Learn how to become a commercial pilot with our CPL-certified
                        training programs.
                    </p>
                </div>
            </footer>

        </main>
    );
};

export default PPL;