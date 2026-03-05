import { motion } from "motion/react";

const skills = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "PostgreSQL", level: 85, category: "Backend" },
  { name: "Tailwind CSS", level: 98, category: "Frontend" },
  { name: "Next.js", level: 92, category: "Frontend" },
  { name: "Docker", level: 75, category: "Tools" },
  { name: "GraphQL", level: 80, category: "Backend" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-zinc-600">
              A comprehensive toolkit built through years of experience in building 
              production-ready applications.
            </p>
          </div>
          <div className="text-emerald-600 font-mono text-sm">
            // Continuous Learning
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-zinc-600 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-zinc-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
