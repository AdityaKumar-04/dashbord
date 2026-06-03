"use client";

import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { revenueData } from "@/data/revenue";
import { CardContent } from "./Card";

export default function RevenueChart() {
  return (
    <CardContent className="h-full flex flex-col p-6 border border-white/[0.05] bg-gradient-to-br from-[#0b1326]/60 to-[#070b14]/60">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white tracking-wide">Revenue vs Profit</h3>
        <p className="text-sm text-slate-400 mt-1">Monthly financial performance across all categories.</p>
      </div>
      <div className="flex-1 min-h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis 
              stroke="#64748b" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
              tickFormatter={(value) => `₹${(value / 1000000).toFixed(1)}M`}
            />
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: "#0f172a", borderColor: "#1e293b", borderRadius: "8px", color: "#f8fafc" }}
              itemStyle={{ fontSize: "14px" }}
              formatter={(value: number) => [`₹${(value / 100000).toFixed(2)} Lakhs`, undefined]}
            />
            <Area type="monotone" dataKey="revenue" name="Revenue" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
            <Area type="monotone" dataKey="profit" name="Profit" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorProfit)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  );
}
