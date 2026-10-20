import { NextResponse } from 'next/server';
import { z } from 'zod';

const franchiseSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(6, 'Phone number must be at least 6 characters'),
  city: z.string().optional(),
  siteType: z.string().optional(),
  model: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = franchiseSchema.parse(body);

    console.log('[EVION Franchise Enquiry Received]:', validatedData);

    return NextResponse.json({
      success: true,
      message:
        'Thank you for your franchise enquiry. Our enterprise team will connect with you about franchise opportunities.',
      data: validatedData,
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
