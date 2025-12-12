import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

export default function WhoUsesEduAidBackgroundOrnaments() {
  const containerRef = useRef(null);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // All lines animate together starting earlier, taking longer to complete (0.3 to 0.7 range)
  const scrollBasedPathLength = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  // Monitor scroll progress and lock animation at completion
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.7 && !animationCompleted) {
      setAnimationCompleted(true);
    }
  });

  // Use completed state or scroll-based animation
  const pathLength = animationCompleted ? 1 : scrollBasedPathLength;

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none -z-5">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Top layer - Lemon */}
        <motion.path
          d="
            M 100 35
            C 80 45, 55 30, 35 50
            S 75 70, 80 85
            S 35 95, 0 95
          "
          className="fill-none stroke-[#E7E9A0] [stroke-width:2.5] [stroke-linecap:round] [stroke-linejoin:round] opacity-100"
          style={{ pathLength }}
        />
        {/* Mint-Green layer */}
        <motion.path
          d="
            M 105 30
            C 85 50, 50 20, 30 40
            S 80 60, 85 80
            S 30 90, 0 90
          "
          className="fill-none stroke-[#7EDC89] [stroke-width:4] [stroke-linecap:round] [stroke-linejoin:round] opacity-100"
          style={{ pathLength }}
        />
        {/* Coral layer */}
        <motion.path
          d="
            M 115 3
            C 100 65, 35 5, 15 25
            S 95 45, 100 65
            S 15 75, -5 75
          "
          className="fill-none stroke-[#FF9F80] [stroke-width:2] [stroke-linecap:round] [stroke-linejoin:round] opacity-100"
          style={{ pathLength }}
        />
        {/* Bright Blue layer */}
        <motion.path
          d="
            M 105 0
            C 90 55, 45 15, 25 35
            S 85 55, 90 75
            S 25 85, -5 85
          "
          className="fill-none stroke-[#00A4FF] [stroke-width:3] [stroke-linecap:round] [stroke-linejoin:round] opacity-100"
          style={{ pathLength }}
        />
        {/* Deep Teal layer - bottom */}
        <motion.path
          d="
            M 110 0
            C 95 60, 40 10, 20 30
            S 90 50, 95 70
            S 20 80, 0 80
          "
          className="fill-none stroke-[#00827A] [stroke-width:5] [stroke-linecap:round] [stroke-linejoin:round] opacity-100"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}
