import { z } from 'zod';

// Newsletter subscription validation schema
export const NewsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .toLowerCase()
    .trim(),
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters')
    .trim()
    .optional(),
  source: z
    .string()
    .optional()
    .default('footer'),
});

// Admin login validation schema
export const AdminLoginSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters'),
});

export type NewsletterFormData = z.infer<typeof NewsletterSchema>;
export type AdminLoginData = z.infer<typeof AdminLoginSchema>;