import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { ContactSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    
    const body = await request.json();
    
    // Validate the request body
    const validatedData = ContactSchema.parse(body);

    // Save contact submission to database
    const contact = new Contact({
      name: validatedData.name,
      email: validatedData.email,
      message: validatedData.message,
      company: validatedData.company,
      status: 'new'
    });

    await contact.save();

    console.log('📧 NEW CONTACT FORM SUBMISSION SAVED TO DATABASE:', {
      id: contact._id,
      name: validatedData.name,
      email: validatedData.email,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.',
        contactId: contact._id
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Contact form error:', error);

    // Handle validation errors
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please fill in all required fields correctly',
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
    { message: 'Contact API endpoint is working' },
    { status: 200 }
  );
}