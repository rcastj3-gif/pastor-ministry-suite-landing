import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, church, plan } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Log the lead (for debugging)
    console.log('Lead captured:', {
      name,
      email,
      phone,
      church,
      plan,
      timestamp: new Date().toISOString()
    });

    // For now, just return success
    // Grawt integration can be added once API is working
    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
      lead: {
        name,
        email,
        plan: plan || 'Individual Pastor'
      }
    });

  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Failed to process lead', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
