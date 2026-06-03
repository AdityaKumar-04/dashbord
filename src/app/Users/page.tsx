'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Mail, CreditCard, Calendar, TrendingUp, UserCheck } from 'lucide-react';
import { staggerContainerVariant, fadeUpVariant } from '@/lib/animations';
import { CardContent } from '@/components/Card';

type Customer = {
  name: string;
  email: string;
  lastorder: string;
  method: string;
  spent: string;
  status: 'Active' | 'Inactive' | 'VIP';
};

const customers: Customer[] = [
  { name: "Olivia Martin", email: "olivia.martin@example.com", lastorder: "2024-10-24", method: "Credit Card", spent: "₹2,49,900", status: "VIP" },
  { name: "Jackson Lee", email: "jackson.lee@example.com", lastorder: "2024-10-22", method: "UPI", spent: "₹1,34,900", status: "Active" },
  { name: "Isabella Nguyen", email: "isabella.nguyen@example.com", lastorder: "2024-10-20", method: "Debit Card", spent: "₹24,900", status: "Active" },
  { name: "William Kim", email: "william.kim@example.com", lastorder: "2024-09-15", method: "Credit Card", spent: "₹89,900", status: "Inactive" },
  { name: "Sofia Davis", email: "sofia.davis@example.com", lastorder: "2024-10-21", method: "UPI", spent: "₹1,12,900", status: "VIP" },
  { name: "Liam Johnson", email: "liam.johnson@example.com", lastorder: "2024-10-18", method: "Net Banking", spent: "₹29,990", status: "Active" },
  { name: "Emma Brown", email: "emma.brown@example.com", lastorder: "2024-10-17", method: "Credit Card", spent: "₹1,29,999", status: "VIP" },
  { name: "Noah Garcia", email: "noah.garcia@example.com", lastorder: "2024-09-28", method: "Debit Card", spent: "₹62,900", status: "Active" },
  { name: "Ava Martinez", email: "ava.martinez@example.com", lastorder: "2024-08-10", method: "UPI", spent: "₹13,999", status: "Inactive" },
  { name: "Elijah Robinson", email: "elijah.robinson@example.com", lastorder: "2024-10-15", method: "Credit Card", spent: "₹16,995", status: "Active" },
  { name: "Mia Clark", email: "mia.clark@example.com", lastorder: "2024-10-14", method: "UPI", spent: "₹8,499", status: "Active" },
  { name: "James Rodriguez", email: "james.rodriguez@example.com", lastorder: "2024-10-12", method: "Credit Card", spent: "₹54,990", status: "VIP" },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case 'VIP': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    case 'Active': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    case 'Inactive': return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
  }
};

const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();

const avatarColors = [
  'from-violet-500 to-purple-600',
  'from-cyan-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-amber-500 to-orange-600',
  'from-rose-500 to-pink-600',
  'from-indigo-500 to-violet-600',
];

const stats = [
  { label: 'Total Customers', value: '8,342', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { label: 'VIP Members', value: '1,204', icon: UserCheck, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
  { label: 'Active This Month', value: '5,891', icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
];

export default function UsersPage() {
  const [search, setSearch] = React.useState('');
  const filtered = customers.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

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
          <h1 className="text-3xl font-bold text-white tracking-tight">Customers</h1>
          <p className="text-slate-400 text-sm mt-1">Manage and analyse your customer base.</p>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div variants={fadeUpVariant} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card p-5 flex items-center gap-4">
            <div className={`p-3 rounded-xl border ${stat.bg}`}>
              <stat.icon size={20} className={stat.color} />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Table Card */}
      <motion.div variants={fadeUpVariant}>
        <CardContent className="p-0 overflow-hidden border border-white/[0.05] bg-gradient-to-br from-[#0b1326]/60 to-[#070b14]/60">
          {/* Table toolbar */}
          <div className="flex items-center justify-between p-5 border-b border-white/5">
            <div>
              <h3 className="text-base font-semibold text-white">All Customers</h3>
              <p className="text-xs text-slate-400 mt-0.5">{filtered.length} records</p>
            </div>
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search customers..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all w-56"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-slate-500 uppercase bg-black/10">
                  <th className="px-5 py-3 text-left font-medium">Customer</th>
                  <th className="px-5 py-3 text-left font-medium">Payment</th>
                  <th className="px-5 py-3 text-left font-medium">Last Order</th>
                  <th className="px-5 py-3 text-left font-medium">Total Spent</th>
                  <th className="px-5 py-3 text-left font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((customer, i) => (
                  <motion.tr
                    key={customer.email}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="border-t border-white/[0.04] hover:bg-white/[0.02] transition-colors group"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                          {getInitials(customer.name)}
                        </div>
                        <div>
                          <p className="text-slate-200 font-medium group-hover:text-white transition-colors">{customer.name}</p>
                          <p className="text-slate-500 text-xs flex items-center gap-1 mt-0.5">
                            <Mail size={10} />{customer.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <CreditCard size={13} className="text-slate-500" />
                        {customer.method}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <Calendar size={13} className="text-slate-500" />
                        {customer.lastorder}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-semibold text-white">{customer.spent}</td>
                    <td className="px-5 py-4">
                      <span className={`status-badge ${getStatusStyle(customer.status)}`}>
                        {customer.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-5 py-12 text-center text-slate-500">
                      No customers match your search.
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
