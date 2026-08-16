import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ReceiptFormData {
  tenant: {
    name: string;
    pan: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  landlord: {
    name: string;
    pan?: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  rent: {
    amount: number;
    financialYear: string;
    startMonth: string;
    numberOfMonths: number;
    email: string;
    includeRevenueStamp: boolean;
  };
}

interface FormContextType {
  formData: ReceiptFormData;
  updateFormData: (data: Partial<ReceiptFormData>) => void;
  step: number;
  setStep: (step: number) => void;
}

const defaultData: ReceiptFormData = {
  tenant: { name: '', pan: '', address: '', city: '', state: '', pincode: '' },
  landlord: { name: '', pan: '', address: '', city: '', state: '', pincode: '' },
  rent: { amount: 0, financialYear: '2024-25', startMonth: 'April', numberOfMonths: 12, email: '', includeRevenueStamp: true }
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<ReceiptFormData>(() => {
    const saved = localStorage.getItem('rent_receipt_form');
    return saved ? JSON.parse(saved) : defaultData;
  });
  const [step, setStep] = useState(1);

  useEffect(() => {
    localStorage.setItem('rent_receipt_form', JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (data: Partial<ReceiptFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, step, setStep }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error('useFormContext must be used within FormProvider');
  return context;
};
