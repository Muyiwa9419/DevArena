import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-xl font-bold text-gradient tracking-tighter">
              DEV.POINT
            </a>
            <p className="mt-2 text-zinc-600 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-600 hover:text-zinc-900 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-zinc-600 hover:text-zinc-900 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-zinc-600 hover:text-zinc-900 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-zinc-600 hover:text-zinc-900 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
