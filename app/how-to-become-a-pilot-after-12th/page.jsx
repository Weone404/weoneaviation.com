"use client";

import Image from "next/image";
import Link from "next/link";
import "./style.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

const pilotTypes = [
    { icon: "✈️", title: "Commercial Pilot", desc: "Flies passenger and cargo aircraft for airlines." },
    { icon: "🛩️", title: "Private Pilot", desc: "Operates aircraft for personal or recreational use." },
    { icon: "🎖️", title: "Military Pilot", desc: "Serves the country by flying for the armed forces." },
    { icon: "💼", title: "Corporate Pilot", desc: "Pilots for business and corporate travel." },
    { icon: "🎓", title: "Flight Instructor", desc: "Trains others in aviation and flight skills." },
];

const physicalRequirements = [
    { requirement: "Minimum Height", value: "5 feet 5 inches (165 cm)" },
    { requirement: "Body Mass Index (BMI)", value: "18.5 – 25" },
    { requirement: "Color Vision", value: "Normal color vision" },
    { requirement: "Visual Acuity", value: "6/6 vision in each eye" },
    { requirement: "Hearing", value: "Good hearing with ≤20 decibels" },
    { requirement: "General Health", value: "Physically fit, free of major conditions" },
];

const selectionSteps = [
    { num: "01", icon: "✅", title: "Meeting Basic Eligibility", desc: "Age, 12th with Physics & Maths, and Class 2 Medical Certificate from a DGCA-approved doctor." },
    { num: "02", icon: "📝", title: "Entrance Exams", desc: "Written exams on Physics, Mathematics, English, aviation theory, aerodynamics, and navigation." },
    { num: "03", icon: "🗣️", title: "Personal Interview", desc: "Assesses personality, motivation, communication skills, and ability to handle stress." },
    { num: "04", icon: "🩺", title: "Medical Examination", desc: "Class 2 for Student Pilots; Class 1 for Commercial Pilots. Includes vision, ECG, blood & hearing tests." },
    { num: "05", icon: "🏫", title: "Flight School Selection", desc: "Evaluate schools by reputation, programs, instructor qualifications, costs, and facilities." },
    { num: "06", icon: "📚", title: "Ground School Training", desc: "Aerodynamics, Aircraft Systems, Navigation, Meteorology, and Aviation Regulations. Lasts months to a year." },
    { num: "07", icon: "✈️", title: "Flight Training", desc: "Basic maneuvers, advanced maneuvers, and solo flights under a certified flight instructor." },
    { num: "08", icon: "🪪", title: "License Examinations", desc: "Pass PPL first, then CPL after accumulating 200–250 flight hours." },
    { num: "09", icon: "⭐", title: "Additional Ratings", desc: "Multi-engine Rating (ME) and Instrument Rating (IR) for larger aircraft and IFR flying." },
    { num: "10", icon: "📊", title: "Building Flight Hours", desc: "Accumulate hours as flight instructor or co-pilot to qualify for First Officer or Captain roles." },
];

const iafRoutes = [
    {
        num: "01", icon: "🏛️", title: "NDA Exam",
        eligibility: "Unmarried males/females, 16.5–19.5 years.",
        education: "Class 12 with Physics & Mathematics.",
        selection: "UPSC twice a year: written → physical/medical → interview.",
        training: "3 years at NDA, then specialized flying training. Commissioned as PCOs.",
    },
    {
        num: "02", icon: "🎖️", title: "CDS Exam",
        eligibility: "20–24 years, any graduation degree.",
        education: "Bachelor's degree from a recognized university.",
        selection: "UPSC CDS written exam → physical/medical → interview.",
        training: "Air Force Academy + specialized flying training. Commissioned as PCOs.",
    },
    {
        num: "03", icon: "✈️", title: "AFCAT",
        eligibility: "20–24 years (26 with valid DGCA CPL).",
        education: "Bachelor's degree from a recognized university.",
        selection: "IAF AFCAT written test → physical/medical evaluations → interview.",
        training: "Air Force Academy flying training. Short Service Commission (14 years).",
    },
    {
        num: "04", icon: "🎗️", title: "NCC Special Entry",
        eligibility: "Males with Air Wing Sr. Division 'C' Certificate; females also eligible for SSC.",
        education: "NCC Air Wing Senior Division 'C' Certificate.",
        selection: "Apply via NCC website → physical/medical evaluations → interview.",
        training: "Air Force Academy + specialized flying. Males as PCOs; SSC for 14 years.",
    },
];

const ndaSteps = [
    { num: "01", title: "Written Exam", desc: "Conducted twice a year by UPSC. Tests Mathematics and General Ability (English, GK, current affairs)." },
    { num: "02", title: "Physical & Medical Examination", desc: "Fitness tests (running, push-ups, sit-ups) plus comprehensive medical and mental health assessment." },
    { num: "03", title: "Personal Interview", desc: "Assesses leadership potential, communication skills, confidence, and IAF motivation." },
];

const salaryData = [
    { level: "Entry-Level Pilots", salary: "₹1.5 – 2 Lakhs / Month", note: "Salaries grow rapidly with experience." },
    { level: "Experienced Pilots", salary: "₹1 Crore+ / Year", note: "Senior pilots on large commercial aircraft." },
    { level: "IndiGo (Example)", salary: "₹62.7 Lakhs / Year (avg)", note: "Major carriers offer competitive pay." },
    { level: "Annual Range", salary: "₹10 – 50 Lakhs / Year", note: "Highly experienced pilots earn even more." },
];

const advantages = [
    { icon: "🌟", title: "Exciting & Fulfilling Career", desc: "Every day is different — new routes, unique situations, and the unmatched joy of being airborne." },
    { icon: "💰", title: "Competitive Salary & Benefits", desc: "Among the highest-paid professionals in transportation, with health insurance, retirement plans, and paid vacation." },
    { icon: "🌍", title: "Travel & Adventure", desc: "See the world from above and explore different cities, cultures, and cuisines as part of the job." },
    { icon: "📈", title: "High Demand for Pilots", desc: "India's aviation boom and global pilot shortage make this one of the most in-demand careers today." },
    { icon: "🕐", title: "Flexible Work Schedule", desc: "Extended breaks between flights allow time to rest, travel, or spend with family." },
];

const careerPaths = [
    { icon: "✈️", title: "Commercial Airlines", desc: "The most common path — high earnings, travel, and stable schedules." },
    { icon: "📦", title: "Cargo Pilots", desc: "Competitive salaries and flexible schedules with Blue Dart, SpiceJet Cargo, etc." },
    { icon: "💼", title: "Corporate & Charter", desc: "Diverse destinations and schedules for private charter or business clients." },
    { icon: "🎓", title: "Pilot Instructors", desc: "Train the next generation at flight schools or within airlines." },
];

// ─── Component ────────────────────────────────────────────────────────────────

const BecomeAPilotPage = () => {
    return (
        <main className="pilot-page">

            {/* ── Hero ── */}
            <header className="pilot-hero">
                <div className="pilot-hero-inner">
                    <p className="pilot-subject-label">Pilot Career Guide</p>
                    <h1 className="pilot-hero-title">
                        How to Become a Pilot After 12th —{" "}
                        <span className="highlight">Complete Guide 2026</span>
                    </h1>
                    <p className="pilot-hero-subtitle">
                        Step-by-step guide to a pilot career in India — eligibility, training,
                        IAF routes, salary &amp; more
                    </p>
                    <div className="pilot-hero-actions">
                        <button className="btn btn-primary">Get Free Counselling</button>
                        <button className="btn btn-secondary">Explore Courses →</button>
                    </div>
                    <div className="pilot-stats">
                        <div className="pilot-stat"><strong>17+</strong><span>Minimum Age</span></div>
                        <div className="pilot-stat"><strong>200 hrs</strong><span>Flight Hours Required</span></div>
                        <div className="pilot-stat"><strong>13%</strong><span>Job Growth by 2030</span></div>
                        <div className="pilot-stat"><strong>₹35–46L</strong><span>Training Cost</span></div>
                    </div>
                </div>
                <Image
                    src="/assets/GroundSchool.jpg"
                    alt="Pilot Training India"
                    width={900}
                    height={500}
                    className="pilot-hero-image"
                    priority
                />
            </header>

            {/* ── Badges ── */}
            <div className="pilot-badges">
                <span className="pilot-badge">✈️ CPL / PPL Pathway</span>
                <span className="pilot-badge">🪪 DGCA Approved</span>
                <span className="pilot-badge">📍 India Guide</span>
                <span className="pilot-badge">🎖️ IAF Routes Included</span>
                <span className="pilot-badge">💰 Salary Breakdown</span>
            </div>

            {/* ── Intro ── */}
            <section className="pilot-intro">
                <p>
                    Flying is a dream many hold close — captivated by the freedom, perspective,
                    and adventure it offers. If you're serious about a career as a pilot, this
                    guide covers everything: types of pilots, eligibility, selection process,
                    Indian Air Force routes, salary expectations, and training costs.
                </p>
                <p>
                    At We One Aviation Academy, we prepare students for DGCA ground exams and help
                    them chart the fastest, most affordable path to their CPL in India.
                </p>
            </section>

            {/* ── TOC ── */}
            <aside className="pilot-toc">
                <h2>Contents</h2>
                <ol>
                    <li>Types of Pilots</li>
                    <li>Eligibility Requirements</li>
                    <li>Physical Requirements</li>
                    <li>Selection Process (10 Steps)</li>
                    <li>Types of Flight Training</li>
                    <li>Advantages of Becoming a Pilot</li>
                    <li>Indian Air Force Routes</li>
                    <li>Average Pilot Salary in India</li>
                    <li>Career Outlook</li>
                    <li>Cost of Pilot Training</li>
                </ol>
            </aside>

            {/* ── Types of Pilots ── */}
            <section className="pilot-section">
                <h2>Types of Pilots</h2>
                <p>Depending on your goals, you can pursue one of these pilot roles:</p>
                <ul className="pilot-icon-list">
                    {pilotTypes.map(p => (
                        <li key={p.title}>
                            <span>{p.icon}</span>
                            <div><strong>{p.title}:</strong> {p.desc}</div>
                        </li>
                    ))}
                </ul>
                <p className="pilot-note">Each role carries its own requirements and offers unique career experiences.</p>
            </section>

            {/* ── Eligibility ── */}
            <section className="pilot-section">
                <h2>Eligibility Requirements to Become a Pilot in India</h2>
                <p>To begin your journey, you must meet the following criteria:</p>
                <ul className="pilot-icon-list">
                    <li><span>🎂</span><div><strong>Age:</strong> Minimum 17 years.</div></li>
                    <li><span>📚</span><div><strong>Education:</strong> 12th grade with Physics and Mathematics.</div></li>
                    <li><span>🩺</span><div><strong>Medical:</strong> Class 2 medical certificate from a DGCA-approved doctor.</div></li>
                </ul>

                <h3>Physical Eligibility Requirements (Male &amp; Female)</h3>
                <table className="pilot-table">
                    <thead>
                        <tr><th>Requirement</th><th>Standard (Male &amp; Female)</th></tr>
                    </thead>
                    <tbody>
                        {physicalRequirements.map(r => (
                            <tr key={r.requirement}>
                                <td>{r.requirement}</td>
                                <td>{r.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* ── Selection Process ── */}
            <section className="pilot-section">
                <h2>Selection Process to Become a Pilot</h2>
                <p>
                    The selection process assesses your physical, mental, and academic readiness
                    across multiple stages. Here's a detailed 10-step breakdown:
                </p>
                <div className="pilot-modules">
                    {selectionSteps.map(s => (
                        <div className="pilot-module" key={s.num}>
                            <span className="pilot-module-num">{s.num}</span>
                            <div>
                                <strong>{s.icon} {s.title}</strong>
                                <p>{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Types of Flight Training ── */}
            <section className="pilot-section">
                <h2>Types of Flight Training</h2>
                <ul className="pilot-icon-list">
                    <li><span>📚</span><div><strong>Ground School:</strong> Theoretical topics — aircraft systems, meteorology, air traffic control, regulations.</div></li>
                    <li><span>🛩️</span><div><strong>Flight Lessons:</strong> Hands-on flying under certified instructor supervision.</div></li>
                    <li><span>🧑‍✈️</span><div><strong>Solo Flights:</strong> A major milestone — flying the aircraft entirely on your own.</div></li>
                </ul>
            </section>

            {/* ── Advantages ── */}
            <section className="pilot-section">
                <h2>Advantages of Becoming a Pilot</h2>
                <p>Here's why thousands of students choose aviation as a career every year:</p>
                <ul className="pilot-icon-list">
                    {advantages.map(a => (
                        <li key={a.title}>
                            <span>{a.icon}</span>
                            <div><strong>{a.title}:</strong> {a.desc}</div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ── Tips ── */}
            <section className="pilot-section">
                <h2>Tips for Becoming a Pilot</h2>
                <ul className="pilot-checklist">
                    <li><strong>Start Planning Early</strong> — Research qualifications, costs, and schools. The earlier, the better.</li>
                    <li><strong>Connect with the Aviation Community</strong> — Join clubs, attend airshows, and network with pilots.</li>
                    <li><strong>Seek Mentorship</strong> — Experienced pilots give you a realistic view of training and career paths.</li>
                    <li><strong>Stay Persistent</strong> — Training is long and costly, but dedication makes the difference.</li>
                </ul>
            </section>

            {/* ── IAF Routes ── */}
            <section className="pilot-section">
                <h2>How to Become a Pilot in the Indian Air Force</h2>
                <p>
                    Prefer serving in a governmental sector? There are four key entry pathways into
                    the IAF as a pilot, each with specific eligibility, selection, and training.
                </p>
                <div className="pilot-modules">
                    {iafRoutes.map(r => (
                        <div className="pilot-module" key={r.num}>
                            <span className="pilot-module-num">{r.num}</span>
                            <div>
                                <strong>{r.icon} {r.title}</strong>
                                <p><span className="label-highlight">Eligibility: </span>{r.eligibility}</p>
                                <p><span className="label-highlight">Education: </span>{r.education}</p>
                                <p><span className="label-highlight">Selection: </span>{r.selection}</p>
                                <p><span className="label-highlight">Training: </span>{r.training}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="pilot-note" style={{ marginTop: "12px" }}>
                    For official exam details visit{" "}
                    <a href="https://upsc.gov.in/" target="_blank" rel="noopener noreferrer" className="pilot-link">upsc.gov.in</a>
                    {" "}and{" "}
                    <a href="https://afcat.cdac.in/" target="_blank" rel="noopener noreferrer" className="pilot-link">afcat.cdac.in</a>.
                </p>
            </section>

            {/* ── After 12th IAF (NDA) ── */}
            <section className="pilot-section">
                <h2>How To Become An IAF Pilot After 12th?</h2>
                <p>
                    The <strong>National Defence Academy (NDA)</strong> exam is the key path for joining
                    the IAF immediately after 12th grade.
                </p>

                <h3>Eligibility Criteria</h3>
                <ul className="pilot-icon-list">
                    <li><span>👤</span><div><strong>Gender:</strong> Unmarried male and female candidates.</div></li>
                    <li><span>🎂</span><div><strong>Age:</strong> 16.5 to 19.5 years.</div></li>
                    <li><span>📚</span><div><strong>Education:</strong> Class 12 with Physics and Mathematics from a recognized board.</div></li>
                </ul>

                <h3>Step-by-Step NDA Selection Process</h3>
                <div className="pilot-modules">
                    {ndaSteps.map(s => (
                        <div className="pilot-module" key={s.num}>
                            <span className="pilot-module-num">{s.num}</span>
                            <div><strong>{s.title}</strong><p>{s.desc}</p></div>
                        </div>
                    ))}
                </div>

                <h3>Training &amp; Career Path</h3>
                <ul className="pilot-checklist">
                    <li>Three-year intensive program at NDA, Khadakwasla — academics, physical training, military drills, and leadership development. Graduates earn a B.Tech. degree and are commissioned as PCOs.</li>
                    <li>Specialized flying training at IAF academies after NDA graduation — advanced skills to become a fully operational IAF pilot.</li>
                </ul>
            </section>

            {/* ── Salary ── */}
            <section className="pilot-section">
                <h2>Average Pilot Salary in India</h2>
                <p>
                    Pilot salaries in India range from approximately{" "}
                    <strong>₹10 lakhs to ₹50 lakhs annually</strong>, with highly experienced pilots
                    earning significantly more. Key factors: experience level, aircraft size, and airline type.
                </p>
                <table className="pilot-table">
                    <thead>
                        <tr><th>Level</th><th>Salary</th><th>Note</th></tr>
                    </thead>
                    <tbody>
                        {salaryData.map(row => (
                            <tr key={row.level}>
                                <td><strong>{row.level}</strong></td>
                                <td className="salary-highlight">{row.salary}</td>
                                <td>{row.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h3>Factors Impacting Pilot Salaries</h3>
                <ul className="pilot-icon-list">
                    <li><span>📈</span><div><strong>Experience Level:</strong> Pay packages increase considerably from junior to senior levels.</div></li>
                    <li><span>✈️</span><div><strong>Aircraft Size:</strong> Larger aircraft demand more skill — rewarded with higher pay.</div></li>
                    <li><span>🏢</span><div><strong>Type of Airline:</strong> Major carriers offer higher pay than smaller regional ones.</div></li>
                </ul>

                <div className="pilot-cta">
                    <Link href="/commercial-pilot-salary" className="btn btn-primary">
                        Country-Wise Salary Guide →
                    </Link>
                </div>
            </section>

            {/* ── Career Outlook ── */}
            <section className="pilot-section">
                <h2>Career Outlook for Pilots</h2>
                <p>
                    The Indian pilot job market is projected to grow at <strong>13%</strong> through 2030,
                    driven by fleet expansions, new routes, and a global pilot shortage.
                </p>

                <h3>Why Demand Is High</h3>
                <ul className="pilot-icon-list">
                    <li><span>🌍</span><div><strong>Expanding Aviation Industry:</strong> India is rapidly becoming a global hub with new domestic and international routes constantly added.</div></li>
                    <li><span>✈️</span><div><strong>Increasing Fleet Size:</strong> IndiGo, Air India, and SpiceJet are adding hundreds of aircraft — requiring more pilots.</div></li>
                    <li><span>🌐</span><div><strong>Global Pilot Shortage:</strong> Skilled Indian pilots are in demand both domestically and internationally.</div></li>
                </ul>

                <h3>Diverse Career Paths in Aviation</h3>
                <ul className="pilot-icon-list">
                    {careerPaths.map(c => (
                        <li key={c.title}><span>{c.icon}</span><div><strong>{c.title}:</strong> {c.desc}</div></li>
                    ))}
                </ul>
            </section>

            {/* ── Training Cost ── */}
            <section className="pilot-section">
                <h2>Cost of Pilot Training in India</h2>
                <p>
                    Pilot training typically costs between <strong>₹35 lakhs to ₹46 lakhs</strong>,
                    varying by flight school and training type. It's a significant investment for one
                    of India's highest-paying and most rewarding professions.
                </p>
                <div className="pilot-cta">
                    <Link href="/courses/cpl" className="btn btn-primary">
                        View CPL Course Fees in India →
                    </Link>
                    <p className="pilot-note">Full fee breakdown including installment options available.</p>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="pilot-footer">
                <div className="pilot-footer-links">
                    <h4>Related Guides</h4>
                    <ul>
                        <li>DGCA Exam Subjects — Complete Guide</li>
                        <li>CPL vs PPL — What's the Difference?</li>
                        <li>Commercial Pilot Salary (Country-Wise)</li>
                        <li>Best Flight Schools in India 2026</li>
                    </ul>
                </div>
                <div className="pilot-footer-right">
                    <p>
                        We One Aviation Academy — Delhi's most trusted DGCA ground classes and CPL
                        preparation institute.
                    </p>
                </div>
            </footer>

        </main>
    );
};

export default BecomeAPilotPage;