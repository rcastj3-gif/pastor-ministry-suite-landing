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

    // Get environment variables
    const grawtApiKey = process.env.GRAWT_API_KEY;

    console.log('Environment check:', {
      hasGrawtKey: !!grawtApiKey,
    });

    if (!grawtApiKey) {
      console.error('GRAWT_API_KEY not set');
      return NextResponse.json(
        { error: 'Server configuration error: GRAWT_API_KEY missing' },
        { status: 500 }
      );
    }

    // Parse name
    const firstName = name.split(' ')[0];
    const lastName = name.split(' ').slice(1).join(' ') || '';

    // 1. Sync to Grawt CRM using correct API format
    console.log('Syncing to Grawt:', email);
    
    const grawtPayload = {
      email,
      fields: {
        first_name: firstName,
        last_name: lastName,
        phone: phone || '',
        church: church || '',
        plan_interest: plan || '',
        lead_source: 'pastor-ministry-suite-landing',
      },
      // Note: Tags need to be IDs, not names. We'll skip tags for now.
    };

    console.log('Grawt payload:', JSON.stringify(grawtPayload, null, 2));

    const grawtResponse = await fetch('https://grawt.app/api/v1/leads/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': grawtApiKey,
      },
      body: JSON.stringify(grawtPayload),
    });

    const grawtText = await grawtResponse.text();
    console.log('Grawt response status:', grawtResponse.status);
    console.log('Grawt response body:', grawtText.substring(0, 500));

    let grawtData;
    try {
      grawtData = JSON.parse(grawtText);
    } catch (e) {
      console.error('Grawt returned non-JSON:', grawtText.substring(0, 200));
      return NextResponse.json(
        { error: 'CRM API error', details: 'Invalid response from Grawt' },
        { status: 500 }
      );
    }

    if (!grawtResponse.ok) {
      console.error('Grawt API error:', grawtData);
      return NextResponse.json(
        { error: 'Failed to sync with CRM', details: grawtData },
        { status: 500 }
      );
    }

    console.log('Successfully synced to Grawt:', email);

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
      email: email,
    });

  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Failed to process lead', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
