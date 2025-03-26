import { motion } from "framer-motion";
import { useState } from "react";
import './Inscriptions.css';

const inscriptions = [
  {
    id: 1,
    title: "The Sun's Lament",
    description: "A 3-foot diameter sandstone disk carved with solar symbols, showing a weeping sun deity surrounded by drought-stricken crops. Dated to approximately 200 BCE.",
    imageUrl: "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800"
  },
  {
    id: 2,
    title: "Warrior's Oath",
    description: "Basalt stele depicting armored warriors swearing blood oaths, with runic text detailing codes of honor and battlefield conduct. Features rare iron inlays.",
    imageUrl: "https://images.unsplash.com/photo-1580309237429-1954adec49bf"
  },
  {
    id: 3,
    title: "Moon Priestess Glyphs",
    description: "Lunar calendar system carved in obsidian, showing 29 ritual stations with silver inlay. Contains references to tidal patterns and nocturnal ceremonies.",
    imageUrl: "https://images.unsplash.com/photo-1588774069410-84ae307a30d4"
  },
  {
    id: 4,
    title: "The Harvest Accord",
    description: "Agricultural treaty between mountain and valley tribes, carved in limestone with wheat sheaf motifs. Details crop rotation systems and famine protocols.",
    imageUrl: "https://images.unsplash.com/photo-1603285368660-1f43b422f1f1"
  },
  {
    id: 5,
    title: "Serpent Guardian",
    description: "6-meter long relief of a feathered serpent protecting a temple complex. Features mercury-filled channels that once flowed through carved grooves.",
    imageUrl: "https://images.unsplash.com/photo-1614632537197-38d0da89d04e"
  },
  {
    id: 6,
    title: "Star Navigator's Chart",
    description: "Celestial map carved in black marble with gold leaf constellations. Shows navigation routes aligned with seasonal star patterns.",
    imageUrl: "https://images.unsplash.com/photo-1464802686167-b939a6910659"
  },
  {
    id: 7,
    title: "The Forge Master's Legacy",
    description: "Bronze-alloy plaque detailing metallurgical secrets, with embedded mineral samples. Contains warnings about volcanic glass purification rites.",
    imageUrl: "https://images.unsplash.com/photo-1611267254323-4db7b39c732c"
  },
  {
    id: 8,
    title: "River Goddess Altar",
    description: "Water-worn marble shrine showing a deity with liquid mercury hair. Inscriptions describe flood prediction methods and irrigation systems.",
    imageUrl: "https://images.unsplash.com/photo-1615228939092-32d6c2e57c3f"
  },
  {
    id: 9,
    title: "Silent Trader Pact",
    description: "Mysterious trade agreement carved in jade, detailing a silent barter system using smoke signals and obsidian mirror arrays.",
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b"
  },
  {
    id: 10,
    title: "The Bone Chronicles",
    description: "Human femur engraved with funerary rites, using a rare calcium-resistant acid etching technique. Contains warnings about improper burial practices.",
    imageUrl: "https://images.unsplash.com/photo-1611597618214-0b9e5f3d9f30"
  },
  {
    id: 11,
    title: "Eclipse Chronicle",
    description: "Granite slab recording 142 solar eclipses over 900 years, with silver inlay showing planetary alignments. Includes predictions up to 450 CE.",
    imageUrl: "https://images.unsplash.com/photo-1545156521-77bd85671d30"
  },
  {
    id: 12,
    title: "The Glass Forest",
    description: "Fulgurite formation covered in microscopic carvings, describing sacred lightning rituals and obsidian mirror divination techniques.",
    imageUrl: "https://images.unsplash.com/photo-1587572205710-45f8c8b6a0ec"
  },
  {
    id: 13,
    title: "Anchorite's Confession",
    description: "Hermit's cave wall covered in 10,000 ritual scarification marks forming text. Describes visions from extended sensory deprivation.",
    imageUrl: "https://images.unsplash.com/photo-1581503395145-d2b7f6a50d34"
  },
  {
    id: 14,
    title: "Salt Merchant's Map",
    description: "Halite crystal cluster engraved with trade routes and purification rites. Shows underground brine rivers and desert navigation marks.",
    imageUrl: "https://images.unsplash.com/photo-1583845110439-ae7163d23a87"
  },
  {
    id: 15,
    title: "The Weaver's Prophecy",
    description: "Loom weights carved with meteorological predictions based on cloud patterns. Contains textile fragments preserved in amber resin.",
    imageUrl: "https://images.unsplash.com/photo-1618236707385-854e0c9f3c6e"
  }
];

const Inscriptions = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="inscrip_page">


      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3
            }
          }
        }}
      >
        {inscriptions.map((inscription) => (
          <motion.div
          key={inscription.id}
          className="relative group rounded-2xl overflow-hidden bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer h-96 card-container"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          layout
        >
        
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url(${inscription.imageUrl})` }}
            />
            <div className="relative z-20 p-6 h-full flex flex-col justify-end">
              <motion.h2 
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {inscription.title}
              </motion.h2>
              <motion.p 
                className="text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {inscription.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default Inscriptions;