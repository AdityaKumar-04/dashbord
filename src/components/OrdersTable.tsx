"use client";

import React, { useState } from "react";
import { ordersData } from "@/data/orders";
import { CardContent } from "./Card";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

export default function OrdersTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const filteredOrders = ordersData.filter(order => 
    order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);
  const currentOrders = filteredOrders.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Processing": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Refunded": return "bg-slate-500/10 text-slate-400 border-slate-500/20";
      case "Failed": return "bg-pink-500/10 text-pink-400 border-pink-500/20";
      default: return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    }
  };

  return (
    <CardContent className="h-full flex flex-col p-6 border border-white/[0.05] bg-gradient-to-br from-[#0b1326]/60 to-[#070b14]/60">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white tracking-wide">Recent Orders</h3>
          <p className="text-sm text-slate-400 mt-1">Manage and track recent transactions.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search orders..." 
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            className="bg-black/20 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all w-64"
          />
        </div>
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-400 uppercase bg-black/20">
            <tr>
              <th className="px-4 py-3 font-medium rounded-tl-lg">Order ID</th>
              <th className="px-4 py-3 font-medium">Customer</th>
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Revenue</th>
              <th className="px-4 py-3 font-medium rounded-tr-lg">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                <td className="px-4 py-4 text-slate-300 font-medium group-hover:text-cyan-400 transition-colors">{order.id}</td>
                <td className="px-4 py-4 text-white">
                  {order.customerName}
                  <div className="text-xs text-slate-500">{order.city}</div>
                </td>
                <td className="px-4 py-4 text-slate-300">{order.product}</td>
                <td className="px-4 py-4 text-white font-medium">{order.revenue}</td>
                <td className="px-4 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
            {currentOrders.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-slate-500">
                  No orders found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5 text-sm">
        <span className="text-slate-400">
          Showing {Math.min((currentPage - 1) * rowsPerPage + 1, filteredOrders.length)} to {Math.min(currentPage * rowsPerPage, filteredOrders.length)} of {filteredOrders.length} entries
        </span>
        <div className="flex gap-2">
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-black/20 border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages || totalPages === 0}
            className="p-2 rounded-lg bg-black/20 border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </CardContent>
  );
}
