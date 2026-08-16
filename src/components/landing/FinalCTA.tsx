import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { Shield, Zap, Mail } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="py-32">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[3rem] bg-primary p-12 md:p-24 overflow-hidden text-center"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight"
            >
              Ready to Claim Your <br /> HRA Exemption?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/60 text-xl mb-12"
            >
              Join hundreds of smart taxpayers simplifying their tax filing. 
              Professional receipts in under 2 minutes.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/generate">
                <Button 
                  size="lg" 
                  className="h-16 px-12 text-xl bg-white text-primary hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 rounded-2xl mb-12"
                >
                  Generate Receipts Now — ₹99
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 text-white/40 text-sm font-black uppercase tracking-[0.2em]"
            >
              <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Secure Payment</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> Instant Delivery</span>
              <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> Privacy Guaranteed</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
