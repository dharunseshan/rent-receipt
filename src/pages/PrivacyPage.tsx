import { motion } from 'motion/react';
import { Footer } from '../components/landing/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-black text-primary mb-12">Privacy Policy</h1>
          
          <div className="prose prose-slate prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-6">What We Collect</h2>
              <p className="text-muted leading-relaxed">
                We collect only the information you provide in the form to generate your receipts. 
                This includes your name, address, landlord details, and rent amount.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-6">What We Don't Do</h2>
              <p className="text-muted leading-relaxed">
                We do NOT store your personal information after generating receipts. 
                All data is processed in real-time and discarded immediately after PDF generation. 
                Your privacy is our top priority.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-6">Payment Processing</h2>
              <p className="text-muted leading-relaxed">
                Payments are handled securely by Razorpay. We never see or store your payment details, 
                credit card numbers, or UPI IDs.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-6">Emails</h2>
              <p className="text-muted leading-relaxed">
                Your email is used only to send you the generated receipts. 
                We do not send marketing emails, newsletters, or share your email with third parties.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-6">Contact</h2>
              <p className="text-muted leading-relaxed">
                Questions about your privacy? Email us at <a href="mailto:rentreceipts.help@gmail.com" className="text-secondary font-bold">rentreceipts.help@gmail.com</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
