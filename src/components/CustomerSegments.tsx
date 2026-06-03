"use client";

import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { customerSegments } from "@/data/customers";
import { CardContent } from "./Card";

export default function CustomerSegments() {
  return (
    <CardContent className="h-full flex flex-col p-6 border border-white/[0.05] bg-gradient-to-br from-[#0b1326]/60 to-[#070b14]/60">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white tracking-wide">Customer Segments</h3>
        <p className="text-sm text-slate-400 mt-1">Revenue distribution by user tier.</p>
      </div>
      
      <div className="flex-1 flex items-center justify-center min-h-[200px]">
        <div className="w-1/2 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={customerSegments}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {customerSegments.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: "#0f172a", borderColor: "#1e293b", borderRadius: "8px", color: "#f8fafc" }}
                itemStyle={{ fontSize: "14px" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-1/2 flex flex-col gap-3 justify-center pl-4">
          {customerSegments.map((segment, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: segment.color }} />
              <span className="text-slate-300 flex-1">{segment.name}</span>
              <span className="text-white font-medium">{segment.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  );
}
