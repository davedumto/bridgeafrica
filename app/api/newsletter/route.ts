import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Newsletter from '@/models/Newsletter';
import { NewsletterSchema } from '@/lib/validations';
import { sendWelcomeEmail } from '@/lib/emailService';

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body = await request.json();
    
    // Validate the request body
    const validatedData = NewsletterSchema.parse(body);

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ 
      email: validatedData.email 
    });

    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return NextResponse.json(
          { 
            success: false, 
            message: 'You are already subscribed to our newsletter!' 
          },
          { status: 409 }
        );
      } else {
        // Reactivate existing subscriber
        existingSubscriber.isActive = true;
        existingSubscriber.subscribedAt = new Date();
        existingSubscriber.unsubscribedAt = undefined;
        existingSubscriber.source = validatedData.source;
        await existingSubscriber.save();

        // Send welcome email for reactivated subscriber
        try {
          await sendWelcomeEmail({ 
            email: validatedData.email,
            name: validatedData.name 
          });
        } catch (emailError) {
          console.error('Failed to send welcome email:', emailError);
          // Don't fail the subscription if email fails
        }

        return NextResponse.json(
          { 
            success: true, 
            message: 'Welcome back! Your newsletter subscription has been reactivated.' 
          },
          { status: 200 }
        );
      }
    }

    // Create new newsletter subscription
    const newsletter = new Newsletter({
      email: validatedData.email,
      name: validatedData.name,
      source: validatedData.source,
      isActive: true
    });

    await newsletter.save();

    // Send welcome email to new subscriber
    try {
      await sendWelcomeEmail({ 
        email: validatedData.email,
        name: validatedData.name 
      });
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Don't fail the subscription if email fails
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for subscribing! Check your email for a welcome message.',
        subscriberId: newsletter._id 
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Newsletter subscription error:', error);

    // Handle validation errors
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please enter a valid email address',
          errors: error.errors 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Newsletter API endpoint is working' },
    { status: 200 }
  );
}