'use client'
import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import { motion } from 'framer-motion'
import { fadeUpVariant } from '@/lib/animations'

const data = [
    {"name": "Jan", "total": 5180},
    {"name": "Feb", "total": 6185},
    {"name": "Mar", "total": 2694},
    {"name": "Apr", "total": 3024},
    {"name": "May", "total": 3918},
    {"name": "Jun", "total": 1689},
    {"name": "Jul", "total": 6420},
    {"name": "Aug", "total": 2118},
    {"name": "Sept", "total": 1689},
    {"name": "Oct", "total": 4898},
    {"name": "Nov", "total": 1821},
    {"name": "Dec", "total": 4846}
]

export default function Barchat() {
  return (
    <motion.div variants={fadeUpVariant} className="w-full h-full mt-4">
      <ResponsiveContainer width={"100%"} height={320}>
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff15" />
            <XAxis 
              dataKey={"name"}
              tickLine={false}
              axisLine={false}
              stroke='#9ca3af'
              fontSize={12}
              dy={10}
            />
            <YAxis 
               tickLine={false}
               axisLine={false}
               stroke='#9ca3af'
               fontSize={12}
               tickFormatter={(value) => `$${value}`}
               dx={-10}
            />
            <Tooltip
              cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
              contentStyle={{ backgroundColor: 'rgba(11, 19, 38, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
              itemStyle={{ color: '#5de6ff' }}
            />
            <Bar 
              dataKey={'total'} 
              radius={[6, 6, 0, 0]} 
              fill='url(#colorGradient)' 
              animationDuration={1500} 
              animationEasing="ease-out"
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5de6ff" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#005ac2" stopOpacity={0.7} />
              </linearGradient>
            </defs>
          </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
