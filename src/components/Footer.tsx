import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Heart } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/rahulg8454",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rahul-gupta-077526277/",
    icon: Linkedin,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/therahulg/",
    icon: Code2,
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Feel free to reach out for collaborations, freelance opportunities, or just a friendly chat!
          </p>

          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                aria-label={link.name}
              >
                <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Made 
           by Rahul Gupta</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;