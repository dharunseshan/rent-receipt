import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormProvider } from './context/FormContext';
import LandingPage from './pages/LandingPage';
import GeneratePage from './pages/GeneratePage';
import PaymentPage from './pages/PaymentPage';
import SuccessPage from './pages/SuccessPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import RefundPage from './pages/RefundPage';
import { Background } from './components/ui/Background';

export default function App() {
  return (
    <FormProvider>
      <Router>
        <Background />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/generate" element={<GeneratePage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund" element={<RefundPage />} />
          {/* Fallback for other routes */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}
