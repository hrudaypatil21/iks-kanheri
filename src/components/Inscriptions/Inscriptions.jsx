import { motion } from "framer-motion";
import { useState } from "react";
import './Inscriptions.css';

const inscriptions = [
    {
      id: 1,
      title: "Donative Inscriptions",
      description: "These inscriptions mention donations by kings, monks, traders, and laypeople for building caves, stupas, and water cisterns. ",
      imageUrl: "https://fl-i.thgim.com/public/incoming/7rjgx9/article65870669.ece/alternates/FREE_1200/Kanheri_Caves02.jpg",
    },
    {
      id: 2,
      title: "Cave 3: Grand Chaitya Cave",
      description: "- Mentions a donation by Bhadrabahutra, son of a merchant, for constructing the chaitya. A Satavahana-era inscription credits a donor for contributing towards the prayer hall.",
      imageUrl: "https://images.livemint.com/img/2022/12/16/original/Kanheri_Caves_Cave_3_1671193435643.jpg",
    },
    {
      id: 3,
      title: "Cave 11: Vihara - The Monastery",
      description: "- Records a donation by a merchant for constructing a *monastic residence. Mentions financial support from Buddhist monks and traders. ",
      imageUrl: "https://thumbs.dreamstime.com/b/verandah-aurangabad-cave-th-century-vihara-monastery-aurangabad-caves-western-group-details-columns-india-aurangabad-229581074.jpg",
    },
    {
      id: 4,
      title: "Cave 81",
      description: "Contains a 6th-century Sanskrit inscription mentioning a donor from Gujarat. .",
      imageUrl: "https://tapioca.co.in/wp-content/uploads/2010/12/kanheri-caves-mumbai-0081.jpg",
    },
    {
      id: 5,
      title: "Cave 9",
      description: "A Devanagari inscription from the Shilahara period (9th-10th century CE) records a donation for maintenance. ",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Kanheri_Caves_%2818%29.JPG/330px-Kanheri_Caves_%2818%29.JPG",
    },
    {
      id: 6,
      title: "Royal Patronage Inscriptions",
      description: "These inscriptions confirm political support from local and foreign rulers.",
      imageUrl: "https://kevinstandagephotography.wordpress.com/wp-content/uploads/2018/05/ksp_6924.jpg?w=890",
    },
    {
      id: 7,
      title: "Cave 41",
      description: "Satavahana-era inscription (1st-2nd century CE) mentions donations by the Satavahana kings, who were great patrons of Buddhism.",
      imageUrl: "https://ts4.mm.bing.net/th?id=OIP.yrTtJexMpFrzlnCt_b-_JAHaE8&pid=15.1",
    },
    {
      id: 8,
      title: "Cave 66",
      description: "Shilahara dynasty inscription (9th-10th century CE) details their continued patronage of the monastery.",
      imageUrl: "https://ts4.mm.bing.net/th?id=OIP.LwHC0PtvB79jB1EqVefeGgHaE7&pid=15.1",
    },
    {
      id: 9,
      title: "Cave 87",
      description: " A Greek-origin merchant’s donation recorded in Prakrit. ",
      imageUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/04/44/87.jpg",
    },
    {
      id: 10,
      title: "*Cave 5",
      description: "Mentions a guild of traders who contributed to the cave’s development. ",
      imageUrl: "https://static.india.com/wp-content/uploads/2023/06/kanheri-caves.jpg",
    },
    {
      id: 11,
      title: "Cave 90",
      description: "A Sanskrit inscription describes the Buddhist code of conduct.",
      imageUrl: "https://i0.wp.com/kevinstandagephotography.wordpress.com/wp-content/uploads/2018/05/ksp_7127-2.jpg?w=886&h=454&ssl=1",
    },
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