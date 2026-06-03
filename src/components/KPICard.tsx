"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardContent } from "./Card";
import { LucideIcon } from "lucide-react";

interface KPICardProps {
  label: string;
  amount: string;
  description: string;
  trend: "up" | "down" | "neutral";
  icon: LucideIcon;
}

export default function KPICard({ label, amount, description, trend, icon: Icon }: KPICardProps) {
  const trendColor = trend === "up" ? "text-emerald-400" : trend === "down" ? "text-pink-400" : "text-slate-400";

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <CardContent className="h-full flex flex-col justify-between p-5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:from-white/[0.05] hover:to-white/[0.02] transition-colors border border-white/[0.05]">
        <div className="flex justify-between items-start mb-4">
          <p className="text-sm font-medium text-slate-400 tracking-wide">{label}</p>
          <div className="p-2 rounded-full bg-white/[0.03] text-slate-300">
            <Icon size={18} />
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white tracking-tight">{amount}</h3>
          <p className={`text-xs mt-2 font-medium ${trendColor}`}>{description}</p>
        </div>
      </CardContent>
    </motion.div>
  );
}
