import { motion, useScroll, useTransform } from "framer-motion";
import { Download } from "lucide-react";
import { useRef } from "react";

const Resume = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="resume" ref={sectionRef} className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          MY <span className="text-primary">RESUME</span>
        </motion.h2>

        {/* Top Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <a
            href="/resume.pdf"
            download="Rahul_Gupta_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 animate-pulse-glow"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </motion.div>

        {/* Resume Embed */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto"
        >
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl blur-sm opacity-50" />
          
          <div className="relative bg-card rounded-2xl overflow-hidden border border-border shadow-2xl">
            <img
              src="/resume-preview.png"
              alt="Rahul Gupta Resume"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Bottom Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-8"
        >
          <a
            href="/resume.pdf"
            download="Rahul_Gupta_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 animate-pulse-glow"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
