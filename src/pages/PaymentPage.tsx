import { useFormContext } from '../context/FormContext';
import { Button } from '../components/ui/Button';
import { ShieldCheck, CreditCard, Smartphone, Landmark, Wallet, CheckCircle2, ArrowLeft, Lock } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function PaymentPage() {
  const { formData } = useFormContext();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const subtotal = 99;
  const gst = 18;
  const total = subtotal + gst;

  const handlePayment = () => {
    if (!agreed) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/success');
    }, 2000);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between mb-12"
        >
          <Link to="/generate" className="flex items-center gap-2 text-sm font-black text-muted uppercase tracking-widest hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Form
          </Link>
          <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
            <Lock className="w-3 h-3 text-accent" />
            <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">Secure Checkout</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-black text-primary tracking-tighter mb-4">Complete Your Order</h1>
          <p className="text-muted text-lg font-medium">Securely pay and download your receipts instantly.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Payment Methods */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-10 premium-shadow border border-white/20">
              <h3 className="text-xl font-black text-primary uppercase tracking-wider mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center text-sm">1</span>
                Payment Method
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: <Smartphone className="w-8 h-8" />, label: "UPI / QR", active: true },
                  { icon: <CreditCard className="w-8 h-8" />, label: "Cards" },
                  { icon: <Landmark className="w-8 h-8" />, label: "Netbanking" },
                  { icon: <Wallet className="w-8 h-8" />, label: "Wallets" }
                ].map((method, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 ${
                      method.active 
                      ? 'border-secondary bg-secondary/5 text-secondary' 
                      : 'border-slate-100 hover:border-secondary/30 text-muted hover:text-secondary'
                    }`}
                  >
                    {method.icon}
                    <span className={`text-[10px] font-black uppercase tracking-widest ${method.active ? 'text-primary' : ''}`}>{method.label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-8">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox" 
                      className="peer h-6 w-6 cursor-pointer appearance-none rounded-lg border border-slate-200 transition-all checked:bg-secondary checked:border-secondary"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                    />
                    <CheckCircle2 className="absolute h-4 w-4 text-white opacity-0 peer-checked:opacity-100 left-1 transition-opacity pointer-events-none" />
                  </div>
                  <span className="text-sm font-medium text-muted leading-relaxed group-hover:text-primary transition-colors">
                    I agree to the <Link to="/terms" className="text-secondary font-bold underline underline-offset-4">Terms</Link> and <Link to="/privacy" className="text-secondary font-bold underline underline-offset-4">Privacy Policy</Link>.
                  </span>
                </label>

                <Button 
                  className="w-full h-16 text-xl btn-gradient rounded-2xl shadow-2xl shadow-secondary/20 group" 
                  onClick={handlePayment}
                  isLoading={isProcessing}
                  disabled={!agreed}
                >
                  Pay ₹{total} Securely
                  <Lock className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-8 opacity-40 grayscale">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className="h-5" referrerPolicy="no-referrer" />
                <div className="h-4 w-px bg-slate-300" />
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">256-bit SSL</div>
              </div>
              <p className="text-xs text-muted font-bold flex items-center gap-2 uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                100% Secure & Encrypted
              </p>
            </div>
          </motion.div>

          {/* Right: Order Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-[2rem] p-10 premium-shadow border-white/40 sticky top-32">
              <h3 className="text-xl font-black text-primary uppercase tracking-wider mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm">2</span>
                Summary
              </h3>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-secondary/5 border border-secondary/10">
                    <p className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-1">Product</p>
                    <p className="font-black text-primary">12 Monthly Rent Receipts</p>
                    <p className="text-xs font-bold text-muted mt-1">FY {formData.rent.financialYear}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
                    <p className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-1">Tenant</p>
                    <p className="font-bold text-primary truncate">{formData.tenant.name}</p>
                  </div>
                </div>

                <div className="space-y-4 pt-8 border-t border-slate-100">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-muted">Subtotal</span>
                    <span className="text-primary font-bold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-muted">GST (18%)</span>
                    <span className="text-primary font-bold">₹{gst}</span>
                  </div>
                  <div className="pt-6 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-1">Total</p>
                      <span className="text-4xl font-black text-primary tracking-tighter">₹{total}</span>
                    </div>
                    <div className="text-right">
                      <ShieldCheck className="w-8 h-8 text-accent ml-auto mb-1" />
                      <p className="text-[8px] font-black text-accent uppercase tracking-widest">Guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
