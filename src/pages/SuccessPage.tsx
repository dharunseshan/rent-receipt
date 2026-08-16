import { useFormContext } from '../context/FormContext';
import { Button } from '../components/ui/Button';
import { CheckCircle, Download, Mail, Share2, RefreshCw, ArrowRight, FileText, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export default function SuccessPage() {
  const { formData } = useFormContext();

  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0F172A', '#2563EB', '#10B981']
    });
  }, []);

  const months = ["April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March"];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', damping: 12, stiffness: 200 }}
            className="w-28 h-28 bg-accent/10 rounded-4xl flex items-center justify-center mx-auto mb-8 relative"
          >
            <CheckCircle className="w-14 h-14 text-accent" />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-8 h-8 text-secondary" />
            </motion.div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl font-black text-primary tracking-tighter mb-4"
          >
            Payment Successful!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted text-xl font-medium"
          >
            Your professional rent receipts are ready for download.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-accent/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-accent/10 flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div>
                <h3 className="text-2xl font-black text-primary tracking-tight mb-2">Download All Receipts</h3>
                <p className="text-muted font-medium">All 12 months compiled into a single ZIP file.</p>
              </div>
              <Button size="lg" className="h-16 px-8 text-lg btn-gradient rounded-2xl shadow-2xl shadow-secondary/20 group">
                <Download className="w-6 h-6 mr-2 group-hover:-translate-y-1 transition-transform" />
                Download ZIP
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] overflow-hidden premium-shadow border border-white/20"
            >
              <div className="px-10 py-6 bg-slate-50/50 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-sm font-black text-primary uppercase tracking-widest">Individual Receipts</h3>
                <span className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">FY {formData.rent.financialYear}</span>
              </div>
              <div className="divide-y divide-slate-50">
                {months.map((month, i) => (
                  <div key={i} className="px-10 py-5 flex items-center justify-between hover:bg-slate-50/50 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                        <FileText className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="font-bold text-primary tracking-tight">{month} 2024 Receipt</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <button className="text-xs font-black text-secondary uppercase tracking-widest hover:text-primary transition-colors">Preview</button>
                      <button className="p-2.5 rounded-xl hover:bg-white hover:shadow-sm transition-all text-muted hover:text-secondary">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-primary rounded-4xl p-8 text-white relative overflow-hidden group"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <Mail className="w-10 h-10 mb-6 text-secondary" />
              <h4 className="text-xl font-black uppercase tracking-wider mb-4">Email Backup Sent</h4>
              <p className="text-white/70 text-sm font-medium leading-relaxed mb-6">
                We've sent a high-resolution copy of all receipts to <strong className="text-white">{formData.rent.email}</strong>.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black text-white/40 uppercase tracking-widest">
                <Sparkles className="w-3 h-3" /> Check your inbox
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/60 backdrop-blur-xl rounded-4xl p-8 premium-shadow border border-white/20"
            >
              <h4 className="text-sm font-black text-primary uppercase tracking-widest mb-6">Next Steps</h4>
              <ul className="space-y-6">
                {[
                  "Download all receipts",
                  "Get them signed by landlord",
                  "Submit to your HR department",
                  "Claim HRA tax exemption"
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="shrink-0 w-6 h-6 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-black text-[10px]">
                      0{i + 1}
                    </span>
                    <span className="text-sm font-bold text-muted leading-tight">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="flex flex-col gap-4">
              <Button variant="outline" className="h-14 rounded-2xl border-slate-200 text-primary font-bold group">
                <Share2 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Share with Friends
              </Button>
              <Link to="/generate">
                <Button variant="ghost" className="w-full h-14 rounded-2xl text-muted font-bold hover:text-primary group">
                  <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                  Generate New Set
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/" className="text-muted hover:text-primary font-black uppercase tracking-widest text-xs inline-flex items-center gap-2 transition-colors">
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
