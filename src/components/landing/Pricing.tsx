import { Check, Shield, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const features = [
  "12 Professional PDF Receipts",
  "All Months Pre-Generated",
  "Email Backup Included",
  "Instant Download",
  "Revenue Stamp Note Included",
  "Valid for HRA Tax Claims"
];

export const Pricing = () => {
  return (
    <section className="py-32" id="pricing">
      <div className="container">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-black text-primary mb-6"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            One small investment for a full year of peace of mind. No subscriptions, no hidden fees.
          </motion.p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-1 md:p-1.5 rounded-[2.5rem] bg-gradient-to-b from-slate-200 to-transparent premium-shadow"
          >
            <div className="relative bg-white rounded-[2.4rem] p-10 md:p-16 overflow-hidden">
              {/* Animated Spotlight */}
              <motion.div 
                animate={{ 
                  x: ["-50%", "-40%", "-60%", "-50%"],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 w-[150%] h-60 bg-secondary/10 blur-[100px] rounded-full" 
              />
              
              <div className="relative z-10 text-center mb-12">
                <h3 className="text-2xl font-black text-primary uppercase tracking-wider mb-4">Complete Package</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-7xl font-black text-primary tracking-tighter">₹99</span>
                  <span className="text-muted font-black text-xs uppercase tracking-[0.2em]">/ financial year</span>
                </div>
                <p className="mt-8 text-muted font-bold uppercase tracking-widest text-[10px]">One-time payment. Everything included.</p>
              </div>
              
              <ul className="grid sm:grid-cols-2 gap-6 mb-12">
                {features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.05) }}
                    className="flex items-center gap-3 text-primary/80"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="font-bold text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <Link to="/generate">
                <Button 
                  size="lg" 
                  className="w-full h-16 text-xl btn-gradient rounded-2xl shadow-2xl shadow-secondary/30 group"
                  aria-label="Generate My Receipts"
                >
                  Generate My Receipts
                  <Zap className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
              
              <div className="mt-12 flex flex-col items-center gap-6">
                <div className="flex items-center gap-8 opacity-40 grayscale">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className="h-6" referrerPolicy="no-referrer" />
                </div>
                <div className="flex items-center gap-4 text-[10px] font-black text-muted uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-1.5"><Shield className="w-3 h-3" /> Secure Payment</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="flex items-center gap-1.5"><Zap className="w-3 h-3" /> Instant Delivery</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
