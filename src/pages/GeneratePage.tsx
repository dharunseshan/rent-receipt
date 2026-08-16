import { useFormContext } from '../context/FormContext';
import { TenantInfoStep } from '../components/form/TenantInfoStep';
import { LandlordInfoStep } from '../components/form/LandlordInfoStep';
import { RentDetailsStep } from '../components/form/RentDetailsStep';
import { SummaryCard } from '../components/form/SummaryCard';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, Loader2, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/Button';
import { useState } from 'react';

export default function GeneratePage() {
  const { step } = useFormContext();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleNext = async () => {
    const form = document.querySelector('form');
    if (form) {
      if (step === 3) {
        setIsProcessing(true);
        try {
          form.requestSubmit();
        } finally {
          setTimeout(() => setIsProcessing(false), 1000);
        }
      } else {
        form.requestSubmit();
      }
    }
  };

  return (
    <div className="min-h-screen pb-32 lg:pb-20">
      {/* Progress Bar (Thin line at top) */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-slate-100/50 z-[60]">
        <motion.div 
          className="h-full bg-secondary"
          initial={{ width: "0%" }}
          animate={{ width: `${(step / 3) * 100}%` }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Header */}
      <header className="bg-white/40 backdrop-blur-xl border-b border-white/20 py-4 sticky top-1.5 z-50">
        <div className="container flex items-center justify-between">
          <Link to="/" className="text-xl font-black text-primary flex items-center gap-2" aria-label="Go to homepage">
            <Home className="w-5 h-5 text-secondary" />
            <span className="hidden sm:inline tracking-tighter">RentReceipt<span className="text-secondary">.in</span></span>
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-xs font-black text-muted uppercase tracking-widest">Progress</span>
              <span className="text-sm font-bold text-primary">{Math.round((step / 3) * 100)}%</span>
            </div>
            <div className="h-4 w-px bg-slate-200 hidden md:block" />
            <div className="text-xs font-black text-secondary uppercase tracking-widest">Step {step} of 3</div>
          </div>
        </div>
      </header>

      <main className="container pt-12 md:pt-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Form Side */}
          <div className="flex-1 w-full max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <h1 className="text-4xl font-black text-primary mb-4">
                {step === 1 && "Tenant Information"}
                {step === 2 && "Landlord Details"}
                {step === 3 && "Rent & Timeline"}
              </h1>
              <p className="text-muted text-lg">
                {step === 1 && "Start with your basic details as they appear on your ID."}
                {step === 2 && "Enter your landlord's information for the receipts."}
                {step === 3 && "Specify your rent amount and the period for generation."}
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white/20 premium-shadow p-8 md:p-12"
              >
                {step === 1 && <TenantInfoStep />}
                {step === 2 && <LandlordInfoStep />}
                {step === 3 && <RentDetailsStep />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Summary Side (Sticky) */}
          <aside className="lg:w-[400px] w-full sticky top-32 hidden lg:block">
            <SummaryCard />
          </aside>
        </div>
      </main>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-xl border-t border-white/20 z-40">
        <Button 
          className="w-full h-16 text-xl btn-gradient rounded-2xl shadow-2xl shadow-secondary/20" 
          onClick={handleNext}
          isLoading={isProcessing}
        >
          {isProcessing ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              {step === 3 ? 'Review & Pay' : 'Continue'}
              <ArrowRight className="w-5 h-5" />
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}
