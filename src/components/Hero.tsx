import { motion } from "motion/react";
import { ArrowRight, Code2, Cpu, Download, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 mb-6">
              Available for new opportunities
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Building <span className="text-gradient">Scalable</span> <br />
              Digital Experiences
            </h1>
            <p className="max-w-2xl mx-auto text-zinc-600 text-lg md:text-xl mb-10 leading-relaxed">
              Full-stack developer specializing in modern web technologies. 
              I turn complex problems into elegant, high-performance solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 glass hover:bg-zinc-100 text-zinc-900 font-semibold rounded-xl transition-all"
            >
              Get in Touch
            </a>
            <a
              href="/cv.txt"
              download="David_Muyiwa_CV.txt"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
            >
              Download CV
              <Download size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Globe, title: "Frontend", desc: "React, Next.js, Tailwind CSS" },
              { icon: Cpu, title: "Backend", desc: "Node.js, Express, PostgreSQL" },
              { icon: Code2, title: "Tools", desc: "Docker, AWS, CI/CD" },
            ].map((item, i) => (
              <div key={i} className="p-6 glass rounded-2xl text-left hover:border-emerald-500/30 transition-colors">
                <item.icon className="text-emerald-600 mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
