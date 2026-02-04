import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "BrightBolt",
    subtitle: "Quiz Management System",
    description:
      "A full-featured MERN stack quiz platform with admin/user roles, timed quizzes, and comprehensive analytics dashboard.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/rahulg8454/BrightBolt",
  },
  {
    title: "Job Application Tracker",
    subtitle: "Career Management Tool",
    description:
      "A secure application tracking system with JWT authentication, password hashing, REST APIs, and full CRUD operations.",
    tags: ["JWT", "REST API", "Node.js", "MongoDB"],
    github: "https://github.com/rahulg8454/job-application-tracker",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background accent */}
      <div
        className="absolute top-1/3 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.2s" }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium">{project.subtitle}</p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors"
                >
                  <Github className="w-5 h-5 text-foreground" />
                </a>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;