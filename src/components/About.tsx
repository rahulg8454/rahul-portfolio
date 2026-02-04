import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          LET ME <span className="text-primary">INTRODUCE</span> MYSELF
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            <motion.div style={{ y }} className="relative">
              {/* Glowing background */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/40 via-primary/20 to-accent/30 rounded-full blur-3xl opacity-60" />
              
              {/* Image container with border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/30">
                <img
                  src={profileImage}
                  alt="Rahul Gupta"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-pulse" />
            </motion.div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 order-1 lg:order-2"
          >
            {/* Purple circle background */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/20 blur-3xl -z-10" />
            
            <div className="space-y-6">
             <p className="text-purple-100/90 mb-3">
  I started programming in school and eventually moved into web development during my B.Tech in CSE/IT. I enjoy turning ideas into working products.
</p>
<p className="text-purple-100/90 mb-3">
  These days I mostly work with <span className="text-purple-300 font-semibold">C++</span> for DSA and
  <span className="text-purple-300 font-semibold"> JavaScript / TypeScript</span> for frontend work.
</p>
<p className="text-purple-100/90 mb-3">
  I&apos;m interested in building scalable web apps, experimenting with
  <span className="text-purple-300 font-semibold"> AI tools</span>, and understanding how tech and business come together in real products.
</p>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
