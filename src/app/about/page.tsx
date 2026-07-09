"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainerVariant, fadeUpVariant } from "@/lib/animations";
import Pagetitle from "@/components/Pagetitle";
import { User, Book, Briefcase, Award, Code } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8 w-full relative z-10 min-h-screen py-4 pb-20">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-2"
      >
        <Pagetitle
          title="About Me"
          className="tracking-tight text-3xl font-bold text-white mb-1"
        />
        <p className="text-slate-400 text-sm max-w-2xl">
          Learn more about my background, experience, and the skills I bring to the table.
        </p>
      </motion.div>

      <motion.section
        variants={staggerContainerVariant}
        initial="hidden"
        animate="show"
        className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <motion.div variants={fadeUpVariant} className="flex flex-col gap-6">
          <div className="p-6 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <User className="text-cyan-400 w-5 h-5" /> Introduction
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              I am a passionate Senior Full-Stack Engineer and Next.js Architect with a deep love for creating immersive, high-performance web applications. I specialize in modern frontend ecosystems and scalable backend architectures.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Briefcase className="text-cyan-400 w-5 h-5" /> Experience
            </h2>
            <div className="flex flex-col gap-4">
              <div className="border-l-2 border-cyan-500/30 pl-4">
                <h3 className="text-white font-medium">Senior Software Engineer</h3>
                <p className="text-cyan-400 text-xs mt-1">Tech Corp • 2021 - Present</p>
                <p className="text-slate-400 text-sm mt-2">Leading the frontend architecture and building robust Next.js applications.</p>
              </div>
              <div className="border-l-2 border-cyan-500/30 pl-4">
                <h3 className="text-white font-medium">Full-Stack Developer</h3>
                <p className="text-cyan-400 text-xs mt-1">Startup Inc • 2018 - 2021</p>
                <p className="text-slate-400 text-sm mt-2">Developed dynamic web platforms using React and Node.js.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="flex flex-col gap-6">
          <div className="p-6 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Book className="text-cyan-400 w-5 h-5" /> Education
            </h2>
            <div className="border-l-2 border-cyan-500/30 pl-4">
              <h3 className="text-white font-medium">B.S. Computer Science</h3>
              <p className="text-cyan-400 text-xs mt-1">University of Technology • 2014 - 2018</p>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Award className="text-cyan-400 w-5 h-5" /> Achievements
            </h2>
            <ul className="list-disc list-inside text-slate-300 text-sm leading-relaxed space-y-2">
              <li>Open Source Contributor to Next.js</li>
              <li>Speaker at ReactConf 2023</li>
              <li>Built applications scaling to 1M+ MAU</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Code className="text-cyan-400 w-5 h-5" /> Skills Overview
            </h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Three.js'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-cyan-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
