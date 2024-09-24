'use client'
import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
type props = {}
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

export default function Barchat({}:props) {
  return (
    <ResponsiveContainer width={"100%"} height={320}>
        <BarChart data={data}>
          <XAxis 
            dataKey={"name"}
            tickLine={false}
            axisLine={false}
            stroke='#888888'
            fontSize={12}
          />
          <YAxis 
             
             tickLine={false}
             axisLine={false}
             stroke='#888888'
             fontSize={12}
             
          />
          <Bar dataKey={'total'} radius={[4,4,0,0]} stroke='#fff' fill='#fff'/>
        </BarChart>
    </ResponsiveContainer>
  )
}
