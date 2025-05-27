// import { useEffect, useRef, useState } from "react";
// import { motion as _motion, AnimatePresence } from "framer-motion";

// const TrueFocus = ({
//   sentence = "True Focus",
//   manualMode = false,
//   blurAmount = 5,
//   borderColor = "green",
//   glowColor = "rgba(0, 255, 0, 0.6)",
//   animationDuration = 0.5,
//   pauseBetweenAnimations = 1,
// }) => {
//   const words = sentence.split(" ");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [lastActiveIndex, setLastActiveIndex] = useState(null);
//   const containerRef = useRef(null);
//   const wordRefs = useRef([]);
//   const [focusRect, setFocusRect] = useState({
//     x: 0,
//     y: 0,
//     width: 10,
//     height: 10,
//   });

//   useEffect(() => {
//     if (!manualMode) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % words.length);
//       }, (animationDuration + pauseBetweenAnimations) * 1000);

//       return () => clearInterval(interval);
//     }
//   }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       if (
//         currentIndex === null ||
//         currentIndex === -1 ||
//         !wordRefs.current[currentIndex] ||
//         !containerRef.current
//       )
//         return;

//       const parentRect = containerRef.current.getBoundingClientRect();
//       const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

//       setFocusRect({
//         x: activeRect.left - parentRect.left,
//         y: activeRect.top - parentRect.top,
//         width: activeRect.width,
//         height: activeRect.height,
//       });
//     }, 50); // delay nhẹ để chờ render

//     return () => clearTimeout(timeout);
//   }, [currentIndex, words.length]);

//   const handleMouseEnter = (index) => {
//     if (manualMode) {
//       setLastActiveIndex(index);
//       setCurrentIndex(index);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (manualMode) {
//       setCurrentIndex(lastActiveIndex);
//     }
//   };

//   return (
//     <div
//       className="relative flex gap-4 justify-center items-center flex-wrap min-h-[32px]"
//       ref={containerRef}
//     >
//       {words.map((word, index) => {
//         const isActive = index === currentIndex;
//         return (
//           <span
//             key={index}
//             ref={(el) => (wordRefs.current[index] = el)}
//             className="relative text-[1.1rem] font-black cursor-pointer"
//             style={{
//               filter: manualMode
//                 ? isActive
//                   ? `blur(0px)`
//                   : `blur(${blurAmount}px)`
//                 : isActive
//                 ? `blur(0px)`
//                 : `blur(${blurAmount}px)`,
//               "--border-color": borderColor,
//               "--glow-color": glowColor,
//               transition: `filter ${animationDuration}s ease`,
//             }}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//           >
//             {word}
//           </span>
//         );
//       })}

//       <AnimatePresence>
//         {focusRect.width > 0 && focusRect.height > 0 && (
//           <motion.div
//             className="absolute top-0 left-0 pointer-events-none box-border border-0"
//             animate={{
//               x: focusRect.x,
//               y: focusRect.y,
//               width: focusRect.width,
//               height: focusRect.height,
//               opacity: currentIndex >= 0 ? 1 : 0,
//             }}
//             transition={{
//               duration: animationDuration,
//             }}
//             style={{
//               "--border-color": borderColor,
//               "--glow-color": glowColor,
//             }}
//           >
//             <span
//               className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
//               style={{
//                 borderColor: "var(--border-color)",
//                 filter: "drop-shadow(0 0 4px var(--border-color))",
//               }}
//             ></span>
//             <span
//               className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
//               style={{
//                 borderColor: "var(--border-color)",
//                 filter: "drop-shadow(0 0 4px var(--border-color))",
//               }}
//             ></span>
//             <span
//               className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
//               style={{
//                 borderColor: "var(--border-color)",
//                 filter: "drop-shadow(0 0 4px var(--border-color))",
//               }}
//             ></span>
//             <span
//               className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
//               style={{
//                 borderColor: "var(--border-color)",
//                 filter: "drop-shadow(0 0 4px var(--border-color))",
//               }}
//             ></span>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default TrueFocus;
