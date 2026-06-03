"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { staggerContainerVariant, fadeUpVariant } from "@/lib/animations";
import Pagetitle from "@/components/Pagetitle";
import KPICard from "@/components/KPICard";
import RevenueChart from "@/components/RevenueChart";
import SalesFunnel from "@/components/SalesFunnel";
import CustomerSegments from "@/components/CustomerSegments";
import OrdersTable from "@/components/OrdersTable";
import AIInsightsPanel from "@/components/AIInsightsPanel";
import GeographyMap from "@/components/GeographyMap";
import ProductsAnalytics from "@/components/ProductsAnalytics";
import AlertsPanel from "@/components/AlertsPanel";
import { overviewData } from "@/data/overview";

const ThreeScene = dynamic(() => import("@/components/ThreeScene"), { ssr: false });

export default function Home() {
  return (
    <>
      <ThreeScene />
      <div className="flex flex-col gap-8 w-full relative z-10 min-h-screen py-4 pb-20">

        {/* ── Page Header ──────────────────────────────────── */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate="show"
          className="flex items-center justify-between"
        >
          <div>
            <Pagetitle
              title="Overview"
              className="tracking-tight text-3xl font-bold text-white mb-1"
            />
            <p className="text-slate-400 text-sm">
              Welcome back — here&apos;s what&apos;s happening with your store today.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-medium">Live</span>
            </div>
            <button className="px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 transition-colors">
              Export Report
            </button>
          </div>
        </motion.div>

        {/* ── KPI Cards ─────────────────────────────────────── */}
        <motion.section
          variants={staggerContainerVariant}
          initial="hidden"
          animate="show"
          className="grid w-full grid-cols-2 gap-4 xl:grid-cols-4"
        >
          {overviewData.slice(0, 4).map((data, index) => (
            <motion.div key={index} variants={fadeUpVariant} className="min-h-[130px]">
              <KPICard
                label={data.label}
                amount={data.amount}
                description={data.description}
                trend={data.trend as "up" | "down" | "neutral"}
                icon={data.icon}
              />
            </motion.div>
          ))}
        </motion.section>

        {/* ── Secondary KPI Row ──────────────────────────────── */}
        <motion.section
          variants={staggerContainerVariant}
          initial="hidden"
          animate="show"
          className="grid w-full grid-cols-2 gap-4 xl:grid-cols-4"
        >
          {overviewData.slice(4, 8).map((data, index) => (
            <motion.div key={index} variants={fadeUpVariant} className="min-h-[130px]">
              <KPICard
                label={data.label}
                amount={data.amount}
                description={data.description}
                trend={data.trend as "up" | "down" | "neutral"}
                icon={data.icon}
              />
            </motion.div>
          ))}
        </motion.section>

        {/* ── Revenue + Funnel ───────────────────────────────── */}
        <motion.section
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid w-full grid-cols-1 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={fadeUpVariant} className="lg:col-span-2 min-h-[400px]">
            <RevenueChart />
          </motion.div>
          <motion.div variants={fadeUpVariant} className="min-h-[400px]">
            <SalesFunnel />
          </motion.div>
        </motion.section>

        {/* ── Products Analytics ─────────────────────────────── */}
        <motion.section
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeUpVariant} className="min-h-[360px]">
            <ProductsAnalytics />
          </motion.div>
        </motion.section>

        {/* ── Customer Segments + Geography ──────────────────── */}
        <motion.section
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid w-full grid-cols-1 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={fadeUpVariant} className="min-h-[350px]">
            <CustomerSegments />
          </motion.div>
          <motion.div variants={fadeUpVariant} className="lg:col-span-2 min-h-[350px]">
            <GeographyMap />
          </motion.div>
        </motion.section>

        {/* ── Orders + AI Insights ────────────────────────────── */}
        <motion.section
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid w-full grid-cols-1 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={fadeUpVariant} className="lg:col-span-2 min-h-[440px]">
            <OrdersTable />
          </motion.div>
          <motion.div variants={fadeUpVariant} className="min-h-[440px]">
            <AIInsightsPanel />
          </motion.div>
        </motion.section>

        {/* ── Alerts Panel ────────────────────────────────────── */}
        <motion.section
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeUpVariant}>
            <AlertsPanel />
          </motion.div>
        </motion.section>

      </div>
    </>
  );
}
