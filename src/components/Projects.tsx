import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "EcoTrack SaaS",
    description: "A comprehensive carbon footprint monitoring dashboard for enterprises with real-time analytics.",
    image: "https://picsum.photos/seed/ecotrack/800/600",
    tags: ["React", "Node.js", "PostgreSQL", "D3.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "Nexus Chat",
    description: "Real-time collaborative workspace with end-to-end encryption and file sharing capabilities.",
    image: "https://picsum.photos/seed/nexus/800/600",
    tags: ["Socket.io", "Express", "Redis", "React"],
    github: "#",
    demo: "#",
  },
  {
    title: "Quantum Portfolio",
    description: "A high-performance portfolio template for creative developers with smooth 3D transitions.",
    image: "https://picsum.photos/seed/portfolio/800/600",
    tags: ["Three.js", "Framer Motion", "Tailwind"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            A selection of my recent work, ranging from complex enterprise systems 
            to creative frontend experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group glass rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-full transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-zinc-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-zinc-100 text-zinc-600 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
