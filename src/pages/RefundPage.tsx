import { motion } from 'motion/react';
import { Footer } from '../components/landing/Footer';

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-black text-primary mb-12">Refund Policy</h1>
          
          <div className="prose prose-slate prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-6">Our Policy</h2>
              <p className="text-muted leading-relaxed">
                At RentReceipt.in, we strive to provide the best service possible. 
                However, due to the digital nature of our product (instantly generated PDF receipts), 
                we generally do not offer refunds once the payment is successful and the receipts have been generated.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-6">Exceptions</h2>
              <p className="text-muted leading-relaxed">
                We may consider refund requests in the following cases:
              </p>
              <ul className="list-disc pl-6 text-muted space-y-2">
                <li>Double payment for the same transaction.</li>
                <li>Technical failure where receipts were not generated or sent despite successful payment.</li>
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-6">How to Request a Refund</h2>
              <p className="text-muted leading-relaxed">
                To request a refund, please email us at <a href="mailto:rentreceipts.help@gmail.com" className="text-secondary font-bold">rentreceipts.help@gmail.com</a> with your transaction details and the reason for the request. 
                We will review your request and respond within 2-3 business days.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
