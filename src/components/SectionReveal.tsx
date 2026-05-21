"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: SectionRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: direction === "up" ? 28 : 0,
        x: direction === "left" ? -28 : direction === "right" ? 28 : 0,
      }}
      animate={
        inView
          ? { opacity: 1, y: 0, x: 0 }
          : {
              opacity: 0,
              y: direction === "up" ? 28 : 0,
              x: direction === "left" ? -28 : direction === "right" ? 28 : 0,
            }
      }
      transition={{
        duration: 0.75,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
