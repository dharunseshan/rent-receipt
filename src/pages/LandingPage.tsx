import { Hero } from '../components/landing/Hero';
import { Features } from '../components/landing/Features';
import { HowItWorks } from '../components/landing/HowItWorks';
import { ReceiptPreview } from '../components/landing/ReceiptPreview';
import { Pricing } from '../components/landing/Pricing';
import { FAQ } from '../components/landing/FAQ';
import { FinalCTA } from '../components/landing/FinalCTA';
import { Footer } from '../components/landing/Footer';
import { motion } from 'motion/react';

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <Hero />
      <Features />
      <HowItWorks />
      <ReceiptPreview />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </motion.div>
  );
}
