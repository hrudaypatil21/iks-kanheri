// import React, { useState } from "react";
// import { initializeIcons } from "@fluentui/react/lib/Icons";
// import {
//   ThemeProvider,
//   createTheme,
//   Stack,
//   Text,
//   Image,
//   PrimaryButton,
//   IconButton,
//   mergeStyleSets,
// } from "@fluentui/react";
// import { motion } from "framer-motion";
// import "./Inscriptions.css";

// initializeIcons();

// const darkTheme = createTheme({
//   palette: {
//     themePrimary: "#0078d4",
//     themeDarker: "#004578",
//     themeDark: "#005a9e",
//     themeDarkAlt: "#106ebe",
//     neutralLighter: "#292929",
//     neutralLight: "#252525",
//     neutralQuaternaryAlt: "#222222",
//     neutralTertiaryAlt: "#1d1d1d",
//     neutralTertiary: "#c8c8c8",
//     neutralPrimary: "#ffffff",
//     black: "#f8f8f8",
//     white: "#1b1b1b",
//   },
// });

// const styles = mergeStyleSets({
//   container: {
//     width: "100%",
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "rgba(18, 18, 18, 0.8)",
//     backdropFilter: "blur(15px)",
//     padding: 20,
//     boxSizing: "border-box",
//   },
//   card: {
//     maxWidth: "800px",
//     width: "100%",
//     textAlign: "center",
//     background: "rgba(255, 255, 255, 0.1)",
//     backdropFilter: "blur(10px)",
//     borderRadius: "15px",
//     padding: "20px",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//   },
//   image: {
//     maxWidth: "100%",
//     maxHeight: "400px",
//     borderRadius: "10px",
//     boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.2)",
//     marginBottom: "20px",
//   },
//   button: {
//     marginTop: 15,
//     padding: "10px 15px",
//     borderRadius: 6,
//     fontSize: 16,
//     cursor: "pointer",
//     transition: "background 0.3s ease-in-out",
//     background: "#0078d4",
//     color: "white",
//     border: "none",
//   },
//   pagination: {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "20px",
//   },
//   dot: {
//     height: "12px",
//     width: "12px",
//     background: "#bbb",
//     borderRadius: "50%",
//     display: "inline-block",
//     margin: "0 6px",
//     cursor: "pointer",
//     transition: "transform 0.3s, background 0.3s",
//   },
//   activeDot: {
//     background: "#0078d4",
//   },
// });

// const Inscriptions = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextInscription = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === inscriptionsData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevInscription = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? inscriptionsData.length - 1 : prevIndex - 1
//     );
//   };

//   const currentInscription = inscriptionsData[currentIndex];

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Stack horizontalAlign="center" className={styles.container}>
//         <motion.div
//           className={styles.card}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Text variant="xxLarge">Kanheri Caves Inscriptions</Text>

//           <Stack horizontal tokens={{ childrenGap: 20 }} verticalAlign="center">
//             <IconButton
//               iconProps={{ iconName: "ChevronLeft" }}
//               onClick={prevInscription}
//             />

//             <Stack>
//               <Text variant="xLarge">{currentInscription.title}</Text>
//               <Image
//                 src={currentInscription.image}
//                 alt={currentInscription.title}
//                 className={styles.image}
//               />
//               <Text>{currentInscription.description}</Text>
//             </Stack>

//             <IconButton
//               iconProps={{ iconName: "ChevronRight" }}
//               onClick={nextInscription}
//             />
//           </Stack>

//           <Stack horizontal className={styles.pagination}>
//             {inscriptionsData.map((_, index) => (
//               <motion.span
//                 key={index}
//                 className={`${styles.dot} ${
//                   index === currentIndex ? styles.activeDot : ""
//                 }`}
//                 onClick={() => setCurrentIndex(index)}
//                 whileHover={{ scale: 1.2 }}
//               />
//             ))}
//           </Stack>
//         </motion.div>
//       </Stack>
//     </ThemeProvider>
//   );
// };

// export default Inscriptions;
