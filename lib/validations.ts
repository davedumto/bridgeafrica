import { z } from 'zod';

// Contact form validation schema
export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .toLowerCase()
    .trim(),
  company: z
    .string()
    .max(100, 'Company name cannot exceed 100 characters')
    .trim()
    .optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message cannot exceed 1000 characters')
    .trim(),
});

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

// Admin response validation schema
export const AdminResponseSchema = z.object({
  contactId: z.string().min(1, 'Contact ID is required'),
  responseMessage: z
    .string()
    .min(10, 'Response message must be at least 10 characters')
    .max(2000, 'Response message cannot exceed 2000 characters')
    .trim(),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
export type NewsletterFormData = z.infer<typeof NewsletterSchema>;
export type AdminLoginData = z.infer<typeof AdminLoginSchema>;
export type AdminResponseData = z.infer<typeof AdminResponseSchema>;