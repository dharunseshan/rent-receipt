import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { CheckCircle2, HelpCircle } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  example?: string;
  tooltip?: string;
  isValid?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, example, tooltip, isValid, ...props }, ref) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
      <div className="w-full space-y-2 relative">
        <div className="flex items-center justify-between">
          {label && (
            <label className="text-sm font-black text-primary uppercase tracking-wider flex items-center gap-1.5">
              {label}
              {tooltip && (
                <div className="relative inline-block">
                  <HelpCircle 
                    className="w-3.5 h-3.5 text-muted cursor-help hover:text-secondary transition-colors" 
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  />
                  {showTooltip && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 bg-primary text-white text-[10px] font-bold rounded-xl shadow-2xl z-50 leading-relaxed uppercase tracking-widest">
                      {tooltip}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary" />
                    </div>
                  )}
                </div>
              )}
            </label>
          )}
          {isValid && !error && (
            <CheckCircle2 className="w-4 h-4 text-accent animate-in zoom-in duration-300" />
          )}
        </div>
        
        <div className="relative">
          <input
            ref={ref}
            className={cn(
              'flex h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base font-bold text-primary transition-all placeholder:text-slate-300 placeholder:font-medium focus:outline-none focus:ring-4 focus:ring-secondary/5 focus:border-secondary disabled:cursor-not-allowed disabled:opacity-50',
              error && 'border-rose-500 focus:ring-rose-500/5 focus:border-rose-500',
              isValid && !error && 'border-accent focus:ring-accent/5 focus:border-accent',
              className
            )}
            {...props}
          />
        </div>

        {error && <p className="text-xs text-rose-500 font-bold uppercase tracking-wider animate-in slide-in-from-top-1">{error}</p>}
        {example && !error && (
          <p className="text-[10px] text-muted font-bold uppercase tracking-widest">
            Example: <span className="text-primary/60">{example}</span>
          </p>
        )}
        {helperText && !error && !example && <p className="text-xs text-muted font-medium">{helperText}</p>}
      </div>
    );
  }
);
