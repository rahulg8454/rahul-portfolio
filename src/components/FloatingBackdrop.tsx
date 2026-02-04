import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Fixed, site-wide parallax backdrop.
 * Keeps all content fully visible on load (purely decorative, pointer-events none).
 */
const FloatingBackdrop = () => {
  const { scrollY } = useScroll();

  const orb1Y = useTransform(scrollY, [0, 1200], [0, 140]);
  const orb2Y = useTransform(scrollY, [0, 1200], [0, -180]);
  const orb3Y = useTransform(scrollY, [0, 1200], [0, 220]);
  const hazeY = useTransform(scrollY, [0, 1200], [0, 90]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Starfield */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--foreground) / 0.18) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 50% 30%, transparent 0%, hsl(var(--background) / 0.65) 60%, hsl(var(--background)) 100%)",
        }}
      />

      {/* Moving haze */}
      <motion.div
        style={{ y: hazeY }}
        className="absolute -top-24 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full blur-3xl bg-primary/10"
      />

      {/* Floating orbs */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-[12%] left-[8%] h-72 w-72 rounded-full blur-3xl bg-primary/20 animate-float"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute top-[18%] right-[10%] h-60 w-60 rounded-full blur-3xl bg-accent/15 animate-float"
      />
      <motion.div
        style={{ y: orb3Y }}
        className="absolute bottom-[10%] left-[18%] h-80 w-80 rounded-full blur-3xl bg-secondary/20 animate-float"
      />

      {/* Tiny drifting particles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        {Array.from({ length: 18 }).map((_, i) => {
          const left = `${(i * 37) % 100}%`;
          const top = `${(i * 19) % 100}%`;
          const size = i % 3 === 0 ? 6 : i % 3 === 1 ? 4 : 3;
          const opacity = i % 3 === 0 ? 0.35 : i % 3 === 1 ? 0.25 : 0.18;
          const duration = 6 + (i % 5);
          const delay = (i % 7) * 0.4;

          return (
            <motion.span
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className="absolute rounded-full bg-foreground/20"
              style={{
                left,
                top,
                width: size,
                height: size,
                opacity,
              }}
              animate={{
                y: [0, -18, 0],
                x: [0, i % 2 === 0 ? 10 : -10, 0],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default FloatingBackdrop;
