import { motion } from "motion/react";
import { Award, BookOpen, Coffee, Heart } from "lucide-react";

export default function About() {
  const stats = [
    { icon: BookOpen, label: "Education", value: "B.Sc. Computer Science" },
    { icon: Award, label: "Experience", value: "5+ Years" },
    { icon: Coffee, label: "Projects", value: "50+ Completed" },
    { icon: Heart, label: "Interests", value: "Open Source, AI" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass p-2">
              <img
                src="https://picsum.photos/seed/developer/800/800"
                alt="Developer Portrait"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-4 text-zinc-600 text-lg leading-relaxed">
              <p>
                Hello! I'm a passionate Full-Stack Developer with a deep love for creating 
                seamless digital experiences. My journey in tech started with a curiosity 
                about how things work under the hood, which evolved into a career dedicated 
                to building robust and scalable applications.
              </p>
              <p>
                I thrive at the intersection of design and engineering, ensuring that every 
                line of code I write contributes to a user-centric and high-performance product. 
                Whether it's architecting complex backends or crafting pixel-perfect frontends, 
                I bring a meticulous eye for detail and a commitment to excellence.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-emerald-500/10 rounded-lg text-emerald-600">
                    <stat.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      {stat.label}
                    </p>
                    <p className="font-semibold text-zinc-900">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
