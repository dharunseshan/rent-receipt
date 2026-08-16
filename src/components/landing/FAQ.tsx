import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Is this format accepted by HR departments?",
    answer: "Yes. We use the standard rent receipt format that's been accepted across Indian companies for years. It includes all information required by Income Tax rules for HRA exemption."
  },
  {
    question: "Do I need my landlord's PAN number?",
    answer: "Only if your monthly rent exceeds ₹8,333 (₹1,00,000 annually). The tool will guide you based on your rent amount."
  },
  {
    question: "Can I use this for previous years?",
    answer: "Yes. You can select any financial year when filling the form. Generate receipts for FY 2024-25, 2023-24, or earlier."
  },
  {
    question: "What if my company rejects the format?",
    answer: "While rare, if your HR department rejects the format, contact us with proof and we'll provide a full refund. No questions asked."
  },
  {
    question: "How long does generation take?",
    answer: "After payment, your receipts are generated instantly. Download takes less than 10 seconds."
  },
  {
    question: "Is my data stored or shared?",
    answer: "No. We don't store your personal information. After generation, your data isn't saved on our servers."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32">
      <div className="container max-w-4xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-black text-primary mb-6"
          >
            Common Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Everything you need to know about our generator and HRA claims.
          </motion.p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-3xl border transition-all duration-500 ${
                openIndex === index 
                ? 'bg-white border-secondary/20 premium-shadow' 
                : 'bg-white/40 border-slate-100 hover:border-slate-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 text-left flex items-center justify-between group"
              >
                <span className={`text-xl font-bold transition-colors duration-300 ${
                  openIndex === index ? 'text-primary' : 'text-primary/70 group-hover:text-primary'
                }`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                  openIndex === index ? 'bg-secondary text-white rotate-0' : 'bg-slate-100 text-muted rotate-90'
                }`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-8 pb-8 text-muted text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
