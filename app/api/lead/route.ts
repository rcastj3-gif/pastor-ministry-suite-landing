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
    const globalControlApiKey = process.env.GLOBAL_CONTROL_API_KEY;

    console.log('Environment check:', {
      hasGrawtKey: !!grawtApiKey,
      hasGlobalControlKey: !!globalControlApiKey,
    });

    if (!grawtApiKey) {
      console.error('GRAWT_API_KEY not set');
      return NextResponse.json(
        { error: 'Server configuration error: GRAWT_API_KEY missing' },
        { status: 500 }
      );
    }

    // 1. Sync to Grawt CRM
    console.log('Syncing to Grawt:', email);
    const grawtResponse = await fetch('https://grawt.app/api/v1/leads/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': grawtApiKey,
      },
      body: JSON.stringify({
        email,
        first_name: name.split(' ')[0],
        last_name: name.split(' ').slice(1).join(' ') || '',
        phone: phone || '',
        tags: ['pastor-suite-lead', 'pms-sequence-day-1'],
        custom_fields: {
          church: church || '',
          plan_interest: plan || '',
          lead_source: 'pastor-ministry-suite-landing',
        },
      }),
    });

    const grawtData = await grawtResponse.json();
    console.log('Grawt response:', grawtResponse.status, grawtData);

    if (!grawtResponse.ok) {
      console.error('Grawt API error:', grawtData);
      return NextResponse.json(
        { error: 'Failed to sync with CRM', details: grawtData },
        { status: 500 }
      );
    }

    // 2. Add to GlobalControl (if key exists)
    if (globalControlApiKey) {
      console.log('Adding to GlobalControl:', email);
      try {
        const globalControlResponse = await fetch('https://app.globalcontrol.app/api/v1/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${globalControlApiKey}`,
          },
          body: JSON.stringify({
            email,
            first_name: name.split(' ')[0],
            last_name: name.split(' ').slice(1).join(' ') || '',
            phone: phone || '',
            custom_fields: {
              church: church || '',
              plan_interest: plan || '',
              source: 'pastor-ministry-suite-landing',
            },
            tags: ['pastor-suite-lead', plan || 'lead'],
          }),
        });

        if (!globalControlResponse.ok) {
          console.error('GlobalControl API error:', await globalControlResponse.text());
        }
      } catch (gcError) {
        console.error('GlobalControl error:', gcError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
      grawtSynced: true,
    });

  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Failed to process lead', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
