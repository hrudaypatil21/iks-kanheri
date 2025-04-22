import React from "react";
import "./Architecture.css";
import InfoCards from "./InfoCards";

export default function Architecture() {
  const CAVE_DATA = [
    {
      id: 1,
      name: "Cave 3 - The Grand Chaitya",
      info: "The most impressive cave at Kanheri, featuring a large prayer hall with 34 pillars and a stupa. The vaulted ceiling mimics wooden architecture in stone, dating back to 2nd century BCE.",
      details: [
        "Type: Rock-cut chaitya-griha (prayer hall)",
        "Layout: Apsidal plan with vaulted ceiling and central stupa",
        "Columns: 34 octagonal pillars with simple capitals",
        "Entrance: Elaborate façade with horseshoe-shaped chaitya window"
      ],
      image: "src/assets/Grottes_de_Kanheri_-_Grotte_3.jpg"
    },
    {
      id: 2,
      name: "Cave 11 - The Monastery",
      info: "A three-story vihara with multiple cells for monks, water cisterns, and carved benches. Features inscriptions from the 3rd century CE.",
      details: [
        "Type: Simple vihara (monastic dwelling)",
        "Layout: Square hall with rock-cut monk cells",
        "Entrance: Plain doorway with minimal ornamentation",
        "Special Feature: Later Buddha image addition"
      ],
      image: "src/assets/ksp_6903.jpg"
    },
    {
      id: 3,
      name: "Cave 34 - The Buddha Cave",
      info: "Late period cave (6th-7th century CE) featuring large Buddha images in niches and elaborate carvings showing Mahayana Buddhist influence.",
      details: [
        "Type: Multi-story monastic complex",
        "Layout: Pillared verandah leading to cells",
        "Columns: Square pillars with bracket capitals",
        "Special Feature: Central shrine with seated Buddha"
      ],
      image: "src/assets/ksp_6926.jpg"
    }
  ];

  return (
    <div className="architecture-page">
      {/* Header Section */}
      <header className="architecture-header">
        <h1>Architectural Marvels of Kanheri Caves</h1>
        <p className="subtitle">
          The Kanheri Caves are a group of rock-cut monuments shaped from a
          single basalt rock in the forests of the Sanjay Gandhi National
          Park, Mumbai, India.
        </p>
      </header>

      {/* Intro Content Section */}
      <section className="architecture-section">
        <div className="architecture-intro">
          <h2 className="section-title">Historical Significance</h2>
          <div className="intro-content">
            <p className="intro-text">
              Managed by the Archaeological Survey of India, these caves
              represent one of the most significant Buddhist heritage sites in
              Western India.
            </p>
            <p className="intro-text">
              The complex comprises 109 caves carved into the basalt rock,
              with about 30 featuring remarkable architectural elements.
            </p>
            <p className="intro-text">
              The architecture showcases a unique synthesis of ancient Indian
              rock-cut techniques with Greco-Buddhist artistic influences.
            </p>
          </div>
        </div>
        <div className="architecture-image">
          <img
            src="src/assets/kanheri-caves.jpg"
            alt="Architectural details of Kanheri Caves"
            className="featured-image"
          />
        </div>
      </section>

      {/* Cave Cards Section */}
      <section className="caves-section">
        <h2 className="section-title">Notable Caves</h2>
        <InfoCards caves={CAVE_DATA} />
      </section>
    </div>
  );
}