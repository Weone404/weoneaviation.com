"use client";

import Image from "next/image";
import Link from "next/link";
import "./style.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

const steps = [
    {
        num: "01",
        icon: "✅",
        title: "Eligibility Criteria",
        shortDesc: "Meet DGCA requirements before enrolling.",
        details: [
            "Minimum educational qualification of 10+2 with Physics and Mathematics.",
            "A Class 2 Medical Certificate.",
            "Fluency in English.",
        ],
        note: "Before enrolling in a pilot training program, you must ensure that you meet the eligibility criteria set by the Directorate General of Civil Aviation (DGCA) in India.",
    },
    {
        num: "02",
        icon: "🏫",
        title: "Enroll in a Pilot Training Program",
        shortDesc: "Join a reputed flight school.",
        details: [],
        note: "Once you meet the eligibility criteria, you can enroll in a pilot training program offered by reputed flight schools like Weone Aviation. This training program will provide you with the necessary theoretical knowledge and practical flying experience required to become a pilot.",
    },
    {
        num: "03",
        icon: "📚",
        title: "Ground Training",
        shortDesc: "Learn theory — regulations, meteorology, navigation.",
        details: [],
        note: "During the pilot training program, you will undergo ground training that covers subjects such as aviation regulations, meteorology, navigation, and aircraft systems. This theoretical knowledge is essential for passing the written examinations conducted by the DGCA.",
    },
    {
        num: "04",
        icon: "✈️",
        title: "Flight Training",
        shortDesc: "Fly under experienced instructors.",
        details: [],
        note: "After completing the ground training, you will progress to flight training, where you will learn how to operate an aircraft under the guidance of experienced flight instructors. This hands-on experience is crucial for developing your piloting skills and gaining confidence in the cockpit.",
    },
    {
        num: "05",
        icon: "🪪",
        title: "Obtain a Commercial Pilot License (CPL)",
        shortDesc: "Pass DGCA exams and get your CPL.",
        details: [],
        note: "Upon successfully completing the required flying hours and passing the DGCA examinations, you will be eligible to obtain a Commercial Pilot License (CPL). This license allows you to fly as a professional pilot and pursue a career in the aviation industry.",
    },
    {
        num: "06",
        icon: "📊",
        title: "Build Flight Experience",
        shortDesc: "Gain hours through instruction, surveys, charters.",
        details: [],
        note: "After obtaining your CPL, you will need to gain more flying experience to qualify for employment opportunities with airlines or charter companies. You can build your flight hours by working as a flight instructor, conducting aerial surveys, or flying chartered flights.",
    },
];

const whyWeOne = [
    { icon: "🏆", text: "Industry-recognized training programs." },
    { icon: "🛡️", text: "Emphasis on safety and professionalism." },
    { icon: "🛩️", text: "Practical hands-on training." },
    { icon: "💼", text: "Placement assistance for aspiring pilots." },
];

const courses = [
    { num: "01", title: "Private Pilot License (PPL)", icon: "🛩️" },
    { num: "02", title: "Commercial Pilot License (CPL)", icon: "✈️" },
    { num: "03", title: "Multi-Engine Rating", icon: "⚙️" },
    { num: "04", title: "Instrument Rating", icon: "🎛️" },
    { num: "05", title: "Airline Transport Pilot License (ATPL)", icon: "🏅" },
];

// ─── Component ────────────────────────────────────────────────────────────────

const HowToBecomeAPilotInIndiaPage = () => {
    return (
        <main className="guide-page">

            {/* ── Hero ── */}
            <header className="guide-hero">
                <div className="guide-hero-inner">
                    <p className="guide-subject-label">Pilot Career Guide</p>
                    <h1 className="guide-hero-title">
                        Your Guide on How to Become a{" "}
                        <span className="highlight">Pilot in India</span>
                    </h1>
                    <p className="guide-hero-subtitle">
                        Step-by-step guide to a pilot career — eligibility, training, CPL &amp;
                        more with Weone Aviation
                    </p>
                    <div className="guide-hero-actions">
                        <Link href="/contact" className="btn btn-primary">
                            Start Your Journey →
                        </Link>
                        <Link href="/courses/cpl" className="btn btn-secondary">
                            Explore Courses
                        </Link>
                    </div>
                    <div className="guide-stats">
                        <div className="guide-stat"><strong>10+2</strong><span>Min. Education</span></div>
                        <div className="guide-stat"><strong>Class 2</strong><span>Medical Required</span></div>
                        <div className="guide-stat"><strong>DGCA</strong><span>Approved Body</span></div>
                        <div className="guide-stat"><strong>CPL</strong><span>Goal License</span></div>
                    </div>
                </div>
                <Image
                    src="/assets/GroundSchool.jpg"
                    alt="How to Become a Pilot in India"
                    width={900}
                    height={500}
                    className="guide-hero-image"
                    priority
                />
            </header>

            {/* ── Badges ── */}
            <div className="guide-badges">
                <span className="guide-badge">✈️ CPL / PPL / ATPL</span>
                <span className="guide-badge">🪪 DGCA Approved</span>
                <span className="guide-badge">📍 India Guide</span>
                <span className="guide-badge">🏫 Weone Aviation</span>
                <span className="guide-badge">💼 Placement Support</span>
            </div>

            {/* ── Intro ── */}
            <section className="guide-intro">
                <p>
                    Are you passionate about flying and aspire to become a pilot in India?{" "}
                    <strong>Weone Aviation</strong> is here to guide you through the process of
                    achieving your dream career in aviation.
                </p>
                <p>
                    In this article, we will provide you with a step-by-step guide on how to
                    become a pilot in India, with a focus on the professional training provided
                    by Weone Aviation. Becoming a pilot requires dedication, hard work, and
                    undergoing proper training — here are the steps you need to follow.
                </p>
            </section>

            {/* ── TOC ── */}
            <aside className="guide-toc">
                <h2>Contents</h2>
                <ol>
                    <li>Eligibility Criteria</li>
                    <li>Enroll in a Pilot Training Program</li>
                    <li>Ground Training</li>
                    <li>Flight Training</li>
                    <li>Obtain a Commercial Pilot License (CPL)</li>
                    <li>Build Flight Experience</li>
                    <li>Pilot Training at Weone Aviation</li>
                    <li>Conclusion</li>
                </ol>
            </aside>

            {/* ── Steps Overview ── */}
            <section className="guide-section">
                <h2>How to Become a Pilot in India — 6 Steps</h2>
                <p>Here is a quick overview of the complete process:</p>
                <div className="guide-modules">
                    {steps.map(step => (
                        <div className="guide-module" key={step.num}>
                            <span className="guide-module-num">{step.num}</span>
                            <div>
                                <strong>{step.icon} {step.title}</strong>
                                <p>{step.shortDesc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Step 1 — Eligibility ── */}
            <section className="guide-section">
                <h2>Step 1 — Eligibility Criteria</h2>
                <p>{steps[0].note}</p>
                <h3>Basic Requirements Include:</h3>
                <ul className="guide-checklist">
                    {steps[0].details.map(d => (
                        <li key={d}>{d}</li>
                    ))}
                </ul>
                <div className="guide-cta">
                    <Link href="/cpl-eligibility" className="btn btn-primary">
                        Check Full Eligibility →
                    </Link>
                </div>
            </section>

            {/* ── Steps 2–4 ── */}
            <section className="guide-section">
                {steps.slice(1, 4).map(step => (
                    <div className="guide-step-block" key={step.num}>
                        <h2>Step {parseInt(step.num)} — {step.title}</h2>
                        <p>{step.note}</p>
                    </div>
                ))}
            </section>

            {/* ── Steps 5–6 ── */}
            <section className="guide-section">
                {steps.slice(4).map(step => (
                    <div className="guide-step-block" key={step.num}>
                        <h2>Step {parseInt(step.num)} — {step.title}</h2>
                        <p>{step.note}</p>
                    </div>
                ))}
            </section>

            {/* ── Weone Aviation ── */}
            <section className="guide-section">
                <h2>Pilot Training at Weone Aviation</h2>
                <p>
                    Weone Aviation is a leading flight training academy in India that offers
                    top-notch pilot training programs for aspiring aviators. With state-of-the-art
                    facilities, experienced instructors, and a fleet of modern aircraft, Weone
                    Aviation equips you with the skills and knowledge needed to excel in the
                    aviation industry.
                </p>

                <h3>Why Choose Weone Aviation?</h3>
                <ul className="guide-icon-list">
                    {whyWeOne.map(item => (
                        <li key={item.text}>
                            <span>{item.icon}</span>
                            <div>{item.text}</div>
                        </li>
                    ))}
                </ul>

                <h3>Training Courses Offered by Weone Aviation</h3>
                <div className="guide-modules">
                    {courses.map(course => (
                        <div className="guide-module" key={course.num}>
                            <span className="guide-module-num">{course.num}</span>
                            <div>
                                <strong>{course.icon} {course.title}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Conclusion ── */}
            <section className="guide-section">
                <h2>In Conclusion</h2>
                <p>
                    Becoming a pilot in India is a rewarding career path that requires
                    commitment, perseverance, and proper training. By enrolling in a pilot
                    training program at <strong>Weone Aviation</strong>, you can turn your dream
                    of flying into reality. Follow the steps outlined in this guide and start
                    your journey towards a successful career as a pilot in India.
                </p>
                <div className="guide-cta">
                    <Link href="/contact" className="btn btn-primary">
                        Enroll at Weone Aviation →
                    </Link>
                    <p className="guide-note">
                        Weone Aviation — India's trusted name for professional pilot training.
                    </p>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="guide-footer">
                <div className="guide-footer-links">
                    <h4>Related Guides</h4>
                    <ul>
                        <li>How to Become a Pilot After 12th</li>
                        <li>DGCA Exam Subjects Guide</li>
                        <li>CPL Course Fees in India</li>
                        <li>Commercial Pilot Salary — Country Wise</li>
                    </ul>
                </div>
                <div className="guide-footer-right">
                    <p>
                        Weone Aviation Academy — India's leading DGCA approved pilot training
                        institute. CPL, PPL, ATPL &amp; ground school courses.
                    </p>
                </div>
            </footer>

        </main>
    );
};

export default HowToBecomeAPilotInIndiaPage;