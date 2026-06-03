"use client";

import React from "react";
import { motion } from "framer-motion";
import { systemAlerts } from "@/data/alerts";
import { AlertTriangle, CheckCircle2, Info, XCircle, Bell } from "lucide-react";
import { CardContent } from "./Card";

const alertConfig = {
  critical: { icon: XCircle, color: "text-rose-400", border: "border-rose-500/20", bg: "bg-rose-500/5", dot: "bg-rose-400" },
  warning: { icon: AlertTriangle, color: "text-amber-400", border: "border-amber-500/20", bg: "bg-amber-500/5", dot: "bg-amber-400" },
  success: { icon: CheckCircle2, color: "text-emerald-400", border: "border-emerald-500/20", bg: "bg-emerald-500/5", dot: "bg-emerald-400" },
  info: { icon: Info, color: "text-blue-400", border: "border-blue-500/20", bg: "bg-blue-500/5", dot: "bg-blue-400" },
};

export default function AlertsPanel() {
  return (
    <CardContent className="p-6 border border-white/[0.05] bg-gradient-to-br from-[#0b1326]/60 to-[#070b14]/60">
      <div className="flex items-center gap-2 mb-5">
        <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
          <Bell size={18} className="text-amber-400" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Alerts & Recommendations</h3>
          <p className="text-xs text-slate-400">System status and business recommendations</p>
        </div>
      </div>

      <div className="space-y-3">
        {systemAlerts.map((alert, i) => {
          const cfg = alertConfig[alert.severity as keyof typeof alertConfig];
          const Icon = cfg.icon;
          return (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`flex items-start gap-3 p-4 rounded-xl border ${cfg.border} ${cfg.bg} hover:brightness-110 transition-all`}
            >
              <Icon size={16} className={`${cfg.color} shrink-0 mt-0.5`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-200 leading-relaxed">{alert.message}</p>
                <p className="text-xs text-slate-500 mt-1">{alert.time}</p>
              </div>
              <div className={`w-1.5 h-1.5 rounded-full ${cfg.dot} shrink-0 mt-1.5 animate-pulse`} />
            </motion.div>
          );
        })}
      </div>
    </CardContent>
  );
}
