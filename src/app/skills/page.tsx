"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainerVariant, fadeUpVariant } from "@/lib/animations";
import Pagetitle from "@/components/Pagetitle";
import { Terminal, LayoutTemplate, Database, PenTool } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    icon: LayoutTemplate,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
      { name: "Three.js / WebGL", level: 75 },
    ]
  },
  {
    title: "Backend Development",
    icon: Terminal,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "Python / Django", level: 80 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 70 },
    ]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 70 },
      { name: "AWS / Vercel", level: 85 },
    ]
  },
  {
    title: "Tools & Workflow",
    icon: PenTool,
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 75 },
      { name: "Figma", level: 85 },
      { name: "Jest / Testing", level: 80 },
    ]
  }
];

export default function SkillsPage() {
  return (
    <div className="flex flex-col gap-8 w-full relative z-10 min-h-screen py-4 pb-20">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-2"
      >
        <Pagetitle
          title="Skills & Expertise"
          className="tracking-tight text-3xl font-bold text-white mb-1"
        />
        <p className="text-slate-400 text-sm max-w-2xl">
          An overview of my technical skills, tools I use daily, and my proficiency levels across different stacks.
        </p>
      </motion.div>

      <motion.section
        variants={staggerContainerVariant}
        initial="hidden"
        animate="show"
        className="grid w-full grid-cols-1 md:grid-cols-2 gap-6"
      >
        {SKILL_CATEGORIES.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div 
              key={idx}
              variants={fadeUpVariant}
              className={`flex flex-col p-6 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${category.bgColor} ${category.borderColor} border`}>
                  <Icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h2 className="text-xl font-semibold text-white">{category.title}</h2>
              </div>
              
              <div className="flex flex-col gap-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                      <span className="text-slate-500 font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r from-transparent to-current ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.section>
    </div>
  );
}
