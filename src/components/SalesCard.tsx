import React from 'react';
import { motion } from 'framer-motion';
import { listItemVariant } from '@/lib/animations';
import Image from 'next/image';

export type Salesprops = {
  name: string;
  email: string;
  salesamount: string;
};

export default function SalesCard(props: Salesprops) {
  return (
    <motion.div 
      variants={listItemVariant}
      whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
      className="flex flex-wrap justify-between gap-3 items-center rounded-xl p-3 transition-colors cursor-pointer border border-transparent hover:border-white/10"
    >
      <section className='flex justify-between gap-4 items-center'>
        <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 p-[2px] shadow-inner">
          <div className="h-full w-full rounded-full overflow-hidden bg-[#0a1120]">
            <Image src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${props.name}`} alt="avatar" width={200} height={200} />
          </div>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-gray-100">{props.name}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400 text-xs font-medium mt-0.5">{props.email}</div>
        </div>
      </section>
      <p className="font-bold text-cyan-400">{props.salesamount}</p>
    </motion.div>
  );
}
