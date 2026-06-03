'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, Package, TrendingDown, TrendingUp, Truck } from 'lucide-react';
import { staggerContainerVariant, fadeUpVariant } from '@/lib/animations';
import { CardContent } from '@/components/Card';
import { ordersData } from '@/data/orders';

const getStatusStyle = (status: string) => {
  switch (status) {
    case 'Completed': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    case 'Processing': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    case 'Refunded': return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    case 'Failed': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
    default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
  }
};

const statusCounts = ordersData.reduce((acc, o) => {
  acc[o.status] = (acc[o.status] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

const stats = [
  { label: 'Total Orders', value: '45,231', icon: ShoppingBag, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
  { label: 'Completed', value: `${statusCounts['Completed'] || 0}`, icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  { label: 'Processing', value: `${statusCounts['Processing'] || 0}`, icon: Truck, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { label: 'Refunded', value: `${statusCounts['Refunded'] || 0}`, icon: TrendingDown, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20' },
];

export default function ShoppingPage() {
  const [search, setSearch] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState<string>('All');

  const filtered = ordersData.filter(o => {
    const matchSearch =
      o.customerName.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.product.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'All' || o.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const statusOptions = ['All', 'Completed', 'Processing', 'Refunded', 'Failed'];

  return (
    <motion.div
      variants={staggerContainerVariant}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-8 pb-20"
    >
      {/* Header */}
      <motion.div variants={fadeUpVariant} className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Orders</h1>
          <p className="text-slate-400 text-sm mt-1">Track, manage and analyse all your orders.</p>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div variants={fadeUpVariant} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card p-5 flex items-center gap-4">
            <div className={`p-3 rounded-xl border ${stat.bg}`}>
              <stat.icon size={18} className={stat.color} />
            </div>
            <div>
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-slate-400">{stat.label}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Table */}
      <motion.div variants={fadeUpVariant}>
        <CardContent className="p-0 overflow-hidden border border-white/[0.05] bg-gradient-to-br from-[#0b1326]/60 to-[#070b14]/60">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-5 border-b border-white/5">
            <div>
              <h3 className="text-base font-semibold text-white">Order History</h3>
              <p className="text-xs text-slate-400 mt-0.5">{filtered.length} records found</p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {/* Status filter pills */}
              <div className="flex gap-1.5">
                {statusOptions.map(s => (
                  <button
                    key={s}
                    onClick={() => setStatusFilter(s)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all border ${
                      statusFilter === s
                        ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                        : 'bg-black/20 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="relative">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all w-52"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-slate-500 uppercase bg-black/10">
                  <th className="px-5 py-3 text-left font-medium">Order ID</th>
                  <th className="px-5 py-3 text-left font-medium">Customer</th>
                  <th className="px-5 py-3 text-left font-medium">Product</th>
                  <th className="px-5 py-3 text-left font-medium">Payment</th>
                  <th className="px-5 py-3 text-left font-medium">Revenue</th>
                  <th className="px-5 py-3 text-left font-medium">Date</th>
                  <th className="px-5 py-3 text-left font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((order, i) => (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors group"
                  >
                    <td className="px-5 py-4 font-mono text-xs text-cyan-400 group-hover:text-cyan-300 font-medium">{order.id}</td>
                    <td className="px-5 py-4">
                      <p className="text-slate-200 font-medium">{order.customerName}</p>
                      <p className="text-slate-500 text-xs">{order.city}</p>
                    </td>
                    <td className="px-5 py-4 text-slate-300">
                      <div className="flex items-center gap-2">
                        <Package size={13} className="text-slate-500 shrink-0" />
                        <span className="truncate max-w-[160px]">{order.product}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-slate-400 text-xs">{order.paymentMethod}</td>
                    <td className="px-5 py-4 font-bold text-white">{order.revenue}</td>
                    <td className="px-5 py-4 text-slate-400 text-xs">{order.date}</td>
                    <td className="px-5 py-4">
                      <span className={`status-badge ${getStatusStyle(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-5 py-12 text-center text-slate-500">
                      No orders match your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </motion.div>
    </motion.div>
  );
}
