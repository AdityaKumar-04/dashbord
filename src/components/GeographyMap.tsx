"use client";

import React from "react";
import { geographyData, topCities } from "@/data/geography";
import { CardContent } from "./Card";
import { motion } from "framer-motion";

export default function GeographyMap() {
  const maxRevenue = Math.max(...geographyData.map(d => d.percentage));

  return (
    <CardContent className="h-full flex flex-col p-6 border border-white/[0.05] bg-gradient-to-br from-[#0b1326]/60 to-[#070b14]/60">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white tracking-wide">Regional Performance</h3>
        <p className="text-sm text-slate-400 mt-1">Revenue distribution by country and top cities.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-2">Top Countries</h4>
          {geographyData.slice(0, 5).map((item, index) => (
            <div key={item.code} className="flex flex-col gap-1">
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-slate-300 font-medium">{item.country}</span>
                  <span className="text-xs text-slate-500 bg-white/5 px-1.5 py-0.5 rounded">{item.code}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white">{item.revenue}</span>
                  <span className={`text-xs ${item.growth.startsWith('+') ? 'text-emerald-400' : 'text-pink-400'}`}>
                    {item.growth}
                  </span>
                </div>
              </div>
              <div className="w-full bg-slate-800/50 rounded-full h-1.5 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(item.percentage / maxRevenue) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-blue-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-2">Top Cities</h4>
          <div className="bg-black/20 rounded-xl border border-white/5 overflow-hidden">
            {topCities.map((city, index) => (
              <div key={index} className="flex justify-between items-center p-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                <div>
                  <div className="text-sm font-medium text-slate-200">{city.city}</div>
                  <div className="text-xs text-slate-500">{city.users.toLocaleString()} active users</div>
                </div>
                <div className="text-sm font-semibold text-white">
                  {city.revenue}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  );
}
