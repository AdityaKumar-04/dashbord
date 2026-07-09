"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainerVariant, fadeUpVariant } from "@/lib/animations";
import Pagetitle from "@/components/Pagetitle";
import { ExternalLink, Github, Search } from "lucide-react";
import Image from "next/image";

const MOCK_PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing e-commerce sales, inventory, and users with real-time analytics.",
    image: "https://api.dicebear.com/9.x/shapes/svg?seed=dashboard",
    tech: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    github: "#",
    demo: "#",
    category: "Full-Stack"
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "A SaaS application that generates high-quality images from text descriptions using Stable Diffusion APIs.",
    image: "https://api.dicebear.com/9.x/shapes/svg?seed=ai",
    tech: ["React", "Node.js", "OpenAI API", "Prisma"],
    github: "#",
    demo: "#",
    category: "AI"
  },
  {
    id: 3,
    title: "3D Portfolio",
    description: "An immersive 3D portfolio experience built with WebGL and React Three Fiber to showcase creative projects.",
    image: "https://api.dicebear.com/9.x/shapes/svg?seed=portfolio",
    tech: ["Three.js", "R3F", "Framer Motion", "GSAP"],
    github: "#",
    demo: "#",
    category: "Frontend"
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A collaborative Kanban board application with real-time updates and team workspace management.",
    image: "https://api.dicebear.com/9.x/shapes/svg?seed=kanban",
    tech: ["Vue.js", "Firebase", "Tailwind", "Pinia"],
    github: "#",
    demo: "#",
    category: "Frontend"
  }
];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Frontend", "Full-Stack", "AI"];

  const filteredProjects = MOCK_PROJECTS.filter(p => 
    (filter === "All" || p.category === filter) &&
    (p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex flex-col gap-8 w-full relative z-10 min-h-screen py-4 pb-20">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="show"
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
        <div className="flex flex-col gap-2">
          <Pagetitle
            title="Projects"
            className="tracking-tight text-3xl font-bold text-white mb-1"
          />
          <p className="text-slate-400 text-sm max-w-2xl">
            A showcase of my recent work, open-source contributions, and side projects.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search projects..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-black/30 border border-white/10 rounded-full pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors w-full sm:w-48"
            />
          </div>
        </div>
      </motion.div>

      <motion.div 
        variants={fadeUpVariant}
        initial="hidden"
        animate="show"
        className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
      >
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filter === cat 
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" 
                : "bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <motion.section
        variants={staggerContainerVariant}
        initial="hidden"
        animate="show"
        className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project) => (
          <motion.div 
            key={project.id} 
            variants={fadeUpVariant}
            className="group flex flex-col rounded-xl overflow-hidden border border-white/10 bg-black/20 hover:border-white/20 transition-all duration-300"
          >
            <div className="relative w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />
            </div>
            
            <div className="flex flex-col p-5 flex-1">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2 shrink-0">
                  <a href={project.github} className="p-1.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors" title="GitHub Repository">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={project.demo} className="p-1.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors" title="Live Demo">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <p className="text-sm text-slate-400 mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] uppercase tracking-wider font-medium text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
        
        {filteredProjects.length === 0 && (
          <div className="col-span-full py-20 flex flex-col items-center justify-center text-slate-500">
            <Search className="w-12 h-12 mb-4 opacity-20" />
            <p>No projects found matching your criteria.</p>
          </div>
        )}
      </motion.section>
    </div>
  );
}
