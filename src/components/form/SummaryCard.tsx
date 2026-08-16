import { useFormContext } from '../../context/FormContext';
import { ShieldCheck, FileText, CheckCircle2, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export const SummaryCard = () => {
  const { formData } = useFormContext();
  
  const subtotal = 99;
  const gst = 18;
  const total = subtotal + gst;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-8"
    >
      <div className="glass-card rounded-[2rem] overflow-hidden premium-shadow border-white/40">
        <div className="bg-secondary/5 p-8 border-b border-secondary/10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-100">
              <FileText className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <h3 className="font-black text-primary uppercase tracking-wider text-sm">Order Summary</h3>
              <p className="text-xs font-bold text-muted uppercase tracking-widest mt-1">FY {formData.rent.financialYear}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm font-bold text-primary/70">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>12 Professional PDFs</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-primary/70">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Email Backup Included</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-primary/70">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Instant Download</span>
            </div>
          </div>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-muted">Package Price</span>
              <span className="text-primary font-bold">₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span className="text-muted">GST (18%)</span>
              <span className="text-primary font-bold">₹{gst}</span>
            </div>
          </div>
          
          <div className="pt-6 border-t border-slate-100 flex justify-between items-end">
            <div>
              <p className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-1">Total Amount</p>
              <span className="text-4xl font-black text-primary tracking-tighter">₹{total}</span>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-1">Status</p>
              <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded-full">Ready to Pay</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4 p-6 rounded-3xl bg-accent/5 border border-accent/10">
          <ShieldCheck className="w-8 h-8 text-accent" />
          <div className="text-xs">
            <p className="font-black text-primary uppercase tracking-wider mb-1">Money-Back Guarantee</p>
            <p className="text-muted font-medium leading-relaxed">Full refund if your HR department rejects our receipt format.</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" 
            alt="Razorpay" 
            className="h-5 opacity-40 grayscale" 
            referrerPolicy="no-referrer" 
          />
          <div className="flex items-center gap-4 text-[10px] font-black text-muted uppercase tracking-[0.2em]">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3" /> SSL Secure</span>
            <span className="w-1 h-1 rounded-full bg-slate-200" />
            <span className="flex items-center gap-1.5"><Zap className="w-3 h-3" /> Encrypted</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
