import { Link } from 'react-router-dom';
import { Mail, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <Link to="/" className="text-2xl font-black text-primary mb-6 block">
              RentReceipt<span className="text-secondary">.in</span>
            </Link>
            <p className="text-muted text-lg max-w-sm mb-8 leading-relaxed">
              Simplifying tax compliance for Indian professionals. 
              Professional, secure, and instant rent receipts.
            </p>
            <div className="flex items-center gap-2 text-primary font-bold">
              <Mail className="w-5 h-5 text-secondary" />
              <a href="mailto:support@rentreceipt.in" className="hover:text-secondary transition-colors">support@rentreceipt.in</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-primary uppercase tracking-[0.2em] text-xs mb-8">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/generate" className="text-muted hover:text-secondary transition-colors font-medium">Generate Receipts</Link></li>
              <li><Link to="/#pricing" className="text-muted hover:text-secondary transition-colors font-medium">Pricing</Link></li>
              <li><Link to="/#faq" className="text-muted hover:text-secondary transition-colors font-medium">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-primary uppercase tracking-[0.2em] text-xs mb-8">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-muted hover:text-secondary transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted hover:text-secondary transition-colors font-medium">Terms of Service</Link></li>
              <li><Link to="/refund" className="text-muted hover:text-secondary transition-colors font-medium">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-muted text-sm font-medium">
              © {new Date().getFullYear()} RentReceipt.in. Made for Indian Taxpayers 🇮🇳
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:rentreceipts.help@gmail.com" className="text-muted hover:text-secondary text-sm font-medium transition-colors flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                rentreceipts.help@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="text-muted hover:text-secondary text-sm font-medium transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-muted hover:text-secondary text-sm font-medium transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
