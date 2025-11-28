import * as nodemailer from 'nodemailer';
import { getWelcomeEmailHTML, getWelcomeEmailText, getContactEmailHTML, getContactEmailText } from './emailTemplates';

// Email configuration
const EMAIL_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports like 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
  }
};

const FROM_EMAIL = process.env.FROM_EMAIL || 'hello@bridgeafrica.com';
const FROM_NAME = process.env.FROM_NAME || 'BridgeAfrica Team';

// Create transporter
let transporter: nodemailer.Transporter | null = null;

function createTransporter() {
  if (!transporter) {
    if (!EMAIL_CONFIG.auth.user || !EMAIL_CONFIG.auth.pass) {
      console.warn('Email credentials not configured. Email sending will be disabled.');
      return null;
    }

    transporter = nodemailer.createTransport(EMAIL_CONFIG);
  }
  return transporter;
}

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, text, replyTo }: SendEmailOptions): Promise<boolean> {
  const transport = createTransporter();
  
  if (!transport) {
    console.warn('Email transporter not available. Skipping email send.');
    return false;
  }

  try {
    console.log('Attempting to send email to:', to);
    console.log('From:', `${FROM_NAME} <${FROM_EMAIL}>`);
    
    const mailOptions = {
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to,
      subject,
      html,
      text,
      replyTo: replyTo || FROM_EMAIL,
    };

    const result = await transport.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return true;
  } catch (error) {
    console.error('Detailed email error:', error);
    return false;
  }
}

interface WelcomeEmailOptions {
  email: string;
  name?: string;
}

export async function sendWelcomeEmail({ email, name }: WelcomeEmailOptions): Promise<boolean> {
  const subject = 'Welcome to BridgeAfrica Newsletter!';
  const html = getWelcomeEmailHTML({ email, name });
  const text = getWelcomeEmailText({ email, name });

  return await sendEmail({
    to: email,
    subject,
    html,
    text,
  });
}

interface ContactEmailOptions {
  name: string;
  email: string;
  message: string;
  company?: string;
}

export async function sendContactEmail({ name, email, message, company }: ContactEmailOptions): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@bridgeafricahq.com';
  const subject = `New Contact Form Message from ${name}`;
  const html = getContactEmailHTML({ name, email, message, company });
  const text = getContactEmailText({ name, email, message, company });

  return await sendEmail({
    to: adminEmail,
    subject,
    html,
    text,
    replyTo: email, // Set reply-to as the sender's email
  });
}

// Test email connection
export async function testEmailConnection(): Promise<boolean> {
  const transport = createTransporter();
  
  if (!transport) {
    return false;
  }

  try {
    await transport.verify();
    console.log('Email server connection verified');
    return true;
  } catch (error) {
    console.error('Email server connection failed:', error);
    return false;
  }
}