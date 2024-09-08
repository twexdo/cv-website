import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    });

    return () => unsubscribe();
  }, [scrollY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-8 left-0 right-0 mx-auto z-50 w-max"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
    >
      <ChevronDown size={32} className="text-gray-600" />
    </motion.div>
  );
};

export default ScrollIndicator;
