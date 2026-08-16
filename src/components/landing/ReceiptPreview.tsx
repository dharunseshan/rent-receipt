import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const ReceiptPreview = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-black text-primary mb-6"
          >
            Professional Format, Every Time
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Each receipt includes all legally required information in a clean, professional layout accepted by HR departments nationwide.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card rounded-[2rem] p-8 md:p-16 premium-shadow border-white/40 relative overflow-hidden"
          >
            {/* Mock Receipt Content */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 md:p-12 rounded-xl shadow-inner border border-slate-100"
            >
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
                  <div className="absolute -top-3 -right-3 bg-accent text-white p-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Annotations */}
            <div className="hidden lg:block">
              <Annotation 
                top="15%" 
                left="85%" 
                text="All required details" 
                delay={0.6}
              />
              <Annotation 
                top="40%" 
                left="-5%" 
                text="Professional formatting" 
                delay={0.8}
              />
              <Annotation 
                top="85%" 
                left="15%" 
                text="Ready to submit" 
                delay={1.0}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Annotation = ({ top, left, text, delay = 0 }: { top: string, left: string, text: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8, y: 10 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    style={{ top, left }}
    className="absolute z-20 flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl border border-slate-100"
  >
    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
    <span className="text-xs font-black text-primary uppercase tracking-wider whitespace-nowrap">{text}</span>
  </motion.div>
);
