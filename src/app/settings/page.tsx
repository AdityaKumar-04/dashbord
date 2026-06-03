'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Palette, Shield, Database, Moon, Sun, Monitor, Check } from 'lucide-react';
import { staggerContainerVariant, fadeUpVariant } from '@/lib/animations';

type SettingRow = {
  key: string;
  label: string;
  description: string;
  value: string;
  type: 'toggle' | 'select' | 'badge';
  options?: string[];
};

const settingsGroups = [
  {
    group: 'Profile',
    icon: User,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
    settings: [
      { key: 'display_name', label: 'Display Name', description: 'Your public name shown across the platform.', value: 'Admin User', type: 'badge' },
      { key: 'timezone', label: 'Timezone', description: 'Used for reports and timestamps.', value: 'Asia/Kolkata (IST +5:30)', type: 'badge' },
      { key: 'language', label: 'Language', description: 'Platform interface language.', value: 'English (US)', type: 'badge' },
    ] as SettingRow[],
  },
  {
    group: 'Appearance',
    icon: Palette,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
    settings: [
      { key: 'theme', label: 'Theme', description: 'Choose your preferred colour scheme.', value: 'Dark', type: 'select', options: ['Dark', 'Light', 'System'] },
      { key: 'compact_view', label: 'Compact View', description: 'Reduce spacing for denser data tables.', value: 'Off', type: 'toggle' },
      { key: 'animations', label: 'Animations', description: 'Enable smooth transitions and motion effects.', value: 'On', type: 'toggle' },
    ] as SettingRow[],
  },
  {
    group: 'Notifications',
    icon: Bell,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
    settings: [
      { key: 'email_alerts', label: 'Email Alerts', description: 'Receive order and revenue updates via email.', value: 'On', type: 'toggle' },
      { key: 'push_notif', label: 'Push Notifications', description: 'Browser push alerts for critical system events.', value: 'Off', type: 'toggle' },
      { key: 'weekly_report', label: 'Weekly Digest', description: 'A curated summary email every Monday morning.', value: 'On', type: 'toggle' },
    ] as SettingRow[],
  },
  {
    group: 'Security',
    icon: Shield,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    settings: [
      { key: '2fa', label: 'Two-Factor Auth', description: 'Add an extra layer of security to your account.', value: 'Enabled', type: 'badge' },
      { key: 'session', label: 'Session Timeout', description: 'Automatically log out after inactivity.', value: '30 minutes', type: 'badge' },
      { key: 'audit_log', label: 'Audit Logging', description: 'Track all administrative actions.', value: 'On', type: 'toggle' },
    ] as SettingRow[],
  },
];

function ToggleSwitch({ defaultOn }: { defaultOn: boolean }) {
  const [on, setOn] = React.useState(defaultOn);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${on ? 'bg-cyan-500' : 'bg-slate-700'}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${on ? 'translate-x-5' : 'translate-x-0'}`}
      />
    </button>
  );
}

function ThemeOption({ icon: Icon, label, active }: { icon: React.ElementType; label: string; active: boolean }) {
  return (
    <button className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all border ${active ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300' : 'bg-black/20 border-white/10 text-slate-400 hover:text-white hover:border-white/20'}`}>
      <Icon size={14} />
      {label}
      {active && <Check size={12} className="ml-1" />}
    </button>
  );
}

export default function SettingsPage() {
  return (
    <motion.div
      variants={staggerContainerVariant}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-8 pb-20 max-w-3xl"
    >
      {/* Header */}
      <motion.div variants={fadeUpVariant}>
        <h1 className="text-3xl font-bold text-white tracking-tight">Settings</h1>
        <p className="text-slate-400 text-sm mt-1">Manage your account preferences and platform configuration.</p>
      </motion.div>

      {/* Setting Groups */}
      {settingsGroups.map((group) => (
        <motion.div key={group.group} variants={fadeUpVariant}>
          {/* Group header */}
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-lg border ${group.bg}`}>
              <group.icon size={16} className={group.color} />
            </div>
            <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">{group.group}</h2>
          </div>

          {/* Settings card */}
          <div className="glass-card divide-y divide-white/[0.05] overflow-hidden">
            {group.settings.map((setting) => (
              <div key={setting.key} className="flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors group">
                <div className="flex-1 pr-8">
                  <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{setting.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{setting.description}</p>
                </div>
                <div className="shrink-0">
                  {setting.type === 'toggle' && (
                    <ToggleSwitch defaultOn={setting.value === 'On' || setting.value === 'Enabled'} />
                  )}
                  {setting.type === 'badge' && (
                    <span className="px-3 py-1.5 rounded-lg bg-black/30 border border-white/10 text-xs text-slate-300 font-medium">
                      {setting.value}
                    </span>
                  )}
                  {setting.type === 'select' && setting.key === 'theme' && (
                    <div className="flex gap-1.5">
                      <ThemeOption icon={Moon} label="Dark" active={true} />
                      <ThemeOption icon={Sun} label="Light" active={false} />
                      <ThemeOption icon={Monitor} label="System" active={false} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Danger zone */}
      <motion.div variants={fadeUpVariant}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg border bg-rose-500/10 border-rose-500/20">
            <Database size={16} className="text-rose-400" />
          </div>
          <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Data & Privacy</h2>
        </div>
        <div className="glass-card border border-rose-500/10 p-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-200">Export Analytics Data</p>
            <p className="text-xs text-slate-500 mt-0.5">Download all your dashboard data as a CSV archive.</p>
          </div>
          <button className="px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-all font-medium">
            Export
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
