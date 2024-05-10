import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function MyComponent() {
  const [visible, setVisible] = useState(true);

  const exitAnimation = {
    opacity: 0, // Fade out to zero opacity
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={exitAnimation}
          className="w-20 h-20 bg-green-600 rounded-full cursor-pointer"
          onClick={() => setVisible(false)}
        />
      )}
    </AnimatePresence>
  );
}
