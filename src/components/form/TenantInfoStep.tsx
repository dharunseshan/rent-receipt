import { useFormContext } from '../../context/FormContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { tenantSchema } from '../../lib/validations';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { HelpCircle, ArrowRight } from 'lucide-react';

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Chandigarh", "Puducherry"
];

export const TenantInfoStep = () => {
  const { formData, updateFormData, setStep } = useFormContext();
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(tenantSchema),
    defaultValues: formData.tenant,
    mode: 'onChange'
  });

  const onSubmit = (data: any) => {
    updateFormData({ tenant: data });
    setStep(2);
    window.scrollTo(0, 0);
  };

  const watchedFields = watch();

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Input
          label="Full Name"
          placeholder="e.g. Rahul Sharma"
          example="Rahul Sharma"
          tooltip="Your name must match exactly with your PAN card for tax compliance."
          isValid={!!watchedFields.name && !errors.name}
          error={errors.name?.message as string}
          {...register('name')}
        />
        
        <Input
          label="PAN Number"
          placeholder="ABCDE1234F"
          maxLength={10}
          className="uppercase"
          example="ABCDE1234F"
          tooltip="Permanent Account Number is required for HRA claims exceeding ₹1 lakh/year."
          isValid={!!watchedFields.pan && !errors.pan}
          error={errors.pan?.message as string}
          {...register('pan')}
        />

        <div className="space-y-2">
          <label className="text-sm font-black text-primary uppercase tracking-wider flex items-center gap-1.5">
            Current Residential Address
            <HelpCircle className="w-3.5 h-3.5 text-muted" />
          </label>
          <textarea
            className={`flex min-h-[120px] w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base font-bold text-primary transition-all placeholder:text-slate-300 placeholder:font-medium focus:outline-none focus:ring-4 focus:ring-secondary/5 focus:border-secondary ${errors.address ? 'border-rose-500' : ''}`}
            placeholder="House No, Building, Area..."
            {...register('address')}
          />
          {errors.address && <p className="text-xs text-rose-500 font-bold uppercase tracking-wider">{errors.address.message as string}</p>}
          <p className="text-[10px] text-muted font-bold uppercase tracking-widest">Example: <span className="text-primary/60">A-204, Green Valley Apartments, Whitefield</span></p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Input
            label="City"
            placeholder="e.g. Bangalore"
            example="Bangalore"
            isValid={!!watchedFields.city && !errors.city}
            error={errors.city?.message as string}
            {...register('city')}
          />
          <Input
            label="PIN Code"
            placeholder="560001"
            maxLength={6}
            example="560001"
            isValid={!!watchedFields.pincode && !errors.pincode}
            error={errors.pincode?.message as string}
            {...register('pincode')}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-black text-primary uppercase tracking-wider">State</label>
          <select
            className={`flex h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base font-bold text-primary transition-all focus:outline-none focus:ring-4 focus:ring-secondary/5 focus:border-secondary appearance-none ${errors.state ? 'border-rose-500' : ''}`}
            {...register('state')}
          >
            <option value="">Select State</option>
            {states.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.state && <p className="text-xs text-rose-500 font-bold uppercase tracking-wider">{errors.state.message as string}</p>}
        </div>

        <div className="pt-8">
          <Button type="submit" className="w-full h-16 text-xl btn-gradient group">
            Save & Continue
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </form>
    </div>
  );
};
