import { z } from 'zod';

export const tenantSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100).regex(/^[a-zA-Z\s]+$/, "Only letters and spaces allowed"),
  pan: z.string().regex(/^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$/, "Invalid PAN format (e.g. ABCDE1234F)").transform(val => val.toUpperCase()),
  address: z.string().min(10, "Address must be at least 10 characters").max(200),
  city: z.string().min(2, "City is required"),
  state: z.string().min(1, "State is required"),
  pincode: z.string().length(6, "PIN code must be exactly 6 digits").regex(/^\d+$/, "Only digits allowed"),
});

export const landlordSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100).regex(/^[a-zA-Z\s]+$/, "Only letters and spaces allowed"),
  pan: z.string().regex(/^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$/, "Invalid PAN format").transform(val => val?.toUpperCase()).optional().or(z.literal('')),
  address: z.string().min(10, "Address must be at least 10 characters").max(200),
  city: z.string().min(2, "City is required"),
  state: z.string().min(1, "State is required"),
  pincode: z.string().length(6, "PIN code must be exactly 6 digits").regex(/^\d+$/, "Only digits allowed"),
});

export const rentSchema = z.object({
  amount: z.coerce.number().min(1, "Amount must be greater than 0").max(1000000, "Amount too high"),
  financialYear: z.string().min(1, "Financial year is required"),
  startMonth: z.string().min(1, "Start month is required"),
  numberOfMonths: z.coerce.number().min(1).max(12),
  email: z.string().email("Invalid email address"),
  includeRevenueStamp: z.boolean().optional().default(true),
});
