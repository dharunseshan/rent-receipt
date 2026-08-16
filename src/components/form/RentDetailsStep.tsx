import { useFormContext } from '../../context/FormContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { rentSchema } from '../../lib/validations';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CreditCard } from 'lucide-react';

const months = ["April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March"];
const years = ["2024-25", "2023-24", "2022-23"];

export const RentDetailsStep = () => {
  const { formData, updateFormData, setStep } = useFormContext();
  const navigate = useNavigate();
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(rentSchema),
    defaultValues: formData.rent,
    mode: 'onChange'
  });

  const onSubmit = (data: any) => {
    updateFormData({ rent: data });
    navigate('/payment');
    window.scrollTo(0, 0);
  };

  const watchedFields = watch();

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="relative">
          <span className="absolute left-5 top-[48px] text-primary font-black z-10 text-lg">₹</span>
          <Input
            label="Monthly Rent Amount"
            placeholder="15,000"
            type="number"
            className="pl-10"
            example="15,000"
            tooltip="The actual rent you pay every month. This will be used to calculate your HRA exemption."
            isValid={!!watchedFields.amount && !errors.amount}
            error={errors.amount?.message as string}
            {...register('amount')}
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-black text-primary uppercase tracking-wider">Financial Year</label>
            <select
              className="flex h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base font-bold text-primary transition-all focus:outline-none focus:ring-4 focus:ring-secondary/5 focus:border-secondary appearance-none"
              {...register('financialYear')}
            >
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-black text-primary uppercase tracking-wider">Start Month</label>
            <select
              className="flex h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base font-bold text-primary transition-all focus:outline-none focus:ring-4 focus:ring-secondary/5 focus:border-secondary appearance-none"
              {...register('startMonth')}
            >
              {months.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-black text-primary uppercase tracking-wider">Number of Months</label>
          <select
            className="flex h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base font-bold text-primary transition-all focus:outline-none focus:ring-4 focus:ring-secondary/5 focus:border-secondary appearance-none"
            {...register('numberOfMonths')}
          >
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1} Month{i > 0 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        <Input
          label="Email Address"
          placeholder="your@email.com"
          type="email"
          example="rahul@gmail.com"
          tooltip="We'll send your receipts here so you never lose them."
          isValid={!!watchedFields.email && !errors.email}
          error={errors.email?.message as string}
          {...register('email')}
        />

        <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="pt-1">
            <input
              type="checkbox"
              id="includeRevenueStamp"
              className="w-5 h-5 rounded-lg border-slate-300 text-secondary focus:ring-secondary transition-all cursor-pointer"
              {...register('includeRevenueStamp')}
            />
          </div>
          <label htmlFor="includeRevenueStamp" className="flex-1 cursor-pointer">
            <span className="text-sm font-black text-primary uppercase tracking-wider block mb-1">Include Revenue Stamp Note</span>
            <p className="text-xs text-muted font-medium leading-relaxed">
              Recommended for cash payments. Adds a note: "Revenue stamp of appropriate value to be affixed as per state regulations."
            </p>
          </label>
        </div>

        <div className="pt-8 flex gap-6">
          <Button type="button" variant="outline" className="flex-1 h-16 rounded-2xl border-slate-200 text-primary font-bold" onClick={() => setStep(2)}>
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back
          </Button>
          <Button type="submit" className="flex-[2] h-16 text-xl btn-gradient group">
            Review & Pay
            <CreditCard className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </form>
    </div>
  );
};
