import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import * as React from 'react';
import { motion } from 'framer-motion';
import { cardHoverVariant } from '@/lib/animations';

export type CardProps = {
  label:string
  icons:LucideIcon
  amount:string
  discription:string
}

export default function Card (props:CardProps) {
  return (
    <CardContent>
      <section className='flex justify-between items-center gap-2'>
        <p className="font-medium text-gray-200">{props.label}</p>
        <div className="p-2 rounded-full bg-white/5 border border-white/10">
          <props.icons className='h-4 w-4 text-cyan-400' />
        </div>
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{props.amount}</h2>
        <p className="text-sm text-gray-400 font-medium">{props.discription}</p>
      </section>
    </CardContent>
  );
}

import { HTMLMotionProps } from 'framer-motion';

export type CardContentProps = Omit<HTMLMotionProps<"div">, "children"> & { children?: React.ReactNode };

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={cardHoverVariant}
        {...props}
        className={cn(
          "flex flex-col w-full gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1326]/80 to-[#070b14]/90 backdrop-blur-xl p-6 shadow-xl transition-colors hover:bg-gradient-to-br hover:from-[#0f1b33]/90 hover:to-[#0a1120]/90 relative overflow-hidden group",
          className
        )}
      >
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-blue-500/0 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {children}
      </motion.div>
    );
  }
);
CardContent.displayName = "CardContent";