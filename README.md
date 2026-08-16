

# RentReceipt.in - Rent Receipt Generator

## Description

A clean, modern, and secure full-stack application that generates professional rent receipts for tax purposes (HRA exemption). Users can enter their rent details, securely pay a small fee via Razorpay, and receive automatically generated PDF rent receipts directly in their inbox via Resend. 

The repository features a Next.js production-ready application along with a React/Vite frontend prototype, making it a comprehensive example of modern full-stack development, integration with third-party payment and email APIs, and clean UI design using Tailwind CSS.

## Features

- **Automated PDF Generation**: Dynamically generate multiple rent receipts based on duration.
- **Secure Payments**: Integrated Razorpay payment gateway for a seamless checkout experience.
- **Email Delivery**: Uses Resend to reliably email receipts upon successful payment.
- **Modern UI**: Designed with React, Tailwind CSS, and Framer Motion for a sleek, responsive interface.
- **Type-Safe**: Fully written in TypeScript for robustness and developer experience.

## Screenshots

*(Add screenshots of the landing page, form, and generated receipts here)*

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router) & [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Payments**: [Razorpay API](https://razorpay.com/)
- **Email Delivery**: [Resend](https://resend.com/)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF)
- **Validation**: [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/)

## Folder Structure

```text
/
├── nextjs-app/                 # The main Next.js full-stack application (Production)
│   ├── src/
│   │   ├── app/                # Next.js App Router (Pages & API routes)
│   │   ├── components/         # Reusable React components
│   │   ├── lib/                # Utilities and store logic
│   │   └── services/           # API handlers
│   └── package.json            # Next.js dependencies
│
├── src/                        # The Vite/React frontend prototype (Development)
├── vite.config.ts              # Vite configuration
└── package.json                # Vite prototype dependencies
```

## Environment Variables

Copy the provided `.env.example` file to `.env.local` inside the `nextjs-app` directory and fill in your details:

```env
# Razorpay API Keys (https://dashboard.razorpay.com)
RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXXX
RAZORPAY_SECRET=your_razorpay_secret_here
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXXX

# Resend API Key (https://resend.com)
RESEND_API_KEY=re_XXXXXXXXXXXXXXXXXXXXX

# App URL (your domain in production)
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Admin email (receives payment notifications)
ADMIN_EMAIL=your.email@example.com
```

## Installation

**Prerequisites:** [Node.js](https://nodejs.org/en/) (v18+)

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd rentreceipt.in---rent-receipt-generator
   ```

2. Navigate to the Next.js app directory:
   ```bash
   cd nextjs-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running Locally

To run the Next.js production app locally:

1. Ensure your `.env.local` is set up properly.
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

*(Note: To run the Vite prototype instead, run `npm install` and `npm run dev` in the root directory).*

## Build

To build the Next.js app for production:

```bash
npm run build
```

To start the production build:
```bash
npm start
```

## API Documentation (Internal)

- **`POST /api/payment/create-order`**: Creates a Razorpay order. Returns `{ orderId, amount, currency }`.
- **`POST /api/payment/verify`**: Verifies the Razorpay signature. Returns `{ success: true/false }`.
- **`POST /api/generate-pdf`**: Generates and returns PDF buffers based on payload.
- **`POST /api/send-email`**: Connects to Resend to send the generated PDF to the provided email.

## Troubleshooting

- **Razorpay Checkout not opening**: Ensure `NEXT_PUBLIC_RAZORPAY_KEY_ID` is set and valid.
- **Email not sending**: Verify your Resend API key is correct and that the sender domain is verified in Resend.
- **Dependencies conflict**: Run `npm install --legacy-peer-deps` if there are version issues between React packages.

## Future Improvements

- Add a database (e.g., PostgreSQL/Supabase) to store user sessions and generated receipts.
- Implement user authentication (e.g., NextAuth.js).
- Add support for different receipt templates.

## Contributing

Contributions are always welcome! Please follow standard GitHub flow:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License.
