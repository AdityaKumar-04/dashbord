"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { productsData, categoryPerformance } from "@/data/products";
import { CardContent } from "./Card";
import { Package, RotateCcw } from "lucide-react";

const stockStyle = (s: string) => {
  if (s === "In Stock") return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
  if (s === "Low") return "text-amber-400 bg-amber-500/10 border-amber-500/20";
  return "text-rose-400 bg-rose-500/10 border-rose-500/20";
};

export default function ProductsAnalytics() {
  return (
    <CardContent className="h-full flex flex-col p-6 border border-white/[0.05] bg-gradient-to-br from-[#0b1326]/60 to-[#070b14]/60">
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-white tracking-wide">Top Products</h3>
        <p className="text-sm text-slate-400 mt-1">Best-performing products by revenue this period.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 flex-1">
        {/* Product list */}
        <div className="lg:col-span-3 space-y-2">
          {productsData.map((product, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-3 rounded-xl bg-black/20 border border-white/[0.04] hover:border-white/10 hover:bg-white/[0.02] transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shrink-0 border border-white/10">
                <Package size={15} className="text-slate-300" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors truncate">{product.name}</p>
                <p className="text-xs text-slate-500">{product.category} · {product.sales.toLocaleString()} sold</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className={`text-xs px-2 py-0.5 rounded-full border ${stockStyle(product.stock)}`}>{product.stock}</span>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">{product.revenue}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 justify-end"><RotateCcw size={9} /> {product.returnRate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category bar chart */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider">Category Share (%)</h4>
          <div className="flex-1 min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={categoryPerformance}
                layout="vertical"
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <XAxis type="number" stroke="#334155" fontSize={11} tickLine={false} axisLine={false} domain={[0, 60]} />
                <YAxis type="category" dataKey="category" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} width={90} />
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#0f172a", borderColor: "#1e293b", borderRadius: "8px", color: "#f8fafc" }}
                  formatter={(v: number) => [`${v}%`, "Share"]}
                />
                <Bar dataKey="value" fill="#0ea5e9" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </CardContent>
  );
}
