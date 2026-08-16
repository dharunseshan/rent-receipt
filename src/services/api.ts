import { 
  RazorpayOrder, 
  PaymentVerifyRequest, 
  PaymentVerifyResponse, 
  GeneratePdfRequest, 
  GeneratePdfResponse, 
  SendEmailRequest, 
  SendEmailResponse 
} from '../types/api';

/**
 * Service for handling API calls to the backend.
 * These are placeholders for real backend integration.
 */
export const apiService = {
  /**
   * Creates a new Razorpay order on the server.
   */
  async createOrder(amount: number): Promise<RazorpayOrder> {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      id: `order_${Math.random().toString(36).slice(2)}`,
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`
    };
  },

  /**
   * Verifies the payment signature from Razorpay.
   */
  async verifyPayment(data: PaymentVerifyRequest): Promise<PaymentVerifyResponse> {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      success: true,
      message: 'Payment verified successfully'
    };
  },

  /**
   * Generates receipt PDFs based on form data.
   */
  async generatePdfs(data: GeneratePdfRequest): Promise<GeneratePdfResponse> {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {
      pdfUrls: Array.from({ length: 12 }, (_, i) => `https://example.com/receipt-${i + 1}.pdf`)
    };
  },

  /**
   * Sends generated receipts to the user's email.
   */
  async sendEmail(data: SendEmailRequest): Promise<SendEmailResponse> {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      success: true
    };
  }
};
