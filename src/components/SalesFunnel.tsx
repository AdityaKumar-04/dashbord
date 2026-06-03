"use client";

import React from "react";
import { CardContent } from "./Card";
import { funnelData, funnelMetrics } from "@/data/funnel";
import { motion } from "framer-motion";

export default function SalesFunnel() {
  const maxCount = Math.max(...funnelData.map(d => d.count));

  return (
    <CardContent className="h-full flex flex-col p-6 border border-white/[0.05] bg-gradient-to-br from-[#0b1326]/60 to-[#070b14]/60">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white tracking-wide">Sales Funnel</h3>
          <p className="text-sm text-slate-400 mt-1">Customer journey drop-off rates.</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-emerald-400">{funnelMetrics.trend}</p>
          <p className="text-xs text-slate-400">Conversion: {funnelMetrics.conversionRate}</p>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center gap-4">
        {funnelData.map((step, index) => {
          const widthPercent = (step.count / maxCount) * 100;
          return (
            <div key={index} className="w-full">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300 font-medium">{step.stage}</span>
                <span className="text-white font-bold">{step.count.toLocaleString()}</span>
              </div>
              <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden border border-white/[0.05]">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${widthPercent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: step.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </CardContent>
  );
}
