import { motion } from 'motion/react';
import { Footer } from '../components/landing/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-black text-primary mb-12">Terms of Service</h1>
          
          <div className="prose prose-slate prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-6">1. Service Description</h2>
              <p className="text-muted leading-relaxed">
                RentReceipt.in provides a tool for generating rent receipts in PDF format based on user-provided data. 
                The service is intended for personal use by Indian taxpayers for HRA exemption claims.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-6">2. User Responsibility</h2>
              <p className="text-muted leading-relaxed">
                Users are responsible for the accuracy of the data provided. 
                RentReceipt.in is not responsible for any legal or tax implications resulting from incorrect or fraudulent data.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-6">3. Payments</h2>
              <p className="text-muted leading-relaxed">
                A one-time fee of ₹99 is charged for generating a set of 12 monthly receipts. 
                Payments are non-refundable once the receipts have been generated and sent to the user's email.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-6">4. Limitation of Liability</h2>
              <p className="text-muted leading-relaxed">
                RentReceipt.in shall not be liable for any indirect, incidental, or consequential damages 
                arising out of the use or inability to use the service.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-6">5. Contact</h2>
              <p className="text-muted leading-relaxed">
                For any queries regarding these terms, please contact us at <a href="mailto:rentreceipts.help@gmail.com" className="text-secondary font-bold">rentreceipts.help@gmail.com</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
