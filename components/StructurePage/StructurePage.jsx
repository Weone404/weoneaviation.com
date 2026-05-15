// components/StructurePage.jsx
import "./style.css";
import Link from "next/link";
import { locations } from "@/data/locations";

const StructurePage = ({ data }) => {
    if (!data) {
        return <p style={{ textAlign: "center", padding: "2rem" }}>No data available</p>;
    }

    return (
        <div className="page-container">

            {/* Hero Section */}
            <div
                className="hero-section"
                style={{
                    backgroundImage: `url(${data.hero?.background || ""})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "50px 20px",
                    color: "#000000ff",
                    textAlign: "center",
                }}
            >
                <h1 className="page-title">{data.hero?.title}</h1>
                <p className="page-subtitle">{data.hero?.subtitle}</p>
            </div>

            {/* Two Column Layout */}
            <div className="main-layout">

                {/* Left Menu — auto-generated from locations.js */}
                <aside className="menu-section">
                    <h3>Pilot Training States</h3>
                    <ul className="menu-list">
                        {locations.map((loc, index) => (
                            <li key={index}>
                                <Link href={`/pilot-training-in-${loc.slug}`}>
                                    Pilot Training in {loc.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Right Content */}
                <div className="content-section">
                    {data.sections?.map((section, index) => (
                        <div key={index} className="section-block">
                            <h2>{section.title}</h2>

                            {section.paragraphs?.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}

                            {section.list?.length > 0 && (
                                <ul>
                                    {section.list.map((listItem, i) => (
                                        <li key={i}>
                                            <strong>{listItem.title}:</strong> {listItem.text}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default StructurePage;