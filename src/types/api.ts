export interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
}

export interface PaymentVerifyRequest {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface PaymentVerifyResponse {
  success: boolean;
  message: string;
}

export interface GeneratePdfRequest {
  formData: any; // Replace with actual ReceiptFormData if needed
}

export interface GeneratePdfResponse {
  pdfUrls: string[];
}

export interface SendEmailRequest {
  email: string;
  pdfUrls: string[];
}

export interface SendEmailResponse {
  success: boolean;
}
