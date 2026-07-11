import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function Background() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#04050B]">

      {/* Mouse Glow */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="absolute w-[420px] h-[420px]
        rounded-full
        bg-cyan-400/10
        blur-[120px]"
      />

      {/* Left Aurora */}
      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -60, 40, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        -top-40
        -left-60
        w-[900px]
        h-[900px]
        rounded-full
        bg-cyan-400/20
        blur-[220px]"
      />

      {/* Right Aurora */}
      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 70, -40, 0],
          rotate: [0, -12, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        -bottom-52
        -right-56
        w-[850px]
        h-[850px]
        rounded-full
        bg-violet-500/20
        blur-[220px]"
      />
            {/* Top Aurora Ribbon */}
      <motion.div
        animate={{
          x: [-180, 180, -180],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-10
        left-1/2
        -translate-x-1/2
        w-[1400px]
        h-[240px]
        rounded-full
        bg-gradient-to-r
        from-transparent
        via-cyan-400/20
        to-transparent
        blur-[120px]"
      />

      {/* Bottom Aurora Ribbon */}
      <motion.div
        animate={{
          x: [180, -180, 180],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2
        w-[1300px]
        h-[220px]
        rounded-full
        bg-gradient-to-r
        from-transparent
        via-violet-500/20
        to-transparent
        blur-[120px]"
      />

      {/* Ambient Center Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[500px]
        h-[500px]
        rounded-full
        bg-blue-400/10
        blur-[180px]"
      />

      {/* Cyan Floating Glow */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 30, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-[20%]
        left-[18%]
        w-[220px]
        h-[220px]
        rounded-full
        bg-cyan-300/20
        blur-[90px]"
      />

      {/* Violet Floating Glow */}
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-[18%]
        right-[18%]
        w-[220px]
        h-[220px]
        rounded-full
        bg-violet-400/20
        blur-[90px]"
      />
            {/* Soft Mesh Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_70%)]"
      />

      {/* Noise Overlay */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        mix-blend-soft-light"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, white 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, white 1px, transparent 1px),
            radial-gradient(circle at 50% 40%, white 1px, transparent 1px)
          `,
          backgroundSize: "180px 180px",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}

export default Background;