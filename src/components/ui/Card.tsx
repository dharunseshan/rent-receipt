import React from 'react';
import { cn } from '../../lib/utils';

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn('bg-white rounded-xl border border-gray-100 shadow-sm p-6', className)}>
    {children}
  </div>
);

export const GlassCard = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn('bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-8', className)}>
    {children}
  </div>
);
