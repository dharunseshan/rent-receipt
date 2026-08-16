import { motion } from 'motion/react';
import { Edit3, CreditCard, Download } from 'lucide-react';

const steps = [
  {
    icon: <Edit3 className="w-6 h-6" />,
    title: "Enter Details",
    description: "Fill in your information, landlord details, and rent amount. Takes 2 minutes.",
    visual: "https://picsum.photos/seed/form/400/250?blur=2"
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Secure Payment",
    description: "Pay ₹99 securely via Razorpay. UPI, cards, netbanking - your choice.",
    visual: "https://picsum.photos/seed/pay/400/250?blur=2"
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "Download Instantly",
    description: "Get 12 PDF receipts immediately. Plus email backup for safekeeping.",
    visual: "https://picsum.photos/seed/download/400/250?blur=2"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-32 overflow-hidden">
      <div className="container">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-black text-primary mb-6"
          >
            The Premium Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Simple, transparent, and efficient. Designed for busy professionals.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className={`flex items-center justify-center md:justify-start gap-4 mb-6 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}>
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg shadow-secondary/20 z-10"
                    >
                      {step.icon}
                    </motion.div>
                    <span className="text-xs font-black text-secondary uppercase tracking-[0.2em]">Step 0{index + 1}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4">{step.title}</h3>
                  <p className="text-muted text-lg leading-relaxed">{step.description}</p>
                </div>

                {/* Visual */}
                <div className="flex-1 w-full">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-secondary/5 rounded-3xl blur-2xl group-hover:bg-secondary/10 transition-colors" />
                    <img 
                      src={step.visual} 
                      alt={step.title}
                      className="relative z-10 rounded-3xl border border-slate-100 shadow-2xl w-full grayscale-[0.5] hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
