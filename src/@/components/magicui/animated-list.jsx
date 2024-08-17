// Todo: Original from Magic Ui
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const AnimatedList = React.memo(({ className, children, delay = 2000 }) => {
  const [index, setIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
    }, delay);

    return () => clearInterval(interval);
  }, [childrenArray.length, delay]);

  const itemsToShow = useMemo(() => childrenArray.slice(0, index + 1).reverse(), [index, childrenArray]);

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <AnimatePresence>
        {itemsToShow.map((item) => (
          <AnimatedListItem key={item.key}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
});

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}


// Todo: Perfect - Top motion animation stops and shift animation happens
// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// export const AnimatedList = React.memo(({ className, children, delay = 1500 }) => {
//   const [index, setIndex] = useState(0);
//   const childrenArray = React.Children.toArray(children);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
//     }, delay);

//     return () => clearInterval(interval);
//   }, [childrenArray.length, delay]);

//   const itemsToShow = useMemo(() => childrenArray.slice(0, index + 1).reverse(), [index, childrenArray]);

//   return (
//     <div className={`flex flex-col items-center gap-4 ${className}`}>
//       <AnimatePresence>
//         {itemsToShow.map((item, idx) => (
//           <AnimatedListItem key={idx}>
//             {item}
//           </AnimatedListItem>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// });

// AnimatedList.displayName = "AnimatedList";

// export function AnimatedListItem({ children }) {
//   const animations = {
//     initial: { y: 20, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//     exit: { y: 20, opacity: 0 },
//     transition: { type: "spring", stiffness: 350, damping: 40 },
//   };

//   return (
//     <motion.div {...animations} layout className="mx-auto w-full">
//       {children}
//     </motion.div>
//   );
// }
