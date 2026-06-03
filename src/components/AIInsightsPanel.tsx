"use client";

import React from "react";
import { aiInsights } from "@/data/aiInsights";
import { CardContent } from "./Card";
import { Sparkles, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";

export default function AIInsightsPanel() {
  const getIcon = (type: string) => {
    switch(type) {
      case "positive": return <TrendingUp size={16} className="text-emerald-400" />;
      case "negative": return <AlertCircle size={16} className="text-pink-400" />;
      case "neutral": return <CheckCircle2 size={16} className="text-blue-400" />;
      default: return <Sparkles size={16} className="text-purple-400" />;
    }
  };

  return (
    <CardContent className="h-full flex flex-col p-6 border border-white/[0.05] bg-gradient-to-br from-[#0b1326]/60 to-[#070b14]/60">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
          <Sparkles size={20} className="text-purple-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white tracking-wide">AI Business Analyst</h3>
          <p className="text-sm text-slate-400">Automated insights from your data</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
        {aiInsights.map((insight) => (
          <div key={insight.id} className="p-4 rounded-xl bg-black/20 border border-white/5 hover:border-white/10 transition-colors group">
            <div className="flex gap-3">
              <div className="mt-0.5">{getIcon(insight.type)}</div>
              <div>
                <div className="flex items-center justify-between gap-4 mb-1">
                  <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{insight.title}</h4>
                  <span className="text-xs text-slate-500 shrink-0">{insight.date}</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{insight.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  );
}
