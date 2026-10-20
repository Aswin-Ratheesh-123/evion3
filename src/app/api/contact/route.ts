import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional(),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 characters'),
  location: z.string().min(2, 'Please enter your city/location'),
  interestedIn: z.enum([
    'Home Charging',
    'Workplace Charging',
    'Public Charging',
    'Fleet Charging',
    'Partnership',
    'Other',
  ]),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // In a production environment, send to CRM / webhook / email service (e.g. Resend, Salesforce, SendGrid)
    // Here we log and return success for the serverless deployment
    console.log('[EVION Lead Received]:', validatedData);

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out to EVION. Our enterprise engineering team will contact you within 24 hours.',
      received: {
        name: validatedData.name,
        email: validatedData.email,
        interestedIn: validatedData.interestedIn,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
