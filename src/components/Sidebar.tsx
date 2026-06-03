'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingBag,
  Users,
  Zap,
} from 'lucide-react';
import { Button } from './ui/button';
import { useWindowWidth } from '@react-hook/window-size';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  { title: 'Dashboard', href: '/', icon: LayoutDashboard },
  { title: 'Customers', href: '/users', icon: Users },
  { title: 'Orders', href: '/shopping', icon: ShoppingBag },
  { title: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const onlyWidth = useWindowWidth();
  const isMobile = onlyWidth < 768;

  const collapsed = isMobile ? true : isCollapsed;

  return (
    <motion.div
      layout
      initial={false}
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="relative shrink-0 border-r border-white/[0.06] bg-gradient-to-b from-[#080e1f] to-[#050a17] z-20 flex flex-col h-screen sticky top-0"
      style={{ boxShadow: '4px 0 32px rgba(0,0,0,0.4)' }}
    >
      {/* Logo area */}
      <div className={cn(
        'flex items-center h-16 border-b border-white/[0.05] px-4 shrink-0 overflow-hidden',
        collapsed ? 'justify-center' : 'gap-3'
      )}>
        <div className="shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
          <Zap size={16} className="text-white" />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              className="font-bold text-white text-base tracking-tight whitespace-nowrap overflow-hidden"
            >
              Analytica
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Collapse toggle (desktop only) */}
      {!isMobile && (
        <div className="absolute -right-[14px] top-[52px] z-30">
          <Button
            variant="ghost"
            className="h-7 w-7 rounded-full border border-white/10 bg-[#080e1f] text-slate-400 hover:bg-cyan-900/30 hover:text-cyan-400 p-0 shadow-lg flex items-center justify-center transition-colors"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
          </Button>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-hidden">
        {navLinks.map((link) => {
          const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
          return (
            <Link key={link.href} href={link.href}>
              <motion.div
                whileHover={{ x: collapsed ? 0 : 2 }}
                className={cn(
                  'relative flex items-center rounded-xl transition-all duration-200 group',
                  collapsed ? 'justify-center w-10 h-10 mx-auto' : 'gap-3 px-3 py-2.5',
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400'
                    : 'text-slate-500 hover:text-slate-200 hover:bg-white/[0.04]'
                )}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-cyan-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                <link.icon size={18} className={cn('shrink-0', isActive ? 'text-cyan-400' : '')} />

                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.15 }}
                      className={cn(
                        'text-sm font-medium whitespace-nowrap overflow-hidden',
                        isActive ? 'text-cyan-300' : ''
                      )}
                    >
                      {link.title}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Tooltip for collapsed state */}
                {collapsed && (
                  <div className="absolute left-full ml-3 px-2.5 py-1 bg-slate-800 border border-white/10 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-xl z-50">
                    {link.title}
                  </div>
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Footer version badge */}
      <AnimatePresence>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-4 border-t border-white/[0.05]"
          >
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-500">v1.0.0 — All systems up</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
