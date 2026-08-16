import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/Button';
import { FileText, ArrowRight, Shield, Zap, X, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Hero = () => {
  const [showSample, setShowSample] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold tracking-wider uppercase mb-8"
          >
            <Zap className="w-3 h-3 fill-current" />
            <span>FY 2024-25 Receipts Now Available</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-primary leading-[1.1] md:leading-[1] tracking-tight mb-8"
          >
            Professional Rent <br />
            <span className="bg-gradient-to-r from-secondary to-indigo-600 bg-clip-text text-transparent">
              Receipts in Minutes
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-muted mb-12 max-w-2xl leading-relaxed"
          >
            Generate 12 months of perfectly formatted receipts for your HRA tax exemption. 
            Simple, instant, and professional. No account required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-6 mb-20"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/generate" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto h-14 px-10 text-lg btn-gradient group"
                >
                  Generate Receipts — ₹99
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-muted text-sm font-medium">
                <Shield className="w-4 h-4 text-accent" />
                Privacy Guaranteed
              </div>
            </div>
            
            <button 
              onClick={() => setShowSample(true)}
              className="text-secondary font-bold text-sm uppercase tracking-widest hover:text-secondary/80 transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              View Sample Receipt →
            </button>
          </motion.div>

          {/* Floating Receipt Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl mx-auto"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 glass-card rounded-2xl p-4 md:p-8 premium-shadow border-white/40"
            >
              <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-muted uppercase tracking-widest">Document Type</p>
                    <p className="text-sm font-bold text-primary">Rent Receipt #01</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-muted uppercase tracking-widest">Amount</p>
                  <p className="text-sm font-bold text-accent">₹25,000.00</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="h-4 w-3/4 bg-slate-100 rounded animate-pulse" />
                <div className="h-4 w-1/2 bg-slate-100 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-slate-100 rounded animate-pulse" />
                <div className="pt-8 flex justify-between items-end">
                  <div className="space-y-2">
                    <div className="h-3 w-24 bg-slate-100 rounded" />
                    <div className="h-8 w-32 border-b-2 border-slate-200" />
                    <p className="text-[10px] font-bold text-muted uppercase tracking-tighter">Tenant Signature</p>
                  </div>
                  <div className="w-16 h-16 rounded bg-slate-50 border border-dashed border-slate-200 flex items-center justify-center">
                    <p className="text-[8px] text-center text-muted font-bold uppercase leading-tight">Revenue<br/>Stamp</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Sample Modal */}
      <AnimatePresence>
        {showSample && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSample(false)}
              className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-[2rem] shadow-2xl overflow-hidden"
            >
              <div className="p-6 md:p-10 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <div>
                  <h3 className="text-xl font-black text-primary uppercase tracking-tight">Sample Rent Receipt</h3>
                  <p className="text-muted text-sm font-bold uppercase tracking-widest">Professional Format accepted by all HRs</p>
                </div>
                <button 
                  onClick={() => setShowSample(false)}
                  className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-muted hover:text-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 md:p-12 overflow-y-auto max-h-[70vh]">
                <div className="bg-white p-8 md:p-12 rounded-xl border border-slate-200 shadow-inner">
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <h3 className="text-3xl font-black text-primary mb-2">RENT RECEIPT</h3>
                      <p className="text-muted font-bold tracking-widest text-xs uppercase">Financial Year 2024-25</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-primary">Receipt No: 01</p>
                      <p className="text-sm text-muted">Date: April 01, 2024</p>
                    </div>
                  </div>

                  <div className="space-y-8 text-lg text-primary/80">
                    <p className="leading-relaxed">
                      Received with thanks from <span className="font-bold text-primary border-b border-slate-200 px-2">John Doe</span> 
                      the sum of <span className="font-bold text-primary border-b border-slate-200 px-2">₹25,000.00</span> 
                      (Rupees Twenty Five Thousand Only) towards rent for the month of 
                      <span className="font-bold text-primary border-b border-slate-200 px-2">April 2024</span> 
                      for the property located at <span className="font-bold text-primary border-b border-slate-200 px-2">Flat 402, Sky Heights, Bangalore</span>.
                    </p>
                  </div>

                  <div className="mt-20 flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="space-y-4 w-full md:w-auto">
                      <div className="h-12 w-48 border-b-2 border-slate-200" />
                      <p className="text-xs font-black text-muted uppercase tracking-widest">Landlord Signature</p>
                      <div className="text-sm">
                        <p className="font-bold text-primary">Jane Smith</p>
                        <p className="text-muted">PAN: ABCDE1234F</p>
                      </div>
                    </div>
                    
                    <div className="w-24 h-24 rounded bg-slate-50 border border-dashed border-slate-300 flex items-center justify-center relative group">
                      <p className="text-[10px] text-center text-muted font-bold uppercase leading-tight">Revenue<br/>Stamp</p>
                      <div className="absolute -top-3 -right-3 bg-accent text-white p-1 rounded-full shadow-lg">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-muted text-sm font-bold uppercase tracking-widest mt-8">
                  You will receive 12 such receipts in a single ZIP file
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
